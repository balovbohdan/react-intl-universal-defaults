import env from './env';

test('env', () => {
  expect(env).toMatchSnapshot();
});
