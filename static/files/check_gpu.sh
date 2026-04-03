#!/bin/bash
echo "=== Available GPUs on Pinnacles ==="
echo ""

# Get all partition names, strip trailing whitespace and default marker (*), exclude pi.* and dept.* and grp.*
partitions=$(sinfo --Format=Partition --noheader | tr -d '* ' | sort -u | grep -v '^pi\.' | tr '\n' ',')
partitions=${partitions%,}  # remove trailing comma

# Get GPU node info across all public partitions, with wide columns to avoid truncation
sinfo -p "$partitions" --Format=Partition:30,NodeList:100,Gres:80,GresUsed:80,StateCompact:15 --noheader | \
while IFS= read -r line; do

    partition=$(echo "$line" | awk '{print $1}')
    nodes=$(echo "$line" | awk '{print $2}')
    gres=$(echo "$line" | awk '{print $3}')
    gres_used=$(echo "$line" | awk '{print $4}')
    state=$(echo "$line" | awk '{print $5}')

    # Skip nodes with no GPU GRES
    if ! echo "$gres" | grep -q 'gpu:'; then
        continue
    fi

    # Match idle or mix states, including draining variants (idle-, mix-)
    if [[ ! "$state" =~ ^(idle|mix) ]]; then
        continue
    fi

    # Extract GPU type and total count  e.g. gpu:a100:2
    gpu_type=$(echo "$gres" | grep -oP 'gpu:[^:]+:[0-9]+' | head -1)
    total=$(echo "$gpu_type" | grep -oP '[0-9]+$')
    type=$(echo "$gpu_type" | grep -oP 'gpu:\K[^:]+')

    # Extract used GPU count  e.g. gpu:a100:1(IDX:0)
    used=$(echo "$gres_used" | grep -oP 'gpu:[^:]+:\K[0-9]+' | head -1)
    used=${used:-0}

    # Calculate free GPUs
    free=$((total - used))

    if [[ $free -gt 0 ]]; then
        echo "  Partition: $partition"
        echo "  Node: $nodes"
        echo "  Type: $type"
        echo "  Free: $free / $total GPUs"
        echo "  State: $state"
        echo ""
    fi
done
