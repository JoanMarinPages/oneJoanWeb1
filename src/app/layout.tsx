import { Providers } from "@/components/providers";
import { AnalyticsProvider } from "@/components/analytics-provider";

// Even though this is the root layout, we don't need to specify
// the <html> or <body> tags here. That is handled by the
// [lang]/layout.tsx file.
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <AnalyticsProvider>
        {children}
      </AnalyticsProvider>
    </Providers>
  );
}
