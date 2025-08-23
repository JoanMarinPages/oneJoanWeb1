import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "../globals.css";
import { cn } from "@/lib/utils";
import { i18n, Locale } from "@/i18n-config";
import { AuthProvider } from "@/components/auth-provider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "OneJoan | Soluciones Digitales de Alto Impacto",
  description: "Portfolio de Joan Marín, desarrollador freelance especializado en web, apps, IA y Realidad Aumentada.",
};

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} className={cn(inter.variable, spaceGrotesk.variable, '!scroll-smooth')} suppressHydrationWarning>
      <body className="font-body antialiased bg-background text-foreground">
        <AuthProvider>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
              {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
