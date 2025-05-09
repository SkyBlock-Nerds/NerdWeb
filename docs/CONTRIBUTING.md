# Contributing to NerdWeb

## Prerequisites:
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Recommended tools:
- [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor)
- [GitHub Desktop](https://desktop.github.com/) (or any other git client)

## Getting Started
1. Fork the repository

2. Clone your fork<br>
   You can skip all the git commands and do them in ur git client (like GitHub Desktop) if you have it.
   ```sh
   git clone https://github.com/your-username/NerdBot-Web.git
   ```

3. Create your own config files<br>
   Copy the `.env.example` file to `.env` and fill in the required environment variables.<br>
   If you are using docker you should also copy the `nginx.conf.example` file and rename the copy to `nginx.conf` and alter as needed<br><br>

4. Install dependencies
   ```sh
   npm install
   ```

5. Create a branch
   ```sh
   git checkout -b feature-branch
   ```
   Do note the preferred branch name is `feature/shortDescriptionOfFeature`<br>
   (if it's not a feature but a bugfix call it `bug-fix/shortDescriptionOfBugFix` same with other things)

## Making Changes
see WORKFLOW.md

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)