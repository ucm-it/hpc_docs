---
title: Running Quantum Expresso
sidebar_position: 1
unlisted: true
---

import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Running Quantum ESPRESSO
[Quantum ESPRESSO](https://www.quantum-espresso.org/) is a group of codes that is used to compute the microscopic properties of materials and molecules at the atomic levels using density functional theory. The core codes of Quantum ESPRESSO are parallelizable and require large amounts of memory making them the perfect candidates for high performance computing. This article is written to understanding the nuances of using Quantum ESPRESSO on Pinnacles and MERCED. To follow a tutorial on Quantum ESPRESSO, follow one of the links on this [page](https://www.quantum-espresso.org/tutorials/).

### Job Script for Bilayer MoS₂
Below is an example job script and input file for running pw.x on bilayer MoS₂. Refer to the Quantum ESPRESSO documentation for details on pw.x input parameters.


### SLURM Batch Script Tutorial

- Node and Task Allocation: Use `--nodes=1` and `--ntasks-per-node=24` to utilize  24 cores on a single node.
    - This can be extended to any number of nodes and cores for scalability of the experiment.
- Exclusive Access: Use `--exclusive` to reserve the entire node.
    -  Avoid if using fewer than the node's full core count.
- Memory Allocation: Set `--mem=0` to access all node memory, or specify a value (e.g., --mem=5G) if not using the entire node. Quantum ESPRESSO outputs memory requirements (e.g., "Estimated total dynamical RAM > 3.25 GB") in test runs.
- Load the default Quantum ESPRESSO module version (quantum-espresso/7.2-gcc-openblas) with:
```bash
module load quantum-espresso
```
    - To view all versions of Quantum ESPRESSO available use: 
    ```bash
    module avail quantum-espresso
    ```

The next set of lines link the `pseudopotential` files to the current working directory, `./`. In this scheme, the directory `${HOME}/PPs` has been created by the user and pseudopotential files (.upf) have been stored into it. Those lines are linked to `./` and are then read by ESPRESSO in the line `pseudo_dir='./'`. They are then ascribed to the atom under the `ATOMIC_SPECIES` card.

The job script then sets the variable `nCores` to be the total number of cores expected to be used, and runs `pw.x` in parallel using `mpirun`. It takes the file `moS2.scf.in` as input and saves it (along with errors &>) to the file `moS2.scf`.out. The `-nk 12` option to `pw.x` is one of the parallelization levels employed by ESPRESSO--specifically the "pools" option that parallelizes across 12 groups of k-points.


<Tabs>
  <TabItem value="QE Job Script" label="Quantom Expresso Job Script">

```bash
#!/usr/bin/env bash
#SBATCH --job-name=QE_EXAMPLE
#SBATCH --partition=test
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=20
#SBATCH --time=00:30:00
#SBATCH --mem=0
#SBATCH --output=qe_test%j.qlog

module load openmpi/4.1.1-gcc-8.4.1
module load quantum-espresso/7.2-gcc-openblas

nCores=${SLURM_NTASKS}
mpirun -n $nCores pw.x  < moS2.scf.in &> moS2.scf.out
# mpirun -n $nCores pw.x -nk 12  < moS2.scf.in &> moS2.scf.out 
# If setting the pools properly in the input files for parallelism
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
S      32.06600  Sc_ONCV_PBE-1.0.oncvpsp.upf

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


:::warning
Quantum ESPRESSO Requires the `upf` files to be loaded before running the experiment. 

The `upf` files can be downloaded from [SSSP page](https://www.materialscloud.org/discover/sssp/table/efficiency#sssp-license)
::: 

Here are the input files neccessary to run this tutorial.


<Tabs>
  <TabItem value="moS2.scf.in" label="`moS2.scf.in` Input">

```bash
&CONTROL
    calculation   = 'scf',
    restart_mode  = 'from_scratch',
    pseudo_dir    = './',
    prefix        = 'MoS2',
    outdir        = './',
    nstep         = 100,
/

&SYSTEM
    ibrav         = 4,
    a             = 3.16000e+00,
    c             = 2.00000e+01,
    nat           = 3,
    ntyp          = 2,
    ecutwfc       = 60,
    occupations   = 'fixed',
    smearing      = 'gauss',
    vdw_corr      = 'DFT-D',
/

&ELECTRONS
    conv_thr      = 1.0d-9,
/

ATOMIC_SPECIES
    Mo     95.94000  Mo_ONCV_PBE-1.0.upf
    S      32.06600  Sc_ONCV_PBE-1.0.oncvpsp.upf

ATOMIC_POSITIONS (angstrom)
    S        0.002804304   0.001613133   8.429890591
    S        0.002804304   0.001613133  11.570109409
    Mo       1.582007393   0.913365735  10.000000000

K_POINTS automatic
    51 51 1 0 0 0
```
</TabItem>

<TabItem value="`Sc_ONCV_PBE-1.0.oncvpsp.upf` input" label="`Sc_ONCV_PBE-1.0.oncvpsp.upf` Input">

The contents of the file is long, please download `Sc_ONCV_PBE-1.0.oncvpsp.upf` from the [SSSP page](https://www.materialscloud.org/discover/sssp/table/efficiency#sssp-license)

</TabItem>
</Tabs>