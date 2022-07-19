import {handlerParams} from './';

describe('handler', () => {
  test('handlerParams url', () => {
    const url = handlerParams('http://localhost:8080/', undefined);
    expect(url === 'http://localhost:8080/').toBeTruthy();
  });

  test('handlerParams url and params', () => {
    const url = handlerParams('http://localhost:8080/', {
      name: 'test',
      page: 1,
    });
    expect(url === 'http://localhost:8080/?name=test&page=1').toBeTruthy();
  });
});
