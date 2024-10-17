---
title: Campus Clusters
hide_title: true
sidebar_position: 1
---

import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## HPC Clusters
> Currently, UC, Merced has two clusters on site. They are maintained by the [CIRT](https://it.ucmerced.edu/Research-Computing-People) team. If you have any questions, feel free to contact us [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).


<Tabs>
  
  <TabItem value="MERCED" label="MERCED" default>
     :::note
      The MERCED (Multi-Environment Research Computer for Exploration and Discovery) Cluster is a 1,872-core, Linux-based high-performance computing system. The MERCED cluster runs with the [Rocky (8.10)](https://rockylinux.org/) operating system, and employs the [Slurm](https://slurm.schedmd.com/) job scheduler and queueing system to manage job runs. MERCED operates on a <Tag color="#3399ff">Recharge</Tag> model, meaning users are billed per core-hour of usage. Further details on the recharge process can be found below. To apply for a MERCED account, users must have a Chart of Account (COA) number ready.
     :::
    __Facility Statement__
      
      MERCED is a general-purpose computing cluster located in the server facility (see Research Facility below). The cluster consists of a login node, 65 compute nodes, and 15 high memory nodes. Total CPU-core counts is 1872.

    __How to cite__

    All MERCED users must agree to acknowledge the MERCED Cluster and the supporting UC,Merced Office of Information Technology central funded MERCED in talks, posters, manuscripts, and other forms of dissemination relying on results obtained from time on MERCED. An example acknowledgement section is:
    
    
    *This research [Part of this research] was conducted using MERCED cluster, which is centrally funded by the University of California, Merced, and maintained by the Cyberinfrastructure and Research Technologies (CIRT) team at UC Merced.*
    

  <details>

    <summary>
    Recharge details
    </summary>

    :::tip
    MERCED recharge calculations
    ```
    Total Cost ($) = # of cores x Duration (wall clock hours) x (cost per core-hour)
    ```
    - A core-hour is a single compute core used for one hour (a core-hour) and 2G of RAM. 
    - Cost per core-hour is $0.01

    :::
    __why should I be willing to invest in this?__
      - 🔴 The MERCED cluster offers unlimited wall clock time, allowing users to run significantly longer jobs without time constraints. 
      - 🟢 The MERCED queue is less crowded, allowing jobs to be picked up with shorter waiting times.
      - 🟡 All recharge funds will go toward cluster maintenance, including network switch replacements and hardware upkeep. The CIRT team will not profit from these contributions.

  </details>

  
  </TabItem>
  
  <TabItem value="Pinnacles" label="Pinnacles">
    :::note 
    The NSF-MRI funded Pinnacles cluster located in the server facility (see Research Facility below) is available for all faculty projects at <Tag color="#008000">NO COST</Tag>! The Pinnacles cluster runs with the [RedHat](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) operating system, and employs the [Slurm](https://slurm.schedmd.com/) job scheduler and queueing system to manage job runs.The Pinnacles cluster is equipped with the latest generation Intel Xeon Gold 6330 CPUs and NVIDIA Tesla A100 v4 40GB HBM2 GPUs. It operates on the RedHat operating system.
    :::
    __Facility Statement__
    
    The NSF-MRI grant number #2019144 funded Pinnacles cluster has the following compute node configurations:

    - 40 regular Compute nodes with 2XIntel-28-Core Xeon Gold 6330 2.0GHz - 205W, each with 256GB RAM.
    - 4 High Memory nodes with 2x Intel 28-Core Xeon Gold 6330 2.0GHz CPUs and 1TB RAM for large memory calculations.
    - 8 GPU nodes, and each one of the nodes has 2X NVIDIA Tesla A100 PCIe v4 40GB HBM2 Passive Single GPU. 
    
    Pinnacles also has ~92TB NFS Fast Scratch Storage space for accessing large data with low latency and 1.5PB of usable long-term storage.
    
    Relative proximity and extent of availability: The Pinnacles cluster is managed by the Office of Information Technology at UC Merced and technical support and training opportunities are available. It is available for all faculty projects at no cost. All above nodes are interconnected via HDR InfiniBand w/ RDMA for fast (100Gbits/s) and low latency (sub ms) data transfer.

    __How to cite__

    All Pinnacles users must agree to acknowledge the Pinnacles Cluster and the supporting NSF grant (NSF MRI, # 2019144) in talks, posters, manuscripts, and other forms of dissemination relying on results obtained from time on Pinnacles. An example acknowledgement section is:

    *This research [Part of this research] was conducted using Pinnacles (NSF MRI, # 2019144) at the Cyberinfrastructure and Research Technologies (CIRT) at University of California, Merced.*

    From time to time the Committee on Research Computing (CoRC) may request a report of publications and presentations authored by Pinnacles users that have included results of calculations on Pinnacles. This information may be used by CoRC in advertising and report documents, future proposals, and/or other materials related to research computing at UC Merced.
  </TabItem>

 
</Tabs>

<details>
     <summary>
      Research Facility
      </summary>
     The Research Computing Facility, named the Borg Cube, is a 1,448 square foot pre-manufactured, self-contained, fully serviceable data center-style building comprised of two (2) transportable modular containers, one section for electrical distribution and the other to house research computing machines. The design includes three (3) 60-ton Indirect Evaporative Cooling (IEC) mechanical units to be located outside, adjacent to the structure. The Borg Cube houses twenty (20) 19"-24" racks with 51U per rack, totaling 1020U and provides 400kW of N+1 redundant power capacity at the rack bus, providing the ability to provide individual racks with either redundant or non-redundant power supply units. The design includes two (2) 500kVA PDU's each fed from separate sources backed up from dedicated 500kVA UPS which are connected to two (2) 800A rated Starline bus to account for single or dual corded customer connections. An N+1 UPS system will consist of two (2) 500kVA UPS units, each to be equipped with batteries to support its full load for 15 minutes. The mechanical design includes three (3) 60-ton IEC units totaling 633kW of cooling available. This design accounts for an additional unit (N+1), in the case of maintenance or failure of an operating unit. The design technical requirements do not list the requirement for an N+1 mechanical system as this building can be fully supported by two (2) 60-ton units; however, due to the importance of this facility, the third unit exists for operations and maintenance purposes. This approach gives the facility engineers the ability to provide maintenance on a given unit without shutting down the facility and limiting unnecessary down time. A self-contained FM-200 style suppression system along with the required detection devices are provided for fire protection and detection systems. One (1) FM-200 tank is provided for each individual module. A VESDA system is present to detect smoke at its earliest stage and to send a signal to the clean agent suppression panel. Two (2) 1500kva substations based on an N+1 design, are provided to accept separate services. Each substation is provided with a 2000A main breaker, a 1000A breaker for the current facility, and an open space for a future circuit breaker to be used to support a potential future expansion. One of the substations is provided with a 100A breaker for the electrical equipment serving the site loads.
  </details>
  

## Centralized login
### Login nodes
The standard method for connecting to a remote machine is through Secure Shell (`ssh`) commands. Starting from 02/01/2023, we will implement a <Tag color="#0F2D52">centralized login</Tag> system. This means that once a user logs into one of the login nodes, they will be able to access both the MERCED and Pinnacles clusters. Users applying for a Pinnacles account can begin the application process [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=643ea9ff1b67a0543a003112cd4bcba3&form_id=280d8bb04f72f6006137d0af0310c7b0), and Pinnacles is __FREE__ to use within the campus. However, to access the MERCED cluster, users must provide a __COA__ account number and enter the number during the MERCED account application process.

Currently, we have three login nodes, and users can expect to be connected to either `rclogin01`, `rclogin02`, or `rclogin03`. __Do not run computationally intensive processes on the login nodes.__ These nodes are appropriate for tasks such as file preparation/editing, compiling, simple analyses, and other low-computation activities. For more resource-intensive work, submit jobs to the cluster using the available queue system. Additionally, users can connect to a remote machine using an X-terminal (XQuarz or X11) forwarding (see example command below) to run graphics-based programs like gnuplot, gimp, etc.

### Connect to the clusters
On Mac and Linux you can use the built-in terminal application; on Windows you can use [MobaXterm](https://mobaxterm.mobatek.net/) to open a terminal, and type the following command, but replace `<username>` to your UCMID.
```shell
ssh <username>@login.rc.ucmerced.edu
```

### X11 forwarding

:::tip
__Mac OS:__ 

Prerequisite: Install [XQuartz](https://www.xquartz.org/)
Then open XQuartz through `open -a XQuartz` in the terminal or other CLI. Then type the following command.
```shell
ssh -X <username>@login.rc.ucmerced.edu
```
- `-X`: Enables X11 forwarding.
:::
__Windows users__

MobaXterm includes an integrated X11 server, so no additional installation of X11 software is needed.
- Start a New SSH Session with X11 Forwarding
  - In the top-left corner, click on the "Session" button.
  - Choose "SSH" from the available options
- Configure the SSH Session
  - In the Remote Host field, enter the address of the remote server (e.g., remote.server.com)
  - Ensure the "Specify username" box is checked, then enter your username for the remote server
  - Check the box that says "X11-forwarding". This option enables X11 forwarding for your session

## File systems and storage
There are 2 folders (`data` and `scratch`) locate in `HOME` that users will start with.

:::note
MERCED and Pinnacles have now been merged into a centralized system, allowing them to share the same file systems. We have also increased the quota for the `data`, `scratch`, and `HOME` directories. Please note that there is a 7-day grace period once the soft quota limit is reached.
:::

| Folder       | soft quota  | hard quota     |
|------------|------|----------------|
| `HOME`   | 70G   | 75G      |
| `data` | 500G   | 512G         |
| `scratch`  | 500G   | 512G         |

### Checking disk quota and usage
To look at your current usage amounts of `HOME`, `data` or `scratch` use the following command
```shell
quota -vs 
```
This will output, in sections, the filesystem, current space usage, quota, hard limit, and other relevant information in a more readable format.

:::tip
To convert the outputted megabytes to gigabytes = space(MB) divided by 1024
:::

### Checking the size of directories and content
To chek the size of the current directory or any directories in it use the `du` command.
:::note
`du` command alone will output all directories, hidden as well, in real time so it will take a few momments to finish. It is recommended to execute the command with some of the following options to make the process more clear and consice.
:::

| Option           |Description                                                                               |
|------------------|------------------------------------------------------------------------------------------|
| `-h`             | Displays storage values in human-readable format (e.g., KB, MB, GB)                      |
| `-s`             | Summarizes the size of the whole current directory                                        |
| `-sh`            | Shows the size of the specified sub-directory                                             |
| `--max-depth=N`  | Shows the sub-directories up to depth N, where N is a number representing the max depth   |
| `--all`          | Writes counts for all files, not just directories                                         |
| `--help`         | Displays all other options for the `du` command                                           |

Example usage of `du` command:

<Tabs>
<TabItem value="du example" label="example">

```
du -h -s <directory name>
```
</TabItem>

<TabItem value="du output" label="output">

```
35G     <directory name>
```
</TabItem>
</Tabs>

:::warning
Users who submit jobs to MERCED and use the unified storage are expecting slower network communications. 
- Home - Shared over 10G network from Pinnacles to Merced, connected over IB on pinnacles. 
- Data - Shared over 10G network from Pinnacles to Merced, connected over IB on pinnacles. 
- Scratch - Shared over 10G network from Pinnacles to Merced, connected over IB on pinnacles

The `scratch` folder is purged periodically when the overall system storage reaches 85% of capacity or higher. Please back-up your data to somewhere safe frequently.

Please avoid writing files directly to `/tmp` on the head node, as this can fill up disk space and cause issues for all users. Instead, use your personal scratch directory for temporary files. Some programs may default to using `/tmp`, so ensure that the appropriate scratch directory is properly configured for your code.
:::

:::note
Disclaimer: Users are responsible for backing up all data stored on the clusters and are fully accountable for its availability. CIRT is not liable for any data loss in the event of accidents
:::

## Borgstore (BeeGFS)

Borgstore is UC Merced's on campus data-storage center and is available for research PI to purchase. Borgstore is used for store active,research-related data and has the use capacity of 480 terrabytes.

Borgstore is also made up of a metadata server with a `1U dual Xeon Skylake SP`, `8x 2.5" Hotswap`, `24 DIMM Sockets`, `IPMI`, `dual 10GbE-T base system` and `8x 3.2TB Endurance Data Center PCIe NVMe 2.5`.Solid State Drive metadata storage

Borgstore is now accessible on all nodes (MERCED and Pinnacles) with Infiniband (IB), all of the partitions contain a mixture of nodes of InfiniBand and non-InfiniBand nodes. If users want to submit jobs while at the Borgstore folder, the slurm option of #SBATCH --constraint=ib should be added to the job script. Example job script can be found here. More information pertaining to Borgstore can be found here

:::warning
Borgstore does not do data backups. Users are responsible for ensuring they have backups of thier data and work.
:::
### Request Borgstore
Borgstore is a purchasable service that can be requested [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4). Cost for active data storage is shown below. More information can be found [here](https://it.ucmerced.edu/Research-Computing-Services).
| Startup funds           |Non-startup funds                                                                               |
|------------------|------------------|
| $0.05/GB/year       |   $0.06/GB/year   |

### Accessing Data from Borgstore for a job
To access data that is located in Borgstore the user must be in the Borgstore folder/directory and must the submit job to the scheduler from this location. If users want to submit jobs while at the Borgstore folder, the slurm option of `#SBATCH --constraint=ib` should be added to the job script. 

To run an interactive job, the job must also be ran from the borgstore directory.

### Common questions about Borgstore
