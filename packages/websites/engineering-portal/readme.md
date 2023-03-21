# Engineering Portal - Standalone service

This service contains the new codebase of an Engineering Portal (internal).

[Note]: This project will be use to benchmark the following possible tech stack changes.

- Typescript - /!\Important: change the `"strict": false,` to `true` whenever possible in the
  `tsconfig.json`
- Redux Toolkit
- Tailwind
- NextJs New file/filder strutcure - previously `pages/` => `app/`

### Development Workflow

Start a live-reload development server:

```sh
yarn dev
```

Generate a prod build:

```sh
yarn build
```

This repository is using Github Actions to deploy to proper environements. In order to deploy to
Staging you can force push to the origin `stg-engineering-portal` branch, it's also setup to trigger
on develop branch when detecting changes in the project. For production release, just merge to
`main` branch.

### Envs / Hosting

Production:

- [Cloudflare page project](https://dash.cloudflare.com/[account_id]/pages/view/fe-prod-engineering-portal)
- [Child repository](https://github.com/TuuZzee/fe-prod-engineering-portal)
- https://engineering-portal.[org_domain].com/
- Build is triggered once a merge on main branch is completed

Staging:

- [Cloudflare page project](https://dash.cloudflare.com/[account_id]/pages/view/fe-stg-engineering-portal)
- [Child repository](https://github.com/TuuZzee/fe-stg-engineering-portal)
- https://stg-engineering-portal.[org_domain].com/
- Build can be triggered with a push on stg-engineering-portal branch and on develop branch

```bash
# Example with awesome-feature-branch
git push origin awesome-feature-branch:stg-engineering-portal --force
```

### Tools and scripts

The project is using `husky` and `lint-staged` with which are configure to run on git pre-commit
hooks. During this phase the code is going to be checked with Eslint and Prettier and
auto-formated/fixed when possible. A Code Checker Github action is set with the same settings and
will be executed on every Pull Request creation.

Validate Javascript/Typescript files with Eslint:

```sh
yarn jsLint
```
