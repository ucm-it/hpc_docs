## Create a virtual environment and install R<!-- {docsify-ignore} -->
```R
module load anaconda3
conda create -n my-R -c r    #creates a virtual environment named my-R and installs R with some common packages
source activate my-R                     #activates the previously created virtual environment with R installed
conda install r-<your_package> #use the conda to install packages is the recommended way, but look up any packages to see if there is any specific channel that they must use. please see https://anaconda.org/search

```

- The binary version of R in anaconda is just an already compiled version for linux. It should be identical to the version you would compile from source.

- Here is an example job script

```bash
#!/bin/bash
#SBATCH --partition test
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=10:00

module load anaconda3
source activate my-R
Rscript Some_R_script.R
```

**Line 1**: Indicates which shell is used to execute the job script. You will likely never need to change this line

**Line 2**: This option indicates which job queue to submit your job to. There are currently three queues available that vary by how many cores you can request and how long the job will run.

**Line 3,4**: Indicates that we want 1 node, are going to run only a single task on that node, and

**Line 6**: This loads the anaconda module which is required to activate your R virtual environment.

**Line 7**: Activates a virtual environment call my-R, that have been previosuly created.

**Line 8**: This line is actually running the R script. RScript is recommended over R CMD BATCH.

Assuming that you name the above script `my_Rjob.sub` you would submit it to the queue by running `sbatch my_Rjob.sub`. You can check the status of your job using `squeue -u <username>`.
  

