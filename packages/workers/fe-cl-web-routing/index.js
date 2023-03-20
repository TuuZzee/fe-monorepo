const host = PAGES_PROJECT;
const hostLegacy = PAGES_LEGACY_PROJECT;

const nextJsRoutes = []; // ex: ['/sign-up', '/sign-in']
const nextJsDynamicRoutes = []; // [{ startsWith: '/users/', endsWith: '/account' },];

function getNextJsDynamicRoutes(pathname) {
  let nextJsDynamicPage = null;

  nextJsDynamicRoutes.forEach(page => {
    if (pathname.startsWith(page.startsWith) && pathname.endsWith(page.endsWith)) {
      nextJsDynamicPage = page;
    }
  });
  return nextJsDynamicPage;
}

async function handleRequest(req) {
  let url = '';

  const reqUrl = new URL(req.url);
  const nextJsDynamicPage = getNextJsDynamicRoutes(reqUrl.pathname);

  if (reqUrl.pathname === '/') {
    url = `${host}/index.html`;
  } else if (nextJsRoutes.includes(reqUrl.pathname)) {
    url = `${host + reqUrl.pathname}.html`;
  } else if (nextJsDynamicPage) {
    url = `${host}${nextJsDynamicPage.startsWith}[id]${nextJsDynamicPage.endsWith}.html`;
  } else {
    url = hostLegacy;
  }

  return fetch(url);
}

// eslint-disable-next-line no-restricted-globals
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request));
});
