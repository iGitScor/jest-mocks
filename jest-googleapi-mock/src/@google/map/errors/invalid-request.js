const INVALID_REQUEST = {
  status: 400,
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    date: 'Fri, 02 Mar 2018 15:43:10 GMT',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    'cache-control': 'no-cache, must-revalidate',
    'access-control-allow-origin': '*',
    server: 'mafe',
    'x-xss-protection': '1; mode=block',
    'x-frame-options': 'SAMEORIGIN',
    'alt-svc':
      'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338;quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
    'accept-ranges': 'none',
    vary: 'Accept-Encoding',
    connection: 'close'
  },
  json: {
    error_message:
      "Invalid request. Missing the 'address', 'bounds', 'components', 'latlng' or 'place_id' parameter.",
    results: [],
    status: 'INVALID_REQUEST'
  },
  requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?key=GOOGLEKEY',
  query: { key: 'GOOGLEKEY' }
};

export { INVALID_REQUEST };
