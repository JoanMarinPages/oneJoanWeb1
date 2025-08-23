
import { getDictionary } from '@/lib/get-dictionary';
import { DashboardClient } from './DashboardClient';
import { Locale } from '@/i18n-config';

export default async function DashboardPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return <DashboardClient dictionary={dictionary} />;
}
