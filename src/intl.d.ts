// Create React App's TypeScript 4.9 does not declare this standard Intl API.
declare namespace Intl {
  function getCanonicalLocales(locales: string | string[]): string[];
}
