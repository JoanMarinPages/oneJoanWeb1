import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navLinks = [
    { href: "#services", label: "Servicios" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#ai-tool", label: "Herramienta IA" },
    { href: "#contact", label: "Contacto" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg font-headline">OneJoan</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/70">{link.label}</Link>
            ))}
        </nav>

        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                        <span className="sr-only">Abrir menú</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 p-6">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Code2 className="h-7 w-7 text-primary" />
                            <span className="font-bold text-lg font-headline">OneJoan</span>
                        </Link>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(link => (
                                <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">{link.label}</Link>
                            ))}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
