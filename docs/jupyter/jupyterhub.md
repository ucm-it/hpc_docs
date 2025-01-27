## JupyterNotebooks?
Jupyter Notebook is an open-source web application that allows you to create and share documents that contain **live code**, equations, visualizations, and narrative text. Uses include data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more.

### Features <!-- {docsify-ignore} -->

  - **Interactive Environment:** Jupyter Notebooks provide an interactive computing environment where users can write and execute code in a step-by-step manner.
  - **Support for Multiple Languages:** While originally designed for Python, Jupyter Notebooks support various programming languages like Julia, Python, and R.
  - **Rich Output:** Notebooks allow the incorporation of rich media outputs such as plots, images, videos, and interactive widgets alongside code and text cells.
  - **Markdown Support:** In addition to code cells, users can include Markdown cells to write formatted text, equations (using LaTeX syntax), and even HTML for documentation or explanations.
  - **Data Visualization:** Using libraries like Matplotlib, Seaborn, users can create interactive and static visualizations directly within the notebook environment.
  - **Integration with Libraries and Tools:** Jupyter Notebooks seamlessly integrate with various data science libraries and tools such as NumPy, Pandas, SciPy, TensorFlow, and scikit-learn.

### Components <!-- {docsify-ignore} -->

- **Cells:** Notebooks are composed of individual cells that can contain either code, Markdown-formatted text, or raw content. Users can execute code cells and render Markdown cells to produce outputs.
  
  ![jupyter_Cells](../hpcdocs/HPC-clusters/imgs/jupyter_cells.png)


- **Kernel:** Each notebook is associated with a computational kernel, which is responsible for executing code within the notebook. Different kernels support different programming languages.

  ![kernel](../hpcdocs/HPC-clusters/imgs/kernel.png)

- **Toolbar:** The toolbar provides quick access to common actions such as running cells, saving the notebook, adding new cells, and changing cell types.

  ![toolbar](../hpcdocs/HPC-clusters/imgs/toolbar.png)
- **Menu Bar:** The menu bar contains various options for manipulating the notebook, managing kernels, and configuring the notebook environment.

  ![menubar](../hpcdocs/HPC-clusters/imgs/menubar.png)
- **Output Area:** Code cells display their output, including text output, error messages, and visualizations, in the output area directly below the cell.

   ![output_area](../hpcdocs/HPC-clusters/imgs/output_area.png)

- **File Format:** Notebooks are saved in a JSON file format with the `.ipynb`

### Using Jupyter Notebooks for Data Analysis <!-- {docsify-ignore} -->

**Jupyter Notebooks** are incredibly versatile for **data analysis** projects. They allow data scientists to combine **executable code**, rich text, **visualizations**, and equations in a single document.

- **Interactive Data Exploration:** Notebooks facilitate interactive exploration of datasets, enabling quick iterations over a data preprocessing or analysis pipeline.
- **Visualization:** With support for libraries like **Matplotlib** and **Seaborn**, users can create and embed graphs directly within notebooks.
- **Collaboration and Sharing:** Notebooks can be easily shared between users, promoting collaboration on data analysis projects.


## JupyterHub? 

[Jupyterhub](https://jupyter.org/hub) JupyterHub is an open source tool that lets you host a distributed Jupyter Notebook environment. With JupyterHub, users can log in to the server, and write Python,R code in a web browser, without having to install software on their local machine.

Working on JupyterHub provides a number of benefits, especially in an introductory course:

Students never have to do any setup or installation. JupyterHub removes the burden of setting up and maintaining a development environment.

All students and instructors use the same computing environment.

Work stored in the cloud and can be accessed from any computer.

All students have access to the same compute power, regardless of the machine they are using. For example, students without personal computers can use publicly shared computers(i.e. library computers) without being at a disadvantage in the course.

### Feature Comparison Table <!-- {docsify-ignore} -->
| Feature         | Jupyter Notebook                                  | JupyterHub                                                     | JupyterLab                                   |
|-----------------|---------------------------------------------------|----------------------------------------------------------------|----------------------------------------------|
| **Type**        | Single-user application (locally needs to be set up) | Multi-user server (Setup will be installed on designated servers) | Web-based interface (locally needs to be set up) |
| **Functionality** | Allows creation and sharing of documents with code | Allows creation and sharing of documents with code and manages access to Jupyter Notebook instances | Allows creation and sharing of documents with code and manages access to Jupyter Notebook instances |
| **Collaboration** | Limited                                           | Enables collaboration among multiple users                      | Limited                                      |
| **Authentication** | N/A                                               | Uses SSO                                                        | N/A                                          |
| **Server Management** | N/A                                           | Spawns, manages, and user servers                               | N/A                                          |
| **Interface**    | Web-based                                         | Web-based                                                       | Web-based                                    |



## How to access JupyterHub?
Access to the JupyterHub is available to everyone who has UCMerced credentials. To log in, please proceed to the following URL:

**URL** → [https://ucmerced.2i2c.cloud/hub/login](https://ucmerced.2i2c.cloud/hub/login) (UCMerced SSO is required)

#### Login: <!-- {docsify-ignore} -->
Go to the UCMerced **JupyterHub** login page and enter your credentials to log in.

![output_area](../hpcdocs/HPC-clusters/imgs/login-page.png)

Once the login is successfull,On the home page, you will see two options to choose from based on your preference or requirements. These options likely correspond to different programming environments or configurations.

#### Choose Server: <!-- {docsify-ignore} -->

Select the server that best suits your needs by clicking on the corresponding option. For example, you might choose between a Python server and an R server.

![output_area](../hpcdocs/HPC-clusters/imgs/servers.png)

#### Start Server: <!-- {docsify-ignore} -->

Once you've made your selection, click on the option to start the server. This will initiate the server and provide you with access to the chosen environment. 

![output_area](../hpcdocs/HPC-clusters/imgs/startserver.png)

By following these steps, you can start the server on the UCMerced **JupyterHub** and begin working within your preferred environment. The folder structure will vary depending on the user's access level, whether they are an administrator or a regular user.

![output_area](../hpcdocs/HPC-clusters/imgs/home_env.png)

### How can I switch from a Python server to an R server in JupyterHub? <!-- {docsify-ignore} -->
- **Navigate to the Hub Control Panel**: First, locate and click on the "File" menu at the top of your JupyterHub session. From the dropdown options, select "Hub Control Panel" to access the control panel for your JupyterHub environment.

  ![output_area](../hpcdocs/HPC-clusters/imgs/R_file.png)

- **Stop the Current Running Server**: In the Hub Control Panel, you will see an option to "Stop My Server." Click this option to halt the currently running server. It's necessary to stop the current session before you can switch to a different server or kernel.

 ![output_area](../hpcdocs/HPC-clusters/imgs/hubcontrol.png)

- **Start a New Server**: After stopping your server, you'll be redirected to the JupyterHub home page or you might need to navigate back to it manually. Here, click on the "Start My Server" button to initiate the process of starting a new server.

  ![output_area](../hpcdocs/HPC-clusters/imgs/startMyServer.png)

- **Select the R Server**: You will now be presented with a list of available servers or environments. Look for the option that corresponds to the R server (this might be labeled as "R," "IRkernel," or something similar depending on your JupyterHub's configuration). Select this option to proceed.

 ![output_area](../hpcdocs/HPC-clusters/imgs/choose_server.png)

- **Launch the Server**: After selecting the R server, click the "Start" button to launch a new JupyterHub session running on the R server. You're now ready to create and run notebooks using R.

  ![output_area](../hpcdocs/HPC-clusters/imgs/R_homepage.png)

## Create New Notebook

From the Launcher, you can see different sections like:

- **Notebook**
- **Console**
- **Other**

Click the icon under the Notebook section to create a new notebook, which will be created with the name “Untitled.ipynb”.

![output_area](../hpcdocs/HPC-clusters/imgs/newnotebook.png)

## Rename the Notebook 

To rename a notebook, you can simply right-click on the notebook from the Menu bar and choose the "Rename" option.

![output_area](../hpcdocs/HPC-clusters/imgs/rename.png)

## How to run a notebook?

To execute code within a notebook, users can click on individual code cells and then either press the "Run" button in the toolbar or press **Shift + Enter** on their keyboard.

## How to add a code block?

Users can add new code cells to their notebook by clicking on the "+" button in the toolbar and selecting "Code" from the dropdown menu.

## How to add Markdown text cells in the notebook?

To add Markdown text cells to a notebook, users should click the toolbar and select "Markdown" from the dropdown menu. They can then enter Markdown-formatted text into the cell. Once the Markdown cell is created, you can start typing your text directly into the cell.

![output_area](../hpcdocs/HPC-clusters/imgs/markdown.png)

The following are the different options you can use in markdown:

- Use Markdown syntax to format your text.
    - For example: 
        - Use `#` for headings (e.g., `# Heading 1` for a top-level heading).
        - Use `*` or `-` for bullet points.
        - Use `**` for bold text and `_` or `*` for italic text.
        - Use `[]()` for adding links (e.g., `[link text](url)`).
        - Use `` ` `` for code snippets (e.g., `` `print("Hello world!")` ``).

          ![output_area](../hpcdocs/HPC-clusters/imgs/markdown_example.png)

**Note:** After typing your text, run the cell by pressing Shift + Enter. The Markdown cell will render your text in formatted style.

## How to download the notebook?

To download a notebook document, users can go to the "File" menu and select "Download as". From the submenu that appears, they can choose the desired file format (e.g., `.ipynb`, `.pdf`, `.LaTeX`, `.html`, `.webpdf`, `.qtpdf`, etc.) to initiate the download.

![output_area](../hpcdocs/HPC-clusters/imgs/download_notebook.png)

## How to create a new folder?

Users can create a new folder within their JupyterHub environment by navigating to the directory where they want the new folder to be located, clicking on the "New" button, which will create a folder just by clicking it.

## Installing packages on the Hub

### Is it possible to install custom packages?<!-- {docsify-ignore} -->

Absolutely! In Jupyter Notebook, you have the flexibility to install packages using either `!pip install package-name` or `!conda install package-name` for Python packages. For R, utilize `install.packages()`. **Just remember, the packages you install only stick around while you're using the server. So, it's recommended to put the installation commands at the start of your notebook or file, making sure they run when you need them.**

### What packages & libraries are available?<!-- {docsify-ignore} -->

This JupyterHub comes with Python 3.11.4 and R 4.3.1 installed. Many commonly used packages are pre-installed. This **[requirements.txt](https://ucmerced.box.com/s/x2eigcssqyeca9mrid3m19glfcs73j02)** file lists the python packages installed, while this  **[install.R](https://ucmerced.box.com/s/65r1rda9atblpdsxdvtyaq6exlnns9z3)** file lists the R packages installed.

To inquire about packages, users should open the notebook from the launcher and type the following command:
- For Python packages: Type `pip freeze` (users should be in the python server).
- For R packages: Type `installed.packages()` (users should be in the R server).

## nbgitpuller

You’ll often want to distribute content (such as notebooks, scripts, sample data, etc.) to your users so they can do exercises, follow along with a lecture, or use as a starting point for their own work. This content is often constantly updated as time goes on, and needs to not overwrite your student’s work if you make an adjustment to content that has already been touched by the student. That’s where nbgitpuller comes into the picture.

nbgitpuller is already installed in the default environment for UCMerced JupyterHubs. To set up a nbgitpuller link, users must have a GitHub account. The following are the steps which will guide you to create an nbgitpuller link:

### Put your files in a public Github Repository <!-- {docsify-ignore} -->

Create a repository on GitHub and start putting your content there. This repository serves as the source of the content that will be distributed to your users. You can update it as often as needed. While instructors must understand how [GitHub](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git) works, your users will never have to directly interact with git.


### Generate nbgitpuller Link <!-- {docsify-ignore} -->

Users can generate an nbgitpuller link using the tool [nbgitpuller](https://nbgitpuller.readthedocs.io/en/latest/link.html) link, which will look like in the following screenshot:

![output_area](../hpcdocs/HPC-clusters/imgs/nbgitpuller.png)


The following steps will explain each and every field in the screenshot below.

- A. Generated link appears here:
- B. JupyterHub URL
- C. Git Repository URL
- D. File to Open
- E. Application to Open

### Distribute your nbgitpuller link <!-- {docsify-ignore} -->

Distribute the link you have generated to your users. Upon clicking the link, they will be redirected to your hub and asked to log in if they have not already. 

The first time the link is clicked, your content repository will be pulled into their home directory! If they had already clicked the link before, any new changes in your content repository will be pulled in. 

Any changes the user has made will be automatically merged with changes in the content repository in such a way that the user’s changes are never overwritten. All merge conflicts will also be automatically resolved so users don’t have to interact with git. 

If you have picked a specific file to be displayed, the user will be redirected to that file, open in the application you picked. If not, the directory listing of the local copy of the content repository will be shown in the application you selected.

## Jupyterhub Office Hours

Jupyterhub office hours every **Friday from 11:30 AM to 1:00 PM in ACS Room 365**

Zoom Details:
- https://ucmerced.zoom.us/j/87915353522?pwd=bW5zV3NCNWk5d2dvVkZwaXlObHJ3dz09
- Meeting ID: 879 1535 3522
- Passcode: 035925

Please feel free to drop by if you need help with anything from setting up your environment, or if you're just curious to learn more about more on JupyterHub. If these times don't work for you but you still require support, I encourage you to open a ServiceNow ticket [ServiceNow Request](https://ucmerced.service-now.com/servicehub?id=public_kb_article&sys_id=3c3ee9ff1b67a0543a003112cd4bcb13&form_id=06da3f8edbfc08103c4d56f3ce9619f4) .



## FAQs

### How can I view all the attributes or methods available for an object in Python in the Jupyterhub? <!-- {docsify-ignore} -->

To explore all the available attributes or methods of an object in Python within a JupyterHub environment, follow these steps:
 - a. **Import the Module**:Start by importing the module that contains the object you're interested in. For example, to work with the math module, you would import it with:
 - b. **Use the Tab Key for Auto-completion**: Type the name of the module or object followed by a period (.) in a new cell or the same cell. Then, press the "Tab" key on your          keyboard.
 
 ![output_area](../hpcdocs/HPC-clusters/imgs/quick_hacks1.png)
 
### How do I ensure Plotly charts render correctly in Jupyterhub? <!-- {docsify-ignore} -->

Ensure that you include this line in your notebook for Plotly to function properly. Referring to the documentation at 
[Plotly Renderers](https://plotly.com/python/renderers/), there are two methods to achieve this:

Import the `io` method from Plotly in your import statement: `import plotly.io as pio`, and specify the desired renderer using `pio.renderers.default = "iframe"`. 
   
   ```python
   import plotly.io as pio
   pio.renderers.default = "iframe" ```
  Alternatively, directly specify the renderer in the fig.show() method by using fig.show(renderer='iframe').
