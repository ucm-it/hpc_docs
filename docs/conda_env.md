## Build your own conda environment <!-- {docsify-ignore} -->
### Load and initializing conda <!-- {docsify-ignore} -->
If you have not put the `conda init` into your `.bashrc` file, then it is necessary to initialize the conda environment before using. Once users log into the HPC system, you need to type the following command
```
module load anaconda3
conda init
```
!> Note: if you get a warning messages after `conda init` command, you need to log out the HPC system, and then log back in. You will then be able to initialize the system. Once the conda environment is initialized, you will see the environment name (default one is called `base`) next be listed next to your username in the command line. 

### Edit your `.condarc` file <!-- {docsify-ignore} -->
By default,  conda stores packages in the `HOME` directory. If you want to change the default path to somewhere you desire, for example `/data/$USER/`, you can use a text editor to create a file called `.condarc` under the path `/home/$USER/.condarc` and it should contain the path to the alternative location. 

e.g.:
```
pkgs_dirs:
 - /data/$USER/conda/pkgs
```
!> More `.condarc` examples can be found [here](https://conda.io/projects/conda/en/latest/user-guide/configuration/use-condarc.html)

### Installing and activating a `conda` environment <!-- {docsify-ignore} -->
To install `conda` environment, you can specify a prefix, which will be the path to where the environment will be installed. If you don't include `prefix`, the default path will be under your `HOME`.  Choose a descriptive name for the environment- Conda will create the directory, the directory should not already exist. For example, if you want to create a conda environment called `env_aaa` containing the packages `AAA, BBB, CCC`, and insatll it in the directory `/data/$USER/packages`, you can do following
```
conda create --prefix /data/$USER/packages/env_aaa AAA BBB CCC
```

To activate the environment, you can do:
```
conda activate /data/$USER/packages/env_aaa
```
If you are using the default package path, you do not need to include path to activate the environment, you can just do:
```
conda activate ENV_NAME
```

!> Note: user can also create a `YAML` file with all of the desired conda packages so that conda will find the correct configuration to solve the environment.