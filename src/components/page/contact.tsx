"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

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
    // Aquí iría la lógica para enviar el formulario.
    // Por ahora, solo mostramos una notificación.
    console.log(values);
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactar. Te responderé lo antes posible.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ¿Hablamos?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            Si tienes un proyecto en mente o quieres saber más, no dudes en escribirme.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:200ms]">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-card p-8 rounded-2xl border border-border">
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
