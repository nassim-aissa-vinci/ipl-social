# IPL social

## Student information
- Last name: AISSA
- First name: NASSIM
- VINCI email: nassim.aissa@student.vinci.be

## GitHub project URL
https://github.com/nassim-aissa-vinci/ipl-social

## Code explanation
This project demonstrates a basic DevOps CI setup using GitHub Actions. The main feature is a TypeScript
email validation function developed using TDD (tests first). The CI pipeline runs automatically on every
push or pull request to the `main` branch. It installs dependencies, compiles the TypeScript code
(`npm run build`), and runs the Jest test suite (`npm test`).

The email validator checks:
- the presence of exactly one `@`,
- no spaces,
- text before and after `@`,
- at least one dot `.` in the domain part (not as the last character).

## Run tests
```bash
npm test
```
## CI pipeline
The workflow is defined in `.github/workflows/ci.yml` and runs the build + tests on `push` and `pull_request`.