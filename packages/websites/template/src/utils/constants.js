export default {
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  api: {
    host: process.env.NEXT_PUBLIC_API_HOST,
    timeout: process.env.NEXT_PUBLIC_API_TIMEOUT,
    version: 'v1',
  },
};
