"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code2, Mail } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="w-full border-t bg-secondary/50">
      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-0 animate-fade-in-up [animation-delay:400ms]">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">OneJoan</span>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <p className="text-sm text-muted-foreground">© {year || new Date().getFullYear()} Joan Marín. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
             <Mail className="h-4 w-4" />
             <a href="mailto:joanmarinpages@gmail.com" className="hover:text-primary transition-colors">
                joanmarinpages@gmail.com
             </a>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="#" aria-label="Github profile" className="text-muted-foreground hover:text-primary transition-colors">
            <GithubIcon className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="LinkedIn profile" className="text-muted-foreground hover:text-primary transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
