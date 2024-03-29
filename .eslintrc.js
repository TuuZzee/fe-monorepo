module.exports = {
  env: { browser: true, es6: true, jest: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:lodash-fp/recommended',
    'plugin:playwright/playwright-test',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:workspaces/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly', google: 'readonly' },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: { presets: ['@babel/preset-react'] },
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: [
    'import',
    'jest-dom',
    'jest',
    'jsx-a11y',
    'lodash-fp',
    'no-secrets',
    'prettier',
    'react-hooks',
    'react',
    'security',
    'testing-library',
    'workspaces',
  ],
  rules: {
    camelcase: ['error', {}],
    'func-names': ['error', 'as-needed'],
    'default-case': ['error', { commentPattern: '^skip\\sdefault' }],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always-and-inside-groups',
        pathGroups: [
          {
            pattern: '@namespace/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'react'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-console': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['draft', 'stateValidate'],
      },
    ],
    'no-secrets/no-secrets': 'error',
    'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-nested-ternary': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        bracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 100,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-sort-props': [1, { multiline: 'last' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-one-expression-per-line': 'off', // Conflicts with prettier
    'react/jsx-curly-newline': 'off', // Conflicts with prettier
    'react/jsx-props-no-spreading': 'off', // Off since prop-types should protect agains this, nice to have for storybook
    'react/prop-types': ['error', { ignore: ['containerStore'] }],
    'security/detect-object-injection': 'off',
  },
  overrides: [
    {
      files: ['./scripts/*.js'],
      rules: {
        'import/no-dynamic-require': 'off',
        'no-console': 'off',
        'security/detect-child-process': 'off',
        'security/detect-non-literal-require': 'off',
      },
    },
    {
      files: ['./**/*.ts', './**/*.tsx'],
      plugins: ['@typescript-eslint', 'import'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./packages/websites/engineering-portal/tsconfig.json'],
      },
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'no-use-before-define': 'off',
        'import/no-unresolved': 'error',
        'import/extensions': [
          'error',
          'ignorePackages',
          { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
        ],
      },
      settings: {
        'import/extensions': ['.ts', '.tsx'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: 'grafana-plugins/*/tsconfig.json',
          },
          node: {
            extensions: ['.ts', '.tsx'],
          },
        },
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
};
