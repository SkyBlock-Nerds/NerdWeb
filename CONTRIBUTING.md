# Contributing to NerdBot-Web

## Prerequisites:

- [Node](https://nodejs.org/en/download)
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

3. Create your own .env file<br>
   Copy the `.env.example` file to `.env` and fill in the required environment variables.<br><br>

3. Install dependencies
   ```sh
   npm install
   ```

4. Create a branch
   ```sh
   git checkout -b my-feature-branch
   ```

## Making Changes

1. Code style<br>
   Ensure your code adheres to the project's coding standards. We use ESLint for linting.<br>
   You can run the following command to check for issues:
   ```sh
   npm run lint
   ```

2. Commit your changes
   ```sh
   git add .
   git commit -m "Add feature X"
   ```

3. Push to your fork
   ```sh
   git push origin my-feature-branch
   ```

4. Create a pull request

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)