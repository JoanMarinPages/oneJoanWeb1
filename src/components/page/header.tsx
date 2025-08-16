import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navLinks = [
    { href: "#real-estate", label: "Inmobiliaria" },
    { href: "#industrial", label: "Industria" },
    { href: "#contact", label: "Contacto" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl font-headline">OneJoan</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1 bg-background/50 border border-border/50 rounded-full px-2 py-1">
            {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="relative text-foreground/70 transition-colors hover:text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {link.label}
                </Link>
            ))}
        </nav>

        <Button asChild className="hidden md:flex">
            <Link href="#contact">Hablemos</Link>
        </Button>

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
                         <Button asChild className="mt-4">
                            <Link href="#contact">Hablemos</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
