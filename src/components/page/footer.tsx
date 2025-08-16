"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code2, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact-footer" className="w-full border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
                <Code2 className="h-7 w-7 text-primary" />
                <span className="font-bold text-xl font-headline">OneJoan</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Soluciones digitales de alto impacto para llevar tu negocio al siguiente nivel.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com" target="_blank" aria-label="Github profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
               <Link href="mailto:joanmarinpages@gmail.com" aria-label="Email contact" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-headline font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link href="#real-estate" className="text-sm text-muted-foreground hover:text-primary transition-colors">Inmobiliaria y Arquitectura</Link></li>
              <li><Link href="#industrial" className="text-sm text-muted-foreground hover:text-primary transition-colors">Simulación Industrial</Link></li>
              <li><span className="text-sm text-muted-foreground/50">Desarrollo Web y Apps (Próximamente)</span></li>
              <li><span className="text-sm text-muted-foreground/50">Inteligencia Artificial (Próximamente)</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</Link></li>
               <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>joanmarinpages@gmail.com</li>
              <li>(+34) 666 777 888</li>
              <li>Barcelona, España</li>
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {year || new Date().getFullYear()} Joan Marín. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
