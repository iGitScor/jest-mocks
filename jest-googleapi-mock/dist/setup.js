'use strict';

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
    'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338;quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
    'accept-ranges': 'none',
    vary: 'Accept-Encoding',
    connection: 'close'
  },
  json: {
    error_message: "Invalid request. Missing the 'address', 'bounds', 'components', 'latlng' or 'place_id' parameter.",
    results: [],
    status: 'INVALID_REQUEST'
  },
  requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?key=GOOGLEKEY',
  query: { key: 'GOOGLEKEY' }
};

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
    'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
    'accept-ranges': 'none',
    vary: 'Accept-Language,Accept-Encoding',
    connection: 'close'
  },
  json: { results: [], status: 'ZERO_RESULTS' },
  requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=🚫::-&key=GOOGLEKEY',
  query: { address: '🚫::-', key: 'GOOGLEKEY' }
};

const RESULT = {
  status: 200,
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    date: 'Fri, 02 Mar 2018 15:52:40 GMT',
    expires: 'Sat, 03 Mar2018 15:52:40 GMT',
    'cache-control': 'public, max-age=86400',
    'access-control-allow-origin': '*',
    server: 'mafe',
    'x-xss-protection': '1; mode=block',
    'x-frame-options': 'SAMEORIGIN',
    'alt-svc': 'hq=":443"; ma=2592000; quic=51303431; quic=51303339; quic=51303338; quic=51303337; quic=51303335,quic=":443"; ma=2592000; v="41,39,38,37,35"',
    'accept-ranges': 'none',
    vary: 'Accept-Language,Accept-Encoding',
    connection: 'close'
  },
  json: {
    results: [{
      address_components: [{ long_name: '827', short_name: '827', types: ['street_number'] }, {
        long_name: 'Chemin du Mas de Vignolles',
        short_name: 'Chemin du Mas de Vignolles',
        types: ['route']
      }, {
        long_name: 'Nîmes',
        short_name: 'Nîmes',
        types: ['locality', 'political']
      }, {
        long_name: 'Gard',
        short_name: 'Gard',
        types: ['administrative_area_level_2', 'political']
      }, {
        long_name: 'Occitanie',
        short_name: 'Occitanie',
        types: ['administrative_area_level_1', 'political']
      }, {
        long_name: 'France',
        short_name: 'FR',
        types: ['country', 'political']
      }, { long_name: '30900', short_name: '30900', types: ['postal_code'] }],
      formatted_address: '827 Chemin du Mas de Vignolles, 30900 Nîmes, France',
      geometry: {
        location: { lat: 43.8158633, lng: 4.363384900000001 },
        location_type: 'RANGE_INTERPOLATED',
        viewport: {
          northeast: { lat: 43.8172122802915, lng: 4.364733880291503 },
          southwest: { lat: 43.8145143197085, lng: 4.362035919708498 }
        }
      },
      partial_match: true,
      place_id: 'EjQ4MjcgQ2hlbWluIGR1IE1hcyBkZSBWaWdub2xsZXMsIDMwOTAwIE7Drm1lcywgRnJhbmNl',
      types: ['street_address']
    }],
    status: 'OK'
  },
  requestUrl: 'https://maps.googleapis.com/maps/api/geocode/json?address=827%20Chemin%20du%20Mas%20de%20Vignolles%2C%2030000%20N%C3%AEmes%2C%20France&key=GOOGLEKEY',
  query: {
    address: '827 Chemin du Mas de Vignolles, 30000 Nîmes, France',
    key: 'GOOGLEKEY'
  }
};

class Geocode {
  constructor(jest, config) {
    Object.defineProperty(this, 'geocode', {
      enumerable: false,
      value: jest.fn((options, cb) => {
        if (config.key === '🚫') {
          throw 'Missing either a valid API key, or a client ID and secret';
        }
        if (options.address || options.bounds || options.components || options.latlng || options.place_id) {
          let resultType = RESULT;
          if (options.address) {
            const parts = options.address.split('::');
            switch (parts[0]) {
              case '🚫':
                resultType = EMPTY;
                break;

              default:
                break;
            }
          }

          return cb(null, resultType);
        } else {
          return cb(INVALID_REQUEST);
        }
      })
    });
  }
}

module.exports.createClient = jest.fn(config => {
  return new Geocode(jest, config);
});
//# sourceMappingURL=setup.js.map
