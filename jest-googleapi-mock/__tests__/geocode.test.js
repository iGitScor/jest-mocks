jest.mock('@google/maps', () => require('../src/setup'));
const googleMapsClient = require('@google/maps').createClient({});

describe('@google/map', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('googleMapsClient.geocode', () => {
    return new Promise((resolve, reject) => {
      googleMapsClient.geocode({
        address: 'Test'
      }, (err, response) => {
        if (!err) {
          resolve(response.json.results);
        } else {
          reject(err);
        }
      });
    }).then(address => {
      expect(address[0].formatted_address).toEqual(
        '827 Chemin du Mas de Vignolles, 30900 Nîmes, France'
      );
    });
  });

  test('googleMapsClient.geocode', () => {
    return new Promise((resolve, reject) => {
      googleMapsClient.geocode({
        place_id: '42'
      }, (err, response) => {
        if (!err) {
          resolve(response.json.results);
        } else {
          reject(err);
        }
      });
    }).then(address => {
      expect(address[0].formatted_address).toEqual(
        '827 Chemin du Mas de Vignolles, 30900 Nîmes, France'
      );
    });
  });

  test('googleMapsClient.geocode empty', () => {
    return new Promise((resolve, reject) => {
      googleMapsClient.geocode({
        address: '🚫::-'
      }, (err, response) => {
        if (!err) {
          resolve(response.json.results);
        } else {
          reject(err);
        }
      });
    }).then(address => {
      expect(address).toEqual([]);
    });
  });

  test('googleMapsClient.geocode invalid request', () => {
    return new Promise((resolve, reject) => {
      googleMapsClient.geocode({}, (err, response) => {
        if (!err) {
          resolve(response.json.results);
        } else {
          reject(err);
        }
      });
    }).catch(error => {
      expect(error).toBeDefined();
      expect(error.status).toEqual(400);
    });
  });

  test('googleMapsClient invalid key', () => {
    const invalidClient = require('@google/maps').createClient({ key: '🚫' });
    expect(
      new Promise((resolve, reject) => {
        invalidClient.geocode({}, (err, response) => {
          console.log(err);
          if (!err) {
            resolve(response.json.results);
          } else {
            reject(err);
          }
        });
      }).catch(error => [error])
    ).resolves.toEqual(['Missing either a valid API key, or a client ID and secret']);
  })
});
