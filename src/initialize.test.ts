import env from './env';
import initialize from './initialize';

const mockEnv = env as jest.MockedObject<typeof env>;

afterEach(() => {
  jest.resetAllMocks();
});

describe('initialize', () => {
  test('it initializes env', () => {
    const params = {
      defaultLanguageTag: 'en',
      defaultLocale: { key: 'value' },
    };
    const expectedResult = {
      defaultLanguageTag: params.defaultLanguageTag,
      defaultLocale: params.defaultLocale,
      initialized: true,
    };

    initialize(params);

    expect(mockEnv).toStrictEqual(expectedResult);
  });
});
