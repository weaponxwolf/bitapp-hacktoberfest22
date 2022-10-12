# BitApp - Hacktoberfest 2022

![Logo](https://github.com/weaponxwolf/bitapp-hacktoberfest22/blob/main/public/assets/img/Email%20Banners-Dark.png)
<br></br>

# Registration
### Get yourself registered : <a herf="https://hacktoberfest.com/">https://hacktoberfest.com/</a>

<br></br>

# How to contibute

### 0. Star The Repo :star2:

Star the repo by pressing the topmost-right button to start your wonderful journey.


### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [bitapp-hacktoberfest22](https://github.com/ietebitmesra/bitapp-hacktoberfest22) by using the <a href="https://github.com/ietebitmesra/bitapp-hacktoberfest22/fork"><kbd><b>Fork</b></kbd></a> button on top-right of your screen.



### 2. Clone it :busts_in_silhouette:

`NOTE: commands are to be executed on Linux, Mac, and Windows(using Powershell)`

You need to clone (download) it to local machine using

```
$ git clone https://github.com/ietebitmesra/bitapp-hacktoberfest22.git
```

> This makes a local copy of the repository in your machine.

Once you have cloned the `bitapp-hacktoberfest22` repository in Github, move to that folder first using change directory command on Linux, Mac, and Windows(PowerShell to be used).

```sh
# This will change directory to a folder bitapp-hacktoberfest22
$ cd bitapp-hacktoberfest22
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/Your_Username/bitapp-hacktoberfest22.git (fetch)
origin  https://github.com/Your_Username/bitapp-hacktoberfest22.git (push)

```

Now, let's add a reference to the original [bitapp-hacktoberfest22](https://github.com/ietebitmesra/bitapp-hacktoberfest22) repository using

```sh
$ git remote add upstream https://github.com/ietebitmesra/bitapp-hacktoberfest22.git
```

> This adds a new remote named ***upstream***.

See the changes using

```sh
$ git remote -v
origin    https://github.com/Your_Username/bitapp-hacktoberfest22.git (fetch)
origin    https://github.com/Your_Username/bitapp-hacktoberfest22.git (push)
upstream  https://github.com/Remote_Username/bitapp-hacktoberfest22.git (fetch)
upstream  https://github.com/Remote_Username/bitapp-hacktoberfest22.git (push)
```
`In your case, you will see`
```sh
$ git remote -V
origin    https://github.com/Your_Username/bitapp-hacktoberfest22.git (fetch)
origin    https://github.com/Your_Username/bitapp-hacktoberfest22.git (push)
upstream  https://github.com/ietebitmesra/bitapp-hacktoberfest22.git (fetch)
upstream  https://github.com/ietebitmesra/bitapp-hacktoberfest22.git (push)
```

### 4. Sync it :recycle:

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune

# Switch to `master` branch
$ git checkout master

# Reset local `master` branch to match the `upstream` repository's `master` branch
$ git reset --hard upstream/master

# Push changes to your forked `bitapp-hacktoberfest22` repo
$ git push origin master
```

### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/ietebitmesra/bitapp-hacktoberfest22/pulls).

### 6. Create a new branch :bangbang:

Whenever you are going to contribute. Please create a separate branch using command and keep your `main` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and switch to branch Folder_Name
$ git checkout -b BranchName
```

Create a separate branch for contribution and try to use the same name of the branch as of folder.

To switch to the desired branch

```sh
# To switch from one folder to other
$ git checkout BranchName
```

To add the changes to the branch. Use

```sh
# To add all files to branch Folder_Name
$ git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
$ git push -u origin BranchName
```

Finally, go to your repository in the browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effor
 
<br></br>
# Rules

To earn your Hacktober Fest tee or tree reward:

- Your PRs should be useful to the maintainer and not something unnecessary.

- You must register and make four valid pull requests (PRs) between October 1-31 (in any time zone). PRs after this will not be considered.You can do the registration on the official site of Hacktober Fest 2022.

- PRs can be made to participating public repos on GitHub, those that have the Hacktoberfest topic. 

- Your PR should be labeled hacktoberfest-accepted and should be merged by the maintainer. 

- If a maintainer reports your pull request as spam/invalid, it will not be counted. Any user with two or more spammy PRs will be disqualified. 

- Once you have a valid PR, it will be accepted for hacktoberfest after a 7-day period. 

- You can see status of your PRs on the official hacktoberfest page.
