import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';

export function Hero() {
  return (
    <section id="hero" className="container flex min-h-screen flex-col items-center justify-center py-20 text-center md:py-32">
      <div className="opacity-0 animate-fade-in-up">
        <Badge variant="outline" className="mb-6 border-primary/50 text-primary text-sm py-1 px-4">
          Webs, Software, IA & Realidad Aumentada
        </Badge>
        <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          OneJoan
        </h1>
        <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl mt-6">
          Transformo ideas complejas en soluciones digitales de alto impacto que aportan valor real a tu negocio.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-6 opacity-0 animate-fade-in-up [animation-delay:400ms]">
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Card className="relative p-6 flex flex-col items-center gap-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-2xl">
              <Avatar className="w-24 h-24 border-4 border-primary/50">
                <AvatarImage src="https://placehold.co/100x100.png" alt="Joan Marín" data-ai-hint="man portrait"/>
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold font-headline">Joan Marín</h2>
                <p className="text-muted-foreground">Programador & Arquitecto de Soluciones</p>
              </div>
            </Card>
        </div>
      </div>

       <div className="mt-16 opacity-0 animate-fade-in-up [animation-delay:800ms]">
        <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full animate-bounce">
          <Link href="#real-estate">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

// Minimalist Card component for Hero section
function Card({ className, children }: { className?: string, children: React.ReactNode }) {
  return <div className={`rounded-lg border bg-card text-card-foreground ${className}`}>{children}</div>;
}
