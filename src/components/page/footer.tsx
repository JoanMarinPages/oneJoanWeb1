"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code2, Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="w-full border-t bg-background">
      <div className="container py-12 flex flex-col items-center justify-center gap-8 text-center">
        
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-bold font-headline">¿Listo para empezar tu proyecto?</h3>
          <p className="max-w-md text-muted-foreground">
            Contáctame para discutir tus ideas y cómo puedo ayudarte a hacerlas realidad.
          </p>
           <a href="mailto:joanmarinpages@gmail.com" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Hablemos
           </a>
        </div>

        <div className="w-full h-px bg-border" />

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">OneJoan</span>
            </Link>
            <p className="text-sm text-muted-foreground">© {year || new Date().getFullYear()} Joan Marín. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" aria-label="Github profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
               <a href="mailto:joanmarinpages@gmail.com" aria-label="Email contact" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
