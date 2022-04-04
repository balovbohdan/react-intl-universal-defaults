import * as intl from 'react-intl-universal';

import t from './t';
import initialize from './initialize';

const enLocale = {
  key: 'value',
  keyHtml: '<span>value</span>',
  greeting: 'I am {name}',
  greetingHtml: '<span>I am {name}</span>',
};
const ukLocale = {
  someKey: 'значення',
};

describe('t - w/o defaults', () => {
  beforeAll(() => {
    intl.init({
      warningHandler: (message) => { console.warn(message); },
      currentLocale: 'en',
      fallbackLocale: 'en',
      locales: {
        en: enLocale,
        uk: ukLocale,
      },
    });
    initialize({
      defaultLanguageTag: 'en',
      defaultLocale: enLocale,
    });
  });

  test('it works w/o "html" param and w/o options', () => {
    const key = 'key';
    const result = t(key);
    const expectedResult = enLocale[key];

    expect(result).toStrictEqual(expectedResult);
  });

  test('it works with "html" param and w/o options', () => {
    const key = 'keyHtml';
    const result = t(key);
    const expectedResult = enLocale[key];

    expect(result).toStrictEqual(expectedResult);
  });

  test('it works w/o "html" param and with options', () => {
    const key = 'greeting';
    const options = { name: 'Test Name' };
    const result = t(key, options);
    const expectedResult = enLocale[key].replace('{name}', options.name);

    expect(result).toStrictEqual(expectedResult);
  });

  test('it works wwith "html" param and with options', () => {
    const key = 'greetingHtml';
    const options = { name: 'Test Name' };
    const result = t(key, options);
    const expectedResult = enLocale[key].replace('{name}', options.name);

    expect(result).toStrictEqual(expectedResult);
  });
});

describe('t - with defaults', () => {
  beforeAll(() => {
    intl.init({
      warningHandler: (message) => { console.warn(message); },
      currentLocale: 'uk',
      fallbackLocale: 'en',
      locales: {
        en: enLocale,
        uk: ukLocale,
      },
    });
    initialize({
      defaultLanguageTag: 'en',
      defaultLocale: enLocale,
    });
  });

  test('it works w/o "html" param and w/o options', () => {
    const key = 'key';
    const result = t(key);
    const expectedResult = enLocale[key];

    expect(result).toStrictEqual(expectedResult);
  });

  test('it works with "html" param and w/o options', () => {
    const key = 'keyHtml';
    const result = t(key);
    const expectedResult = enLocale[key];

    expect(result).toStrictEqual(expectedResult);
  });

  test('it works w/o "html" param and with options', () => {
    const key = 'greeting';
    const options = { name: 'Test Name' };
    const result = t(key, options);
    const expectedResult = enLocale[key].replace('{name}', options.name);

    expect(result).toStrictEqual(expectedResult);
  });

  test('it works wwith "html" param and with options', () => {
    const key = 'greetingHtml';
    const options = { name: 'Test Name' };
    const result = t(key, options);
    const expectedResult = enLocale[key].replace('{name}', options.name);

    expect(result).toStrictEqual(expectedResult);
  });
});
