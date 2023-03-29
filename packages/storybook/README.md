# UI components library with Next.js & Storybook

This is a UI components library for the convenient use of components in the Monorepo packages.
Benefits of building components and showcasing them in Storybook:

- Build components in isolation
- Test hard to reach use cases
- Document UI components

> Storybook is especially helpful if you are working on a large project or in a team. Once a project
> gets too big, it is impossible to remember all of the components you built. If you are working in
> a team, all developers can find components used in your app to prevent repeating code.
> [Source](https://javascript.plainenglish.io/why-you-should-use-storybook-for-your-next-project-1a991e6a8e65)

## How to run

Run Storybook (to check Storybook environment of components):

```bash
# make sure that the root dependencies are all installed
yarn dev
```

### UI Components Library Structure

This project is running with NextJS so it follows the framework directives (`/pages` `/public`
folders). UI Components in `/src/components` folder. For Storybook look `.storybook` and `stories`.

Here is the complete structure:

```sh

├──.storybook                  # Storybook config
├── build/                     # Build Folders for config files
├── public/                    # Public assets
│ ├── img/                     # img assets
├── src/                       # Source files
│ ├── components/              # React Atomic Compoments
├── stories/                   # Storybook stories (component imported here for Storybook use)
├── styles/                    # Global styling and pkgs styling imports
├── .babelrc
├──.gitignore                  # Local Git ignore files/folders
├── package.json
└── readme.md

```

### Storybook components title path

```
in stories/**/*.stories.jsx files
```

title's path should consist of <project name>/<type of component>/<atom name> as shown in an example
below:

```sh
title: `${projects.web-template}/${componentTypes.atom}/Buttons`,
```

Learn more about [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) (atomes,
molecules, organisms etc.)

### Hosting

This repository is using Github Actions to deploy to proper environements. Deployment is trigger on
merge in `develop` branch.

Production:

- [Cloudflare page project](https://dash.cloudflare.com/df1f6bd1816b52c66006197deda8d8fb/pages/view/fe-storybook-hosting)
- [Child repository](https://github.com/TuuZzee/fe-storybook-hosting)
- [Demo domain](fe-storybook-hosting-9l0.pages.dev)

## Learn More

To learn more about Storybook & Next.js, take a look at the following resources:

- [Storybook with Next.js ](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/) -
  was usefull for setup Storybook POC.
- [Storybook documentation](https://storybook.js.org/).
