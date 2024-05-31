# Building GPU Softwares on Pinnacles 
Many applications require to be built with GPU support, such as Kokkos, LAMMPS, deep learning frameworks, etc. This page will showcase how to install and build GPU-supported softwares/applications. 

The showcase will utilize the application, Kokkos, as our example application. 

## Allocating and Placement on a GPU Node <!-- {docsify-ignore} -->

Allocating a GPU node is the first step: 

GPU nodes can be allocated via test partition (1 Hour Max TimeLimit) or via the `gpu` partition.

For shorter build times, `test` partition is a good starting point, however for longer GPU utilization allocate a node via `gpu` Queue.

To allocate a gpu node to be used interactively use the following line, `salloc --partition=<queue> --nodes=<#> --gres=gpu:X --time=<time>` where X will be replaced by 1 or 2 to denote how many GPU cards to use. 

More information can be found [here](https://ucm-it.github.io/hpc_docs/#/running_jobs) or for interactive jobs click [here](https://ucm-it.github.io/hpc_docs/#/interact_job)


Once the job has been submitted and the resources have been allocated - 

Begin to run interactively via: `srun --jobid=<jobid> --pty /bin/bash`

An updated `user@gnode` should be similar to the image below. In the image the user is on the `gnode009`
![Image of User of gnode](imgs/gnode009.png "User placed on gnode009")
 
## Checking GPU is Active  <!-- {docsify-ignore} -->
Once placed on the GPU node, check the GPU resources on the node you are placed using `nvidia-smi`. If the GPU is properly activated a similar message will appear as below. 

    +-----------------------------------------------------------------------------------------+
    | NVIDIA-SMI 550.54.15              Driver Version: 550.54.15      CUDA Version: 12.4     |
    |-----------------------------------------+------------------------+----------------------+
    | GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
    |                                         |                        |               MIG M. |
    |=========================================+========================+======================|
    |   0  NVIDIA A100-PCIE-40GB          Off |   00000000:17:00.0 Off |                    0 |
    | N/A   29C    P0             35W /  250W |       0MiB /  40960MiB |      0%      Default |
    |                                         |                        |             Disabled |
    +-----------------------------------------+------------------------+----------------------+
    |   1  NVIDIA A100-PCIE-40GB          Off |   00000000:31:00.0 Off |                    0 |
    | N/A   29C    P0             37W /  250W |       0MiB /  40960MiB |      4%      Default |
    |                                         |                        |             Disabled |
    +-----------------------------------------+------------------------+----------------------+
                                                                                        
    +-----------------------------------------------------------------------------------------+
    | Processes:                                                                              |
    |  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
    |        ID   ID                                                               Usage      |
    |=========================================================================================|
    |  No running processes found                                                             |
    +-----------------------------------------------------------------------------------------+

!> If a message stating that `nvidia-smi` command is not returning a similar message as above, open a ticket [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) and state the name of the GPU Node you are working on. 

## Installing software/application <!-- {docsify-ignore} -->

Ensure the software has been cloned if it is from GitHub or downloaded from the original source. 

***If the Software requires `CUDA`, then `module load cuda`*** 

For the following demonstration of how to install a GPU-Supported application we will use `Kokkos`. The source can be found [here](https://github.com/kokkos/kokkos).


`Kokkos` makes use of the `cmake` system for building of the software. 

### Now to complete the building and installation of `Kokkos`: <!-- {docsify-ignore} -->

1. Clone the repository to the desired location via: `git clone https://github.com/kokkos/kokkos`

2. This software requires CUDA support so now we load CUDA via: `module load CUDA` 

3. Request an interactive job:  `salloc --partition=test --nodes=1 --gres=gpu:2 --time=00:30:00`

4. Begin interactive session: `srun --jobid=<JOBID> --pty /bin/bash` . Replace `<JOBID>` with the unique JobID during your session. 

5. Now ensure placement on a gnode with GPU resources active via the method outlined above. 

6. Now cd into Kokkos: `cd kokkos`

7. Now we begin to use the cmake system to build the Kokkos software     `cmake -B kokkos_build/ -DKokkos_ENABLE_CUDA=ON -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=.local/ -S $PWD`. Here `kokkos_build` is our build directory that will be created during the execution of this line. The install prefix is a directory where the user wishes to have the software header files installed. 

!> If following the line above, ensure to change the build location and install prefix to use your building and install location. 

2.    Now we execute the cmake build line to build the header files:   `cmake --build kokkos_build/`


3.    Finally execute the install line to have these header files be installed into the `kokkos_build` and to be available in our install location (Example -  `~/.local/` ) folder via:   `cmake --install kokkos_build/`

If the build and installation were successful, `Kokkos` header files should be found in the installation location denoted in step one. 

To find the Kokkos build and installation options and further guidance refer to the Kokkos Documentation [here](https://kokkos.org/kokkos-core-wiki/quick_start.html). The Kokkos build and installation steps used above can also be found in the `Quick Start` section of the Kokkos documentation. 