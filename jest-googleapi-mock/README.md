Use this module with [Jest](https://facebook.github.io/jest/) to run web tests
that rely on `@google/map` package where you want to mock the API functions.

This module has no runtime dependencies so your project won't pull in additional
module dependencies by using this.

## Install

This should only be installed as a development dependency (`devDependencies`) as
it is only designed for testing. The module is transpiled via
[babel](https://github.com/babel/babel) to support the current active Node LTS
version (6).

yarn:

```bash
yarn add --dev jest-googleapi-mock
```

npm:

```bash
npm i --save-dev jest-googleapi-mock
```

## Setup

The simplest setup is to use the [module](#module) system, you may also choose
to create a [setup file](#setup-file) if needed.

### Module

In your `package.json` under the `jest`
[configuration section](https://facebook.github.io/jest/docs/en/configuration.html#content)
create a `setupFiles` array and add `jest-googleapi-mock` to the array.

```json
{
  "jest": {
    "setupFiles": ["jest-googleapi-mock"]
  }
}
```

If you already have a `setupFiles` attribute you can also append
`jest-googleapi-mock` to the array.

```json
{
  "jest": {
    "setupFiles": ["./__setups__/other.js", "jest-googleapi-mock"]
  }
}
```

### Setup file

Alternatively you can create a new setup file which then requires this module or
add the `require` statement to an existing setup file.

`__setups__/googleapi.js`

```js
import 'jest-googleapi-mock';
// or
require('jest-googleapi-mock');
```

Add that file to your `setupFiles` array:

```json
"jest": {
  "setupFiles": [
    "./__setups__/googleapi.js"
  ]
}
```

### In create-react-app

For a [create-react-app](https://github.com/facebookincubator/create-react-app)
project you can replace the
[suggested mock](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts/template#srcsetuptestsjs-1)
with this at the beginning of the existing `src/setupTests.js` file:

```js
require('jest-googleapi-mock');
```

## In tests

By including this in your Jest setup you'll allow tests that expect a
`googleapi` object to continue to run. The module can
also allow you to use the mocks provided to check that your googleapi is
being used as expected.

### Test Examples

Check that your `googleapi` calls were made when they were supposed to.

```js
test('should call googleapi', () => {
  return googleapi.geocode({
    address: 'Parc expo, 30000 Nimes, France'
  })
    .then((response) => {
      expect(response.json.results[0].formatted_address)
        .toEqual('827 Chemin du Mas de Vignolles, 30900 Nîmes, France');
    });
});
```

You can precise that you expect results `address: '✅::Parc expo, 30000 Nimes, France'`

#### No result

```js
test('should call googleapi', () => {
  return googleapi.geocode({
    address: '🚫::Boulevard Clara Morgane, 69000 Love City, France'
  })
    .then((response) => {
      expect(response.json.results.length).toEqual(0);
    });
});
```

#### Error

```js
test('should call googleapi', () => {
  expect.assertions(1);
  return expect(googleapi.geocode({})).rejects.toBeTruthy();
});
```
