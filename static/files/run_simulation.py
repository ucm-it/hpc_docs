#!/usr/bin/env python3
"""
run_simulation.py - Demo simulation script for HPC training
Usage: python run_simulation.py <task_id>

Simulates a parameter sweep by computing the sum of squares
for a range of numbers determined by the task ID.
Each task takes a few seconds so students can observe parallelism.
"""

import sys
import time
import math
import os

def simulate(task_id):
    # Each task uses a different "parameter" based on its ID
    start = task_id * 1000
    end   = start + 1000

    print(f"[Task {task_id:02d}] PID {os.getpid()} starting — computing sum of squares from {start} to {end}")
    sys.stdout.flush()

    # Simulate computation time (scaled slightly by task_id so tasks finish at different times)
    time.sleep(100 + (task_id % 4) * 10)

    # Simple computation: sum of squares
    result = sum(i * i for i in range(start, end))

    # Simulate a bit more work (finding primes in range)
    primes = [i for i in range(start, end) if i > 1 and all(i % d != 0 for d in range(2, int(math.sqrt(i)) + 1))]

    print(f"[Task {task_id:02d}] Done — sum={result:,}  primes_found={len(primes)}")
    sys.stdout.flush()

    return result

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python run_simulation.py <task_id>")
        sys.exit(1)

    task_id = int(sys.argv[1])
    simulate(task_id)