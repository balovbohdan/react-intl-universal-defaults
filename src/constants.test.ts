import * as constants from './constants';

describe('constants', () => {
  test('ERRORS', () => {
    expect(constants.ERRORS).toMatchSnapshot();
  });
});
