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

If you’d like more information about the cluster after logging in, simply type `cluster-info` in your terminal
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

    # Please avoid using the ampersand (&) with "srun" if you intend to run processes in the background.
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
      # Please avoid using the ampersand (&) with "srun" if you intend to run processes in the background.

      # Make sure when you submit jobs, add "-M merced" too!
      # for example "sbatch -M merced your_job_script.sh"

      ```
    </TabItem>

    </Tabs>

:::note
Note that for both MERCED and Pinnacles CPUs **hyper-threading** is turned off.  
:::

> If you want to assess how busy the cluster is, please use the following
Use `sinfo` to see the nodes state and check how many nodes are being allocated (alloc) or how many nodes are available (idle)
> If you want to estimate the job starting time 
`sacct -X -j [JOBID] -o start,submit` provides information for job estimated starting time or submitted time


## Job Arrays -- Introduction 
Job arrays offer a mechanism for submitting and managing collections of similar jobs quickly and easily that utilizes only one job script. Submitting a job array can be useful in many of the following ways: 

1. Having a set of code or program that needs to run many different input variables or files. 
2. Running a single program repeatedly to analyze a single data file.
3. Running the same program multiple times with varying parameters.

Job arrays allows users to run jobs at the same time or have the results of the previous job output to be used as input for the next job. While the output capacity from a job array is immense, the job configurations are the same for all jobs to be run in the job array. 

:::tip
The max number of jobs that can run at the same time is determined by the maximum number of jobs that can run on the selected partition and differ by each partition. More detailed information can be found [here](../campus-clusters.md/#queue-information)
:::

### Job Array Scripting
<Tabs>

  <TabItem value="Job Array Sample Script" label="Job Array Sample Script" default>
    ```bash
    #!/bin/bash
    #SBATCH --job-name=combo_job_array   # job name
    #SBATCH --output=log%x_%A_%a.out     # stdout
    #SBATCH --partition=short             # partition name
    #SBATCH --nodes=1                      # one node per task
    #SBATCH --ntasks=5                     # one task per job
    #SBATCH --mem=3G                       # 3 GB RAM
    #SBATCH --time=0-00:15:00              # 15 min max
    #SBATCH --array=1-5                    # array tasks 1–5 

    MODEL=(test_model1.py test_model2.py test_model3.py test_model4.py test_model5.py)
    INPUTS=(input1.csv input2.csv input3.csv input4.csv input5.csv)

    # --- Get zero-based index
    IDX=$((SLURM_ARRAY_TASK_ID - 1))

    # Now we select corresponding script and input
    SCRIPT=${MODEL[$IDX]}
    INPUT=${INPUTS[$IDX]}

    # --- Log that will get piped to output file
    echo "----------------------------------------"
    echo " Job:     $SLURM_JOB_NAME"
    echo " Task:    $SLURM_ARRAY_TASK_ID / $SLURM_ARRAY_TASK_COUNT"
    echo " Script:  $SCRIPT"
    echo " Input:   $INPUT"
    echo " Host:    $(hostname)"
    echo " Started: $(date)"
    echo "----------------------------------------"

    # --- Load environment and run
    module load anaconda3
    python "$SCRIPT" --input "$INPUT"
    ```
  </TabItem>
</Tabs>

### Submitting and Managing Job Arrays

When submitting a Slurm job array, you use the `--array=x-y` option to define the range of task indices. Here, **x** represents the starting index, and **y** is the inclusive ending index. Each task in the array will run as a separate job with a **unique task ID**. The job script will typically include this line:

```shell
#SBATCH --array=x-y
```

You can also submit a job array directly from the command line by specifying the script name after the array declaration:

```shell
sbatch --array=1-5 myjob.sh # This would create 5 tasks with array IDs from 1 through 5.
```


The Task ID range specification arguments can also be configured to:

1. Submit a job array with specified-comma separated index values. The below example will only tasks with IDs 6, 36, and 1296 (3 total tasks).

```shell 
#SBATCH --array=6,36,1296
```

2. Consecutive range - submit an array of tasks with IDs in a continuous range. The below example runs 10 jobs with task IDs from 1 to 10 inclusive.

```shell 
#SBATCH --array=1-10
```


3. Stepped range - Run tasks at specific intervals within a range. The example runs tasks with IDs 45, 60, 75, and 90 (4 total jobs). The number after the colon (:) is the step size.

```shell 
#SBATCH --array=45-90:15
```

### Job Dependencies in Job Arrays
Jobs that depend on the output of other job arrays can specify dependencies using the --dependency flag after the initial array has been submitted.

Below are flags that can be used to help declare the dependency of certain job(s) in the job array submission line after the first job array has been submitted to the scheduler. 


| Flag         | Meaning                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------- |
| `after`      | Job will start **after all listed jobs have started**                                    |
| `afterany`   | Job will start **after all listed jobs have finished**, regardless of success or failure |
| `afterok`    | Job will start **only if all listed jobs complete successfully**                         |
| `afternotok` | Job will start **if any listed job fails**                                               |
| `aftercorr`  | Job **array** starts when the **corresponding task ID** in the other job array succeeds  |
