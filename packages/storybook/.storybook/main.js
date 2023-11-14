module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    'storybook-react-intl',
  ],
  docs: { autodocs: 'tag' },
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // [Note]: Enable and add folder if any asset is needed
  // staticDirs: ['../public'],
  stories: [
    // [Note]: Enable if any story is added
    // '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  storyStoreV7: false,
};
