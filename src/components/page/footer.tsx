"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code2, Github, Linkedin, Award } from 'lucide-react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact-footer" className="w-full border-t border-border/50 bg-background/80">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">OneJoan</span>
            </Link>
            <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    <span className="text-sm">Webby Awards 2028 Design</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    <span className="text-sm">Awwwards Honoree</span>
                </div>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" aria-label="Github profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn profile" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© {year || new Date().getFullYear()} Joan Marín. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
