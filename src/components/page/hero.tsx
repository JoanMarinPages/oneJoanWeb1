import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="container flex flex-col items-center py-20 text-center md:py-32">
      <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl opacity-0 animate-fade-in-up [animation-delay:200ms]">
        Joan Marín: Desarrollador Freelance
      </h1>
      <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl mt-6 opacity-0 animate-fade-in-up [animation-delay:400ms]">
        Creando aplicaciones, webs y soluciones de Inteligencia Artificial a medida. De la idea al producto digital.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up [animation-delay:600ms]">
        <Button asChild size="lg">
          <Link href="#contact">
            Contacta conmigo <ArrowRight className="ml-2" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#portfolio">Ver proyectos</Link>
        </Button>
      </div>
    </section>
  );
}
