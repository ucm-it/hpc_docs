---
title: Running Jupyter on Pinnacles
sidebar_position: 4
---

## Interactive jobs on cluster 
Interactive job will directly put you onto a compute node where you can use the compute node resources to test out a smaller program before scaling it up. View the [Interactive Job Tutorial Here](interact_job.md "Interactive session") 

After being placed on the desired node type, we can run jupyter on the compute node. 
   
1. Load the anaconda module first. 
  ```bash
  module load anaconda3
  ```
2. Now launch the launch Jupyter notebook
  ```bash
  jupyter-notebook --no-browser --port=8889 --ip=0.0.0.0 
  ```
  After running this command, you will be given an url for the future step, circled in pink. 
  ![Jupyter Notebook](imgs/jupyternotebook.png "Jupyter Notebook")

3. Now you need to start a new terminal window and setup the tunnel as follow:
  ```bash
  ssh -N -f -L 8889:mrcdg01.cluster:8889 UCMID@login.rc.ucmerced.edu  
  ```
:::note
User must replace the mrcdg01 and UCMID to the assigned node from step 2 and your own NetID
:::
4. Now open a web browser, copy and paste the URL from step 4. You will be able to access the jupyter notebook there. 
   
:::warning
Internet is not accessible on Compute Nodes, that means you will not be able to download files, clone a repo from GitHub, install packages, etc. You will need to perform these operations on the login node before starting the session. 
:::   
5.	Once you are done, terminate the ssh tunnel from step 5 by running `lsof -i tcp:8889` to get the PID and then `kill -9 <PID>`
6. You also need to exit the compute node from step 2 by typing `ctrl+d`, and you need to type `ctrl+d` again to exit the job if you are on the node shorter than the requested time limit. 