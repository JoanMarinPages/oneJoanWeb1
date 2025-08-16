
"use client";

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
];

const backgroundVideoUrl = "/assets/ondesVideo/social_yow_one_httpss.mj.runHb7pva_IXRU_--ar_12869_--video_1_d1590073-1217-4c55-ab72-085a3085ba55_0.mp4";

export function Services() {
    return (
        <section id="services" className="w-full">
            <div className="container relative z-10 py-12 md:py-20 mx-auto w-full lg:w-3/5 overflow-hidden rounded-2xl shadow-2xl border">
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
                 <div className="relative z-10 bg-black/10">
                    <Card className="bg-transparent backdrop-blur-sm rounded-2xl p-8 md:p-12 border-0">
                        <div className="text-center mb-12 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                                Un <span className="animated-gradient-text">Ecosistema de Soluciones</span> a tu Medida
                            </h2>
                            <p className="mx-auto max-w-6xl text-white/90 md:text-xl/relaxed mt-4">
                                Desde el concepto hasta el despliegue, ofrezco un abanico de servicios tecnológicos para impulsar tu proyecto.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {services.map((service, index) => (
                                <Card 
                                    key={service.title} 
                                    className="p-6 text-center flex flex-col items-center gap-4 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/10 hover:border-primary/50 transition-all duration-300"
                                >
                                    <div className="bg-primary/10 rounded-full p-4">
                                        {service.icon}
                                    </div>
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-xl font-headline text-foreground">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardDescription className="text-base text-muted-foreground">
                                        {service.description}
                                    </CardDescription>
                                </Card>
                            ))}
                        </div>
                    </Card>
                 </div>
            </div>
        </section>
    )
}
