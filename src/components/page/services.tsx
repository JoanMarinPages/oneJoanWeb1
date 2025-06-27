import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Bot, Palette } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Programación Freelance",
    description: "Desarrollo de aplicaciones web y móviles a medida, con código limpio, eficiente y escalable. Soluciones backend y frontend."
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Inteligencia Artificial",
    description: "Creación de agentes, entrenamiento de modelos, integraciones de LLMs (GPT, Gemini, Anthropic) y Model Context Protocols (MCPs)."
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Diseño UI/UX y Logos",
    description: "Diseño de interfaces intuitivas y atractivas para apps y webs. Creación de logos y branding con asistencia de IA para resultados únicos."
  }
];

export function Services() {
  return (
    <section id="services" className="container py-20 md:py-24">
      <div className="text-center opacity-0 animate-fade-in-up">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Mis Servicios</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mt-4">
          Ofrezco una gama completa de servicios para llevar tus ideas del concepto a la realidad.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="flex flex-col text-center hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up hover:-translate-y-2"
            style={{ animationDelay: `${200 * (index + 1)}ms` }}
          >
            <CardHeader className="items-center pb-4">
              {service.icon}
            </CardHeader>
            <CardContent className="flex flex-col flex-grow items-center">
              <CardTitle className="font-headline text-2xl mb-2">{service.title}</CardTitle>
              <CardDescription className="flex-grow">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
