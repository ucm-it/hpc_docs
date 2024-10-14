---
title: Running Matlab
sidebar_position: 1
---
## Running Matlab on the clusters 
After logging into the clusters, users can check and load Matlab versions currently available by running the following code. For more information on modules, check (BRING BACK MODULES PAGE).
```
# check what matlab modules are available for use
module avail

# run one of the following to load matlab module into your session
module load matlab/<version>    # replace <version> with the one you want to use
```
### Running Matlab interactively
:::warning
Do not run computationally intensive Matlab session on login node.
:::

Users can start an interactive command line session of Matlab using
```
matlab -nodisplay -nosplash
```

To exit an interactive Matlab session, enter `quit` or its equivalent `exit`, which will take users back to bash command prompt. (Check [terminate Matlab](https://www.mathworks.com/help/matlab/ref/quit.html) session)

### Running interacive session on a compute node

User can also request compute node resource for running interactive jobs, the example command below is asking for 1 core from 1 node using `test` partition for 15 mins. 
```
salloc --partition=test --nodes=1 --ntasks-per-node=1 --time=00:15:00
```
After running the above command, `SLURM` will allocate a suitable resource for you with a JobID. For example:
```
salloc: Granted job allocation 2423487
salloc: Waiting for resource configuration
salloc: Nodes mrcd114 are ready for job
```

Then user can use the following command to go to the allocated node with the assigned JobID.
```
srun --jobid=2423487 --pty /bin/bash
```
After log into the node, user can do the same command mentioned above to run Matlab interactively
```
module load matlab/<version>
matlab -nodisplay -nosplash
```
To exit the allocated node, type `exit` , and then it lead you back to the login node, type `exit` again, will exit the job.

### Running Matlab jobs

Users can also run their Matlab script as a job on MERCED. Here is the `SLURM` submission file template for running various Matlab commands as jobs.
<details>
<summary> Example Job Script for running Matlab </summary>

```bash
#! /bin/bash

#SBATCH --nodes=1
#SBATCH --ntasks=10    # users could ask a max of 20 or 24 cores per node depending on MERCED hardware configuration
#SBATCH -p test 
#SBATCH -M merced #This line is needed if running on Merced Cluster
#SBATCH --mem=0  #This will use entire node memory
#SBATCH --time=0-00:15:00     # 15 minutes
#SBATCH --output=regular.stdout
#SBATCH --job-name=test
#SBATCH --export=ALL


module load matlab/r2021b  # OR module load matlab/matlab_2018b
# example 1
matlab -nodisplay -nodesktop -nosplash -r "ver; exit;"

# example 2
matlab -nodisplay -nodesktop -nosplash -r "license('test', 'optimization_toolbox'); exit;"

# example 3
matlab -nodisplay -nodesktop -nosplash -logfile /path/to/test_matlab.log < test_matlab.m
```
</details>

Users can supply `-h` parameter to matlab to review all input parameters to matlab command i.e. `matlab -h`.

