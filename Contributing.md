# Contributing

Hi there! We're thrilled that you'd like to contribute to Github Externship Programme by Symbl.ai.


## Github Externship Assignment

Please follow the below steps to solve the assignment. 

-  Read the [problem statement](https://github.com/symblai/Github-Externship-Assignment/blob/main/README.md) carefully.
-  Follow the [developers guide](#developers-guide) to setup the repository on your machine.
-  Open [Solution.js](https://github.com/symblai/Github-Externship-Assignment/blob/main/Solution.js) file and implement your solution.
-  Test your solution locally.
-  Once tested, commit the solution and raise a PR against `main` branch of [base](https://github.com/symblai/Github-Externship-Assignment) repository.


## Developers Guide

This process here should be able to guide you on how to contribute effectively to this project, follow the steps below. You should not be new to the git workflow process however if you still are, the guide should still be able to help you through the process.

> Please before you push your codes to the repository make sure you pull from the repository, so the changes that have been made can be reflected on your local machine, for us to avoid merge conflicts use the git command line

    git pull upstream main

### Main is the default branch.

- Fork the repository to generate a copy of your own.

- Clone the repository.

  ```
   git clone 'your forked repo link'

  ```

- Checkout from main branch to a new branch
  ```
    git checkout -b feat/chore/bugs/fix/docs(just choose one)/branch-name
  ```
- Make the original Github-Externship-Assignment repository the remote upstream (at upstream)
  ```
  git remote add upstream https://github.com/symblai/Github-Externship-Assignment.git
  ```
- To confirm the remote upstream/origin

  ```
  git remote -v
  ```

- Make your changes, add them

  ```
  git add .
  ```

  Make your commits

  ```
  git commit -m "your message"
  ```

  Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. is doing

- Push your codes to the branch on your forked remote upstream repository -
  "for-example: git push origin feat/landing-page"

  ```
  git push origin your-branch-name
  ```

Make your Pull request from that branch of your repository to the main branch of this (Github-Externship-Assignment) repo and wait for it to be reviewed.

Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. is doing.
Your PR should carry the story / task URL (instruction from above).
if you are going to make changes to an existing code, state why you are doing so in the commit messages.

It is not just about the code, user workflow matters too!!

## Commit Structure

- type: subject e.g body, footer

The title consists of the type of the message and subject.
The type is contained within the title and can be one of these types:

- feat: a new feature

- fix: a bug fix

- docs: changes to documentation

- style: formatting, missing semi colons, etc; no code change

- refactor: refactoring production code

- test: adding tests, refactoring test; no production code change

- chore: updating build tasks, package manager configs, etc; no production code change

**An example of a good commit message**

    feat: Make login check for email and password

More detailed explanatory text, if necessary. Wrap it to about 72 characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log, shortlog and rebase` can get confused if you run the two together.
Explain the problem that this commit is solving. Focus on why you are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this change? Here's the place to explain them.

- Further paragraphs come after blank lines.

* Bullet points are okay, too
* Typically a hyphen or asterisk is used for the bullet, preceded
  by a single space, with blank lines in between, but conventions
  vary here

- If you use an issue tracker, put references to them at the bottom,
  like this:
  Resolves: #123
  See also: #456, #789
  And if your commit is just a simple thing, then make the message very short, but not just a title

### Happy hacking!!!!

## Resources

- [How to contribute to open source on GitHub](https://guides.github.com/activities/contributing-to-open-source/)
- [Using Pull Requests](https://help.github.com/articles/using-pull-requests/)
- [GitHub Help](https://help.github.com)
