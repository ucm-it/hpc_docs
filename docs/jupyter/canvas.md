---
title: Creating a Gradescope Asssignment in CatCourses

sidebar_position: 10
---


## Creating a course in Catcourses and Gradescope

### Step 1: Institutional License, GradeScope and Catcourses <!-- {docsify-ignore} -->

GradeScope is a service that allows instructors to tie assignments back to Catcourses. Once an assignment is created in Catcourses and in GradeScope, a student uploads their completed notebook to GradeScope, GradeScope grades the notebook and pushes the scores back to the Catcourse.

### Step 2: Documentation: Catcourses and GradeScope Assigment Configuration <!-- {docsify-ignore} -->

[**CatCourses**](https://it.ucmerced.edu/catcourses) is UC Merced's Canvas Learning Management System (LMS). It provides a central repository for all academic course sites in which instructors can interact with and provide educational materials to their students.

To create a new course on canvas, Please follow this [documentation](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-create-a-new-course-from-the-Dashboard-as-an-instructor/ta-p/794) from canvas.

### How to create an Gradescope assignment on Catcourses <!-- {docsify-ignore} -->

This documentation from [GradeScope](https://help.gradescope.com/article/y10z941fqs-instructor-canvas#assignment_setup) details how to configure a GradeScope course and assignments with Canvas.

Navigate to assignments section on the canvas and click on the new gradescope assignment.

UCMerced is using Latest version of Gradecope. So Gradescope is listed in the dotted drop-down menu on the Assignments page.
![](../hpcdocs/HPC-clusters/imgs/gradescope_dropdown_009.png)

Once you click on Gradescope option from the dropdown, You will be give two options to choose as shown below.

### Assignment Type <!-- {docsify-ignore} -->

To begin crafting a new assignment, simply click on the 'A new Gradescope Assignment' option. This will guide you to the next step, where you'll select your assignment type. Since our aim is to grade Jupyter notebooks, opt for the 'Programming Assignment' choice.

![](../hpcdocs/HPC-clusters/imgs/assignment_settings.010.png)

then follow the **LTI 1.3** tab instructions on [GradeScope](https://help.gradescope.com/article/y10z941fqs-instructor-canvas#assignment_setup) documentation.

### Configure Autograder <!-- {docsify-ignore} -->

Once after creating an assignment, it will be redirected to a page where faculty/instructors needs to upload the zip file which was created using otter-grader package using **otter assign command.**Please refer the otter-assign section.

![](../hpcdocs/HPC-clusters/imgs/autograder.011.png)

Once after uploading a zip file which was created by instructor,Gradescope will process that which will roughly take 5-10 mins,Once they have generated the ZIP file they just upload it and the GRADESCOPE will build the image and then it will run the test cases for the notebook.

![](../hpcdocs/HPC-clusters/imgs/build.012.png)

Congratualtions,You have successfully created an autograder assignment using gradescope and canvas.

### Publish an Assignment <!-- {docsify-ignore} -->

Now the assignment will be available on canvas and will be available to students once you publish the assignment.

Open Assignments,In Course Navigation, click the **Assignments** link.

![](../hpcdocs/HPC-clusters/imgs/status.013.png)

> **Note**
> Please take a look on how to[ publish assignments](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-publish-or-unpublish-an-assignment-as-an-instructor/ta-p/585) from canvas documentation. Now once the assignment is published, it will be available to students and the students can complete the assignment.**

> **Note:
> Documentation: GradeScope Programming Assignments.

> This documentation from [GradeScope](https://help.gradescope.com/article/ujutnle52h-instructor-assignment-programming) illustrates how to tie the autograder.zip file to a GradeScope assignment to enable automatic grading. There is also a section on combining manual and autograded questions.

Note here, that we have all the autograder.zip files needed for the programming assignments, the configuration of these assignments is explained in the student facing workflow section.

### Grading and publishing grades <!-- {docsify-ignore} -->

Once students submitted their assignments, instructors can publish their grades from Gradescope which will then be directly reflecte in Catcourses. More information here:

[https://help.gradescope.com/article/y10z941fqs-instructor-canvas#posting_grades](https://help.gradescope.com/article/y10z941fqs-instructor-canvas#posting_grades)

### How does a course look like? <!-- {docsify-ignore} -->

A course is automatically added into the students account based on their selection while registering for courses.Students can login into canvas using UCMerced SSO.Once login the can view all their register courses in the canvas dashaboard.

![](../hpcdocs/HPC-clusters/imgs/canvas_dashboard.014.png)

Please follow this link for more information on [courses](https://community.canvaslms.com/t5/Student-Guide/How-do-I-use-the-Course-Home-Page-as-a-student/ta-p/504) in canvas.

### How does an assignment look like? <!-- {docsify-ignore} -->

Students are able to access their specific course and then proceed to the assignments section. Typically, a Gradescope assignment appears similar to a standard assignment. However, students must adhere to the following steps to submit their JupyterHub assignment on Canvas.

![](../hpcdocs/HPC-clusters/imgs/creating_assignment.015.png)


In the screenshot, students can spot the upload submission button nestled in the lower right corner. Clicking on it triggers a pop-up window where students are prompted to upload their assignment as a zip file.

![](../hpcdocs/HPC-clusters/imgs/submit_assign.016.png)

After uploading the zip file, Gradescope will validate and grade the student's assignment according to the instructor's solutions.It looks something like this.

![](../hpcdocs/HPC-clusters/imgs/submit_assign1.017.png)


Upon successful submission, an email notification will be sent.

![](../hpcdocs/HPC-clusters/imgs/assign_success.018.png)