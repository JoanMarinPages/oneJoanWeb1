
import { Code, Bot, Orbit, Smartphone } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const services = [
    {
        icon: <Code className="h-10 w-10 text-primary" />,
        title: "Desarrollo Web y Apps",
        description: "Soluciones web y móviles a medida, robustas y escalables, con un diseño centrado en el usuario."
    },
    {
        icon: <Bot className="h-10 w-10 text-primary" />,
        title: "Inteligencia Artificial",
        description: "Integro modelos de IA para automatizar procesos, obtener insights y crear experiencias personalizadas."
    },
    {
        icon: <Orbit className="h-10 w-10 text-primary" />,
        title: "Realidad Aumentada",
        description: "Transformo la interacción con el mundo real a través de experiencias de RA inmersivas e interactivas."
    },
    {
        icon: <Smartphone className="h-10 w-10 text-primary" />,
        title: "Simulación Industrial",
        description: "Creo gemelos digitales y simulaciones de procesos para optimizar la producción y reducir costes."
    }
]

export function Services() {
    return (
        <section id="services" className="w-full bg-secondary/50 py-20 md:py-32">
            <div className="container">
                <div className="text-center mb-12 fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                        Un <span className="animated-gradient-text">Ecosistema de Soluciones</span> a tu Medida
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                        Desde el concepto hasta el despliegue, ofrezco un abanico de servicios tecnológicos para impulsar tu proyecto.
                    </p>
                </div>
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card 
                            key={service.title} 
                            className="p-6 text-center flex flex-col items-center gap-4 border-border/60 shadow-lg shadow-primary/5 hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 fade-in-up"
                            style={{ animationDelay: `${200 * (index + 1)}ms` }}
                        >
                            <div className="bg-primary/10 rounded-full p-4">
                                {service.icon}
                            </div>
                            <CardHeader className="p-0">
                                <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                            </CardHeader>
                            <CardDescription className="text-base">
                                {service.description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
