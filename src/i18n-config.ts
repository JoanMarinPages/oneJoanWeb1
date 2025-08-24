
export const i18n = {
  defaultLocale: 'ca',
  locales: ['es', 'en', 'ca'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
