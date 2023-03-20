export const config = { runtime: 'edge' };

// Note: For Github action
// CLI to remove: sed -i 's/\//g' packages/websites/engineering-portal/pages/api/

export default function onRequest() {
  return fetch('https://[org_domain].cloudflareaccess.com/cdn-cgi/access/get-identity', {
    method: 'GET',
    credentials: true,
  });
}
