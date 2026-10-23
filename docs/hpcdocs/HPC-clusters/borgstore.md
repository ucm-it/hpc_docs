---
title: Borgstore
hide_title: false
sidebar_position: 3
showLastUpdateAuthor: true
showLastUpdateTime: true
description: "Borgstore: storage center and process for researchers."
last_update:
  date: 2/27/2025
  author: Yue Yu
---

:::info
This page presents information and purchasing process for Borgstore, the on-campus data-storage center available for researchers.  
:::

## Borgstore (BeeGFS)

Borgstore is UC Merced's on-campus data-storage center and is available for research PIs to purchase. Borgstore is used to store active, research-related data and has a usable capacity of 480 terabytes.

Borgstore is also made up of a metadata server with the following configuration:

| Component          | Specification                                       |
|--------------------|------------------------------------------------------|
| Chassis            | 1U dual Xeon Skylake SP                               |
| Drive bays         | 8x 2.5" Hotswap                                       |
| Memory             | 24 DIMM Sockets                                       |
| Management         | IPMI                                                  |
| Network            | Dual 10GbE-T base system                              |
| Metadata storage   | 8x 3.2TB Endurance Data Center PCIe NVMe 2.5" Solid State Drives |

Borgstore is accessible on all nodes (Pinnacles) with Infiniband (IB); all of the partitions contain a mixture of nodes with InfiniBand and non-InfiniBand nodes. If users want to submit jobs while at the Borgstore folder, the Slurm option of 
```shell
#SBATCH --constraint=ib
```
should be added to the job script. Example job script can be found [here](./running-jobs/jobs.md).

:::warning
Borgstore does not do data backups! Users are responsible for ensuring they have backups of their data and work.
:::

### Request Borgstore
Borgstore is a purchasable service that can be requested [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4). Cost for active data storage is shown below. More information can be found [here](https://it.ucmerced.edu/Research-Computing-Services).
| billing rate     |
|-------------------|
| $51.20/TB/year       |    

### Accessing Data from Borgstore for a job
To access data that is located in Borgstore, the user must be in the Borgstore folder/directory and must submit the job to the scheduler from this location. If users want to submit jobs while at the Borgstore folder, the Slurm option of `#SBATCH --constraint=ib` should be added to the job script. 

To run an interactive job, the job must also be run from the Borgstore directory.

### Borgstore Permissions and Access

When it comes to storage access permissions, permission changes are generally not recommended. This is because the Borgstore quota can be changed, which may affect billing.

For convenience, Principal Investigators (PIs) are only able to access their group members' folders and make edits such as file deletion. But if you are transferring files, only the PI and file owners can do so.

Instructions on file transfers can be found [here](https://github.com/ucm-it/hpc_docs/blob/main/docs/hpcdocs/HPC-clusters/data_share_transfer.mdx).


### Common questions about Borgstore

<details>

<summary>How to check my current occupied space on Borgstore? </summary>

Users cannot check a detailed breakdown of a group's users and their respective usage of the Borgstore storage. However, users can check their group's storage usage/total using the command `beegfs-ctl --getquota --gid`, and can check their ID number and Group ID via the command `id`.

</details>

<details>

<summary>When should I use Borgstore? </summary>

Borgstore is great for users who must readily access exceedingly large quantities of data that cannot fit onto our given data quotas in the shared workspace of `Home`, `Data`, and `Scratch`. Borgstore is also useful when the output(s) are huge and can quickly take up all the space in the `Data` folder.

</details>
<details>

<summary>I am having trouble accessing Borgstore, and the directories in the Command-Line Interface are flashing red?</summary>

If the path displayed is flashing red and the user is having issues directly accessing Borgstore, then the soft-links leading to Borgstore are broken or outdated. It is best to open a ticket to get further assistance. Click [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) to open a ticket.

</details>
