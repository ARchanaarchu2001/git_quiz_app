const quizData = [
    {
      id: 1,
      title: 'Why we are using Git',
      info:
        ' Git is a distributed version control system that has become an essential tool for software development and collaboration.Git allows for distributed development, meaning that each developer has their own copy of the entire project, including its history. ',
    },
    {
      id: 2,
      title: 'How can I start git',
      info:
        'Download the Git installer from "git-scm.com".open a terminal(or Git Bash on Windows) and set your name and email '
        },
    {
      id: 3,
      title: 'How can we verify the git installed',
      info:
        'To check if Git is installed correctly, run:"git --version"',
    },
    {
      id: 4,
      title: 'Which are the basic steps for git',
      info:
        '1.Create a new Repository (Navigate to the directory of your project)  "git init" ,2.Add files to the staging areas "git add filename" ,3.commit changes   "git commit -m Your commit message"  write a meaningful commit message describing the changes you made',
        

    },
    {
      id: 5,
      title: 'When was we create a Branch',
      info:
     ' Creating a branch in Git is a common practice when you want to work on a new feature, fix a bug, or make changes without affecting the main codebase.To create a new branch, use the following command:"git branch branch_name".then use the code "git branch"',
     
    },{
        id: 6,
        title: 'How we can connect Git with GitHub',
        info:
       ' Create a GitHub Account.create a new Repository on GitHub.Link Local Repository to GitHub Repository "git remote add origin https://github.com/username/repository.git".Then push Local Commits to GitHub "git push -u origin master"',

   },
      


  ]
  export default quizData