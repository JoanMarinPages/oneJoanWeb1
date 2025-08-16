import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export function Hero() {
  return (
    <section id="hero" className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20 text-center md:py-32">
      <div className="fade-in-up">
        <Badge variant="outline" className="mb-6 border-primary/50 text-primary text-sm py-1 px-4 rounded-full">
          Webs, Software, IA & Realidad Aumentada
        </Badge>
        <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl animated-gradient-text">
          OneJoan
        </h1>
        <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl mt-6">
          Transformo ideas complejas en soluciones digitales de alto impacto que aportan valor real a tu negocio.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-6 fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Card className="relative p-6 flex flex-col items-center gap-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg border-0">
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

       <div className="absolute bottom-10 mt-16 fade-in-up" style={{ animationDelay: '800ms' }}>
        <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full animate-bounce">
          <Link href="#real-estate">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
