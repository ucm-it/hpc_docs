---
title: HPC Office Hours
sidebar_position: 1
---

## HPC Office Hour Q/A
Got A Question? Feel Free to attend HPC Office Hours! Office Hours is held In-Person and via Zoom!
HPC office hours - Every Wednesday and Thursday, 10:00 am - 11:00am, ACS Room 312  
Zoom URL:https://ucmerced.zoom.us/j/89487493900; password:895006 


## First-time user log in to HPC tutorial 
Below is a tutorial for first-time users on how to log in to HPC cluster. The tutorial used Pinnacles as an example. If users still cannot login after watching the tutorial, feel free to open a a general consultationt ticket - Follow the steps below. 

Steps on requesting support with resetting password if users still having issues logging in after following tutorial video:
1. Go to CyberInfrastrucre & Research Technologies Service Now page. [Click Here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).

2. At the bottom of the page there will be a "Request Service" button, click the button. 

3. Login with your UCM NetID and Password if prompted to do so. 

4. You will be promted with a new page that will require you to put in information including a description of the assistance you are requesting. In this case it will be resetting of password, so in the description state that you are requesting help with resetting of Remote Cluster password. 

5. When all the required fields are completed you can submit the ServiceNow Request to receive assistance on resetting password!

Request Services & Contact Us - [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).

Reset Password & Login Video Below!

<p align='center'>
<iframe width="680" height="680" src="https://www.youtube.com/embed/8BHeIofP0ik?si=OWwBIvoRbCkDBLqm&rel=0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>



## Remote transfer files using `scp` command <!-- {docsify-ignore} -->
Watch the video below!
<p align='center'>
<iframe width="680" height="680" src="https://www.youtube.com/embed/G6DNWqHFC7A?si=mUyddWUx9rXQuvl4&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>



## Commonly Asked Questions: 
>Q: I am new to High-Performance Computing, where do I begin?
>
>A: It is highly recommended that all HPC users have knowledge of basic linux commands and understanding of how a command line interface works. If users need to brush up on basic linux commands then it is highly recommended that they view the Linux(Unix) carpentry workshops [Here!](./workshops.md)   
>
>Next step would be to check out the HPC Practice Session Material [Here!](./intro-hpc.mdx). Here you can look at the training material that is typically shown in the HPC workshop and even do a self-paced practice session!
>
>Finally it is highly recommended to look over sample job scripts to understand what a job is and what does a job hold. Users can view a sample job script [Here!](../running-jobs/.)

>Q: How can I view the size of my data on the cluster?
>
>A: Users can use the command `du -h <filename>` to view the size of a given file or directory. 

>Q: How to intialzie Conda Enviroment?
>
>A:Tutorial is listed under "Running jobs" - [Click Here](../running-jobs/conda.mdx)

>Q:My GPU node request is not being granted or running?
>
>A: Pinnacles Machine only has 8 publicly available GPU Nodes; each node has two GPU cards. Therefore, if all GPU nodes are being used then user must wait and try again later to run GPU interactive Job. 
The command "sinfo" to get information about the GPU nodes and their current usage. 

>Q: My job is failing when I place it on a private partition but it runs successfully when it runs on a public partition, what could be the issue?
>
>A: Ensure that the the partition that the job is placed on has suffienent max walltime for the job to prevent a TIMEOUT job state. Private Job Partitions have unlimited wall time, so if the issue, where the job runs normally on the public partition but not on the private partition, then submit a ticket with as much information as possible so we can investigate. 




## Recent Office Hours Questions 
Here is where users can find more recent office hours Q/A. These questions are no older than 4 weeks old. 

No recent office hour questions




## Older Office Hour Questions 

>Q: What is the max storage limit of the Data Folder?
>
>A: The max storage in the data folder is 500 GB. More information about all folders and their max storage sizes can be found [here](../HPC-clusters/campus-clusters.md#centralized-login)!

>Q:What is the cost of purchasing into Borgstore?
>
>A: The cost of purchasing into Borgstore is $0.05/GB/year (startup funds) and $0.06/GB/year (non-startup funds).

>Q: I am having issues running R through parallelization on the cluster. 
>
>A: First test that you are able to run R via a serial job fine. Once you are able to submit a serial R job then scale it up to a parallel computing job. Many times it is the case that `source activate [R-enviroment]` and `Rscript [script]`. For further support check our R documentation found [here](../running-jobs/run_r_mpi.mdx).

>Q: How can I edit my file permissions so my group can access the file and its subfolders?
>
>A: You can use the `chmod` command to assign read/write access to your group and view more information and help here on our [data sharing page](../HPC-clusters/data_sharing.md)!


>Q: I need to jobs with data that exceeds the standard storage given in `data` & `scratch` folders, what are the options?
>
>A: Reach out to your PI and see if the PI has purchased more storage for authorized users to use and access. If PI has purchased more storage and wants to add user(s) then open a ticket to add users to the storage user group. If there is interest into obtaining more storage open a consultation ticket with CIRT to discuss purchasing into using Borgstore to access more storage. Alternatively, users can also try to breakdown their massive data into smaller pieces. This will allow smaller jobs to be ran and smaller outputs  to be produced so not all the data is needed to be stored  under the `scratch` or `data` folder at once, reducing the chance that the storage limit is reached. 

### 6/23/23
>Q: My job is getting cancelled and I am trying to access the GPU. 
>
>A: Ensure that the GPU partition is being called correctly `gpu` and that `#SBATCH --gres=gpu:X ` is implemented. Replace the X with the number of GPUs needed. 

>Q: Whats the difference between using more cores versus using more nodes?
>
>A: It is important to understand that Nodes and Cores are two different parts of an HPC cluster (two different levels). A core holds the CPU component. Multiple cores make up a node. When increasing the number of cores, the cpu or processing power per node is being increased which can help speed up jobs. Increasing the number of nodes __does not__ necessarily correlate to increase processing power. Many jobs may not be optimized for running and scaling across multiple nodes. Users trying to run across multiple nodes must implement MPI into their job so the job is optimized best for running parralelling across nodes. Please refer to the [HPC Vocab Page](hpc_vocab.md) for more information and definitions for terminology. 

>Q:How can I test whether my job is scalable for running across multiple nodes?
>
>A: It is recommended that users try using a benchmark to see if Parallelization is suitable for their job. A benchmark is testing a much smaller version of their actual job or calcuations and see whether that sample job is or can scale properly. 

>Q:Can I implement multiprocessing in my Python code. 
>
> Yes, it is recommended to read over the multiprocessing module documentation online, view it [here](https://docs.python.org/3/library/multiprocessing.html)!

>Q: Does Pinnacles have hyperthreading turned on? 
>
>A: No, Pinnacles and MERCED currently do not support hyperthreading. 

>Q: What is hyperthreading? 
>
>A: Hyperthreading is a method that allows the CPU to divide up the work among itself and complete it parallel among itself. 

>Q: I am trying to run a job on the cluster. My data utilizes python dependcies to parse through it and is located on the box cloud. Can my job run sucessfully?
>
>A: All the files and folders that the cluster needs to access needs to be transfered and present on the cluster. The cluster can not access data stored on a internet or outside cloud storage. Furthermore, to utilize python packages or dependencies one must create a conda enviroment on the cluster. More information about creating an enviroment can be found [here](../running-jobs/conda.mdx)

>Q: How can I view the size of my data on the cluster?
>
>A: Users can use the command `du -h <filename>` to view the size of a given file or directory. 


>Q: I am trying to download this folder from the cluster to my local computer but I am having issues with `rsync` - error `skipping local path`. 
>
>A: A quick bypass to this issue is to use the `scp` command to transfer files or folders from remote to local. A tutorial is posted at the top of this page. 


>Q: I'm having trouble downloading a folder or file onto the clusters and I keep getting permission denied.
>
>A:  First check whether the original author of the folder or file has given proper read (r) & write (w) access to others or groups. Use the command `ls -la` to view all permissions in your current directory or `ls -la <filename>` to view only the permissions for that specified file. To download a folder or file user must ensure that they have __read__ and __write__ access.

>Q: Can I let this folder/file download in the background?
>
>Yes users can run the download or transfer of data using `& ` at the end of their command. 

>Q: I can not login into the Central Login even though I had an account on Merced Cluster?
>
>A: Submit a password reset to gain access to the central login node. From there all data stored in the home and data folder of the Merced cluster will transfer over to Pinnacles cluster as Merced cluster is recharge model. User must also rebuild any enviroment they had built in Merced in Pinnacles. Pinnacles is the default cluster when users login to through central login. 

>Q: Does Pinnacles have STATA?
>
>A: Yes, Pinnacles has STATA 17 installed.
>1. Users can see all available software on pinnacles via the command "module avail"
>2. To load a software into the enviroment "module load softare_name"
>3. To unload a module from the enviroment it is "module unload softare_name". 

>Q: How to intialzie Conda Enviroment?
>
>A:Tutorial is listed under "Running jobs" - [Click Here](../running-jobs/conda.mdx)

>Q:My GPU node request is not being granted or running?
>
>A: Pinnacles Machine only has 8 publicly available GPU Nodes; each node has two GPU cards. Therefore, if all GPU nodes are being used then user must wait and try again later to run GPU interactive Job. 
The command "sinfo" to get information about the GPU nodes and their current usage. 


>Q: Running Gromacs with GPU on Pinnacles?
>
>A: Pinnacles only has Gromacs for CPU usage installed.

>Q:How can I monitor the state of the GPU node that is running my interactive job?
>
>A:Monitoring the state of the GPU node and seeing the usage during the interactive job can be done through the command "nvidia-smi"

>Q: Is VMD available on Pinnacles
>
>A: Yes, Pinnacles has VMD version 1.9.3. However it is recommended that users use VMD on their own local machine to get better results.


>Q:Running Lammps with Kokkos on Cluster?
>
>A:Available Modules on cluster:   Module - "lammps/20210310+kokkos+cuda " - lammps with Kokkos with GPU enbled. 
>Module - "lammps/20210310+user-omp+kokkos"  - with kokkos and user-omp enabled. 

> Q: Can a user run a sequence of jobs from one script?
>
>A: Yes, a user can run a sequence of jobs from one script and if the jobs are dependent on each other then it is possible to make them [dependency jobs](https://slurm.schedmd.com/sbatch.html).

> Q: Cannot access borgstore on compute node
>
>A: Borgstore is only accessible via infiniband (IB), you need to submit a job with`#SBATCH --constraint=ib` to make sure the job is submitted to the node with IB connections.  

> Q: How to use github. 
>
>A: Github desktop app is strongly recommended. [The HPC Resources Page](./workshops.md) has a workshop on Version Control with GIT for git command line general tutorial.  


>Q: Need help with parallel computing?
>
>A: CIRT does not have services that help user write code such as *"how to write python parallel program based on a serial nested loop?"*. 
>Best practice is look into parallel packages such as `multiprocessing` in python, and look into the [documentation](https://docs.python.org/3/library/multiprocessing.html) for more information. 



