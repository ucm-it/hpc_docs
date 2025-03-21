---
title: HPC Support
sidebar_position: 6
---
import Tag from '@site/src/components/Tag';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';




## How To Request Support and Assistance
There are two methods of requesting HPC support: 
1. Attending Office Hours 
    - Office Hours is a good starting point for more generalized and simple questions.
    - Information about office hours location, schedule and Q/A can be found [here](../hpc-tutorials/OH.md)! 
2. Submitting a ticket via ServiceHub
    - Main method of recieving support, here all questions and issues can be submitted and will be handled by the CIRT team. Typical response times are 3-5 business days. 
    - Central Hub for submitting a ticket [link!](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4)

:::info
Note: Please do not try to directly contact CIRT Staff for Assistance. Requests through this manner will not be assisted immediately. 
::: 

### Writing a Good Request via a Ticket 
Here are steps and tips on how to write a good request via a ticket when requesting support from CIRT. It is important to remember that submitting a ticket is the main method users can recieve support from CIRT. CIRT is a small team so when requesting support please allow 3-5 business days to recieve a response from us. 

<details>
<summary> Click here to view a list of tips for submitting effective support requets </summary>
1. Users should use the central Ticket hub to submit all tickets. 

    Click [here](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) to access the page. 

2. Provide a Detailed Description

    - When submitting a ticket, include as many specific details as possible:
        - Copy and paste the exact error messages or prompts you encounter.
        - Mention the cluster you were working on and the working directory.
3. Describe Your Current Environment

    - Are you running custom-compiled code? Which modules are loaded? Are you running software that was self-downloaded? Custom Conda Enviroment? 
    
    Providing this context allows us to best recreate your issue and helps to quickly diagnose the problem.

4. Create a new ticket for new issues.
    
    - If a new, unrelated or related issue arises, create a separate ticket.
    - Once a ticket is closed, it cannot be reopened. Creating new tickets helps us allocate resources more effectively.

5. Simple Issues

    - Even simple issues can require time and effort to resolve.
    - Include all relevant information (as described in Tips 2 and 3) to avoid delays. 

6. Complex issues
    - Provide a small and fast example that demonstrates the issue.
    - Avoid submitting large, complex code.

    Complex issues require more time, communication, and cooperation. Be patient as we work through them efficiently.

</details>

## Prior to Requesting Support:

It is important for users to conduct research and exhaust all other sources to resolve or troubleshoot their question or concern. 

:::tip
It is beneficial to do a quick search with the exact error message or other message produced by the software. It is also good to formulate questions about the issue you are having into more concise phrases. 

<Tabs>
  
  <TabItem value="Bad Example" label="Bad Example" default>
    
    ```bash
    How do I run a parallel script across many nodes?
    ```

  
  </TabItem>
  
  <TabItem value="Good Example" label="Good Example">
    
    ```bash
    Running a parallel job across node.
    ```
  </TabItem>

 
</Tabs>

:::
