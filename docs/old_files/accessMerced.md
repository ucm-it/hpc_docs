## Secure shell (SSH)
The standard method for connecting to MERCED is by Secure Shell `ssh`
commands. Once you've requested an account you will be provided with
your password. However, you will have to change your password on first login.

You can request for your account to have access to Jupyter and the
JupyterHub instance for access via a web-browser.

## Terminal application
On Mac and Linux you can use the built-in terminal application; on
Windows you can use
[WSL](https://docs.microsoft.com/en-us/windows/wsl/install) or [Moba
XTERM](https://mobaxterm.mobatek.net/) to open a terminal, and type the
following command, but replace `<username>` to your UCMID.
```bash
ssh <username>@merced.ucmerced.edu
```
Using `ssh` to connect to MERCED places a user on the login node. __Do not run computationally intensive processes on the login node__. File preparation/editing, compiling, simple analyses, and other low computational cost activities are appropriate on the login node, but, again, other types of work should be submitted to the cluster via the available queue system. Users may also connect to MERCED using an x-terminal to spawn graphics based programs such as gnuplot, gimp, _etc_. For more information using x-terminals for such uses, contact the MERCED system administration team.

## File systems
In the following, we will assume you have some familiarity with linux; if you do not, feel free to book a consultation with the IT team, but a lot of resources are available on the internet.

After login in on the merced cluster you can run `ls` command
to see the available content:
```bash
$ ls
data scratch
```
Once user login to MERCED,there are 2 folders (`data` and `scratch`) locate in `HOME` that user will start with.

|Folder|space|
|--|--|
|`/home/<UCMID>/data`|256G|
|`/home/<UCMID>/scratch`|512G|
|`/home/<UCMID>/`|20G|


* Store in `data`, all that is research grade data that need to be backed-up and safe.
* Put in `scratch`, everything that is temporary; all files older than
__30 days__ are removed from scratch. Use it as for jobs checkpoints or
similar. Be sure to **not** leave any data that's of long-term importance to you under `scratch`.

!>The `scratch` folder is purged periodically when the overall system storage reaches 85% of capacity or higher. Please back-up your data to somewhere safe frequently.

There are also secondary file systems attached to MERCED that are associated with particular research groups or departments.

|Folder|space|
|--|--|
|`/qsb/<UCMID>/`|256G|
|`/home/<UCMID>/medusozoa`|Determined by PI|
|`/home/<UCMID>/conness`|Determined by PI|
|`/home/<UCMID>/branchinecta`|Determined by PI|

__Do not write files directly to `/tmp` on the head node__, as this may fill up disk space on the head node and cause trouble for everyone. Instead, use your own scratch directory for temporary files. Some codes may use `/tmp` by default and need to have the appropriate scratch directory configured.

## Borgstore (BeeGFS)
Borgstore is only available on nodes with Infiniband, all of the partitions contain a mixture of nodes of InfiniBand and non-InfiniBand nodes. If users want to submit jobs while at the Borgstore folder, the slurm option of `#SBATCH --constraint=ib` should be added to the job script. Example job script can be found [here](running_jobs.md). 

