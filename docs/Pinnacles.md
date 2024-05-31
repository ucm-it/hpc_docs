## Pinnacles Cluster <!-- {docsify-ignore} -->
The NSF-MRI funded Pinnacles cluster is available for all faculty projects __at no cost!__ Pinnacles cluster features newer generation of Intel Xeon Gold 6330 CPU processors and NVIDIA Tesla A100 v4 40GB HBM2 GPUs. The Pinnacles cluster runs with the [RedHat](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) operating system, and employs the [Slurm](https://slurm.schedmd.com/) job scheduler and queueing system to manage job runs.

## System overview
Compute nodes: Compute nodes are where actual jobs run. There are three types of compute nodes on Pinnacles.
* 40 Regular memory (RM) CPU nodes with 256GB RAM
* 4 Big memory CPU nodes (bigmem) with 1TB RAM
* 8 GPU nodes with NVIDIA A100 GPUs
All nodes are interconnected via HDR InfiniBand w/ RDMA for fast (100Gbits/s) and low latency (sub ms) data transfer.

|     CPU node            | RM node                        | bigmem node                    |
|:----------------|:-------------------------------|:-------------------------------|
| Number of nodes | 40                             | 4                              |
| CPU             | 2 Intel 28 core Xeon Gold 6330 | 2 Intel 28 core Xeon Gold 6330 |
| RAM             | 256GB | 1TB|
| Node-local storage             | 1TB NVMe Data Center Solid State Drive (SSD) | 1TB NVMe Data Center Solid State Drive (SSD)|
| Network             | ConnectX-6 VPI adapter card, HDR 100 InfiniBand (100Gb/s) and 100GbE, single-port QSFP56, PCIe3/4 x16 Slot| ConnectX-6 VPI adapter card, HDR 100 InfiniBand (100Gb/s) and 100GbE, single-port QSFP56, PCIe3/4 x16 Slot|

GPU nodes: Pinnacles GPU nodes provide exceptional performance and scalability for deep learning and accelerated computing.

| GPU node     |                                                           |
|:-------------|:----------------------------------------------------------|
| Number       | 8                                                         |
| GPU per node | 2x NVIDIA Tesla A100 PCIe v4 40GB HBM2 Passive Single GPU |
| CPU          | 2x Intel 28-Core Xeon Gold 6330                           |
| RAM          | 256GB                                                     |
| Node-local storage|1TB M.2 NVMe Data Center Solid State Drive (110mm)|
|Network|ConnectX-6 VPI adapter card, HDR-100 IB (100Gb/s) and 100GbE, single-port QSFP56, PCIe3/4 x16 Slot|

## Pinnacles Queue Information:
Pinnacles Cluster is the default cluster that is free and accessible to all users and has 6 public queues. 

| Public Queues(Available to all users)| Max Wall Time | Default Time | Max Nodes per Job | Max # of jobs that can be submitted | 
| -------------------------------------|---------------|--------------|-------------------|-------------------------------------|
| ^test | 1 hour | 5 min. | 2 nodes | 1 |
| bigmem | 3 days | 1 hrs | 2 nodes | 2 | 
| gpu | 3 days | 1 hrs | 2 nodes | 4 | 
| *short | 6 hours | 1 hrs | 4 nodes | 12 |
| medium | 1 day | 6 hrs | 4 nodes | 6 |
| long | 3 days | 1 day |  4 nodes | 3 | 

* <span style="color: red;">\*short queue is the default queue for all jobs submitted without specifiying which queue job must run on </span>
* <span style="color: red;">^test queue has access to all node types use constraints to test on specific types. e.g. `#SBATCH --constraint=gpu,bigmem` </span>
* <span style="color: red;"> Access to GPUs also requires `#SBATCH --gres=gpu:X` </span>

Pinnacles Private Queue Information: 

| Private Queue| Max Wall Time |
| -------------------------------------|---------------|
| pi.larsson|  Infinite Time | 
| pi.anierenberg | Infinite Time |
| pi.dstrubbe | Infinite Time |
| pi.apribram-jones | Infinite Time | 
| pi.amartini | Infinite Time | 
| pi.ckim103 | Infinite Time | 
| pi.bdutagaci | Infinite Time |
| grp.ccbm | 7 days |
| dept.physics | Infinite Time |
| dept.appliedmath | Infinite Time |
| dept.cogsci | Infinite Time |
| dept.les | 7 Days |



## Requesting an account  

The following detail consists of how to request Pinnacles cluster access. If you have questions or concerns, do not hesitate to:
* Schedule a Pinnacles consultation [here](https://arrangr.com/sarvani/facultyconsult). 

!> Who can request access for the Pinnacles cluster?
* UC Merced Faculty Principal Investigators (PIs) can request access to Pinnacles cluster. All student user accounts on Pinnacles cluster must associate with UC Merced PIs.

!> How to request for Pinnacles cluster access?

__Requesting access to Pinnacles is a 3-step process.__
1. UC Merced Principal Investigators (PIs) or other researchers request Pinnacles account [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=643ea9ff1b67a0543a003112cd4bcba3&form_id=280d8bb04f72f6006137d0af0310c7b0).
2. For new account group project applications, PIs please also make sure to complete the export control [form](https://ucmerced.app.box.com/s/zvptfc8adbdzt4xs8kcj73lyretyn692), if the PI has not done one before.
3. Once the form is completed, please attach the form to the request ticket from step 1.

What is included? 

OIT will verify the eligibility and create the appropriate account for
either a PI Group or a user.
* Users can install any licensed software packages in their __home__
  directories, and where appropriate for other systems. If
  you need assistance, submit a [Research Software Installation Request](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=b83ee9ff1b67a0543a003112cd4bcbde&form_id=0cb3dca04f7d4300b52ba1618110c7ff)(Servers and Clusters), including on which system to install the software.
* The Pinnacles cluster uses a queuing system for job submission.
  Priorities of jobs are assigned on a dynamic basis. Not all jobs
  submitted will begin immediately.


## Questions?  <!-- {docsify-ignore} -->

If you still have questions, we have put together a Pinnacles [FAQ page](pinnacles_FAQ.md) that has the most common questions received and will be keeping it up to date.



## How to cite  
All Pinnacles users must agree to acknowledge the Pinnacles Cluster and the
supporting NSF grant (NSF MRI, # 2019144) in talks, posters, manuscripts, and
other forms of dissemination relying on results obtained from time on
Pinnacles. An example acknowledgement section is:
```text
This research [Part of this research] was conducted using Pinnacles
(NSF MRI, # 2019144) at the Cyberinfrastructure and Research Technologies
(CIRT) at University of California, Merced.
```
From time to time the Committee on Research Computing (CoRC) may request a report of publications and presentations authored by Pinnacles users that have included results of calculations on Pinnacles. This information may be used by CoRC in advertising and report documents, future proposals, and/or other materials related to research computing at UC Merced. 


## Facility statement <!-- {docsify-ignore} -->

The NSF-MRI grant number #2019144 funded Pinnacles cluster is available for all faculty projects at no cost. 

Pinnacles cluster has the following compute node configurations: 
* 40 regular Compute nodes with 2XIntel-28-Core Xeon Gold 6330 2.0GHz - 205W, each with 256GB RAM. 
* 4 High Memory nodes with 2x Intel 28-Core Xeon Gold 6330 2.0GHz CPUs and 1TB RAM for large memory calculations.
* 8 GPU nodes, and each one of the nodes has 2X NVIDIA Tesla A100 PCIe v4 40GB HBM2 Passive Single GPU.
Pinnacles also has ~92TB NFS Fast Scratch Storage space for accessing large data with low latency and 1.5PB of usable long-term storage.

Relative proximity and extent of availability: The Pinnacles cluster is managed by the Office of Information Technology at UC Merced and technical support and training opportunities are available. It is available for
all faculty projects at no cost. All above nodes are interconnected via HDR InfiniBand w/ RDMA for fast (100Gbits/s) and low latency (sub ms) data transfer.
