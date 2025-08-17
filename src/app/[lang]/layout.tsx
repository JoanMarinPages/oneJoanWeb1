import { Providers } from '@/components/providers';
import { AuthProvider } from '@/components/auth-provider';
import { cn } from '@/lib/utils';
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n-config';
import '../globals.css';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'OneJoan | Soluciones Digitales de Alto Impacto',
  description: 'Portfolio de Joan Marín, desarrollador freelance especializado en web, apps, IA y Realidad Aumentada.',
};


export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} className={cn(inter.variable, spaceGrotesk.variable, '!scroll-smooth')} suppressHydrationWarning>
      <body className="font-body antialiased bg-background text-foreground">
        <Providers>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
