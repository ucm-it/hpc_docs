---
title: HPC Vocabulary and Terminology
sidebar_position: 1
---

In this section users can find important and technical vocabulary or "jargon" related to High-Performance Computing. This page will contain the term and it's definition.

:: Note
It is highly recommended that new HPC users familiarize themselves with the terminology as it will be vital for properly understanding computing resources.
::



### HPC Architecture Terminology  

| Term | Definition| 
|-------------------------|-------------------------------------------|
| High-Performance Computing (HPC) | A term that refers to a branch of computing that uses multiple computing resources or groups of computing resources to complete computations. HPC is much more powerful than regular computers (desktops & laptops), typically 100x more powerful. High-performance computing utilizes many computers acting as primary computing resource in the form of nodes to perform and process complex calculations at much higher speeds and scales. HPC typically is used for solving advanced and/or lengthy computational problems.|
| Cluster | A Cluster, a key part of a high-performance computer, is a collection of many inter-connected computers, known as a `node`. Typically an HPC system may have one or multiple clusters. |
| Node | Nodes are the processing power in a cluster. Many nodes make up a cluster. Nodes can either hold the CPU and GPU cores and one node can have many cores.| 
| Core | A core holds the CPU component. Multiple cores make up a node. | 
| Scheduler | A scheduler is what carries out the scheduling activity. Schedulers are often implemented to keep all computer resources busy (as in load balancing), allow multiple users to share system resources effectively, or to achieve a target quality of service. | 
| Job | A job is the delivery method of the instructions that users send to the Cluster(then to the nodes) to execute the calculations and computations the user desires. A job is a single workload script that is submitted to the scheduler and then placed in the proper queue. | 
| Queue | The queue is the process that jobs submitted will wait and then begin their workload on the proper allocated resources. | 
 Interconnect | The internal network that allows cluster nodes to communicate with one another. All nodes communicate over infiniband on Pinnacles. |
| Infiniband |  A channel-based fabric that facilitates high-speed communications between interconnected nodes. |


### Job submission Terminology  
| Term | Definition | 
|-------------------------|-------------------------------------------|
| Partition | Partitions is a group of nodes that typically have common hardware specs and are designed to excel at a certain of my performance. Users specify which partition they want their computations to run. As each partition holds different purposes. I.E. the `gpu` partition has GPU processors for computations that require gpu access. Each Partition has it's own proper queue in the scheduler. |
| Serial | Serial processing is a type of process that runs solely on __one__ node( or cpu processor) and can only run one task at a time | 
| Parallel | Parallel processing is a type of process that multiple tasks run at the same time across __many__ nodes( or cpu processors).|
| MPI | MPI ( Message Passing Interface) a standard that describes how information should be passed between nodes and tasks. MPI is a standard, not an implementation. MPI is best used on HPC architecture that is optimized for parallel computing such as having multi-threaded CPUs. Currently the CPUs on Merced and Pinnacles do not have multithreading activated. |

### Understanding a Serial vs Parallel Job 
The choice between serial and parallel job design and implementation is critical to the speed and efficiency of the job. Below is a table that covers each job type and it's respective use cases and advantages.

| Type | Use Cases | Advantages | 
| -------- | ---------- | ----------------------------- |
|Serial| Simple data processing and calculations.  | Simplicity, Executes Linearly, Resource Efficiency | 
| Parallel | Big Data Processing. Intense scientific simulations | Parallel jobs make efficient use of available hardware resources. One big task can be divided up and conquered by smaller, yet independently running sub-tasks. |