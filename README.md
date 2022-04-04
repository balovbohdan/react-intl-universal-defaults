# react-intl-universal-defaults

This is a tool for react-intl-universal that allows using default locale when selecting translation.

## References
- [react-intl-universal](https://www.npmjs.com/package/react-intl-universal)
- [Language Tags](https://en.wikipedia.org/wiki/IETF_language_tag)

## Example

Prerequisites:
- Current languaguage: uk (Ukrainian)
- Fallback language: en (English)

This means that you should always keep fallback locale up to date.

**Step 1. Create locale files**

EN locale:

```json
{
  "key": "value",
  "keyHtml": "<span>value</span>",
  "greeting": "I am {name}",
  "greetingHtml": "<span>I am {name}</span>",
  "uniqueEnKey": "unique key"
}
```

UK locale:

```json
{
  "key": "значення",
  "keyHtml": "<span>значення</span>",
  "greeting": "Я {name}",
  "greetingHtml": "<span>Я {name}</span>"
}
```

**Step 2. Initialize react-intl-universal**

```ts
import * as intl from 'react-intl-universal';

import enLocale from './locales/en.json';
import ukLocale from './locales/uk.json';

intl.init({
  warningHandler: (message) => { console.warn(message); },
  currentLocale: 'uk',
  fallbackLocale: 'en',
  locales: {
    en: enLocale,
    uk: ukLocale,
  },
});
```

**Step 3. Initialize react-intl-universal-defaults**

```ts
import * as intlDefaults from 'react-intl-universal-defaults';

import enLocale from './locales/en.json';

intlDefaults.initialize({
  defaultLanguageTag: 'en',
  defaultLocale: enLocale,
});
```

**Step 4. Create translations file**

```ts
import { t } from 'react-intl-universal-defaults';

const translations = {
  get uniqueEnKey() { return t('uniqueEnKey'); },
  greeting: (options) => t('greeting', options),
};

export default translations;
```

**Step 5. Use translations in React component**

```tsx
import translations from './translations';

const SomeComponent = () => (
  <>
    <span>{translations.greeting({ name: 'Intl' })}</span>
    <span>{translations.uniqueEnKey}</span>
  </>
);
```

The render result will be as follows:

```
<span>I am intl</span>
<span>unique key</span>
```
