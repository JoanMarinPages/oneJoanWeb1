import Link from 'next/link';
import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">OneJoan</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Servicios</Link>
          <Link href="#portfolio" className="transition-colors hover:text-foreground/80 text-foreground/60">Portfolio</Link>
          <Link href="#ai-tool" className="transition-colors hover:text-foreground/80 text-foreground/60">Herramienta IA</Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
