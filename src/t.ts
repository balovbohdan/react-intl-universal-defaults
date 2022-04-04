import * as intl from 'react-intl-universal';

import env from './env';
import { ERRORS } from './constants';
import getDefaultTranslation from './get-default-translation';

type Params = {
  html?: boolean,
};

const defaultParams = {
  html: false,
};

const t = (key: string, options?: any, params: Params = defaultParams) => {
  if (env.initialized) {
    const defaultTranslation = getDefaultTranslation({
      defaultLocale: env.defaultLocale,
      defaultLanguageTag: env.defaultLanguageTag,
      key,
      options,
    });

    if (params.html) {
      return intl.getHTML(key, options).d(defaultTranslation);
    } else {
      return intl.get(key, options).d(defaultTranslation);
    }
  } else {
    console.error(ERRORS.NOT_INITIALIZED);

    return '';
  }
};

export default t;
