---
title: Troubleshooting issues in the Hub

sidebar_position: 10
---

<!-- ## Troubleshooting issues in the Hub -->

Facing issues with your hub and want to do some basic troubleshooting before escalating issues to us? If yes, read below!

One common error is a Jupyter notebook becoming unresponsive. You will know that a notebook is unresponsive. Another type of error is a user not being able to access some part of their JupyterHub account.

We have outlined two methods below that you should try for each error type. For errors related to the execution of code, such as the notebook not running properly, you should try restarting the kernel. For errors related to access, you should try restarting the server.

### Restarting the Kernel <!-- {docsify-ignore} -->

If your notebook becomes unresponsive, you can try to restart the kernel

![](../hpcdocs/HPC-clusters/imgs/Kernel_list.002.png)
<!-- <div align="center" style="width: 100%;">
  <img src="./imgs/Kernel_list.002.png" alt="Kernel_list.002.png" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
</div> -->


### Restarting Your Own Server <!-- {docsify-ignore} -->

All users can restart their own servers. To do this, begin by going to the **Hub** **Control Panel** from the dropdown menu from File menu.

![](../hpcdocs/HPC-clusters/imgs/Hub_Control.png)
<!-- <div align="center" style="width: 100%;">
  <img src="./imgs/Hub_Control.png" alt="Hub_Control.png" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
</div> -->

Once you click on Hub Control Panel.It will navigate to the page and Click the **Stop My Server** button.

![](../hpcdocs/HPC-clusters/imgs/start_server.004.png)
<!-- <div align="center" style="width: 100%;">
  <img src="./imgs/start_server.004.png" alt="start_server.004.png" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
</div> -->

Once the server has stopped and the Stop My Server button is no longer visible, click the **My Serverbutton (should be Start My Server)** to restart the server.

![](../hpcdocs/HPC-clusters/imgs/startserver.005.png)
<!-- <div align="center" style="width: 100%;">
  <img src="./imgs/startserver.005.png" alt="startserver.005.png" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
</div> -->

## Troubleshoot issues with Hub/Server/Code running slow <!-- {docsify-ignore} -->

### What should I do if my hub is running slow? <!-- {docsify-ignore} -->

Try these recommended options,

- Restart your kernel.
- Check whether there are a lot of open tabs. If yes, close the tabs that are not required.

### What should I do if my code is running slow? <!-- {docsify-ignore} -->

In general, this issue could be attributed to the varied programming practices adopted that might have slowed the operation of the hub. Check whether your code does any of the following,

- You are running an infinite loop
- Your computation/calculation is big
- You are joining tables that are too large
- You have too many notebooks open at the same time
- You are trying to show a table which is too large and as a result are crashing the browser

If they are relevant, try fixing these issues by improving the programming practices or by reducing the size of the dataset. 