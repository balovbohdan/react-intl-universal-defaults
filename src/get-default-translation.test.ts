import getDefaultTranslation from './get-default-translation';

describe('get-default-translation', () => {
  test('it works w/o options', () => {
    const key = 'key';
    const defaultLanguageTag = 'en';
    const defaultLocale = { [key]: 'value' };
    const translation = getDefaultTranslation({
      key,
      defaultLanguageTag,
      defaultLocale,
    });
    const expectedResult = defaultLocale[key];

    expect(translation).toStrictEqual(expectedResult);
  });
  
  test('it works with options', () => {
    const key = 'greeting';
    const defaultLanguageTag = 'en';
    const defaultLocale = { [key]: 'I am {name}' };
    const options = { name: 'Test Name' };
    const translation = getDefaultTranslation({
      key,
      defaultLanguageTag,
      defaultLocale,
      options,
    });
    const expectedResult = defaultLocale[key].replace('{name}', options.name);

    expect(translation).toStrictEqual(expectedResult);
  });

  test('it returns template when options are invalid', () => {
    const key = 'greeting';
    const defaultLanguageTag = 'en';
    const defaultLocale = { [key]: 'I am {name}' };
    const options = { surname: 'Test Name' };
    const translation = getDefaultTranslation({
      key,
      defaultLanguageTag,
      defaultLocale,
      options,
    });
    const expectedResult = defaultLocale[key];

    expect(translation).toStrictEqual(expectedResult);
  });
});
