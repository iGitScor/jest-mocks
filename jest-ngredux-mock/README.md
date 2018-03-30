# Jest NgRedux Mock

Use this module with [Jest](https://facebook.github.io/jest/) to run web tests
that rely on `@angular-redux` package

## Usage 

```typescript
import { ngReduxMock } from 'jest-ngredux-mock'

describe('Module', () => {
  const mod = new ModuleWhichRelyOnRedux(ngReduxMock)

  it('should work', () => {
    ...
  })
})
```

where the (simplified) module looks like

```typescript
import { NgRedux } from '@angular-redux/store';

export class ModuleWhichRelyOnRedux {
  constructor(private ngRedux: NgRedux<any>,) {}
}
```
