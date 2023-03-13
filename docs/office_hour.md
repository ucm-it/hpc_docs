## First-time user log in to HPC tutorial <!-- {docsify-ignore} -->
Below is a tutorial for first-time users on how to log in to HPC cluster. The tutorial used Pinnacles as an example. If users still cannot login after watching the tutorial, feel free to open a a general consultation ticket - Follow the steps below. 

Steps on requesting support with resetting password if users still having issues logging in after following tutorial video:
1. Go to CyberInfrastrucre & Research Technologies Service Now page. [Click Here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).

2. At the bottom of the page there will be a "Request Service" button, click the button. 

3. Login with your UCM NetID and Password if prompted to do so. 

4. You will be promted with a new page that will require you to put in information including a description of the assistance you are requesting. In this case it will be resetting of password, so in the description state that you are requesting help with resetting of Remote Cluster password. 

5. When all the required fields are completed you can submit the ServiceNow Request to recieve assistance on resetting password!

Request Services & Contact Us - [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).

Reset Password & Login Video Below!

<p align='center'>
<iframe width="560" height="500" src="https://www.youtube.com/embed/kfHjL9_kgQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

## HPC Office Hour Q/A <!-- {docsify-ignore} -->
Got A Question? Feel Free to attend HPC Office Hours! Office Hours is held In-Person and via Zoom!


### 3/11/23
>Q: I am new to High-Performance Computing, where do I begin?
>
>A: It is highly recommended that all HPC users have knowledge of basic linux commands and understanding of how a command line interface works. If users need to brush up on basic linux commands then it is highly recommended that they view the Linux(Unix) carpentry workshops [Here!](software_carpentry.md)   
>
>Once user is comfortable with using linux commands then it is highly recommended to look over sample job scripts to understand what a job is and what does a job hold. Users can view a sample job script [Here!](running_jobs.md)

>Q: Does Pinnacles have STATA?
>
>A: Yes, Pinnacles has STATA 17 installed.
>1. Users can see all available software on pinnacles via the command "module avail"
>2. To load a software into the enviroment "module load softare_name"
>3. To unload a module from the enviroment it is "module unload softare_name". 

### 2/24/23
>Q: How to intialzie Conda Enviroment?
>
>A:Tutorial is listed under "Running jobs" - [Click Here](running_R_mpi.md)

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




### 1/27/23
> Q:How To Run Quantum Espresso utilizing GPU?
>
>A: Run it on under interactive session so you can see wheteher job is running with gpu with command "nvidia-smi" (Shows gpu usage).
>Important: *Do Not run GPU job on CPU Node*

>Q:Running Lammps with Kokkos on Cluster?
>
>A:Available Modules on cluster:   Module - "lammps/20210310+kokkos+cuda " - lammps with Kokkos with GPU enbled. 
>Module - "lammps/20210310+user-omp+kokkos"  - with kokkos and user-omp enabled. 


### 12/2/2022
> Q: Can a user run a sequence of jobs from one script?
>
>A: Yes, a user can run a sequence of jobs from one script and if the jobs are dependent on each other then it is possible to make them [dependency jobs](https://slurm.schedmd.com/sbatch.html).

>Q: Not sure if the needed software or library is on one of the HPC clusters? 
>
>A: Documentation website has a list of available software and libraries already downloaded onto the clusters with their specific version numbers here: [Merced's Module List](modules.md) and [Pinnacles' Module List](p_modules.md). For more updated information, once you login to cluster you can check the available sofware by typing `module avail`. Users choosing to self-install software/libraries have the responsibility to use them from trustworthy sources. 

>Q: Software/library requires a new or renewal of license?
>
>A: If the software/library is installed on the cluster and available for anyone to use, CIRT manages the licenses for these products. Contact CIRT if a community-open software/product does not have an active license that should have an active license. If a software is bought or licensed from a PI then PI manage the renewal of the software/library.  


### 11/04/2022
> Q: Cannot access borgstore on compute node
>
>A: Borgstore is only accessible via infiniband (IB), you need to submit a job with`#SBATCH --constraint=ib` to make sure the job is submitted to the node with IB connections.  

> Q: How to use github. 
>
>A: Github desktop app is strongly recommended. [The HPC Resources Page](software_carpentry.md) has a workshop on Version Control with GIT for git command line general tutorial.  


>Q: Need help with parallel computing?
>
>A: CIRT does not have services that help user write code such as *"how to write python parallel program based on a serial nested loop?"*. 
>Best practice is look into parallel packages such as `multiprocessing` in python, and look into the [documentation](https://docs.python.org/3/library/multiprocessing.html) for more information. 


### 11/14/22 - 11/18/2022; 12/09/2; 1/22/23 - 2/17/23; 3/3/23
>No Office Hour Q/A 


 




