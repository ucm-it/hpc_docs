---
title: Creating assignments - Using ottergrader

sidebar_position: 8
---

<!-- ## Creating assignments - Using ottergrader -->

[Otter Grader](https://otter-grader.readthedocs.io/en/latest/) is a light-weight, modular open-source autograder developed by the Data Science Education Program at UC Berkeley. It is designed to grade Python and R assignments for classes at any scale by abstracting away the autograding internals in a way that is compatible with any instructor’s assignment distribution and collection pipeline.

The following steps explain how to create assignments/homework using [otter-grader](https://otter-grader.readthedocs.io/en/latest/) and Jupyterhub.

[Otter-Grader](https://otter-grader.readthedocs.io/en/latest/) parses a parent notebook containing questions, solutions, and tests to create two distribution directories: one with solutions and all tests for automatic grading and a second with no solutions and only public tests for students.

Before Creating assignments using otter-grader let’s understand the important concepts that will be helpful.There are three different types of cell formats in Jupyter Notebooks which are.
- Raw -→ This option will be used as plain text
- Markdown -→ It will be used to create the Markdown format text ex.Headers,Links,Images,text in a md format
- Code -→ When u change the cell type into code block, where we can write the Python or R code

![](../hpcdocs/HPC-clusters/imgs/cells.006.png)


### Assignment Config <!-- {docsify-ignore} -->

In addition to various command line arguments discussed below, Otter Assign also allows you to specify various assignment generation arguments in an assignment config cell. These are very similar to the question config cells described in the next section. Assignment config, included by convention as the first cell of the notebook, places YAML-formatted configurations in a **raw cell** that begins with the comment **# ASSIGNMENT CONFIG.**

- Example
```
# ASSIGNMENT CONFIG

  solutions\_pdf: true

  export\_cell:

  instructions: "These are some submission instructions."

  generate: 

  pdf: true

  filtering: true

  pagebreaks: true

  zips: false
 ```

For more information about **# ASSIGNMENT CONFIG** please refer the [documentation](https://otter-grader.readthedocs.io/en/v4.4.1/otter_assign/v1/notebook_format.html).

### Creating Questions <!-- {docsify-ignore} -->

- The questions always starts with #BEGIN QUESTION and ends with #END QUESTION in between those we can create solution and test cases for that question.The following syntax will explain the question,solution and test cases format

### Question Format <!-- {docsify-ignore} -->

```
#BEGIN QUESTION (**raw cell**)
name: q1
points: 5

 ```

**Question 1:** Write a function square that returns the square of its argument.(**markdown cell)**
- #BEGIN SOLUTION(**raw cell)**
- **Here we need to write the solution,which is typically a code(CODE cell)**
- #END SOLUTION**(raw cell)**
- **#**BEGIN TESTS**(raw cell)**
- **here we need to mention our test cases.Each test case will be on a seperate code cell**
- #END TESTS**(raw cell)**
- #END QUESTION(**raw cell**)

- The BEGIN QUESTION block contains the mandatory parameter name and two optional parameters, manual andpoints.
- Immediately after the question cell should be a solution cell.

Refer the following example

```
# BEGIN SOLUTION
def sieve(n):
    """
    Generate a set of prime numbers less than or equal to a positive integer.
    """
    # BEGIN SOLUTION
    is_prime = [True for _ in range(n + 1)]
    p = 2
    while p ** 2 <= n:
        if is_prime[p]:
            for i in range(p ** 2, n + 1, p):
                is_prime[i] = False
        p += 1

    is_prime[0]= False
    is_prime[1]= False

    return set(i for i in range(n + 1) if is_prime[i])
    # END SOLUTION
# END SOLUTION

```


- Using specially-formatted Python comments, otter-grader can parse the solution cell and replace lines with ellipsis or other user-defined prompts.

### Test Cases Format <!-- {docsify-ignore} -->

After the solution cell comes zero or more test cells, denoted by a beginning # BEGIN TESTS annotation, finishing with an ending # END TESTS annotation, and between these two lines functions that test the code. These functions’ names begin with test\_ and are marked as # HIDDEN if appropriate. The # IGNORE lines provide funcationality for the grader to call the test funcions appropriately.
```
# BEGIN TESTS

# BEGIN TESTS
def test_low_primes(sieve):
    assert sieve(1) == set()
    assert sieve(2) == {2}
    assert sieve(3) == {2, 3}

test_low_primes(sieve)  # IGNORE
# HIDDEN
def test_higher_primes(sieve):
    assert sieve(20) == {2, 3, 5, 7, 11, 13, 17, 19}
    assert sieve(100) == {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97}

test_higher_primes(sieve)  # IGNORE
# END TESTS
# END QUESTION
```


- To Understand more about Test Cases,Please refer this section from the documentation [TEST CASES](https://otter-grader.readthedocs.io/en/latest/test_files/python_format.html#sample-test)
- These cells will have their outputs parsed by otter-grader to generate the otter-formatted test files needed for autograding. The otter-grader docs [tutorial](https://otter-grader.readthedocs.io/en/latest/tutorial.html) describes how to call otter-grader to parse the notebook.
- Once you have run otter-grader, you’re ready to distribute your assignment to students! The studentsubdirectoy of your output directory will contain the version of the notebook for students (with solutions removed and only public tests) and the autograder subdirectory the version *with* solutions and hidden tests.
- For more information, check out the [otter-grader documentation](https://otter-grader.readthedocs.io/en/v4.4.1/).

The following Screenshot will give a clear understading of above syntax for creating questions,solutions and test cases

![](../hpcdocs/HPC-clusters/imgs/otterq&a007.png)

### Assignment examples <!-- {docsify-ignore} -->

- To see the full-fledged, Please refer to this Jupyternotebooks
- [Sample Notebook1](https://github.com/SaiUCM/Jupyterhub_Docs_Instructor/blob/main/Notebook1.ipynb),
- [Sample Notebook2](https://github.com/SaiUCM/Jupyterhub_Docs_Instructor/blob/main/Notebook2.ipynb)
- To understand more about creating questions, Please refer to this section in the document [Autograded Questions](https://otter-grader.readthedocs.io/en/latest/otter_assign/notebook_format.html#autograded-questions).

## otter-assign 

Once after creating the Source Notebook using otter-grader we need to generate a Student facing notebook where students can complete the assignment. To generate Student facing notebook use the command “**otter assign**“ 

```command : otter assign demo.ipynb dist ```

Now let’s break down the command. It has 3 sections as highlighted above in the command

**otter assign** -→ command to create the student facing notebook and a **Autograder zipfile** which can be used to grade the student submissions automatically using Gradescope.

**demo.ipynb** -→ It is the source notebook that instructors created using otter-grader library ,Just like the one mentioned above in Creating Questions section

**dist** → It is name of the folder where it can have both student facing Jupyter notebook which will be shared to students.The name of the folder can be anything.

For more information about otter-assign,Please refer this [section](https://otter-grader.readthedocs.io/en/latest/tutorial.html#otter-assign) in otter-grader documentation