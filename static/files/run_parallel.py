#!/usr/bin/env python3
"""
run_parallel.py - Parallel demo simulation script for HPC training
Usage: python run_parallel.py <task_id> [num_workers]

Simulates a parameter sweep by computing the sum of squares and finding
primes across a range of numbers determined by the task ID.
The work is split across multiple CPU cores using multiprocessing.
Default number of workers is read from SLURM_CPUS_PER_TASK, falling back to 10.
"""

import sys
import time
import math
import os
from multiprocessing import Pool

def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(math.sqrt(n)) + 1):
        if n % d == 0:
            return False
    return True

def process_chunk(args):
    """Process a chunk of numbers: compute sum of squares and find primes."""
    chunk_start, chunk_end, task_id, chunk_id = args
    partial_sum = sum(i * i for i in range(chunk_start, chunk_end))
    primes = [i for i in range(chunk_start, chunk_end) if is_prime(i)]
    return partial_sum, len(primes)

def simulate(task_id, num_workers):
    start = task_id * 10000
    end   = start + 10000

    print(f"[Task {task_id:02d}] PID {os.getpid()} starting — range [{start}, {end}) — using {num_workers} workers")
    sys.stdout.flush()

    # Split range into equal chunks, one per worker
    chunk_size = (end - start) // num_workers
    chunks = [
        (start + i * chunk_size,
         start + (i + 1) * chunk_size if i < num_workers - 1 else end,
         task_id,
         i)
        for i in range(num_workers)
    ]

    t0 = time.time()
    with Pool(processes=num_workers) as pool:
        results = pool.map(process_chunk, chunks)

    total_sum    = sum(r[0] for r in results)
    total_primes = sum(r[1] for r in results)
    elapsed      = time.time() - t0

    print(f"[Task {task_id:02d}] Done in {elapsed:.2f}s — sum={total_sum:,}  primes_found={total_primes}  workers={num_workers}")
    sys.stdout.flush()

    return total_sum

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python run_parallel.py <task_id> [num_workers]")
        sys.exit(1)

    task_id = int(sys.argv[1])

    # Use command-line arg, else SLURM_CPUS_PER_TASK, else default to 10
    if len(sys.argv) >= 3:
        num_workers = int(sys.argv[2])
    else:
        num_workers = int(os.environ.get("SLURM_CPUS_PER_TASK", 10))

    simulate(task_id, num_workers)
