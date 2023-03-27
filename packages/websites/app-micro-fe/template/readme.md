# app-micro-fe template service (micro-frontend)

Web template micro-frontend service example, can be run as for a standalone service locally for
development but not expected to be hosted as website standalone application (no `/public` folder).
Belongs to the parent micro-frontend service `app-micro-fe-container`.

This service can also be used a base to create additionnal micro-frontend service within the
`app-micro-fe` namespace.

### Files/Folders structures

This project is running with NextJS so it follows the framework directives (`/pages` `/public`
folders). For the rest all files are under `/src`.

Here is the complete structure:

```sh
.
├── pages/                     # Pages folder
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
