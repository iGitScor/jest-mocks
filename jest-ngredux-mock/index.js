const subscription = {};
subscription.unsubscribe = jest.fn();

const observer = {};
observer.subscribe = jest.fn().mockReturnValue(subscription);
observer.pipe = jest.fn().mockReturnValue(observer);

var NgReduxMock = jest.fn().mockImplementation(() => {
  var instance = {};
  instance.configureStore = jest.fn();
  instance.configureSubStore = jest.fn();
  instance.dispatch = jest.fn().mockReturnValue(instance);
  instance.getState = jest.fn();
  instance.provideStore = jest.fn();
  instance.replaceReducer = jest.fn();
  instance.select = jest.fn().mockReturnValue(observer);
  instance.subscribe = jest.fn().mockReturnValue(subscription);

  return instance;
});

exports.ngReduxMock = NgReduxMock();
