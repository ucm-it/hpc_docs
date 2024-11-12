## Running Quantum ESPRESSO <!-- {docsify-ignore} -->
[Quantum ESPRESSO](https://www.quantum-espresso.org/) is a group of codes that is used to compute the microscopic properties of materials and molecules at the atomic levels using density functional theory. The core codes of Quantum ESPRESSO are parallelizable and require large amounts of memory making them the perfect candidates for high performance computing. This article is written to understanding the nuances of using Quantum ESPRESSO on Pinnacles and MERCED. To follow a tutorial on Quantum ESPRESSO, follow one of the links on this [page](https://www.quantum-espresso.org/tutorials/).

### Job Script for Bilayer MoS₂ <!-- {docsify-ignore} -->
Below is an example job script and input file for running pw.x on bilayer MoS₂. Refer to the Quantum ESPRESSO documentation for details on pw.x input parameters.


### SLURM Batch Script Tutorial <!-- {docsify-ignore} -->

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

### Example of `pw.x` input <!-- {docsify-ignore} -->
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

!> Quantum ESPRESSO Requires the `upf` files to be loaded before running the experiment. 

The `upf` files can be downloaded from [SSSP page](https://www.materialscloud.org/discover/sssp/table/efficiency#sssp-license)

### Exaple input file for molybdenum disulfide (`moS2.scf.in`) <!-- {docsify-ignore} -->

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

### `Sc_ONCV_PBE-1.0.oncvpsp.upf` File <!-- {docsify-ignore} -->
!> The contents of the file is long, please download `Sc_ONCV_PBE-1.0.oncvpsp.upf` from the [SSSP page](https://www.materialscloud.org/discover/sssp/table/efficiency#sssp-license)

### Diagnosing Common Problems <!-- {docsify-ignore} -->
k-points
```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
     Error in routine mp_start_pools (1):
     invalid number of pools, out of range
 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
     Error in routine mp_start_pools (1):
     invalid number of pools, parent_nproc /= nproc_pool * npool
 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 ```

 These errors means that the number of pools (the number used in the job script -nk ?) is not appropriate for the node setup. The number of pools should be an integral divisor of the number of cores used. In the example job script, the total number of cores is 24 and the number of pools is 12, and 24/12 has no remainder. If more pools are requested than the number of k-points used, then the code will not fail, but will run inefficiently and this message will appear:
 
```
Message from routine divide_et_impera:
suboptimal parallelization: some nodes have no k-points
```

### Nonconvergent run <!-- {docsify-ignore} -->

```
===================================================================================
=   BAD TERMINATION OF ONE OF YOUR APPLICATION PROCESSES
=   PID 3104 RUNNING AT mrcd69
=   EXIT CODE: 2
=   CLEANING UP REMAINING PROCESSES
=   YOU CAN IGNORE THE BELOW CLEANUP MESSAGES
===================================================================================
```
This message appears when the code exits with an error. At a glance the output file, may look normal but you may notice some other error or warning messages in the code. Most commonly, you may find a message like the following:

```
convergence NOT achieved after 100 iterations: stopping
```
This is a generic message that means the self-consistent cycle did not complete. This can have many origins, here is an increasing list of diagnostic tools.

1. Check atomic coordinates and lattice parameters and make sure they match your expectations. This can be done quickly by plotting the atoms using XCrySDen: `module load xcrysden; xcrysden -pwi moS2.scf.in` in our example. A common problem is to have the wrong units on the atomic coordinates (e.g. crystal instead of angstrom).

2. Check the energy convergence path by using grep ethr `moS2.scf.out`. For the last set of iterations, the ethr value should be decreasing somewhat exponentially. If the value was decreasing but ran out of iterations, then the number of iterations might need to be increased by setting `nstep=.true`. in the `&control` tab of the ESPRESSO input. If the value is static or not decreasing, there are a few possible fixes. A lower value of `mixing_beta` may increase the stability of the scf cycles. The system may need smearing to be turned on, especially if the material in question is expected to be a metal. The value of diagonalization may need to be changed from david to the slower but more stable cg.

3. If using magnetization, check the magnetization with `grep mag moS2.scf.out`. This will show the change of magnetization throughout the scf. This value can occasionally cycle between two or three values, keeping the system trapped. If no solution in 2. works, try changing the magnetization scheme to fixed by setting `tot_magnetization` to the values the system is cycling. Between the different values, whichever converges to the lowest energy is the most accurate.

### Code does not start <!-- {docsify-ignore} -->

```
MPI processes distributed on     1 nodes
K-points division:     npool     =      24
Fft bands division:     nmany     =       1
Waiting for input...
```

If the code shows only a dozen or so lines in the output but does not continue after the line `Waiting for input...` then this means that the code did not read a complete input file. It may be the case that the number of atoms input and the value `nat` do not match. This commonly occurs if the input file does not end with a new, blank line.

### Problems with cholesky <!-- {docsify-ignore} -->

A vague issue can appear with the message "problem with cholesky". This can be solved by changing the parallelization scheme. Specifically, this can show up if too many cores are used. Reduce the number of cores and rerun the computation.

### Pseudopotentials <!-- {docsify-ignore} -->

```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
     Error in routine readpp (24):
     file ./Mo_ONCV_LDA-1.0.upf not found
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
```

The pseudopotential may not be read if the name of the pseudopotential is misspelled in either the job script or the input file. The job script may not be linking to the pseudopotential correctly. The option `pseudo_dir` may not be pointing to a location where the pseudopotential is. Note: using ${HOME} or ~ in the pathname within the ESPRESSO input may not point to the correct location.

### How To Run Quantum Espresso utilizing GPU <!-- {docsify-ignore} -->

Run it on under interactive session so you can see wheteher job is running with gpu with command "nvidia-smi" (Shows gpu usage).
!>  *Do Not run GPU job on CPU Node*