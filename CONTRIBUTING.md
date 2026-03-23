# How to Contribute to the HPC Docs

## Pull Request Process
This section presumes you have read through [Creating Fork page](./FORKING.md) and you have a basic understanding of GIT
1. Commit your change to your local checkout on your computer
	1. **Note:** It is imperative that you write your commit message to be as concise **and** descriptive as possibly. For ideas please refer to the # 50/72 Rule for GIT Messages. [Link](https://www.midori-global.com/blog/2018/04/02/git-50-72-rule#:~:text=The%20rule%20is%20simple%3A,them%20(This%20part%20is%20optional.))

	2. Ensure to Sync your Github fork remote with the main HPC Docs Repo. 
	3. Git fetch the changes onto your local checkout. 
		1. **Note to only** Git Pull if necessary. 
	4. Git Push your changes
		1. If Conflicts arise, to `Git Pull --rebase` to place your changes on top of the latest changes from remote/origin
	5. On `Github.com` or via `Github Desktop` use the GUI to open a `Pull Request` 
This will conclude the `Open Pull Request Process`

### During a Pull Request 

 During a Pull Request, any maintainer of the main repository rigorously reviews the initial pull request:
 
- The maintainer provides feedback for the necessary edits on the associated pull request.
- The maintainer and contributor may engage in discussions or ask clarifying questions related to the code changes.
- The contributor addresses the feedback by making the necessary code changes and pushes them to the same pull request.
- This process continuously repeats until the changes are deemed *satisfactory*.
- Once all feedback is addressed and the code meets the project's standards, the maintainer approves the pull request.
- The changes are published onto the HPC Docs site, often through an automated deployment pipeline.

That concludes Pull Request Process for HPC_Docs
