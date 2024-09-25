---
title: Campus Clusters
sidebar_position: 1
---

import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Currently, UC, Merced has two clusters on site. They are maintained by the [CIRT](https://it.ucmerced.edu/Research-Computing-People) team. If you have any questions, feel free to contact us [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).


<Tabs>
  
  <TabItem value="MERCED" label="MERCED" default>
     :::note
      The MERCED (Multi-Environment Research Computer for Exploration and Discovery) Cluster is a 1,872-core, Linux-based high-performance computing system. MERCED operates on a <Tag color="#3399ff">Recharge</Tag> model, meaning users are billed per core-hour of usage. Further details on the recharge process can be found below. To apply for a MERCED account, users must have a Chart of Account (COA) number ready.
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
    The NSF-MRI funded Pinnacles cluster located in the server facility (see Research Facility below) is available for all faculty projects at <Tag color="#008000">NO COST</Tag>! The Pinnacles cluster is equipped with the latest generation Intel Xeon Gold 6330 CPUs and NVIDIA Tesla A100 v4 40GB HBM2 GPUs. It operates on the RedHat operating system.
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



Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`



## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
