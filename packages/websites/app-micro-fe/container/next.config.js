const { merge } = require('lodash/fp');
const withImages = require('next-images');

const nextSharedConfig = require('@namespace/web-shared/nextJs/nextConfig');

module.exports = withImages(
  merge(nextSharedConfig, {
    images: { disableStaticImages: true },
  }),
);
