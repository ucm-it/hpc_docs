---
title: hidden
sidebar_position: 2
unlisted: true
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 01/07/2026
  author: Yue Yu
---

# Intermediate High Performance computing (HPC): Optimization and Scaling
import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { useEffect } from 'react';

This intermediate training is designed for users who are already comfortable with the Linux command line and basic job submissions but need to optimize their workflows for performance, efficiency, and scalability. This is intended for users who have a material level equivalence of the `Introduction to High Performance Computing` course.

1. Advanced Job Scheduling with Slurm
Moving past basic `sbatch` scripts, and we will focus on efficiency

### Looping wrapper
Due to the script QOS policy. On our cluster every individual task in an job array will be treated as a separate submission task, therefore, the job array will be limited by the max number of jobs allowed in a queue. The work around for this will be Sequential Wrapper or Task Farming. 

```bash
#!/bin/bash
#SBATCH --job-name=serial_loop
#SBATCH --partition=test
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --time=01:00:00  # Make sure this is long enough for ALL tasks

# Instead of --array, we use a standard bash loop
for i in {1..100}
do
   echo "Running task index $i"
   # Run your program. 
   # IMPORTANT: Do not use '&' unless you want them to run at the same time
   python simulation.py --input_id $i
done
```
This method treats the cluster like a single, very powerful computer. It runs your tasks in a "queue of one."

_Pros:_ Very low memory usage; easy to debug because logs are chronological.

_Cons:_ Extremely slow. It does not utilize the multi-core nature of a modern HPC node.

Efficiency: If 1 task takes 1 hour, 100 tasks take 100 hours.

```bash
#!/bin/bash
#SBATCH --job-name=task_farm
#SBATCH --partition=test
#SBATCH --nodes=1
#SBATCH --ntasks=4       # Request 4 cores
#SBATCH --cpus-per-task=1
#SBATCH --time=01:00:00

# Run 4 tasks at once, wait for them, then run the next 4
for i in {1..100..4}
do
   python simulation.py --id $i &
   python simulation.py --id $((i+1)) &
   python simulation.py --id $((i+2)) &
   python simulation.py --id $((i+3)) &
   wait # This waits for this batch of 4 to finish before looping
done
```
This method takes advantage of the fact that a single "Job" can request multiple CPUs (cores). By using the "&" (background) operator and the `wait` command, you turn your script into a mini-scheduler.

_Pros:_ significantly faster (e.g., 4x faster if you have 4 cores).

_Cons:_ You must ensure the node has enough RAM to support 4 instances of your program running at once.

Efficiency: If 1 task takes 1 hour, 100 tasks on 4 cores take approximately 25 hours.