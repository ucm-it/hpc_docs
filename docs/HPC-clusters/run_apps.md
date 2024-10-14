---
title: Running Common Applications
sidebar_position: 1
---

import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Running Common Applications on Pinnacles and MERCED

## Running Quantum ESPRESSO 
[Quantum ESPRESSO](https://www.quantum-espresso.org/) is a group of codes that is used to compute the microscopic properties of materials and molecules at the atomic levels using density functional theory. The core codes of Quantum ESPRESSO are parallelizable and require large amounts of memory making them the perfect candidates for high performance computing. This article is written to understanding the nuances of using Quantum ESPRESSO on MERCED. To follow a tutorial on Quantum ESPRESSO, follow one of the links on this [page](https://www.quantum-espresso.org/tutorials/).

Below is an example job script and `pw.x` input file for bilayer MoS2. For details on the input parameters of `pw.x`, see the Quantum ESPRESSO official documentation.

The job script contains a few `sbatch` options that are specific to parallel computations of this type. First, we are using 1 node, but all 24 cores via the nodes and `ntasks-per-node` options. `--constraint=ib` is a special setting that restricts the nodes chosen to use the faster infiniband connection which is suitable for parallel computing (This is only applicatable for MERCED since Pinnacles nodes are interconnected with IB). `--exclusive` is used when occupying an entire node and ensures that no other jobs will run on the node and cause problems for the parallel job. Do not use `--exclusive` when using a smaller number of cores than what exists on the node, as this lowers the cluster's efficiency. `--mem=0` is an option which specifies that the job is using the **entire node's memory**. This again should only be set when occupying the entire node. This option can be set to a reasonable value should the entire node not be used. Quantum ESPRESSO estimates the memory usage, so a test computation can be run and the following message will appear: Estimated total dynamical RAM > 3.25 GB. In this case, the user may set `--mem=5G` to give some memory headroom.

The job begins by loading `Quantum ESPRESSO v6.6` using `module load`. To search for the available versions, run `module avail quantum-espresso` in the command line.

The next set of lines link the `pseudopotential` files to the current working directory, `./`. In this scheme, the directory `${HOME}/PPs` has been created by the user and pseudopotential files (.upf) have been stored into it. Those lines are linked to `./` and are then read by ESPRESSO in the line `pseudo_dir='./'`. They are then ascribed to the atom under the `ATOMIC_SPECIES` card.

The job script then sets the variable `nCores` to be the total number of cores expected to be used, and runs `pw.x` in parallel using `mpirun`. It takes the file `moS2.scf.in` as input and saves it (along with errors &>) to the file `moS2.scf`.out. The `-nk 12` option to `pw.x` is one of the parallelization levels employed by ESPRESSO--specifically the "pools" option that parallelizes across 12 groups of k-points.


<Tabs>
  <TabItem value="QE Job Script" label="Quantom Expresso Job Script">

```bash
#!/usr/bin/env bash

#SBATCH --job-name=QE_EXAMPLE
#SBATCH --partition=test
#SBATCH -M merced
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=20
#SBATCH --time=00:30:00
#SBATCH --constraint=ib
#SBATCH --exclusive
#SBATCH --mem=0

module load mvapich2-2.2/intel
module load quantum-espresso/6.6

nCores=${SLURM_NTASKS}
mpirun -n $nCores pw.x -nk 12 < moS2.scf.in &> moS2.scf.out
```
</TabItem>

<TabItem value="`pw.x` input" label="Example of `pw.x` input">

```bash
&CONTROL
    calculation = 'scf'
    pseudo_dir  = './'
    outdir       = './'
    prefix = 'moS2'
    tprnfor = .true.
    tstress = .true.
    etot_conv_thr = 1.0D-8
    forc_conv_thr = 1.0D-5
/

&SYSTEM
    ibrav       = 0,
    ecutwfc     = 60,
    nat         = 6,
    ntyp        = 2,
/

&ELECTRONS
    conv_thr         =  1.00000e-10
/

K_POINTS {automatic}
6 6 1 1 1 0

ATOMIC_SPECIES
Mo     95.94000  Mo_ONCV_PBE-1.0.upf
S      32.06600  S_ONCV_PBE-1.0.upf

CELL_PARAMETERS (angstrom)
   3.190560000   0.000000000   0.000000000
  -1.595280000   2.763110000   0.000000000
   0.000000000   0.000000000  25.000000000

ATOMIC_POSITIONS (angstrom)
S        1.595280002   0.920977084   1.539433305
Mo       3.190559998   1.842097452   3.098045063
S        1.595280002   0.920977074   4.656657474
S        3.19056   1.842132926   7.735684114
Mo       1.59528   0.921012548   9.294296525
S        3.19056   1.842132916  10.852908283
```

</TabItem>
</Tabs>