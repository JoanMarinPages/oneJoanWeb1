"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Agente IA para E-commerce",
    description: "Un agente conversacional para mejorar la experiencia del cliente y automatizar el soporte.",
    image: "https://placehold.co/600x400.png",
    hint: "AI chatbot",
    tags: ["AI", "React", "Node.js"]
  },
  {
    title: "Plataforma Web SaaS",
    description: "Aplicación web completa para la gestión de proyectos, con suscripciones y roles de usuario.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard analytics",
    tags: ["Next.js", "Firebase", "Stripe"]
  },
  {
    title: "App Móvil de Productividad",
    description: "Una app móvil para iOS y Android que ayuda a los usuarios a organizar sus tareas diarias.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile app",
    tags: ["React Native", "TypeScript"]
  },
];

// Videos from /public/assets/videosBackground
const availableVideos = ['video1.mp4', 'video2.mp4', 'video3.mp4'];

const getRandomVideo = () => {
    if (availableVideos.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    return `/assets/videosBackground/${availableVideos[randomIndex]}`;
}

export function Portfolio() {
  const [projectVideos, setProjectVideos] = useState<(string | null)[]>([]);

  useEffect(() => {
    // Evitar mismatch de hidratación SSR/cliente con Math.random
    const videos = projects.map(() => getRandomVideo());
    setProjectVideos(videos);
  }, []);

  return (
    <section id="portfolio" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Portfolio</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Una selección de mis proyectos más recientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${200 * (index + 1)}ms` }}
            >
              <CardHeader className="p-0 relative h-48 overflow-hidden">
                {projectVideos[index] ? (
                  <video
                    src={projectVideos[index]!}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" data-ai-hint={project.hint} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </CardHeader>
              <div className="p-6 bg-background flex flex-col flex-grow relative z-10">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <CardFooter className="p-0 mt-auto">
                  <Link href="#" className="font-semibold text-primary inline-flex items-center group/link">
                    Ver más <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
