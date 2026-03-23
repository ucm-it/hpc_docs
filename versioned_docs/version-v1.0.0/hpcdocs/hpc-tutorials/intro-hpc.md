---
title: Introduction to HPC Workshop
sidebar_position: 2
---

## The training material for "Introduction to HPC" workshop can be found below 

<iframe src="https://drive.google.com/file/d/1Aq5ocpDmf9tOc2v0BsXZyV16ZlRXBMa2/preview" width="860" height="580" allow="autoplay"></iframe>
## Practice session details   
- Copy two folders to your desired directory once you log into our remote machine (Pinnacles)

```bash 
cp -r /home/yyu49/hpc_training/script/serial .
cp -r /home/yyu49/hpc_training/script/parallel .
```
- Go to `serial` folder.

```bash
cd serial
ls 
```

- Under the folder you can find two files, one python script named `python_tes1.py` the other named `test_ 1task.sh`.

    - Now let's look at the files a bit closer. 

    - Review `python_test1.py` with a text editor of your choice vim, nano, or Emacs. 
    ```
    ls 
    # open the `python_test1.py` file with text editor of your choice.
    # close when finished looking over. 

    ```

- Review the information and structure of `test_1task.sh` 
> Important to take a note of all the different aspects of the script and all the comments in the bash script. Slurm Batch scripting starts with `#SBATCH`. Comments just start with `#` 

:::warning
Remove `#SBATCH --reservation=......` line, when running sample script outside of workshops. 
:::
- Now submit `test_1task.sh` script from the serial folder

``` bash
sbatch test_1task.sh
squeue --me  #this command is to check your job status
```

- `squeue --me` allows user to get jobID as well as other key information about the job information that user just submitted. 
Also you can see by using `ls` when the standard output file is placed in the directory. This is a sign that the job finished, regardless of whether the job completed succesfully or failed. 

> This completes the `serial` section of this workshop. Lets start the parallel section of this workshop!

- Go to `parallel` folder

```bash
cd parallel 
``` 
 
- Under the `parallel` folder there will be seven files. Open `python_parallel1.py` 
    - Review `python_parallel1.py`
    -The script simply writes out a line to anther file
    -Close the script
    -`python_parallel2.py`  & `python_parallel3.py` are similar to  `python_parallel1.py`.  

- Now look at the job submission script under the parallel folder. Open `test_2tasks.sh`.
- Review the script and take note of the key differences **Remember** this is a parallel job script. Below is the description of each line in the `test_2tasks.sh` file

```
- We are asking for 1 node 
- We are stating in the next line that we want to use 3 cores of the node. 
- We are also placing this submission on the test queue 
- Max time we are giving this job is 15 minutes 
    - This is important and will vary depending on how big your script and calulations you anticpate to be. 
- Once the job is done running we are allocating the output to go under a file(s) that we create on line 7 
- The memory we are allocating(since this job is small) will be 5G. This line will vary by the needs of the user. Place 0 here if you want to access entire node memory
- We finally name this job 
- Export all, allows the job run on all of the user's loaded environment(if user does load one, otherwise will just run job on clean working enviroment)
Toward the bottom of the shell script we now begin the for-loop to run through the files. This is the code that is desired to be executed for this job submission.
```

?> Remove `#SBATCH --reservation=......` line, when running sample script outside of workshops. 

>Now submit this job script.
``` 
sbatch test_2tasks.sh
squeue --me 
```
Continue to check by using `squeue --me` to see the status of the job submission 
Also you can see by using `ls` to see when the `.stdout` file is placed in the directory. This is a sign that the job finished, regardless of whether the job completed succesfully or failed. 
>This concludes the Practice Session Workshop

## Additional Practice Material
### Java Tutorial 

Below is the sample Java script that we will be running. This script is a simple program that produces an output of "Hello World." 
``` java
public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
    }
}
```
>Remember to use `SCP Command` to transfer Java files to the remote cluster account. [Here](./OH.md) is a tutorial on how to use SCP to transfer files/directories!

**NOTE: As per usual, the File name of the script must match with the Class name. This sample file shown above is named `App.java`.**

Review the sample job submission script below and take note of any comments. 
```  batch
#!/bin/bash
#SBATCH --nodes=1  
#SBATCH --ntasks=1
#SBATCH --partition test    #This partition can be changed from the user to best accommodate their compute needs
#SBATCH --mem=1G   
#SBATCH --time=0-00:15:00 # 15 minute
#SBATCH --output=Appout.qlog    #Here it is important to name the output/qlog file something a little more specific as there will be other files produced when the code is finished
#SBATCH --job-name=javatest     #Name of job
#SBATCH --export=ALL    

module load openjdk/17.0.5_8    #NOTE: This line is required otherwise the necessary modules to run Java will not be imported and the Job will fail. 
# Also ensure that the most current version of openjdk that is installed on Pinnacles is being used. 
javac App.java  #This line Compiles the code. Note: Replace 'App.java' with the file name of your Java script including the '.java'
java App    #This line will execute the java program. Note: Replace 'App' with the name of your Java script excluding the '.java'
```
The name of the sample job script shown above is `javajob.bat`. This file is of Batch script file type. Users can also use `.sub` files to submit jobs.

### Submit a Java Job <!-- {docsify-ignore} -->
You can submit a job using `sbatch [Name of Job submission file]`
>Use 'squeue --me' to find key information about the job's state currently. If there is no information being presented then the job is finished.

Let's take a look at the results of the job. If the job was successful you will get two new files under your current directory:
1.  `Filename.class` 

	The `.class` file is created automatically by Java if it detects no pre-existing class file. This file contains content that is computer only readable. 
2.  `Filename.qlog`

	The produced output of the Java script will be in the `.qlog` file.  For example, the `.qlog` file will store "Hello World!" which was produced by our sample Java program. Errors produced by the program or SLURM will also be stored in our `.qlog` file.

This concludes the Java Practice Section!
