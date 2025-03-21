---
title: Quickstart
hide_title: false
sidebar_position: 1
---

import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::info
This page presents a high walk-through of submitting jobs on the UC Merced Clusters. 

To find more tailored and thorough, software-specific guides please visit our [Running Jobs](../running-jobs/)
:::

## Running Jobs on Clusters

The command `sbatch` is used to submit jobs to the queue. Additional commands to work with and monitor the queue/scheduler are shown in the table below.


|Command|Description|
|--|--|
|squeue|reports the state of jobs or job steps.|
|sinfo|reports the state of partitions and nodes managed by Slurm|
|scancel|used to cancel a pending or running job or job step. It can also be used to send an arbitrary signal to all processes associated with a running job or job step.|

<Tabs>

  <TabItem value="Pinnacles" label="Pinnacles" default>
    ```bash
    #!/bin/bash
    #SBATCH --nodes=1    # request only 1 node
    #SBATCH --partition test      # this job will be submitted to test queue
    #SBATCH --mem=96G #this job is asked for 96G of total memory, use 0 if you want to use entire node memory
    #SBATCH --time=0-00:15:00 # 15 minute
    #SBATCH --ntasks-per-node=56 # this job requests for 56 cores on a node
    #SBATCH --output=my_%j.stdout    # standard output will be redirected to this file
    # #SBATCH --constraint=bigmem   #uncomment this line if you need the access to the bigmem node for Pinnacles
    # #SBATCH --constraint=gpu #uncomment this line if you need the access to GPU
    # #SBATCH --gres=gpu:2   #uncomment this line if you need GPU access (2 GPUs)
    #SBATCH --job-name=my_job    # this is your job’s name
    ##SBATCH --mail-user=UCMercedNetID@ucmerced.edu  
    ##SBATCH --mail-type=ALL  #uncomment the first two lines if you want to receive     the email notifications
    #SBATCH --export=ALL
    ```
     </TabItem>

    <TabItem value="MERCED" label="MERCED">

      ```bash
      #!/bin/bash
      #SBATCH --nodes=1    # request only 1 node
      #SBATCH --partition test      # this job will be submitted to test queue
      #SBATCH --mem=96G #this job is asked for 96G of total memory, use 0 if you want to use entire node memory
      #SBATCH --time=0-00:15:00 # 15 minute
      #SBATCH --ntasks-per-node=56 # this job requests for 56 cores on a node
      #SBATCH --output=my_%j.stdout # standard output will be redirected to this file
      # #SBATCH --constraint=bigmem#uncomment this line if you need the access to the bigmem node for MERCED
      #SBATCH --job-name=my_job    # this is your job’s name
      ##SBATCH --mail-user=UCMercedNetID@ucmerced.edu  
      ##SBATCH --mail-type=ALL  #uncomment the first two lines if you want to receive     the email notifications
      #SBATCH -M merced
      #SBATCH --export=ALL
      ```
    </TabItem>

    </Tabs>


Note that for both MERCED and Pinnacles CPUs **hyper-threading** is turned off.  
> If you want to assess how busy the cluster is, please use the following
Use `sinfo` to see the nodes state and check how many nodes are being allocated (alloc) or how many nodes are available (idle)
> If you want to estimate the job starting time 
`sacct -X -j [JOBID] -o start,submit` provides information for job estimated starting time or submitted time


## Job Arrays 
Job arrays offer a mechanism for submitting and managing collections of similar jobs quickly and easily that utilizes only one job script. Submitting a job array can be useful in many of the following ways: 

1. Having a set of code or program that needs to run many different input variables or files. 
2. Running a single program repeatedly to analyze a single data file.
3. Running the same program multiple times with varying parameters.

Job arrays allows users to run jobs at the same time or have the results of the previous job output to be used as input for the next job. While the output capacity from a job array is immense, the job configurations are the same for all jobs to be run in the job array. 

The max number of jobs that can run at the same time is determined by the maximum number of jobs that can run on the selected partition and is different for each partition.< RETURN HERE TO ATTACH PARTITIONS>

## Job Array Scripting
<Tabs>

  <TabItem value="Job Array Sample Script" label="Job Array Sample Script" default>
    ```bash
    #!/bin/bash
    #SBATCH --nodes=1  #asked for 1 node
    #SBATCH --ntasks=1 #asked for 1 cores
    #SBATCH --partition medium  #this job will submit to medium partition
    #SBATCH --array=1-5
    #SBATCH --mem=1G  #this job is asked for 1G of total memory, use 0 if you want to use entire node memory
    #SBATCH --time=0-00:15:00 # 15 minutes
    #SBATCH --output=test_%A_%a.qlog  #the output information will put into test_$SLURM_ARRAY_JOB_ID_$SLURM_ARRAY_TASK_ID.qlog file
    #SBATCH --job-name=test1  #the job name
    #SBATCH --export=ALL
    whoami
    module load anaconda3
    # This job will use one python input but takes different argument each time per job array
    python3 python_test_array.py $SLURM_ARRAY_TASK_ID
    ```
  </TabItem>
</Tabs>

### Submitting and Managing Job Arrays

When submitting a job array there will be a new argument, ` --array=x-y`. The task id,`x` represents the starting index, and  the task id `y` represents the last index - 1. The complete line to submit the array job will look similar to `#SBATCH --array=x-y myjob.file`. Where `myjob.file` will be replaced by the name of your job script. 

The Task ID range specification arguments can also be configured to:

1. Submit a job array with specified-comma separated index values. Ex. `#SBATCH --array=6,36,1296`. (6, 36 1296): total of 3 jobs.
2. Submit a job array with index values incrementing by 1. Ex. `#SBATCH --array=x-y` Range from 1-10; total of 10 jobs. 
3. Submit a job array with index values that have a step or parse value that does not equal 1. Ex. `#SBATCH --array=45-90:15`. Range from index 45-90, with an step of 15 (45,60,75,90). Total of 4 jobs to be ran. 

### Job Dependencies in Job Arrays
Jobs that depend on outputs of previous jobs of a job array or on the output of a whole job array after it is completed must declare itself as dependent using `#SBATCH --depend=<Flag>:[jobid][IndexRange] <jobscript.file>` after the independent job array has been submitted to the scheduler. 

Below are flags that can be used to help declare the dependency of certain job(s) in the job array submission line after the first job array has been submitted to the scheduler. 

|Command | USE |
| --------| --------------- |
| after  | Flag is satisfied after all tasks in the job array start. | 
| afterany | Flag is satisfied after all tasks in the job array complete.|
| aftercorr | Satisfied after the corresponding task ID in the specified job has completed successfully | 
| afterok  | Flag is satisfied after all tasks in the job array complete successfully | 
| afternotok | Flag satisfied after all tasks in the job array complete with at least one tasks not completing successfully. | 

