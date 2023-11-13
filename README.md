# Frontend Monorepo

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This is a Monorepo for front-end services. Currently all services are Next.js applications and
mostly based from the [fe-boilerplate-NextJs](https://github.com/TuuZzee/boilerplate-NextJS). It
makes use of Lerna and Yarn workspace to organize and manage the namespace and dependencies. And
also a close to Micro-frontend approach for each of the NextJS project/service. All should be able
to run as standalone locally and some can be deployed on Cloud Service as full applications
depending of the need.

**Motto:** Both lazy and efficient—it does the least amount of work possible and it tries to never
redo work that's already been done before.

> “I will always choose a lazy person to do a difficult job because a lazy person will find an easy
> way to do it.” Somebody said that.

## Contents

- [Context](#context)
- [Requirements](#requirements)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Legacy projects](#legacy-projects)
- [Monorepo structure](#monorepo-structure)
- [Git branches and commits conventions](#git-branches-and-commits-conventions)
- [CI/CD](#ci-cd)
- [Tools and scripts](#tools-and-scripts)

## Context

There use to be a time when all projects within a company who might be using different tech stack
and versions, this can be due to various reasons (ex: existance of legacy services, ongoing
migration etc...) this makes maintenance and development quite troublesome.

So here comes this monorepo infrastructure for frontend service/project. This allow to host a single
tech stack and to used across multiple service/project. It also allow to keep trace of other project
that might not yet share the same stack in a specific namespace in `/legacy`. More on this later.

## Requirements

You need to have `yarn` installed. Recommend using [n](https://github.com/tj/n) to manage node
version more easily. Node version recommended: v20.9.0

```sh
# Install npm
brew install npm
# Install n
npm install -g n
# Install node version v20.9.0
n v20.9.0
# Install yarn
npm install --global yarn
# Install lerna
npm install --global lerna
```

## Installation

This workspace is build using [Lerna](https://github.com/lerna/lerna) and
[Yarn workspaces](https://yarnpkg.com/features/workspaces). Lerna has a lot of available commands
and tools, especially for packages publishing (open source)

```sh
# Clone the repository
git clone repo_address # ToDo
```

[optional] If you are using VS Code and want to use the workspace default presets

```sh
cd fe-workspaces/.vscode
# copy the template and open it with VS Code
cp fe-monorepo-code-workspace fe-monorepo.code-workspace
code fe-monorepo.code-workspace
```

Setup the workspace projects

```sh
# Then from the root folder of the repo, install all the dependencies
yarn bootstrap
# or
yarn install
# Start all the local proxies to avoid CORS issues in local development
yarn start:proxies
# From there you can run all the projects with:
yarn dev
# if you wan to run only a specify service
yarn workspace @namespace/storybook dev
```

## Dependencies package.json files (excluding legacy folder)

All the namespace are using Javascript, with the exception of the engineering portal template which
is currently benchmarking a potential move to Typescript as well as some other tools (Redux Toolkit,
Tailwind etc...)

The following dependencies are installed **globally** and ready for use in all micro-service within
the monorepo:

- [React](https://reactjs.org/) _JavaScript library for creating user interfaces_
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) _Runtime type
  checking for React props and similar objects._
- [Redux](https://redux.js.org/) _Predictable state container for JavaScript apps_
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) _Thunk middleware for Redux._
- [Immutable](https://github.com/immutable-js/immutable-js) _Provides many Persistent Immutable data
  structures_
- [Axios](https://github.com/axios/axios) _Promise based HTTP client for the browser and node.js_
- [Eslint](https://eslint.org/) _Tool for identifying and reporting on patterns found in
  ECMAScript/JavaScript code_
- [Stylelint](https://stylelint.io/) _A mighty, modern linter that helps you avoid errors and
  enforce conventions in your styles._
- [Prettier](https://prettier.io/) _Prettier is an opinionated code formatter_
- [react-redux-toastr](https://github.com/diegoddox/react-redux-toastr) _React toastr message
  implemented with Redux_
- [RSuite](https://rsuitejs.com/) _A suite of React components, sensible UI design, and a friendly
  development experience._
- [styled-components](https://styled-components.com/) _Visual primitives for the component age. Use
  the best bits of ES6 and CSS to style your apps without stress_

**IMPORTANT NOTE:** dependencies scopes (package installations)

- Global (used in all services) should be set in the main `package.json` as `dependencies` and used
  as `peerDependencies` in the `packages/*/package.json` service files
- `devDependencies` should be in the main `package.json` except if it's only specific to a service,
  then it goes in the `packages/*/package.json` service files
- Local dependencies can be install as `dependencies` in the `packages/*/package.json` service files
  (make sure those are unique to the service)

When edition or changing any dependencies make sure to run `yarn bootstrap` from the root folder to
re-link local packages together.

## Legacy projects

Possible legacy project can be moved in there, those aren't using lerna and aren't part of the
Global dependencies setup. The idea is to move potencial legacy project in there to keep track of
them more easily in a central location. This can help for incremental migration or potential service
rewrite.

## Monorepo structure

The default standard in terms of project/service - workspaces structure must be followed. All are
under `packages` folder, each named as with the `@namespace/service-name` convention.

For workspaces belonging to the same root project we are using a prefix in the name. (ex: `web-`).

The folder name and @namespace name **MUST** be the same.

Repo file folder structure:

```sh
├── .github/                   # Workflow files (Github Actions)
├── husky/                     # Husky config and scripts (pre-commits hook)
├── legacy/                    # Legacy directory with projects mentioned previously
├── packages/                  # Workspaces directory
│   ├── storybook              # Storybook workspace - indexed React components (based on RSuite)
│   ├── workers                # workers namespaces - cloud functions
│   ├── websites               # website apps namespaces - NextJS apps
├── .codeclimate.yml
├── .editorconfig
├── .eslintignore              # Global Eslint ignore files/folder
├── .eslintrc.js               # Global Eslint config
├── .gitignore                 # Global Git ignore files/folders
├── .lintstagedrc.json         # LintStaged config
├── .prettierignore            # Global Prettier ignore files/folder
├── .prettierrc                # Global Prettier config
├── .snyk                      # Global Snyk issue tracking
├── .stylelintignore           # Global Stylelint ignore files/folders
├── .stylelintrc               # Global Stylelint config
├── package.json
├── yarn.lock
└── README.md
```

**NOTE:** All configs for Git/Eslint/Prettier/StyleLint can be overridden inside each workspace if
needed.

**NOTE:** Each @namespace/web- can be either a **Standalone** or a **Micro frontend** service.
Standalone services can load one or more Micro frontend service. Only Standalone services can
contain a build/ and public/ folder as well as jsconfig.json file.

## Git branches and commits conventions

Make sure to follow the git branches naming conventions pattern =>
`typeOfChanges/scopeOfChanges/titleOfChanges`. Here is a breakdown of each section for better
context:

- `typeOfChanges` can be one of the following:

```
feat:       A new feature
fix:        A bug fix
docs:       Documentation only changes
style:      Changes that do not affect the meaning of the code (white-space, formatting...)
refactor:   A code change that neither fixes a bug nor adds a feature
perf:       A code change that improves performance
test:       Adding missing tests or correcting existing tests
build:      Changes that affect the build system or external dependencies
ci:         Changes to our CI configuration files and scripts
chore:      Other changes that don't modify src or test files
revert:     Reverts a previous commit
```

- `scopeOfChanges` correspond to the packages that are affected by changes
- `titleOfChanges` correspond to a Jira ticket number + a quick title summary of the changes are
  about

For example:

```sh
git checkout -b feat/web-app/ticketId-my-awesome-feature
```

Make sure to provide a description of your changes on each commit. Not just `fix` :) The project is
using Commitizen for contributors, you'll be prompted to fill out any required commit fields at
commit time. This will help to have consistent and clean commit message in the history. Make sure to
at least use it on your last commit so we can use the content on the squash event.

```sh
# Add your changes
git add .
# And commit
yarn commit
# follow the instruction and push!
git push origin branch_name
```

### Release Process

For all services in this repository, there are 2 root branches in use:

```
main:     use for production deployment (prod sync), all handled by Github action (see below)
develop:  use for development work, for any new work this is the branch to start from (except for Prod hot fix)
```

Both of this branch share the same protection level, **to get work merged in any of those a PR is
necessary with a minimum of 1 peer approval**.

In order to conduct a production release process is as follow:

- Create a branch release from `main` branch with the name formated like
  `releases/scope/versionNumber` ex: `releases/global/v1.0.0.`
- From there cherry pick the commit(s) SHA available on `develop` branch that needs to go into
  production.
- Open a PR from that release branch and target main, have peers to sign-off and validate the
  release commits items list. No need to code review the files changes on this step since this is
  already done before mergin into `develop` branch
- Wait for the Preview deployment to be completed and make sure everything is in order
- Make sure all the checks are in the green (Github Actions workflows on the PR)
- Merge the release PR to main with a squash-merge strategy

## CI/CD

Github Actions are used to deploy to proper environments.

The hosting is handle by Cloudflare pages for websites, in order to deploy over the cloud service we
are using Github actions. For workers wrangler

In order to deploy to Cloudflare pages, a project must be associated to a repository (currently
doesn't support monorepo setups). To handle this flow we are using "child" repository which are only
used as read only repo with the builded and compiled projects.

The flow is as follow:

1. From the fe-monorepo

- install dependencies (or load them from cache)
- build and export the project
- push the compiled project to a child repository for Cloudflare deployment

2. From the "child" repository

- on push trigger Cloudflare page build

[Note1]: Staging envs are also using previews for testing features and others items. The branch
rules and formats are the followings:

- Staging => `develop` and `stg-namespace-service-name` branches
- Previews => `test-stg/*` branches, this create a preview using the branch name on the service
  Cloudflare pages.

For the later ex: `test-stg/web-template/feature-a` deploys to
`test-stg-web-template-feature-a.fe-stg-web-template.pages.dev` (branch name should be under 28
caracters so it can be reflected on the domain otherwise it justs cut it :D )

[Note2]: Deployment triggers, Cloudflare Page projects and child repositories are referred in their
respective @namespace readme files.

## Tools and scripts

The project is using `husky` and `lint-staged` with which are configure to run on git pre-commit
hooks. During this phase the code is going to be checked with Eslint and Prettier and
auto-formate/fixed when possible. A Code Checker Github action is set with the same settings and
will be executed on every Pull Request creation.

Validate Javascript files with Eslint:

```sh
yarn jsLint
```

Validate CSS and Styled Component code with StyleLint:

```sh
yarn cssLint
```

## Unit testing

Currently only set up **storybook**.

You can run all the workspace tests using.

```sh
yarn test
```

Or run specific packages that have jest set up in them.

```sh
yarn test:project projectName
```

Useful options to add to the commands are:

- `-t testSerial`: Run tests (matching on `it`/`describe`) that contains the testName (ex: STBK.BTTN
  for storybook buttons feature tests, assuming the test name contain the serialized feature name)

```sh
yarn test:project storybook -t STBK.BTTN
```

**For VS Code users**.

If you use the Monorepo Workspace extension the @legacy workspace might disappear when setting
workspace scope (when doing a 'Monorepo: Select Workspace Folder') This is due to the fact that the
`@legacy` (`./legacy/**`) are currently isolated to not be linked when doing a `lerna bootstrap` You
can reset the VS Code workspace settings by using the template:

```sh
# From the root of the repository
cp .vscode/fe-monorepo-code-workspace .vscode/fe-monorepo.code-workspace
# reopen a new VS Code
code fe-monorepo.code-workspace
```

For StyleLint extensions usage, make sure to add `postcss` and `javacript` in the list of
`StyleLint: Validate` section. More about this
[here](https://github.com/styled-components/styled-components/issues/3607#issuecomment-1000937952)
