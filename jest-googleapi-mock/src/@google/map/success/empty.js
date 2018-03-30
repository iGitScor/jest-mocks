const EMPTY = {
  status: 200,
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    date: 'Fri, 02 Mar 2018 15:51:07 GMT',
    expires: 'Sat, 03 Mar2018 15:51:07 GMT',
    'cache-control': 'public, max-age=86400',
    'access-control-allow-origin': '*',
    server: 'mafe',
    'x-xss-protection': '1; mode=block',
    'x-frame-options': 'SAMEORIGIN',
    'alt-svc':
      'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
    'accept-ranges': 'none',
    vary: 'Accept-Language,Accept-Encoding',
    connection: 'close'
  },
  json: { results: [], status: 'ZERO_RESULTS' },
  requestUrl:
    'https://maps.googleapis.com/maps/api/geocode/json?address=🚫::-&key=GOOGLEKEY',
  query: { address: '🚫::-', key: 'GOOGLEKEY' }
};

export { EMPTY };
