---
title: Running Interactive Jobs
sidebar_position: 4
---
# Interactive Jobs
Interactive jobs are a useful way to debug and test code with small sample inputs before submitting a scaled up input in a batch job. Interactive jobs allows users to allocate resources and work on a node directly, seeing any errors or outputs in real-time as the program builds, compiles and executes.

Interactive jobs can be observed as a two-part process:
1. Requesting the resources.
2. Entering the requested resources to run programs.

Below will be a demonstration about running an interactive job
## Requesting an Interactive Job 


To start an interactive session: the `salloc` command allocates resources for the interactive job. Once the resources are allocated the `srun` command will be used to enter the compute node configured for the interactive node.


### `salloc` Command Template: 

    ```bash
    salloc --partition=[queue] --nodes=[***] --ntasks-per-node=[***] --time=[time]
    ```

#### Example of `salloc` Command: 

```bash
# Request 1 node with 1 core for a total time of 15 minutes on the test partition.
salloc --partition=test --nodes=1 --ntasks-per-node=1 --time=00:15:00
```


:::tip
**The salloc command can also be used with the `--constraint` and `--gres` to access big memory or GPU nodes.**
:::
#### Example of `salloc` Command Requesting `gpu` Access: 

```bash
#Requests 1 node with 2 gpus for a time of 15 minutes in the gpu partition.
salloc --partition=gpu --nodes=1 --gres=gpu:2 --time=00:15:00
```


#### Example of `salloc` Command to Access `bigmem` Node: 

```bash
#Requests 1 node with 1 core and bigmem node access for a total time of 15 minutes in the bigmem partition.
salloc --partition=bigmem --nodes=1 --ntasks-per-node=1 --constraint=bigmem --time=00:15:00
```
## Entering the Interactive Compute Node 
To enter the interactive session: the `srun` command will initiate the job step under the allocated job with the provided Job ID.
`srun` command template:

```bash
srun --jobid=[jobid] --pty /bin/bash
```

`srun` command example

```bash
srun --jobid=100234 --pty /bin/bash
```

:::warning
Ensure to replace the [jobid] with the jobid that will be outputted by the `salloc` command.
:::
In the above example of `srun` we ask to placed on the resources allocated to us earlier. Refer to the visual example below.

Once, successfully entered the interactive compute node, you will notice that your current ssh login wil change from rclogin to a compute node as seen in the figure below.

### Example Visualization of Complete Process 
![Interactive job Walkthrough](imgs/gnode009%20copy.png "Interactive Job Demonstration")


Example: 
>[guest027@`rclogin02` ~]
> Will change to
>[guest027@`node008` ~] 


   
   Reflecting a node placement change onto the compute node, `node008`. Placement on a compute node now allows for more intensive build, compile and computations. 

:::warning
Always ensure you are on the compute node before running experiments! You may cause disruptions if you are not careful and still on the login node.
:::
## Ending the Interactive Session 


:::tip
It's important to release the allocated resources after finished using them.
:::
To properly exit use one of the following methods:
- If you're logged into the node directly, simply type exit or press Ctrl+c to log out. 
- If you used srun to run commands, you can exit the shell spawned by srun to return to your original session, and then use exit or Ctrl+D.
- To explicitly release the resources, you can use the scancel command with your job ID, which can be found using squeue.

:::tip
Using one of these methods, you must still use `scancel <jobid>` to release the resources after you exit the node.
:::
## Useful Tips and Tricks for Interactive Session 
1. Ensure your connection remains active to the node during your allocated resource time. If at any point, connection to the node is lost, the running calculations may be interrupted abruptly.
2. Use interactive sessions only for testing of programs on the smaller scale that can be scaled up in a batch job. Interactive sessions are not best used when running longer, more computationally intensive programs.
3. Request Only What is Needed: To ensure efficient use of cluster resources, request only the amount of time, memory, and compute resources necessary for your task.
4. Always check you are currently placed on the compute node before running any experiments. For any reason you are not on the compute node and begin running experiments you may cause massive disruptions to all users on the login nodes.
