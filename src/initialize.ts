import env from './env';
import { Locale } from './types';

type Params = {
  defaultLocale: Locale,
  defaultLanguageTag: string,
};

const initialize = (params: Params): void => {
  env.defaultLocale = params.defaultLocale;
  env.defaultLanguageTag = params.defaultLanguageTag;
  env.initialized = true;
};

export default initialize;
