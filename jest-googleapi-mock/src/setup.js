import { Geocode } from './@google/map/geocode';

module.exports.createClient = jest.fn((config) => { return new Geocode(jest, config) });
