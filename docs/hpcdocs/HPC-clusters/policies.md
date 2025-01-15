---
title: University Policies and HPC Guidelines
sidebar_position: 1
---
**Created by Yue Yu, May 2022**

import Highlight from '@site/src/components/Highlight';


## University policies
1. All PIs must fill and sign the export control [form](https://ucmerced.box.com/s/zvptfc8adbdzt4xs8kcj73lyretyn692) before using clusters (MERCED and Pinnacles).
2. All users are responsible for following University of California's "[Electronic Communication Policy](https://it.ucmerced.edu/sites/it.ucmerced.edu/files/wp-content/uploads/2017/11/acceptable-use-policy.pdf)" related to computing and electronics. These include but not limited to tolerance, civility, and respect for diversity of background, gender, ethnicity, race, religion, political beliefs, sexual orientation, and physical abilities. For more policies and guidelines, please visit [here](https://it.ucmerced.edu/oit-policies-guidelines).


## Appropriate Use Policy 
1. CIRT-managed resources and services should only be for __research purposes ONLY__. Any user that is found to be using computing resources for non-research related purposes, such as, but not limited to __crypto-mining__, __blockchain__ or other illegal or illicit purposes will result in __immediate__ termination of all jobs, deactivation of account, PI notification and in accordance with all Univeristy Policies that apply.  
2. It is important for all users to always be aware and knowledgeable about what data and information is being placed onto CIRT-managed clusters(i.e. MERCED & Pinnacles). P3/P4-level sensitive research data hosting is not supported on campus-wide clusters(i.e. MERCED & Pinnacles). 
3. The use of the clusters to store, manipulate and/or remotely access classified or improperly obtained data and information is __prohibited__.
4. Users are not permitted to try and bypass login or gain access to information or usage that is not granted to them. 
5. Never infringe upon someone else's copyright or plagerize someone else's intellectual property.  



## User Guidelines 
1. All Users and PIs requesting an account must have a filled out  export control [form](https://ucmerced.app.box.com/s/e6pmv4cv59tz76aat5re1kzvg23c0s09), as stated before, and follow the steps outlined [here](campus-clusters#how-to-request-an-account). 
2. Do not share accounts or passwords with others. 
3. Computing resources cannot be used for commercial, monetary purposes or personal gain. 
   

## Cluster jobs Guidelines
- Definition of a cluuster job: Any computing process or program should be submitted via the SLURM job submission process. 

1. Cluster jobs must be ran on compute nodes. Running intense processes and any intense programs on login nodes is prohibited, and any jobs/processes that impact the performance or functions of the login nodes or interfere with other users will be terminated and an email will be sent to the user and their PI notifying cluster usage best practices and policy. **CIRT offers “Introduction to HPC” training sessions for new HPC users. Schedule [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4)** New Users can also look at the "Introduction to HPC" Training Material [here](../hpc-tutorials/intro-hpc.mdx!


## Quotas and storage Guidelines
1. Data quotas for MERCED and Pinnacles are managed by CIRT. Users should note that storage provided by CIRT is for research data only.  P3/P4-level sensitive research data hosting is __not__ supported on the campus-wide clusters(i.e. MERCED & Pinnacles). More information about the different data classification levels & usage can be found [here](https://it.ucmerced.edu/uc-merced-data-usage-guide). __Users are responsible for ensuring and completing backups of their data.__

2. While CIRT makes great efforts to maintain the availability and integrity of our storage products, users should keep in mind that no data stored on our managed servers has historical backups. Some data servers offer "snapshots" that allow retrieval of changed or deleted data within the snapshot window, but this is not guaranteed. Data on the beegfs based file system does **not** have the capability for snapshots.

3. Scratch folders on both clusters are valid only when `clusterstorage` is less than 80% full, and files will be automatically deleted when `clusterstorage` reaches the 80% space usage. It is recommended that when a batch job has completed, user should transfer the output files to somewhere safe from the `scratch` folder. 


## Software and Services
1. Software on clusters should directly support research/learning. Users are generally not restricted from downloading/compiling software under their own `HOME` directory for use in research or teaching. Users are responsible for the software they installed or compiled.
2. Users choosing to self-install software have the responsibility to use them from trustworthy sources. These might include common community repositories such as CRAN, CPAN, PyPy, and Anaconda; community-acceptable applications; or known-to-the-user software packages. Users should avoid downloading pre-compiled binaries or containers from unknown sources.
3. Requesting CIRT to install/compile software. Users may request CIRT to build/install software in system for community use. **CIRT does not have the people resources to accept all requests and must prioritize**. CIRT can also deny software installation request that is not suitable for the environment. For software installation request, please submit a ticket [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=b83ee9ff1b67a0543a003112cd4bcbde&form_id=0cb3dca04f7d4300b52ba1618110c7ff)
4. There is no guarantee of long-term maintenance for specific software or services. System-wide software installations, security concerns, and new patches contribute to the system's evolution over time. These changes may result in specific software or services becoming unsupportable. If this occurs, the corresponding software or service will be removed from the infrastructure.
