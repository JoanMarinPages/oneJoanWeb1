// This file is intentionally blank. 
// The root layout is now handled by src/app/[lang]/layout.tsx to support i18n.
// This file can be removed, but is kept to avoid breaking the mental model of a root layout.
// Or it can be used for things that are truly outside of the i18n scope.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
