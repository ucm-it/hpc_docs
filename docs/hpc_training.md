<!-- {docsify-ignore-all} -->
## The training material for "Introduction to HPC" workshop can be found below  <!-- {docsify-ignore} -->
```pdf
training_material/10_9HPCSlides_Self.pdf
```
## Practice session details   <!-- {docsify-ignore} -->
- Copy two folders to your desired directory once you log into our remote machine (Pinnacles)

```
cp -r /home/yyu49/hpc_training/script/serial .
cp -r /home/yyu49/hpc_training/script/parallel .
```
- Go to `serial` folder.

```
cd serial
ls 
```

- Under the folder you can find two files, one python script named `python_tes1.py` the other named `test_ 1task.sh`.

    - Now let's look at the files a bit closer. 

    - Review `python_test1.py` with a text editor of your choice vim, nano, or Emacs. 
    ```
    ls 
    # open the 'python_test1.py' file with text editor of your choice.
    # close when finished looking over. 

    ```

- Review the information and structure of `test_1task.sh` 
> Important to take a note of all the different aspects of the script and all the comments in the bash script. Slurm Batch scripting starts with `#SBATCH`. Comments just start with `#` 

- Now submit `test_1task.sh` script from the serial folder

``` 
sbatch test_1task.sh
squeue --me  #this command is to check your job status
```

- `squeue --me` allows user to get jobID as well as other key information about the job information that user just submitted. 
Also you can see by using `ls` when the standard output file is placed in the directory. This is a sign that the job finished, regardless of whether the job completed succesfully or failed. 

> This completes the `serial` section of this workshop. Lets start the parallel section of this workshop!

- Go to `parallel` folder

```
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

?> Remove **#SBATCH --reservation=......** line, when running sample script outside of workshops. 

>Now submit this job script.
``` 
sbatch test_2tasks.sh
squeue --me 
```
Continue to check by using `squeue --me` to see the status of the job submission 
Also you can see by using `ls` to see when the `.stdout` file is placed in the directory. This is a sign that the job finished, regardless of whether the job completed succesfully or failed. 
>This concludes the Practice Session Workshop

## Additional Practice Material


### MPI Tutorial <!-- {docsify-ignore} -->

Under the `MPI` folder there are two files:
1. `mpi_ex.cpp`: A C++ MPI Sample Script that demonstrates the effeciency of parallelization using MPI. 

It makes use of the MPI to partition a long vector(array) full of random numbers. Using MPI we can make use of the scatter, and reduce operations to send each process a unique partition or portion of the array to compute the sum of their portion of the array. Then when all processes are done computing their local sum, we use reduce to gather all of the local sums and add them all together to get the global sum. 

2. `parallel_mpi.bash` A SLURM submission script that executes the selected MPI example. It also includes dependencies and loads the neccessary modules to run the MPI script successfully. 




#### C++ MPI Script Walkthrough <!-- {docsify-ignore} -->

``` cpp
#include <mpi.h> // MPI header file to support MPI operations
#include <iostream> // Input/output stream package
#include <vector> // Package that supports linear storage of elements such as storage with other builtin functions
#include <cstdlib> // Used for random number generation
#include <numeric> // Package used for math functions such as accumulate


//Using the standard namespace to avoid having to use std:: before standard functions
using namespace std;

int main(int argc, char** argv) {
    //Initialize the MPI execution environment
    MPI_Init(&argc, &argv);


    //rank will hold the rank or process ID given out by the MPI_Comm_rank. Each process gets unique rank.
    int rank; // Rank of the process
    MPI_Comm_rank(MPI_COMM_WORLD, &rank); // Get the rank of the process and store it in the variable - rank

    int processes; // Total number of processes
    MPI_Comm_size(MPI_COMM_WORLD, &processes); // Get the total number of processes and store it in the variable - processes


    int vecSize = 10; //holds the length of the vector

    int local_sum; // local_sum holds the sum in each process locally

    int global_sum;  //global_sum holds the sum that will computed in the end from all the local_sum among the process

    vector<int> global_data(vecSize); // Vector to hold the global data of size vecSize

    // Calculate the size of each partition of the array that will be distributed to each process
    int partition_size = vecSize / processes;

     // Declare a vector to hold the local data for each process
    vector<int> local_data(partition_size);

    // The root process(rank 0) initializes the global_data vector with random integers
    if (rank == 0) {
        for (int i = 0; i < vecSize; i++) {
            // Generate random integers between 0 and 99
            global_data[i] = rand() % 100;
        }
    }

    // Scatter the global_data vector to all processes
    MPI_Scatter(global_data.data(), // Send buffer (data to be scattered)
     partition_size, // Send count (number of elements to send to each process)
     MPI_INT, // Send type (type of data being sent)
     local_data.data(),// Receive buffer (where the data will be received) 
     partition_size, // Receive count (number of elements to receive)
      MPI_INT, // Receive type (type of data being received)
       0, // Root process (process that is sending the data)
       MPI_COMM_WORLD); // Communicator (group of processes that can communicate)



    local_sum = std::accumulate(local_data.begin(), local_data.end(), 0); // Calculate the sum of the local data using 
    //the accumulate function imported from the numeric library

    MPI_Barrier(MPI_COMM_WORLD); // Synchronize all processes before proceeding
    //(i.e. wait for all processes to reach this point)

    // Reduce the local sums to the global sum in the root process
    MPI_Reduce(&local_sum, // Local data to be reduced
    &global_sum, // global_sum will hold the reduced data
    1, // Number of elements to reduce(in this case, it is just one integer value)
    MPI_INT, // Data type of the elements
    MPI_SUM, // reduction operation will be a summation operation
    0, // Root process that will receive the reduced data
    MPI_COMM_WORLD); // Communicator (group of processes that can communicate)

    // Output the global sum in the root process(rank 0)
    if (rank == 0) {
        cout << "The overall Sum is " << global_sum << endl;
       // for(int i = 0; i < vecSize; i++){
        //        cout << "At index "<< i << "The value is " <<  global_data[i] << endl;
        //}
    }
    // Finalize the MPI execution environment
    MPI_Finalize();
    return 0;

    //Final Note: This MPI script may complete extremely fast even with greater vector sizes 
    //however the conceptual demonstration of the advantages of MPI is universal as the use of parallelization
    //can drasticaly improve the running time when having to compute or work with other data types such as in machine learning. 
```




#### SLURM MPI Script Walkthrough <!-- {docsify-ignore} --> 

``` bash

#!/bin/bash
#SBATCH --nodes=1  #asked for 1 node
#SBATCH --ntasks=20 #asked for 20 cores
#SBATCH --partition test  #this job will submit to test partition
#SBATCH --mem=96G  #Asks for 96G of total memory
#SBATCH --time=0-00:15:00 # 15 minutes
#SBATCH --output=test1.qlog  #the output information will put into test1.qlog file
#SBATCH --job-name=mpitest  #the job name
#SBATCH --export=ALL

whoami
module load openmpi



#We first begin with compiling the mpi_ex.cpp file using the mpic++ compiler 
#and using -o we explicitly state our output, executable name as ccexample
mpic++ -o ccexample mpi_ex.cpp

#Then we execute the binary using mpiexec allowing for  the launching of multiple instances of the program across different processes.
# We are stating how many processes by -np
# each worker will be a CPU core
mpiexec -n 20 ./ccexample


``` 

Now proceed with submitting the job via `sbatch`

Once the job has been submitted and successful, you should recieve a output in `test1.qlog` file similar to the output below 

``` bash
avilla49
The overall Sum is 567

```
!> The number outputted as the sum may vary as we use random numbers!
This concludes the MPI Script and Job Tutorial!
### Java Tutorial <!-- {docsify-ignore} --> 

Below is the sample Java script that we will be running. This script is a simple program that produces an output of "Hello World." 
``` java
public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
    }
}
```
>Remember to use `SCP Command` to transfer Java files to the remote cluster account. [Here](office_hour.md) is a tutorial on how to use SCP to transfer files/directories!

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

### submit a Java job <!-- {docsify-ignore} -->
you can submit the Job using 'Sbatch [Name of Job submission file]'
>Use 'squeue --me' to find key information about the job's state currently. If there is no information being presented then the job is finished.

Let's take a look at the results of the job. If the job was successful you will get two new files under your current directory. There will now be a `Filename.class` & `Filename.qlog`.
> The `.class` file is created automatically when we run the job if there is no pre-existing class file being used to run the Java script. In the automatically created `.class` file there is only computer-readable information so we can leave this file alone. 
The more important file is the `.qlog` file which will be holding the produced output of the Java script. For example, the `.qlog` file will be holding "Hello World!" which was being produced by our sample Java script. It is important to note that if the anticipated output is NOT produced the `.qlog` file will also hold the java errors, if any, that were produced.

This concludes the Java Practice Section!





