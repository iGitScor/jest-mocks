var NgReduxMock = (function() {
  function NgReduxMock() {
    this.configureStore = jest.fn();
    this.configureSubStore = jest.fn();
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.provideStore = jest.fn();
    this.replaceReducer = jest.fn();
    this.select = jest.fn();
    this.subscribe = jest.fn();
  }
  return NgReduxMock;
})({});

var ngReduxMock = new NgReduxMock();
ngReduxMock.select.mockReturnValue(ngReduxMock);

exports.ngReduxMock = ngReduxMock;
