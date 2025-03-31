---
title: Job Management 
sidebar_position: 2
custom_edit_url: null
---
import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

:::info
This page presents  helpful tools and methods to manage Slurm jobs, find detailed information of a job like memory usage, CPUs, and how to use job statistics/information to troubleshoot any job failure.
:::

## Checking the use of a mixed-state node.
A mixed state node is a node that is not being fully utilized, i.e. their resources are not fully allocated.


Execute the following script on the login node to get detailed information about memory and cpu core availability on every currently, mixed-state node on Pinnacles.

Execute the script via the command: 
`node_resource_status.sh`


## Checking jobs after submission 

`squeue` is a  command that can check the state and workload of the overall cluster as well as more specific information. Below is a table of options that can be added to view certain information. By default `squeue` will show all currently submitted and running jobs on Pinnacles.

|Command_Option | Use | 
| -------------| -----------------------|
| `-M merced ` | Shows all currently submitted jobs on MERCED |
|  `--me ` | Shows all currently jobs submitted by user |
| `--r` or `-array ` | Shows job arrays submitted onto cluster |
| `--start` | Shows rough estimate of when jobs for specified user will begin, based off real-time state of the scheduler and jobs queued. Not always accurate estimates. |


:::tip
Flags can be used together in the same line for example: `squeue -M merced --me --start`
:::

## Job State 
Job states represent the current state of submitted jobs. Below are the most commonly encountered state codes and their meanings:

| State Codes | Meaning | 
| -------- | --------------------| 
| PD | Job is Pending |
| R | Running | 
| CF | Job is resources allocated and now booting up| 
 CD | Job has been completed |
| CA | Job has been cancelled explicitly | 
| CG | Job is in the process of completing and is deallocating the resources | 
| F | Job exited with Failure, a non-zero exit code is presented | 
| OOM | Node are out of memory | 
| S | Job has been suspended |
| TO | Job terminated upon reaching its time limit | 


## Nodelist Reasons 

NodeList(Reason) helps to find on which nodes the job is currently running on. Also, in the case of PD Job state, this field will give more information about the reason why the job is in pending state. Below is a table that shows common Nodelist(reasons) and their meanings. 

| Reason | Meaning | 
| ---------- | ---------------| 
| (Resources) |  Job is waiting for resources to become available |
| (TimeLimit) | Job has hit it's max time limit for execution |
| (ReqNodeNotAvail) | The requested node is not currently available | 
| (Nodes required for job are DOWN, DRAINED or reserved for jobs in higher priority partitions) | Job is not available |
|(Priority) | One or more higher priority jobs exist for this partition or advanced reservation. | 
| (QoSJobLimit) | The job's QOS has reached its maximum job count |
| QOSResourceLimit | The job's QOS has reached some resource limit | 

##  `sacct` command  
The `sacct` displays accounting data for all jobs in the cluster queue or recent history. By default, the `sacct` command displays JobId, JobName, Partition, Account, AllocCPUS, State and ExitCode. Below are useful options that can be added to get more specific information but all options for `sacct ` can be found through executing `sacct -e` or `sacct -h`.

| Option | Meaning | 
| ---------------- | ---------------| 
| --user=[uid_or_user_list] | Displays the list of jobs currently submitted and running on the cluster of the specified user. |
| -j, --jobs=[JobID] | Displays information about the job ID inputted |
| -C, --constraints=[constraint_list] | Comma separated list to filter jobs based on what constraints/features the job requested. Multiple options will be treated as 'and' not 'or', so the job would need all constraints specified to be returned not one or the other. | 
| -h, --help | Displays all options and descriptions for `sacct` |
| -X, --allocations | Only show statistics relevant to the job allocation itself |
| -v, --verbose|  Primarily for debugging purposes, report the state of various variables during processing. |
| --name=[jobname_list] | Display jobs that have any of these name(s).|
| --state=[state_list] | Displays states depending on which state was asked to be displayed and their associated exit code. |


Example of `sacct -e`
<details>
  <summary>Click to see the full ouput list </summary>
  
  ```bash
    Account             AdminComment        AllocCPUS           AllocNodes 
    AllocTRES           AssocID             AveCPU              AveCPUFreq 
    AveDiskRead         AveDiskWrite        AvePages            AveRSS
    AveVMSize           BlockID             Cluster             Comment
    Constraints         ConsumedEnergy      ConsumedEnergyRaw   Container
    CPUTime             CPUTimeRAW          DBIndex             DerivedExitCode
    Elapsed             ElapsedRaw          Eligible            End
    ExitCode            Flags               GID                 Group
    JobID               JobIDRaw            JobName             Layout
    MaxDiskRead         MaxDiskReadNode     MaxDiskReadTask     MaxDiskWrite
    MaxDiskWriteNode    MaxDiskWriteTask    MaxPages            MaxPagesNode
    MaxPagesTask        MaxRSS              MaxRSSNode          MaxRSSTask
    MaxVMSize           MaxVMSizeNode       MaxVMSizeTask       McsLabel
    MinCPU              MinCPUNode          MinCPUTask          NCPUS
    NNodes              NodeList            NTasks              Partition
    Priority            QOS                 QOSRAW              Reason
    ReqCPUFreq          ReqCPUFreqGov       ReqCPUFreqMax       ReqCPUFreqMin
    ReqCPUS             ReqMem              ReqNodes            ReqTRES
    Reservation         ReservationId       Reserved            ResvCPU
    ResvCPURAW          Start               State               Submit
    SubmitLine          Suspended           SystemComment       SystemCPU
    Timelimit           TimelimitRaw        TotalCPU            TRESUsageInAve
    TRESUsageInMax      TRESUsageInMaxNode  TRESUsageInMaxTask  TRESUsageInMin
    TRESUsageInMinNode  TRESUsageInMinTask  TRESUsageInTot      TRESUsageOutAve
    TRESUsageOutMax     TRESUsageOutMaxNode TRESUsageOutMaxTask TRESUsageOutMin
    TRESUsageOutMinNode TRESUsageOutMinTask TRESUsageOutTot     UID
    User                UserCPU             WCKey               WCKeyID
    WorkDir
  ``` 
</details>

Below are defintions of some important fields from the above list that are helpful when troubleshooting or debugging. 

|Field | Use | 
| -------------| -----------------------|
| JobId | Shows the ID of the job |
| JobName |Name of the Job. |
| AllocCPUS | Count of allocated CPUs. Equal to NCPUS.|
| ReqCPUS | Required number of CPUS.| 
| ReqMem | Minimum memory required for the job in MB. A c in the end denotes Memory Per CPU and a n at the end represents Memory Per Node.|
| AveRSS | Average memory use of all tasks in the job.|
| MaxRSS | Maximum memory use of any task in the job. |
| Start | Initiation time of the job in the same format as End |
| End | Termination time of the job.|
| Elapsed | Time taken by the job. |
| State | State of the job.|
| ExitCode | Exit code returned by the job. |


Here is one use of `sacct` with the following syntax to retrieve useful information about the specified job:
`sacct -j <jobid>`

This will provide similar information with the same fields as shown below about the specified job: 
```

  JobID           JobName  Partition    Account  AllocCPUS      State ExitCode
  ------------ ---------- ---------- ---------- ---------- ---------- --------
  569893         javatest       test project_u+          1 OUT_OF_ME+    0:125
  569893.batch      batch            project_u+          1 OUT_OF_ME+    0:125
  569893.exte+     extern            project_u+          1  COMPLETED      0:0

```

By default, sacct -j [jobid] displays basic job information such as job ID, job name, partition, allocated CPUs, state, and exit code. This is helpful for debugging job failures. In the example, the "javatest" job ran in the test partition with 1 CPU but ended with OUT_OF_ME+, indicating an incomplete message due to truncation. The exit code 0:125 confirms the job ran out of memory.

For debugging that requires more in-depth analysis and information adding the option `--format=<Field>` will show additional information that can be more useful for debugging bigger issues. Below is an example with the use of `--format=<Field`.

Using sacct -j [jobid] --format=jobid,jobname,reqcpus,reqmem,averss,maxrss,elapsed,state,exitcode, you can gain more detailed insights into job performance and failures.

```

JobID           JobName  ReqCPUS     ReqMem     AveRSS     MaxRSS    Elapsed                State ExitCode
------------ ---------- -------- ---------- ---------- ---------- ---------- -------------------- --------
569966          testjob        1         1M                         00:00:06        OUT_OF_MEMORY    0:125
569966.batch      batch        1                 1312K      1312K   00:00:06        OUT_OF_MEMORY    0:125
569966.exte+     extern        1                  916K       916K   00:00:06            COMPLETED      0:0

```

Refer to the above table for details about each field's purpose and how it aids in diagnosing job failures. By adding more fields with `--format=`, you can perform deeper analysis on when, how, and why a job failed or ran into issues; significantly speeding up the debugging process.

## `scontrol` Command 
`scontrol` is a helpful command that allows to  view or configure the submitted job and it's state. scontrol is used to view or modify Slurm configuration including: job, job step, node, partition, reservation, and overall system configuration. If no command is entered on the execute line, scontrol will operate in an interactive mode and prompt for input. It will continue prompting for input and executing commands until explicitly terminated.

Use `scontrol` with the follwing syntax to retrieve useful information about the specified job:

`scontrol show job <jobid>`

Below is an example of using scontrol to get insight about an example job. An example job is running and has not yet terminated. It is shown as `JobState=RUNNING Reason=NONE` & `ExitCod=0:0`. 

<details>
  <summary> Sample Output </summary>
   
  :::info 
  Astericks are only in the above sample output to protect user information. 
  :::

    ```bash
    UserId=guest001 GroupId=****** MCS_label=N/A
    Priority=4294341021 Nice=0 Account=project_**** QOS=normal
    JobState=RUNNING Reason=None Dependency=(null)
    Requeue=0 Restarts=0 BatchFlag=1 Reboot=0 ExitCode=0:0
    RunTime=00:02:33 TimeLimit=00:15:00 TimeMin=N/A
    SubmitTime=2023-07-19T12:50:52 EligibleTime=2023-07-19T12:50:52
    AccrueTime=2023-07-19T12:50:52
    StartTime=2023-07-19T12:50:53 EndTime=2023-07-19T13:05:53 Deadline=N/A
    SuspendTime=None SecsPreSuspend=0 LastSchedEval=2023-07-19T12:50:53 Scheduler=Main
    Partition=test AllocNode:Sid=10.1.2.252:279163
    ReqNodeList=(null) ExcNodeList=(null)
    NodeList=hmnode003
    BatchHost=hmnode003
    NumNodes=1 NumCPUs=1 NumTasks=1 CPUs/Task=1 ReqB:S:C:T=0:0:*:*
    TRES=cpu=1,mem=1M,node=1,billing=1
    Socks/Node=* NtasksPerN:B:S:C=0:0:*:* CoreSpec=*
    MinCPUsNode=1 MinMemoryNode=1M MinTmpDiskNode=0
    Features=(null) DelayBoot=00:00:00
    OverSubscribe=OK Contiguous=0 Licenses=(null) Network=(null)
    Command=/home/******/testoom/job.bat
    WorkDir=/home/******/testoom
    StdErr=/home/******/testoom/Appout.qlog
    StdIn=/dev/null
    StdOut=/home/******/testoom/Appout.qlog
    Power=
    ```

  </details>


## Common Issues 

Below are common issues, that can arise when running jobs on the clusters, and associated troubleshooting methods. 

### Out of Memory Issues 
Jobs can fail if the memory requested for the job exceeds the actual memory needed for the job to complete successfully.
It is good practice to always check the job state and exit code with `sacct -j <JobID>`. It can be concluded that a job has had a **OUT_OF_MEMORY** error from reading the job state column and exit code. Furthermore, the output file produced by the failed job should also contain error messages that can be associated with the job running out of memory. 

Below is a job script that will result in an out of memory error. 

```
#!/bin/bash
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --partition test
#SBATCH --mem=1M # This is where the issue arises
#SBATCH --time=0-00:15:00 # 15 minute
#SBATCH --output=oomout.qlog
#SBATCH --job-name=testjob
#SBATCH --export=ALL

sleep 5
module load anaconda3
python oom.py
```

Sample python program that was used in the job sample script above is shown below: 

```
import sys
import os

my_list = [i for i in range(1000000)]

print(my_list)

```

Check the job's status using sacct -j jobid. The following output is produced: 

```
JobID           JobName  ReqCPUS     ReqMem     AveRSS     MaxRSS    Elapsed                State ExitCode
------------ ---------- -------- ---------- ---------- ---------- ---------- -------------------- --------
569966          testjob        1         1M                         00:00:06        OUT_OF_MEMORY    0:125
569966.batch      batch        1                 1312K      1312K   00:00:06        OUT_OF_MEMORY    0:125
569966.exte+     extern        1                  916K       916K   00:00:06            COMPLETED      0:0

```

Using the `sacct` command we see that the job failed because it ran out of memory. This is inferred through the state: `OUT_OF_MEMORY` and the exit code of `0:125` which correlates with an Out of Memory exit status or the reason why the job session was terminated. 

It is possible to use `scontrol show job <sampleid>` to debug the error(s) that occurred in our job.  

```

   JobId=569966 JobName=testjob
   UserId=**** GroupId=**** MCS_label=N/A
   Priority=4294340955 Nice=0 Account=**** QOS=normal
   JobState=OUT_OF_MEMORY Reason=OutOfMemory Dependency=(null)
   Requeue=0 Restarts=0 BatchFlag=1 Reboot=0 ExitCode=0:125
   RunTime=00:00:05 TimeLimit=00:15:00 TimeMin=N/A
   SubmitTime=2023-07-19T15:54:36 EligibleTime=2023-07-19T15:54:36
   AccrueTime=2023-07-19T15:54:36
   StartTime=2023-07-19T15:54:37 EndTime=2023-07-19T15:54:42 Deadline=N/A
   SuspendTime=None SecsPreSuspend=0 LastSchedEval=2023-07-19T15:54:37 Scheduler=Main
   Partition=test AllocNode:Sid=rclogin01:692486
   ReqNodeList=(null) ExcNodeList=(null)
   NodeList=gnode009
   BatchHost=gnode009
   NumNodes=1 NumCPUs=1 NumTasks=1 CPUs/Task=1 ReqB:S:C:T=0:0:*:*
   TRES=cpu=1,mem=1M,node=1,billing=1
   Socks/Node=* NtasksPerN:B:S:C=0:0:*:* CoreSpec=*
   MinCPUsNode=1 MinMemoryNode=1M MinTmpDiskNode=0
   Features=(null) DelayBoot=00:00:00
   OverSubscribe=OK Contiguous=0 Licenses=(null) Network=(null)
   Command=/scratch/****/python_OOO/job.sub
   WorkDir=/scratch/****/python_OOO
   StdErr=/scratch/****/python_OOO/oomout.qlog
   StdIn=/dev/null
   StdOut=/scratch/****/python_OOO/oomout.qlog
   Power=

```

Looking through the output of `scontrol` we can see the job state, the state the job was last recorded at before the session was terminated or ended, was `OUT_OF_MEMORY`, the node reason was listed at `OUTofMemory` and the exit code was recorded at, before the job session was terminated, `0:125`. All of these fields are useful and allow for the debugging process to conclude that the job did not succesfully run because of a memory capacity issue. 

### Time out issues

One common issue for jobs failing is if job does not complete in the allocated time. This leads to a **Time-Out** State and a `(TimeLimit)` nodelist reason. Jobs that do not finish within their allocated time result in a timeout. Increase the wall time or split the job into smaller tasks.


<details>
<summary> Below is a script that will result in a time-out error. </summary>

```bash
#!/bin/bash
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH -p test
#SBATCH --mem=1G  #Here is the reason why the job fails
#SBATCH --time=0-00:01:00     # 1 mins
#SBATCH --output=regular.stdout
#SBATCH --job-name=test
#SBATCH --export=ALL


echo "Starting Process"
sleep 180
echo "Ending Process"
```
This job script prints "Starting Process," then waits for 180 seconds before printing "Ending Process." When submitted with `sbatch`, it is placed in the requested partition but fails because it exceeds the maximum wall time of 1 minute. Since the script requires a minimum of 180 seconds to complete, it needs a longer wall time to run successfully.


</details>


Using `sacct -j <jobID> --format=jobid,jobname,reqcpus,reqmem,elapsed,state,exitcode`, we get a result table that shows that the first part timed out and thus resulted in a failed, timed out and canceled state. 
<details>
<summary> `sacct` output </summary>

```bash
JobID           JobName  ReqCPUS     ReqMem    Elapsed      State ExitCode
------------ ---------- -------- ---------- ---------- ---------- --------
569330             test        1         1G   00:01:02    TIMEOUT      0:0
569330.batch      batch        1              00:01:03  CANCELLED     0:15
569330.exte+     extern        1              00:01:02  COMPLETED      0:0
569330.0           echo        1              00:00:00  COMPLETED      0:0
569330.1          sleep        1              00:01:02  CANCELLED     0:15

```
</details>

Using the sacct command we see that the job resulted in `TIMEOUT` state which allows us to debug that the issue was an walltime issue issue. This can further be seen as `569330.0` or `echo` on the fourth line shows that echo was completed it was able to execute in the begginging when it printed "Starting Process" but echo was never called again as the job timed-out so the second echo which prints out "Ending Process" was never reached as the job stoped one line before it.  

 It always important to note that sometimes a job failing not the result of one issue or error, but a combination of many errors and issues. Furthermore it is best to keep track of jobs before, during and after completion. 


## Proccess to ensure sucessful completion of jobs
1. Submit the Job
    Submit the above job and see how it runs. To submit the above job, run the following command.
        ```bash
        sbatch script.sh
        ```
        Output:
        >Submitted batch job [JOBID]

2. Watch Live Status of the Job.
    Use the `watch squeue -u <username>`. Do not include anything past the `@` in the username. Ex. `watch squeue -u guest001`. Empty Version of Live Status is below. 
        
        Every 2.0s: squeue -u guest001
        CLUSTER: pinnacles                                                          
             JOBID PARTITION     NAME     USER ST	TIME  NODES NODELIST(REASON)
> To exit the live status of the watch squeue command, press Ctrl + C

3. After the job exits from the queue, run the below sacct command to check the status of the job. 
`sacct -j <JobID> ` or `scontrol show job <jobid>`

<details>
<summary> `sacct Command SampleOutput`: </summary>

JobID    JobName    Elapsed      State ExitCode
------------ ---------- ---------- ---------- --------
568963             test        3      1024M                         00:01:10              TIMEOUT      0:0
568963.batch      batch        3                12.01M     12.01M   00:01:11            CANCELLED     0:15
568963.exte+     extern        3                 0.90M      0.90M   00:01:10            COMPLETED      0:0
568963.0           echo        3                 3.30M      3.30M   00:00:00            COMPLETED      0:0
568963.1          sleep        3                 3.27M      3.27M   00:01:12            CANCELLED     0:15

</details>

## Other Useful Commands 

|Command | Use | 
| -------------| -----------------------|
| scancel [jobid] or skill [jobid] | These commands will kill the specified job in it's current process and state. | 
| seff [jobid] |  This command can be used to find the job efficiency report for the job(s) after it has completed and exited from the queue. Some information in the report are: State, CPU & Memory Utilized, CPU & Memory Efficiency. If the command used while the job is still in the R(Running) state, this might report incorrect information.
