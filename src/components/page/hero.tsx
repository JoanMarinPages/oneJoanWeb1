
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code2, Download, ExternalLink, Sparkles } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

const technologies = ["React", "Three.js", "AI/ML", "AR/VR", "Node.js", "Android", "Python"];
const backgroundVideoUrl = "/assets/ondesVideo/social_yow_one_httpss.mj.runh7MjLcwTwHA_--ar_12869_--video_1_442d8aca-6c97-4502-8eb1-81a48a741b26_1.mp4";

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <video
                key={backgroundVideoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={backgroundVideoUrl} type="video/mp4" />
            </video>
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 items-start text-left fade-in-up text-white">
                <Badge variant="outline" className="border-primary/30 text-primary font-semibold bg-primary/10 py-1 px-3">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Desarrollador Premium
                </Badge>
                <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                    Innovación en <span className="animated-gradient-text">RA & IA</span>
                </h1>
                <p className="max-w-lg text-lg text-white/80">
                    Especialista en Realidad Aumentada, Inteligencia Artificial, desarrollo web y soluciones software que transforman ideas en experiencias digitales extraordinarias.
                </p>
                <div className="flex gap-4">
                    <Button size="lg" asChild>
                        <Link href="#real-estate">Ver Proyectos <ExternalLink className="ml-2" /></Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#">Descargar CV <Download className="ml-2" /></Link>
                    </Button>
                </div>
                <div className="flex gap-8 mt-6 pt-6 border-t border-white/20 w-full">
                    <div>
                        <p className="text-3xl font-bold animated-gradient-text">50+</p>
                        <p className="text-white/80">Proyectos</p>
                    </div>
                     <div>
                        <p className="text-3xl font-bold animated-gradient-text">5+</p>
                        <p className="text-white/80">Años Exp.</p>
                    </div>
                     <div>
                        <p className="text-3xl font-bold animated-gradient-text">100%</p>
                        <p className="text-white/80">Satisfacción</p>
                    </div>
                </div>
            </div>

            <div className="relative group hidden md:flex justify-center fade-in-up" style={{animationDelay: '200ms'}}>
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                 <Card className="relative p-8 flex flex-col items-center gap-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl border-border/20 w-full max-w-md">
                    <div className="relative">
                        <div className="h-28 w-28 rounded-full bg-primary/10 flex items-center justify-center">
                            <Code2 className="h-14 w-14 text-primary" />
                        </div>
                        <div className="absolute bottom-0 right-0 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center border-4 border-card">
                            <Sparkles className="h-5 w-5"/>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <h2 className="text-2xl font-bold font-headline">Desarrollador Premium</h2>
                        <p className="text-muted-foreground mt-1">Especialista en tecnologías emergentes con enfoque en crear soluciones que marquen la diferencia.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                        {technologies.map(tech => (
                            <Badge key={tech} variant="secondary" className="text-sm">{tech}</Badge>
                        ))}
                    </div>
                </Card>
            </div>

        </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 mt-16 fade-in-up z-10" style={{ animationDelay: '800ms' }}>
            <Button asChild variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-white/10">
            <Link href="#services">
                <ArrowDown className="h-6 w-6 text-white/80" />
            </Link>
            </Button>
        </div>
    </section>
  );
}
