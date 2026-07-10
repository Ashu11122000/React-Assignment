const gitQuestions = [
  {
    id: 1,
    category: "Git",
    difficulty: "Easy",
    question: "What is Git?",
    options: [
      "A programming language",
      "A distributed version control system",
      "A code editor",
      "A database management system",
    ],
    correctAnswer: "A distributed version control system",
    explanation:
      "Git is a distributed version control system (DVCS) that helps developers track changes, collaborate, and manage source code efficiently.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "basics", "version-control"],
  },

  {
    id: 2,
    category: "Git",
    difficulty: "Easy",
    question: "Who created Git?",
    options: [
      "James Gosling",
      "Brendan Eich",
      "Linus Torvalds",
      "Guido van Rossum",
    ],
    correctAnswer: "Linus Torvalds",
    explanation:
      "Git was created by Linus Torvalds in 2005 to support the development of the Linux kernel.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "history", "linus-torvalds"],
  },

  {
    id: 3,
    category: "Git",
    difficulty: "Easy",
    question: "Which command initializes a new Git repository?",
    options: [
      "git start",
      "git init",
      "git create",
      "git new",
    ],
    correctAnswer: "git init",
    explanation:
      "The git init command creates a new Git repository in the current directory.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "init", "repository"],
  },

  {
    id: 4,
    category: "Git",
    difficulty: "Easy",
    question: "Which command shows the current status of a Git repository?",
    options: [
      "git check",
      "git info",
      "git status",
      "git state",
    ],
    correctAnswer: "git status",
    explanation:
      "git status displays modified files, staged changes, untracked files, and the current branch.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "status"],
  },

  {
    id: 5,
    category: "Git",
    difficulty: "Easy",
    question: "Which command stages all modified and new files for the next commit?",
    options: [
      "git commit -a",
      "git add .",
      "git stage",
      "git push",
    ],
    correctAnswer: "git add .",
    explanation:
      "git add . stages all new and modified files in the current directory and its subdirectories.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "staging", "git-add"],
  },

  {
    id: 6,
    category: "Git",
    difficulty: "Easy",
    question: "Which command creates a new commit with a message?",
    options: [
      "git save",
      "git commit -m 'message'",
      "git push",
      "git log",
    ],
    correctAnswer: "git commit -m 'message'",
    explanation:
      "git commit -m 'message' creates a snapshot of the staged changes with a descriptive commit message.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "commit"],
  },

  {
    id: 7,
    category: "Git",
    difficulty: "Easy",
    question: "Which command displays the commit history of a repository?",
    options: [
      "git history",
      "git commits",
      "git log",
      "git show-history",
    ],
    correctAnswer: "git log",
    explanation:
      "git log displays the complete commit history including commit hashes, authors, dates, and messages.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "log", "history"],
  },

  {
    id: 8,
    category: "Git",
    difficulty: "Easy",
    question: "What is a Git repository?",
    options: [
      "A folder that stores only source code",
      "A database server",
      "A project directory tracked by Git, including its complete history",
      "A GitHub account",
    ],
    correctAnswer:
      "A project directory tracked by Git, including its complete history",
    explanation:
      "A Git repository contains the project files along with the complete version history stored in the .git directory.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "repository"],
  },

  {
    id: 9,
    category: "Git",
    difficulty: "Easy",
    question: "Which hidden directory contains all Git metadata and history?",
    options: [
      ".github",
      ".gitignore",
      ".git",
      ".config",
    ],
    correctAnswer: ".git",
    explanation:
      "The .git directory stores all commits, branches, tags, configuration, and other repository metadata.",
    points: 5,
    timeLimit: 30,
    tags: ["git", ".git", "repository"],
  },

  {
    id: 10,
    category: "Git",
    difficulty: "Easy",
    question: "Which command configures your Git username globally?",
    options: [
      "git config --global user.name 'Your Name'",
      "git username 'Your Name'",
      "git set user.name",
      "git profile --name",
    ],
    correctAnswer:
      "git config --global user.name 'Your Name'",
    explanation:
      "The --global flag applies the username configuration to all repositories for the current user on the system.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "config", "username"],
  },
    {
    id: 11,
    category: "Git",
    difficulty: "Easy",
    question: "What is the purpose of the Git staging area (index)?",
    options: [
      "To permanently store commits",
      "To temporarily hold selected changes before committing",
      "To delete unwanted files",
      "To download changes from GitHub",
    ],
    correctAnswer:
      "To temporarily hold selected changes before committing",
    explanation:
      "The staging area acts as an intermediate step where you choose exactly which changes should be included in the next commit.",
    points: 5,
    timeLimit: 30,
    tags: ["git", "staging", "index"],
  },

  {
    id: 12,
    category: "Git",
    difficulty: "Medium",
    question: "Which command stages a specific file for the next commit?",
    options: [
      "git stage filename",
      "git add filename",
      "git commit filename",
      "git include filename",
    ],
    correctAnswer: "git add filename",
    explanation:
      "git add <filename> stages only the specified file, allowing selective commits instead of staging every changed file.",
    points: 10,
    timeLimit: 35,
    tags: ["git", "git-add", "staging"],
  },

  {
    id: 13,
    category: "Git",
    difficulty: "Medium",
    question: "Which command removes a file from the staging area while keeping its changes in the working directory?",
    options: [
      "git reset HEAD filename",
      "git remove filename",
      "git checkout filename",
      "git clean filename",
    ],
    correctAnswer: "git reset HEAD filename",
    explanation:
      "git reset HEAD <filename> unstages a file without deleting the modifications in your working directory. In newer Git versions, 'git restore --staged <filename>' is the preferred command.",
    points: 10,
    timeLimit: 40,
    tags: ["git", "reset", "unstage"],
  },

  {
    id: 14,
    category: "Git",
    difficulty: "Medium",
    question: "Which command is the modern way to unstage a file?",
    options: [
      "git restore --staged filename",
      "git undo filename",
      "git unstage filename",
      "git checkout --staged filename",
    ],
    correctAnswer: "git restore --staged filename",
    explanation:
      "Introduced in Git 2.23, git restore --staged is the recommended command for removing files from the staging area.",
    points: 10,
    timeLimit: 40,
    tags: ["git", "restore", "staging"],
  },

  {
    id: 15,
    category: "Git",
    difficulty: "Medium",
    question: "Which command discards local modifications in a file and restores it to the last committed version?",
    options: [
      "git restore filename",
      "git reset filename",
      "git revert filename",
      "git clean filename",
    ],
    correctAnswer: "git restore filename",
    explanation:
      "git restore <filename> discards uncommitted changes in the working directory and restores the file to its previous committed state.",
    points: 10,
    timeLimit: 40,
    tags: ["git", "restore", "working-tree"],
  },

  {
    id: 16,
    category: "Git",
    difficulty: "Medium",
    question: "What is the purpose of the .gitignore file?",
    options: [
      "To hide commits from GitHub",
      "To ignore specified files and directories from version control",
      "To encrypt the repository",
      "To improve Git performance only",
    ],
    correctAnswer:
      "To ignore specified files and directories from version control",
    explanation:
      ".gitignore tells Git which files and folders should not be tracked, such as node_modules, build files, logs, and environment variables.",
    points: 10,
    timeLimit: 35,
    tags: ["git", ".gitignore", "ignore"],
  },

  {
    id: 17,
    category: "Git",
    difficulty: "Medium",
    question: "Which of the following is commonly included in a JavaScript project's .gitignore file?",
    options: [
      "package.json",
      "src/",
      "node_modules/",
      "README.md",
    ],
    correctAnswer: "node_modules/",
    explanation:
      "The node_modules directory contains installed dependencies that can be recreated using package.json and should not be committed.",
    points: 10,
    timeLimit: 35,
    tags: ["git", ".gitignore", "nodejs"],
  },

  {
    id: 18,
    category: "Git",
    difficulty: "Medium",
    question: "Which command displays the differences between the working directory and the staging area?",
    options: [
      "git compare",
      "git status",
      "git diff",
      "git changes",
    ],
    correctAnswer: "git diff",
    explanation:
      "git diff shows changes that have not yet been staged for commit. It helps review modifications before adding them.",
    points: 10,
    timeLimit: 40,
    tags: ["git", "diff"],
  },

  {
    id: 19,
    category: "Git",
    difficulty: "Medium",
    question: "Which Git command changes the most recent commit message without creating a new commit?",
    options: [
      "git commit --update",
      "git amend",
      "git commit --amend",
      "git reset --soft",
    ],
    correctAnswer: "git commit --amend",
    explanation:
      "git commit --amend updates the most recent commit. It can modify the commit message or include newly staged changes.",
    points: 10,
    timeLimit: 45,
    tags: ["git", "commit", "amend"],
  },

  {
    id: 20,
    category: "Git",
    difficulty: "Hard",
    question: "Which statement correctly describes the difference between git reset and git restore?",
    options: [
      "They are exactly the same.",
      "git reset primarily moves HEAD or unstages changes, while git restore restores files in the working tree or staging area.",
      "git restore permanently deletes commits.",
      "git reset only works with remote repositories.",
    ],
    correctAnswer:
      "git reset primarily moves HEAD or unstages changes, while git restore restores files in the working tree or staging area.",
    explanation:
      "git reset is mainly used for moving HEAD and manipulating the index (staging area), whereas git restore focuses on restoring files in the working directory or unstaging files. Since Git 2.23, restore provides a safer and more intuitive interface for these operations.",
    points: 15,
    timeLimit: 50,
    tags: ["git", "reset", "restore", "advanced"],
  },
    {
    id: 21,
    category: "Git",
    difficulty: "Medium",
    question: "Which Git command lists all local branches in a repository?",
    options: [
      "git show-branches",
      "git branch",
      "git branches",
      "git list",
    ],
    correctAnswer: "git branch",
    explanation:
      "The git branch command lists all local branches and highlights the currently checked-out branch with an asterisk (*).",
    points: 10,
    timeLimit: 35,
    tags: ["git", "branch", "local-branches"],
  },

  {
    id: 22,
    category: "Git",
    difficulty: "Medium",
    question: "Which command creates a new branch named 'feature/login' without switching to it?",
    options: [
      "git checkout feature/login",
      "git branch feature/login",
      "git switch feature/login",
      "git merge feature/login",
    ],
    correctAnswer: "git branch feature/login",
    explanation:
      "git branch <branch-name> creates a new branch but keeps you on the current branch.",
    points: 10,
    timeLimit: 35,
    tags: ["git", "branch", "create-branch"],
  },

  {
    id: 23,
    category: "Git",
    difficulty: "Medium",
    question: "Which command is the recommended modern way to switch to an existing branch?",
    options: [
      "git checkout branch-name",
      "git switch branch-name",
      "git branch branch-name",
      "git merge branch-name",
    ],
    correctAnswer: "git switch branch-name",
    explanation:
      "Since Git 2.23, git switch is the recommended command for changing branches because it has a clearer purpose than git checkout.",
    points: 10,
    timeLimit: 35,
    tags: ["git", "switch", "checkout"],
  },

  {
    id: 24,
    category: "Git",
    difficulty: "Medium",
    question: "Which command creates a new branch and immediately switches to it?",
    options: [
      "git branch -c feature/login",
      "git checkout -b feature/login",
      "git merge -b feature/login",
      "git switch feature/login -c",
    ],
    correctAnswer: "git checkout -b feature/login",
    explanation:
      "git checkout -b <branch-name> creates a new branch and switches to it in one command. The modern equivalent is git switch -c <branch-name>.",
    points: 10,
    timeLimit: 40,
    tags: ["git", "checkout", "branch"],
  },

  {
    id: 25,
    category: "Git",
    difficulty: "Medium",
    question: "Which command merges the branch 'feature/login' into the currently checked-out branch?",
    options: [
      "git merge feature/login",
      "git combine feature/login",
      "git join feature/login",
      "git pull feature/login",
    ],
    correctAnswer: "git merge feature/login",
    explanation:
      "git merge merges the specified branch into the currently active branch.",
    points: 10,
    timeLimit: 40,
    tags: ["git", "merge"],
  },

  {
    id: 26,
    category: "Git",
    difficulty: "Hard",
    question: "What is a Fast-Forward merge in Git?",
    options: [
      "A merge that always creates a merge commit.",
      "A merge where the target branch pointer simply moves forward because there are no divergent commits.",
      "A merge that deletes the source branch automatically.",
      "A merge performed only on remote repositories.",
    ],
    correctAnswer:
      "A merge where the target branch pointer simply moves forward because there are no divergent commits.",
    explanation:
      "A Fast-Forward merge occurs when the target branch has not diverged, allowing Git to simply move the branch pointer without creating a merge commit.",
    points: 15,
    timeLimit: 45,
    tags: ["git", "merge", "fast-forward"],
  },

  {
    id: 27,
    category: "Git",
    difficulty: "Hard",
    question: "When does Git perform a three-way merge?",
    options: [
      "When both branches have diverged with their own commits.",
      "When only one branch contains commits.",
      "When using git clone.",
      "When deleting a branch.",
    ],
    correctAnswer:
      "When both branches have diverged with their own commits.",
    explanation:
      "A three-way merge compares the common ancestor and the latest commits from both branches to combine their changes.",
    points: 15,
    timeLimit: 45,
    tags: ["git", "merge", "three-way-merge"],
  },

  {
    id: 28,
    category: "Git",
    difficulty: "Hard",
    question: "What causes a merge conflict?",
    options: [
      "Using git status before merging.",
      "Two branches modify the same section of a file and Git cannot automatically determine which change to keep.",
      "Running git pull.",
      "Creating multiple branches.",
    ],
    correctAnswer:
      "Two branches modify the same section of a file and Git cannot automatically determine which change to keep.",
    explanation:
      "Merge conflicts occur when Git cannot automatically reconcile conflicting changes. The developer must manually resolve the conflict before completing the merge.",
    points: 15,
    timeLimit: 50,
    tags: ["git", "merge-conflict", "conflict-resolution"],
  },

  {
    id: 29,
    category: "Git",
    difficulty: "Hard",
    question: "What is a Detached HEAD state in Git?",
    options: [
      "HEAD points to a commit instead of a branch.",
      "The repository has no commits.",
      "The current branch has been deleted.",
      "The Git repository is corrupted.",
    ],
    correctAnswer:
      "HEAD points to a commit instead of a branch.",
    explanation:
      "In a Detached HEAD state, you're working directly on a commit rather than a branch. New commits made in this state can become unreachable unless a new branch is created.",
    points: 15,
    timeLimit: 50,
    tags: ["git", "detached-head", "head"],
  },

  {
    id: 30,
    category: "Git",
    difficulty: "Hard",
    question: "Which of the following is considered a Git branching best practice?",
    options: [
      "Commit all features directly to the main branch.",
      "Create small, focused feature branches and merge them through pull requests after code review.",
      "Never delete merged branches.",
      "Avoid committing frequently.",
    ],
    correctAnswer:
      "Create small, focused feature branches and merge them through pull requests after code review.",
    explanation:
      "Professional Git workflows encourage short-lived feature branches, frequent commits, pull requests, code reviews, CI checks, and merging into the main branch only after validation.",
    points: 15,
    timeLimit: 55,
    tags: [
      "git",
      "branching",
      "best-practices",
      "pull-request",
      "workflow",
    ],
  },
    {
    id: 31,
    category: "Git",
    difficulty: "Hard",
    question: "Which Git command displays the remote repositories configured for the current project?",
    options: [
      "git remote",
      "git remotes",
      "git config --remote",
      "git repository",
    ],
    correctAnswer: "git remote",
    explanation:
      "The git remote command lists all configured remote repositories. Using 'git remote -v' also displays their fetch and push URLs.",
    points: 15,
    timeLimit: 45,
    tags: ["git", "remote", "github"],
  },

  {
    id: 32,
    category: "Git",
    difficulty: "Hard",
    question: "What is the purpose of the 'git clone' command?",
    options: [
      "To create a new local branch",
      "To download an existing remote repository along with its complete history",
      "To merge two repositories",
      "To upload a repository to GitHub",
    ],
    correctAnswer:
      "To download an existing remote repository along with its complete history",
    explanation:
      "git clone creates a complete local copy of a remote repository, including all commits, branches, and tags.",
    points: 15,
    timeLimit: 45,
    tags: ["git", "clone", "remote"],
  },

  {
    id: 33,
    category: "Git",
    difficulty: "Hard",
    question: "What is the difference between 'git fetch' and 'git pull'?",
    options: [
      "There is no difference.",
      "git fetch downloads changes without merging them, while git pull downloads and automatically merges them.",
      "git fetch uploads commits, while git pull downloads commits.",
      "git pull only works with GitHub.",
    ],
    correctAnswer:
      "git fetch downloads changes without merging them, while git pull downloads and automatically merges them.",
    explanation:
      "git fetch safely updates remote-tracking branches without modifying your working branch, whereas git pull performs a fetch followed by a merge (or rebase, depending on configuration).",
    points: 15,
    timeLimit: 55,
    tags: ["git", "fetch", "pull", "remote"],
  },

  {
    id: 34,
    category: "Git",
    difficulty: "Hard",
    question: "Which command uploads local commits to a remote repository?",
    options: [
      "git upload",
      "git publish",
      "git push",
      "git send",
    ],
    correctAnswer: "git push",
    explanation:
      "git push transfers local commits to the specified remote repository and branch.",
    points: 15,
    timeLimit: 40,
    tags: ["git", "push", "github"],
  },

  {
    id: 35,
    category: "Git",
    difficulty: "Hard",
    question: "By default, what does the remote name 'origin' represent?",
    options: [
      "The original Git developer",
      "The default remote repository from which the project was cloned",
      "The main branch",
      "The GitHub organization",
    ],
    correctAnswer:
      "The default remote repository from which the project was cloned",
    explanation:
      "When you clone a repository, Git automatically names the remote repository 'origin'. It is simply a conventional alias and can be renamed if desired.",
    points: 15,
    timeLimit: 45,
    tags: ["git", "origin", "remote"],
  },

  {
    id: 36,
    category: "Git",
    difficulty: "Hard",
    question: "In an open-source workflow, what does the remote named 'upstream' usually refer to?",
    options: [
      "Your own fork of the repository",
      "The original repository from which you created your fork",
      "The latest local branch",
      "A backup repository",
    ],
    correctAnswer:
      "The original repository from which you created your fork",
    explanation:
      "Developers typically keep 'origin' pointing to their fork and add 'upstream' to reference the original project so they can stay synchronized.",
    points: 15,
    timeLimit: 50,
    tags: ["git", "upstream", "fork", "github"],
  },

  {
    id: 37,
    category: "Git",
    difficulty: "Expert",
    question: "What is a tracking branch in Git?",
    options: [
      "A branch that automatically tracks code quality",
      "A local branch linked to a remote branch for simplified push and pull operations",
      "A branch used only for issue tracking",
      "A protected branch on GitHub",
    ],
    correctAnswer:
      "A local branch linked to a remote branch for simplified push and pull operations",
    explanation:
      "Tracking branches remember the corresponding remote branch, allowing commands like git pull and git push to work without specifying the remote and branch every time.",
    points: 20,
    timeLimit: 60,
    tags: ["git", "tracking-branch", "remote"],
  },

  {
    id: 38,
    category: "Git",
    difficulty: "Expert",
    question: "What is a Pull Request (PR) on GitHub?",
    options: [
      "A command used to download commits",
      "A request to merge changes from one branch into another after review",
      "A request to clone a repository",
      "A command to delete a remote branch",
    ],
    correctAnswer:
      "A request to merge changes from one branch into another after review",
    explanation:
      "A Pull Request allows collaborators to review code, discuss changes, run automated CI checks, and approve or request modifications before merging.",
    points: 20,
    timeLimit: 60,
    tags: ["git", "github", "pull-request", "collaboration"],
  },

  {
    id: 39,
    category: "Git",
    difficulty: "Expert",
    question: "What is the primary difference between Forking and Cloning a repository?",
    options: [
      "Forking creates a copy of a repository under your GitHub account, while cloning downloads a repository to your local machine.",
      "Forking downloads the repository locally, while cloning creates an online copy.",
      "Both perform exactly the same task.",
      "Forking only works with private repositories.",
    ],
    correctAnswer:
      "Forking creates a copy of a repository under your GitHub account, while cloning downloads a repository to your local machine.",
    explanation:
      "Forking is a GitHub feature used mainly in open-source collaboration, whereas cloning is a Git command used to create a local copy of a repository.",
    points: 20,
    timeLimit: 60,
    tags: ["git", "fork", "clone", "github"],
  },

  {
    id: 40,
    category: "Git",
    difficulty: "Expert",
    question: "Which sequence represents a professional GitHub collaboration workflow for contributing to an open-source project?",
    options: [
      "Clone → Commit → Push directly to main",
      "Fork → Clone → Create Feature Branch → Commit → Push → Open Pull Request → Code Review → Merge",
      "Download ZIP → Edit Files → Upload ZIP",
      "Clone → Delete main → Push Changes",
    ],
    correctAnswer:
      "Fork → Clone → Create Feature Branch → Commit → Push → Open Pull Request → Code Review → Merge",
    explanation:
      "This workflow is widely used in professional software development. Contributors fork the repository, work on feature branches, push changes to their fork, open a Pull Request, undergo code review and automated testing, and finally merge the approved changes.",
    points: 20,
    timeLimit: 70,
    tags: [
      "git",
      "github",
      "workflow",
      "pull-request",
      "fork",
      "collaboration",
      "best-practices",
    ],
  },
    {
    id: 41,
    category: "Git",
    difficulty: "Expert",
    question: "What is the primary purpose of the 'git rebase' command?",
    options: [
      "To delete old commits permanently",
      "To replay commits from one branch onto another, creating a linear history",
      "To merge two repositories",
      "To create a new remote repository",
    ],
    correctAnswer:
      "To replay commits from one branch onto another, creating a linear history",
    explanation:
      "git rebase reapplies commits from one branch onto another base commit, producing a cleaner, linear project history. Unlike merge, it rewrites commit history.",
    points: 20,
    timeLimit: 60,
    tags: ["git", "rebase", "history"],
  },

  {
    id: 42,
    category: "Git",
    difficulty: "Expert",
    question: "Which command starts an Interactive Rebase for the last five commits?",
    options: [
      "git rebase --interactive HEAD~5",
      "git rebase -i HEAD~5",
      "git interactive HEAD~5",
      "git merge -i HEAD~5",
    ],
    correctAnswer: "git rebase -i HEAD~5",
    explanation:
      "Interactive Rebase allows developers to edit, reorder, squash, reword, or remove commits before sharing them with others.",
    points: 20,
    timeLimit: 65,
    tags: [
      "git",
      "interactive-rebase",
      "rebase",
      "history",
    ],
  },

  {
    id: 43,
    category: "Git",
    difficulty: "Expert",
    question: "When is 'git cherry-pick' most useful?",
    options: [
      "To merge an entire branch",
      "To apply one or more specific commits from another branch",
      "To delete commits",
      "To clone a repository",
    ],
    correctAnswer:
      "To apply one or more specific commits from another branch",
    explanation:
      "git cherry-pick copies selected commits onto the current branch without merging the entire branch, making it useful for bug fixes and hotfixes.",
    points: 20,
    timeLimit: 60,
    tags: ["git", "cherry-pick", "commits"],
  },

  {
    id: 44,
    category: "Git",
    difficulty: "Expert",
    question: "What is the purpose of 'git stash'?",
    options: [
      "To permanently save commits",
      "To temporarily save uncommitted changes so you can switch branches safely",
      "To upload changes to GitHub",
      "To remove local branches",
    ],
    correctAnswer:
      "To temporarily save uncommitted changes so you can switch branches safely",
    explanation:
      "git stash stores modified tracked files temporarily, allowing developers to work on another branch without committing unfinished work.",
    points: 20,
    timeLimit: 55,
    tags: ["git", "stash", "workflow"],
  },

  {
    id: 45,
    category: "Git",
    difficulty: "Expert",
    question: "What is the primary purpose of Git Tags?",
    options: [
      "To create new branches",
      "To mark important commits such as software releases",
      "To track merge conflicts",
      "To ignore files",
    ],
    correctAnswer:
      "To mark important commits such as software releases",
    explanation:
      "Tags provide permanent references to specific commits and are commonly used for release versions like v1.0.0 or v2.3.1.",
    points: 20,
    timeLimit: 55,
    tags: ["git", "tag", "release"],
  },

  {
    id: 46,
    category: "Git",
    difficulty: "Expert",
    question: "What is 'git reflog' primarily used for?",
    options: [
      "Viewing remote repositories",
      "Recovering commits or branch references that appear to be lost",
      "Viewing GitHub issues",
      "Listing ignored files",
    ],
    correctAnswer:
      "Recovering commits or branch references that appear to be lost",
    explanation:
      "git reflog records every movement of HEAD, making it extremely useful for recovering commits after resets, rebases, or accidental branch deletions.",
    points: 20,
    timeLimit: 65,
    tags: ["git", "reflog", "recovery"],
  },

  {
    id: 47,
    category: "Git",
    difficulty: "Expert",
    question: "What problem does 'git bisect' help solve?",
    options: [
      "Finding merge conflicts",
      "Finding the commit that introduced a bug using binary search",
      "Creating release tags",
      "Managing remote repositories",
    ],
    correctAnswer:
      "Finding the commit that introduced a bug using binary search",
    explanation:
      "git bisect efficiently narrows down the commit that introduced a bug by repeatedly dividing the commit history in half.",
    points: 20,
    timeLimit: 65,
    tags: ["git", "bisect", "debugging"],
  },

  {
    id: 48,
    category: "Git",
    difficulty: "Expert",
    question: "What are Git Hooks?",
    options: [
      "GitHub notifications",
      "Scripts that automatically execute before or after Git events such as commits or pushes",
      "Special merge strategies",
      "Remote repository aliases",
    ],
    correctAnswer:
      "Scripts that automatically execute before or after Git events such as commits or pushes",
    explanation:
      "Git Hooks automate tasks like running tests, checking code formatting, validating commit messages, and preventing invalid commits before they reach the repository.",
    points: 20,
    timeLimit: 65,
    tags: ["git", "hooks", "automation"],
  },

  {
    id: 49,
    category: "Git",
    difficulty: "Expert",
    question: "What is the advantage of using Git Worktrees?",
    options: [
      "They replace Git branches.",
      "They allow multiple working directories from the same repository, enabling simultaneous work on different branches.",
      "They automatically merge feature branches.",
      "They improve internet speed when cloning repositories.",
    ],
    correctAnswer:
      "They allow multiple working directories from the same repository, enabling simultaneous work on different branches.",
    explanation:
      "Git Worktrees eliminate the need for multiple clones by allowing several checked-out branches to exist simultaneously in separate directories.",
    points: 20,
    timeLimit: 65,
    tags: ["git", "worktree", "advanced-workflow"],
  },

  {
    id: 50,
    category: "Git",
    difficulty: "Expert",
    question: "A CI/CD pipeline fails immediately after your feature branch is merged into the main branch. As a senior developer, what is generally the BEST first action?",
    options: [
      "Force push directly to the main branch to fix it.",
      "Delete the main branch and recreate it.",
      "Investigate the pipeline logs, identify the root cause, and apply a proper fix or rollback through the team's normal workflow.",
      "Ignore the failure because another developer will fix it.",
    ],
    correctAnswer:
      "Investigate the pipeline logs, identify the root cause, and apply a proper fix or rollback through the team's normal workflow.",
    explanation:
      "Experienced developers avoid panic fixes. They first inspect CI/CD logs, identify the root cause, communicate with the team if necessary, and either submit a corrective commit or perform an approved rollback. Direct force-pushes to protected branches are generally avoided in professional workflows.",
    points: 20,
    timeLimit: 75,
    tags: [
      "git",
      "ci-cd",
      "devops",
      "workflow",
      "interview",
      "best-practices",
      "senior-developer",
    ],
  },
];

export default gitQuestions;