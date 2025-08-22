
import { AuthProvider } from "@/components/auth-provider";
import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <Providers>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Providers>
  );
}
