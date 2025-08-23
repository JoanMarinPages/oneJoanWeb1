import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "../globals.css";
import { cn } from "@/lib/utils";
import { i18n, Locale } from "@/i18n-config";
import { AuthProvider } from "@/components/auth-provider";
import { Providers } from "@/components/providers";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { getDictionary } from '@/lib/get-dictionary';
import { Header } from '@/components/page/header';
import { Footer } from '@/components/page/footer';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "OneJoan | Soluciones Digitales de Alto Impacto",
  description: "Portfolio de Joan Marín, desarrollador freelance especializado en web, apps, IA y Realidad Aumentada.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang} className={cn(inter.variable, spaceGrotesk.variable, '!scroll-smooth')} suppressHydrationWarning>
      <body className="font-body antialiased bg-background text-foreground">
        <Providers>
          <AnalyticsProvider>
            <AuthProvider>
              <div className="flex flex-col min-h-screen bg-background text-foreground">
                  <Header dictionary={dictionary.Header} />
                  {children}
                  <Footer />
              </div>
            </AuthProvider>
          </AnalyticsProvider>
        </Providers>
      </body>
    </html>
  );
}
