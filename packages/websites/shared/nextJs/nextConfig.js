const env = process.env.NEXT_PUBLIC_APP_ENV;

module.exports = {
  crossOrigin: 'anonymous',
  // [Note]: needed to allow external imports
  // eslint-disable-next-line no-secrets/no-secrets
  // https://stackoverflow.com/questions/51137950/using-next-js-with-yarn-workspaces
  // https://github.com/vercel/next.js/pull/22867
  experimental: { externalDir: true },

  // Configuration for static export
  output: 'export',
  distDir: 'build/deploy/out',

  reactStrictMode: env && env !== 'production',
  // productionBrowserSourceMaps: true, // Uncomment if sourcemap is needed for monitoring/observability
};
