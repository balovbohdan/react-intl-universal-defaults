export type Locale = Record<string, string>;

export type Env = {
  defaultLocale: Locale,
  defaultLanguageTag: string,
  initialized: boolean,
};
