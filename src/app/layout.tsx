import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/components/auth-provider";
import { Providers } from "@/components/providers";
import { AnalyticsProvider } from "@/components/analytics-provider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn(inter.variable, spaceGrotesk.variable, '!scroll-smooth')} suppressHydrationWarning>
      <body className="font-body antialiased bg-background text-foreground">
        <Providers>
          <AnalyticsProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
          </AnalyticsProvider>
        </Providers>
      </body>
    </html>
  );
}
