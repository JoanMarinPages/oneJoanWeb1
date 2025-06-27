import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

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

export function Portfolio() {
  return (
    <section id="portfolio" className="container py-20 md:py-24 bg-gradient-to-b from-background to-secondary/50">
      <div className="text-center opacity-0 animate-fade-in-up">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Portfolio</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mt-4">
          Una selección de mis proyectos más recientes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden flex flex-col group hover:scale-105 transition-transform duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${200 * (index + 1)}ms` }}
          >
            <CardHeader className="p-0">
              <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover w-full h-auto" data-ai-hint={project.hint} />
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <Link href="#" className="font-semibold text-primary inline-flex items-center">
                    Ver más <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
