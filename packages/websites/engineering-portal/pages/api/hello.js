export const config = { runtime: 'edge' };

export default function onRequest(req, res) {
  const data = { hello: 'world', req, res };
  const json = JSON.stringify(data, null, 2);

  return new Response(json, {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  });
}
