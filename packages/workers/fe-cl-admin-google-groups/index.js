const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

const allowedOrigins = [
  'https://admin-portal.domain.com',
  'https://stg-admin-portal.domain.com',
  'https://fe-admin-portal-google-groups.dev',
  'http://localhost:3000',
];

const allowedDomainOrigins = ['fe-stg-admin-portal.pages.dev'];

async function handleRequest(request) {
  const jwt = request.headers.get('CF_Authorization');
  const url = 'https://organization_name.cloudflareaccess.com/cdn-cgi/access/get-identity';

  const data = await fetch(url, {
    method: 'GET',
    headers: { Cookie: `CF_Authorization=${jwt};` },
  });

  const { readable, writable } = new TransformStream();
  data.body.pipeTo(writable);

  const response = new Response(readable, data);
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

  return response;
}

function handleOptions(request) {
  if (
    request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    request.headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS pre-flight request.
    return new Response(null, { headers: corsHeaders });
  }
  // Handle standard OPTIONS request.
  return new Response(null, { headers: { Allow: 'GET, HEAD, OPTIONS' } });
}

async function handle(request) {
  if (request.method === 'OPTIONS') {
    return handleOptions(request);
  }
  if (request.method === 'GET' || request.method === 'HEAD') {
    const origin = request.headers.get('Origin');
    if (allowedOrigins.includes(origin) || allowedDomainOrigins.some(d => origin.endsWith(d))) {
      return handleRequest(request);
    }
    return new Response(null, {
      status: 403,
      statusText: 'Forbidden',
    });
  }
  return new Response(null, {
    status: 405,
    statusText: 'Method Not Allowed',
  });
}

// eslint-disable-next-line no-restricted-globals
addEventListener('fetch', event => {
  event.respondWith(
    handle(event.request)
      // For ease of debugging, we return exception stack
      // traces in response bodies. You are advised to
      // remove this .catch() in production.
      .catch(e => new Response(e.stack, { status: 500, statusText: 'Internal Server Error' })),
  );
});
