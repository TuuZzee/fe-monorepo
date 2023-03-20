module.exports = {
  // [ToDo]: need to setup a jsLint script within the service instead of using root
  // https://stackoverflow.com/questions/69688125/eslint-doesnt-respect-jsconfig-paths
  // [Note]: make sure to add the needed aliases in the namespace jsconfig.json file
  globalAliases: [
    ['@/components', './src/components'],
    ['@/contexts', './src/contexts'],
    ['@/hooks', './src/hooks'],
    ['@/locale', './src/locale'],
    ['@/reduxModules', './src/redux/modules'],
    ['@/redux', './src/redux'],
    ['@/requests', './src/requests'],
    ['@/service', './service.config.js'],
    ['@/styles', './src/styles'],
    ['@/styledComponents', './src/styles/styledComponents/'],
    ['@/utils', './src/utils'],
  ],
  globalRules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  globalExtends: ['../../../.eslintrc.js', 'plugin:@next/next/recommended'],
};
