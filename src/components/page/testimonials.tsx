"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from "react";

const testimonials = [
    {
        quote: "El agente con IA que Joan desarrolló para nuestra tienda ha revolucionado nuestro servicio al cliente. ¡Las ventas han subido un 20%!",
        name: "Ana García",
        title: "CEO de TechNova",
        avatar: "https://placehold.co/100x100.png",
        hint: "woman portrait"
    },
    {
        quote: "La plataforma SaaS es intuitiva y potente. Joan entendió nuestras necesidades a la perfección y entregó un producto de altísima calidad.",
        name: "Carlos Rodríguez",
        title: "Director de Operaciones en Innovate Co.",
        avatar: "https://placehold.co/100x100.png",
        hint: "man portrait"
    },
    {
        quote: "Nunca pensé que una app de productividad pudiera ser tan adictiva. El diseño y la funcionalidad son simplemente excepcionales.",
        name: "Laura Martínez",
        title: "Diseñadora Freelance",
        avatar: "https://placehold.co/100x100.png",
        hint: "woman smiling"
    }
]

// Videos from /public/assets/videosBackground
const availableVideos = ['video1.mp4', 'video2.mp4', 'video3.mp4'];

const getRandomVideo = () => {
    if (availableVideos.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    return `/assets/videosBackground/${availableVideos[randomIndex]}`;
}

export function Testimonials() {
  const [testimonialVideos, setTestimonialVideos] = useState<(string | null)[]>([]);

  useEffect(() => {
      const videos = testimonials.map(() => getRandomVideo());
      setTestimonialVideos(videos);
  }, []);
  
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12 opacity-0 animate-fade-in-up">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lo que dicen mis clientes</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                    La satisfacción de mis clientes es mi mejor carta de presentación.
                </p>
            </div>
            <Carousel 
                className="max-w-4xl mx-auto opacity-0 animate-fade-in-up [animation-delay:200ms]"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                            <Card className="border-0 shadow-2xl bg-transparent overflow-hidden relative">
                                {testimonialVideos[index] && (
                                    <>
                                        <video
                                            src={testimonialVideos[index]!}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                                        />
                                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10" />
                                    </>
                                )}
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center z-10">
                                    <blockquote className="text-lg md:text-xl lg:text-2xl font-medium mb-6">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16">
                                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-lg">{testimonial.name}</p>
                                            <p className="text-muted-foreground">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
    </section>
  )
}
