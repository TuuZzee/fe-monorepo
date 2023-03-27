# web-micro-fe-container namespace - Standalone service

This is the shell (container) of the web-micro-fe project (sample app). It's used to load all other
`web-micro-fe-name` service based on url (page) on build time. We might use a Module Federation
approach once it's supported natively on Next.js or any alternative that we will have validated.

## Requirements

Make sure to complete the monorepo installation first
[fe-monorepo/README.md](https://github.com/TuuZzee/fe-monorepo#installation).

### Development Workflow

Start a live-reload development server:

```sh
# from ./packages/websites/app-micro-fe/container
yarn dev
# or from ./
yarn workspace @namespace/web-app-micro-fe-container dev
```

Generate a prod build:

```sh
# from ./packages/websites/app-micro-fe/container
yarn build
# or from ./
yarn workspace @namespace/web-app-micro-fe-container build
```

### Envs / Hosting

This repository is using Github Actions to deploy to proper environements. Staging deployment is
trigger on merge in `develop` and on `stg-web-app-micro-fe-container` branch. For production
release, just merge to `main` branch.

Production:

- [Cloudflare page project](https://dash.cloudflare.com/df1f6bd1816b52c66006197deda8d8fb/pages/view/fe-prod-web-app-micro-fe-container)
- [Child repository](https://github.com/TuuZzee/fe-prod-web-app-micro-fe-container)
- [Demo domain](fe-prod-web-app-micro-fe-container.pages.dev)

Staging:

- [Cloudflare page project](https://dash.cloudflare.com/df1f6bd1816b52c66006197deda8d8fb/pages/view/fe-stg-web-app-micro-fe-container)
- [Child repository](https://github.com/TuuZzee/fe-stg-web-app-micro-fe-container)
- [Demo domain](fe-stg-web-app-micro-fe.pages.dev)

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

### How to add a new micro-service (load workspace in container)

Working as the container application, you can add services as follow:

- Create a new worskpace project `web-micro-fe-name` (you can use the
  `packages/websites/app-micro-fe/template` as a template/example), make sure to set the correct
  fiedl in the package.json file.

```sh
# packages/websites/app-micro-fe/template/package.json
{
  "name": "@namespace/web-app-micro-fe-template",
  "version": "0.1.0",
  "private": true,
  [...]
}
```

- Add the new workspace in the `package.json` dependencies

```sh
# packages/websites/app-micro-fe/container/package.json - example with web-app-micro-fe-template
"dependencies": {
  "@namespace/web-app-micro-fe-template": "0.1.0",
  "@namespace/web-shared": "0.1.0"
  [...]
},
```

- Import the root component in a page or somewhere in the web-micro-fe-container workspace.

```javascript
// packages/websites/app-micro-fe/container/pages/template.js - example of service import with a page
import React from 'react';
import { connect } from 'react-redux';

import Template from '@namespace/web-app-micro-fe-template/src/components/Template';
import wordingPage from '@namespace/web-app-micro-fe-template/src/locale/template';

import Layout from '../src/components/shared/Layout';

const TemplatePage = function () {
  return (
    <Layout wordingPage={wordingPage}>
      <Template />
    </Layout>
  );
};

export default connect()(TemplatePage);
```

- If that service has a redux store make sure to import it as well in the reducer list when building
  the store

```javascript
// packages/websites/app-micro-fe/container/src/redux/modules/index.js
import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { HYDRATE } from 'next-redux-wrapper';

import todosTemplate from '@namespace/web-app-micro-fe-template/src/redux/modules/todosTemplate';

// [...]

const reducers = {
  // [...]
  todosTemplate,
  // [...]
};

export default combineReducers(reducers);
```
