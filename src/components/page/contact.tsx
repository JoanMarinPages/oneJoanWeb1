"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un email válido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactar. Te responderé lo antes posible.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline animated-gradient-text">
            ¿Hablamos?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            Si tienes un proyecto en mente o quieres saber más, no dudes en contactarme. Estoy disponible para nuevos desafíos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">Email</h3>
                        <p className="text-muted-foreground">Escríbeme para consultas o propuestas.</p>
                        <a href="mailto:joanmarinpages@gmail.com" className="text-primary hover:underline">joanmarinpages@gmail.com</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">Teléfono</h3>
                        <p className="text-muted-foreground">Llámame para una respuesta más rápida.</p>
                        <a href="tel:+34666777888" className="text-primary hover:underline">(+34) 666 777 888</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">Ubicación</h3>
                        <p className="text-muted-foreground">Disponible para proyectos en todo el mundo.</p>
                        <span className="text-primary">Barcelona, España</span>
                    </div>
                </div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '400ms' }}>
                 <div className="bg-card p-8 rounded-2xl shadow-lg border">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Tu nombre" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="tu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Mensaje</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Cuéntame sobre tu proyecto..."
                                rows={5}
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full">
                        Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                    </Form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
