# web-template namespace - Standalone service

Website template NextJs application.

## Requirements

Make sure to complete the monorepo installation first
[fe-monorepo/README.md](https://github.com/TuuZzee/fe-monorepo#installation).

### Development Workflow

Start a live-reload development server:

```sh
# from ./packages/websites/template
yarn dev
# or from ./
yarn workspace @namespace/web-template dev
```

Generate a prod build:

```sh
# from ./packages/websites/template
yarn build
# or from ./
yarn workspace @namespace/web-template build
```

### Envs / Hosting

This repository is using Github Actions to deploy to proper environements. Staging deployment is
trigger on merge in `develop` and on `stg-web-template` branch. For production release, just merge
to `main` branch.

Production:

- No production env set at the moment

Staging:

- [Cloudflare page project](https://dash.cloudflare.com/df1f6bd1816b52c66006197deda8d8fb/pages/view/fe-stg-web-template)
- [Child repository](https://github.com/TuuZzee/fe-stg-web-template)
- [Demo domain](fe-stg-web-template.pages.dev)

```bash
# Example with awesome-feature-branch
git push origin awesome-feature-branch:stg-web-app-micro-fe --force
```

### Files/Folders structures

This project is running with NextJS so it follows the framework directives (`/pages` `/public`
folders). For the rest all files are under `/src`.

Here is the complete structure:

```sh
.
├── build/                     # Build folder (contains deploy folder for hosting and env files)
├── pages/                     # Pages folder
├── public/                    # Public assets
│ ├── img/                     # img assets
├── src/                       # Source files
│ ├── components/              # React Compoments
│ ├── context/                 # React Contexts
│ ├── locale/                  # Locale wording
│ ├── redux/                   # Redux modules (use Ducks patern)
│ ├── styles/                  # Global styling and pkgs styling imports
│ └── utils/                   # Constants, Pkgs init, tools and utils
├── .babelrc
├──.eslintignore               # Local Eslint ignore files/folders
├──.eslintrc.js                # Local Eslint config
├──.gitignore                  # Local Git ignore files/folders
├──.snyk
├── next-config.js
├── package.json
├── yarn.lock
└── readme.md
```
