import IntlMessageFormat from 'intl-messageformat';

import { Locale } from './types';

type Output = string | JSX.Element;

type Params = {
  key: string,
  defaultLocale: Locale,
  defaultLanguageTag: string,
  options?: any,
};

const getDefaultTranslation = (params: Params): Output => {
  const defaultTemplate = params.defaultLocale[params.key];

  if (params.options) {
    try {
      const result = new IntlMessageFormat(defaultTemplate, params.defaultLanguageTag).format(params.options);

      return result as Output;
    } catch (error) {
      return defaultTemplate;
    }
  } else {
    return defaultTemplate;
  }
};

export default getDefaultTranslation;
