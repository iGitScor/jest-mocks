import { INVALID_REQUEST } from './errors/invalid-request';
import { EMPTY } from './success/empty';
import { RESULT } from './success/result';

export class Geocode {
  constructor(jest, config) {
    Object.defineProperty(this, 'geocode', {
      enumerable: false,
      value: jest.fn((options, cb) => {
        if (config.key === '🚫') {
          throw 'Missing either a valid API key, or a client ID and secret';
        }
        if (
          options.address ||
          options.bounds ||
          options.components ||
          options.latlng ||
          options.place_id
        ) {
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
