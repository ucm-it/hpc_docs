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

## Advanced Job Scheduling with Slurm
The two methods listed below allow you to submit multiple jobs simultaneously without using job arrays. While both achieve multiple jobs execution, they rely on different technical concepts and result in different completion times. Users should evaluate which method best aligns with their specific workflow requirements.
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
This method processes your jobs sequentially, executing tasks within a 'queue of one.' By running jobs one after another rather than in parallel, it minimizes resource contention but significantly increases the total time to completion.

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

## Finding Your "Sweet Spot": A Guide to HPC Scaling
One of the most common misconceptions in HPC is that doubling the number of cores will halve the time it takes to finish a job. In reality, efficiency often drops as you scale up. This guide will help you understand how to find the "Sweet Spot"—the point where you get the most science done without wasting cluster resources

### Why "More" is not Always "Faster"
Every parallel program has two parts:

1. The Parallel Part: Tasks that can be split up (_e.g._, math on different parts of a matrix).

2. The Serial Part: Tasks that must happen one after another (_e.g._, reading an input file, starting the MPI environment, or gathering results).

As you add more cores, the Parallel Part gets faster, but the Serial Part stays the same. Eventually, the time spent on communication between cores (the "overhead") becomes larger than the time spent on actual calculation.
#### Amdahl's Law
This law defines the maximum speedup possible. If 10% of your code is serial, your job can never be more than 10x faster, no matter if you use 100 or 1000 cores.
#### Strong Scaling vs. Weak Scaling
| Type | What stays the same? |Goal|
| --- | --- |  ---|
|Strong Scaling | The total problem size (e.g., 1GB data) |   I want my current job to finish faster| 
|Weak Scaling | The problem size per core| I want to run a much larger simulation|
### How to Find the "Sweet Spot" (Step-by-Step)

To find the perfect scaling, you should run a Scaling Study before launching a massive production run.

1. The test run
   Run the same small test case on different number of cores, for example, 1,2,4,8,16,and 32 cores. Record the "wallclock time" for each

2. Calculate Efficiency 
   Use this formula below to see how much efficiency you actually get
   $$
   Efficiency = \frac{T_{serial}}{N \times T_N} \times 100\%
   $$
   - $T_{serial}$: Time taken on 1 core
   - $T_N$: Time taken on N cores
  
  The Rule of Thumb: If your efficiency drops below 70%, you have passed the sweet spot. You are now wasting cluster "Service Units" for very little gain.

### Script Example: Automating a scaling study

```bash
#!/bin/bash
# scaling_study.sh

# The problem size remains constant (Strong Scaling)
for CORES in 1 2 4 8 16 32
do
    echo "Submitting job for $CORES cores..."
    sbatch --ntasks=$CORES --nodes=1 --job-name=scale_$CORES --wrap="time ./my_simulation.sh"
done
```