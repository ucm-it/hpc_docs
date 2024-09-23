---
sidebar_position: 1
---

import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Campus clusters

> Currently, UC, Merced has two clusters on site. They are maintained by the [CIRT](https://it.ucmerced.edu/Research-Computing-People) team. If you have any questions, feel free to contact us [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4).


<Tabs>
  
  <TabItem value="MERCED" label="MERCED" default>
     :::note
      MERCED (Multi-Environment Research Computer for Exploration and Discovery) Cluster is a 1,872 core Linux based high performance computing cluster. MERCED cluster running on <Tag color="#3399ff">Recharge</Tag> model which means users need to pay per core-hour usage. More details on the recharge information can be found below. 
     :::

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
    The NSF-MRI funded Pinnacles cluster is available for all faculty projects at no cost! Pinnacles cluster features newer generation of Intel Xeon Gold 6330 CPU processors and NVIDIA Tesla A100 v4 40GB HBM2 GPUs. The Pinnacles cluster runs with the RedHat operating system.
    :::
  </TabItem>
 
</Tabs>

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Welcome to UC Merced
A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).


## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
