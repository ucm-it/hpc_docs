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

    vector<int> global_data(arrSize); // Vector to hold the global data of size arrSize

    // Calculate the size of each partition of the array that will be distributed to each process
    int partition_size = arrSize / processes;
    
     // Declare a vector to hold the local data for each process
    vector<int> local_data(partition_size);

    // The root process(rank 0) initializes the global_data vector with random integers
    if (rank == 0) {
        for (int i = 0; i < arrSize; i++) {
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
       // for(int i = 0; i < arrSize; i++){
        //        cout << "At index "<< i << "The value is " <<  global_data[i] << endl;
        //}
    }
    // Finalize the MPI execution environment
    MPI_Finalize();
    return 0;
}