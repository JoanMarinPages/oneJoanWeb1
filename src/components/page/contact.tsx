
"use client";

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, Linkedin, Twitter, Dribbble, Globe, Calendar, DollarSign } from "lucide-react";
import { Card } from '../ui/card';
import { Badge as UiBadge } from "@/components/ui/badge";
import { Section } from './section';

const services = [
  "Desarrollo Web", "Realidad Aumentada", "Inteligencia Artificial",
  "Aplicaciones Móviles", "Consultoría Técnica", "Simulaciones Industriales",
  "Android", "Python"
];
const budgets = ["< €10,000", "€10,000 - €25,000", "€25,000 - €50,000", "€50,000 - €100,000", "> €100,000"];
const timelines = ["1-2 semanas", "1 mes", "2-3 meses", "3-6 meses", "6+ meses"];

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un email válido."),
  company: z.string().optional(),
  phone: z.string().optional(),
  services: z.array(z.string()).min(1, "Selecciona al menos un servicio de interés."),
  budget: z.string({ required_error: "Por favor, selecciona un presupuesto." }),
  timeline: z.string({ required_error: "Por favor, selecciona un timeline." }),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres.").max(500, "El mensaje no puede superar los 500 caracteres."),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      services: [],
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    console.log(values);
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactar. Te responderé lo antes posible.",
    });
    form.reset();
  }

  const { watch, formState } = form;
  const messageValue = watch('message', '');

  const title = (
    <>
        ¿Hablamos?
    </>
  );

  const description = "Si tienes un proyecto en mente o quieres saber más, no dudes en contactarme. Completa el formulario y empecemos a crear algo increíble juntos.";

  return (
    <Section id="contact" title={title} description={description} className="pb-12 md:pb-20">
        <div className="grid md:grid-cols-12 gap-12 max-w-7xl mx-auto">
            <div className="md:col-span-4 space-y-8 fade-in-up" style={{animationDelay: '200ms'}}>
                    <ContactInfoCard />
                    <FollowMeCard />
                    <WhyMeCard />
            </div>
            <div className="md:col-span-8 p-8 bg-card border rounded-2xl shadow-lg shadow-primary/5 fade-in-up" style={{animationDelay: '400ms'}}>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nombre *</FormLabel>
                            <FormControl>
                                <Input placeholder="Tu nombre completo" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className="md:col-span-1">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                                <Input placeholder="tu@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className="md:col-span-1">
                        <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Empresa</FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre de tu empresa" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                        <div className="md:col-span-1">
                        <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl>
                                <Input placeholder="+34 600 123 456" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>

                    <div className="md:col-span-2">
                            <FormField
                            control={form.control}
                            name="services"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Servicio de Interés *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            name="services"
                                            control={form.control}
                                            render={({ field }) => (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                                                    {services.map((service) => (
                                                        <Button
                                                            key={service}
                                                            type="button"
                                                            variant={field.value?.includes(service) ? "default" : "outline"}
                                                            onClick={() => {
                                                                const newValue = field.value?.includes(service)
                                                                    ? field.value.filter((s) => s !== service)
                                                                    : [...(field.value || []), service];
                                                                field.onChange(newValue);
                                                            }}
                                                            className="w-full justify-center text-center h-auto py-2"
                                                        >
                                                            {service}
                                                        </Button>
                                                    ))}
                                                </div>
                                            )}
                                        />
                                    </FormControl>
                                    <FormMessage className="pt-1" />
                                </FormItem>
                            )}
                            />
                    </div>
                    
                    <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                        <div>
                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Presupuesto Estimado *</FormLabel>
                                        <FormControl>
                                            <div className="space-y-2">
                                            {budgets.map(budget => (
                                                    <Button key={budget} type="button" variant={field.value === budget ? 'default' : 'outline'} className="w-full justify-start gap-2 font-normal" onClick={() => field.onChange(budget)}>
                                                    <DollarSign className="text-muted-foreground" /> {budget}
                                                </Button>
                                            ))}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                            <div>
                            <FormField
                                control={form.control}
                                name="timeline"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Timeline del Proyecto *</FormLabel>
                                        <FormControl>
                                            <div className="space-y-2">
                                                {timelines.map(timeline => (
                                                    <Button key={timeline} type="button" variant={field.value === timeline ? 'default' : 'outline'} className="w-full justify-start gap-2 font-normal" onClick={() => field.onChange(timeline)}>
                                                        <Calendar className="h-4 w-4 text-muted-foreground" /> {timeline}
                                                    </Button>
                                                ))}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Mensaje *</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Cuéntame sobre tu proyecto, objetivos y cualquier detalle relevante..."
                                rows={5}
                                {...field}
                                />
                            </FormControl>
                                <div className="text-xs text-muted-foreground text-right pt-1">
                                {messageValue.length} / 500
                            </div>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <div className="md:col-span-2">
                            <Button type="submit" size="lg" className="w-full" disabled={formState.isSubmitting}>
                            Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="md:col-span-2 text-center">
                        <p className="text-xs text-muted-foreground">
                            Al enviar este formulario, aceptas que me ponga en contacto contigo para discutir tu proyecto. Tu información será tratada con total confidencialidad.
                        </p>
                    </div>
                </form>
                </Form>
            </div>
        </div>
    </Section>
  );
}

function ContactInfoCard() {
    return (
        <Card className="p-6 shadow-lg shadow-primary/5">
            <h3 className="text-xl font-bold font-headline mb-4">Información de Contacto</h3>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-2.5 rounded-lg mt-1"><Mail className="h-5 w-5" /></div>
                    <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:joanmarinpages@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">joanmarinpages@gmail.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-2.5 rounded-lg mt-1"><Phone className="h-5 w-5" /></div>
                    <div>
                        <p className="font-semibold">Teléfono</p>
                        <a href="tel:+34666777888" className="text-sm text-muted-foreground hover:text-primary transition-colors">(+34) 666 777 888</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-2.5 rounded-lg mt-1"><MapPin className="h-5 w-5" /></div>
                    <div>
                        <p className="font-semibold">Ubicación</p>
                        <span className="text-sm text-muted-foreground">Barcelona, España</span>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-2.5 rounded-lg mt-1"><Clock className="h-5 w-5" /></div>
                    <div>
                        <p className="font-semibold">Horario</p>
                        <span className="text-sm text-muted-foreground">Lun - Vie: 9:00 - 18:00</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

function FollowMeCard() {
    return (
        <Card className="p-6 shadow-lg shadow-primary/5">
            <h3 className="text-xl font-bold font-headline mb-4">Sígueme</h3>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild><a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><Linkedin /></a></Button>
                <Button variant="outline" size="icon" asChild><a href="https://dribbble.com" target="_blank" aria-label="Dribbble"><Dribbble /></a></Button>
                <Button variant="outline" size="icon" asChild><a href="https://twitter.com" target="_blank" aria-label="Twitter"><Twitter /></a></Button>
                <Button variant="outline" size="icon" asChild><a href="#" target="_blank" aria-label="Website"><Globe /></a></Button>
            </div>
        </Card>
    )
}

function WhyMeCard() {
    const whyMeData = [
        { label: "Respuesta rápida", value: "< 24h" },
        { label: "Proyectos completados", value: "50+" },
        { label: "Satisfacción cliente", value: "100%" },
        { label: "Años experiencia", value: "5+" },
    ]
    return (
            <Card className="p-6 shadow-lg shadow-primary/5">
            <h3 className="text-xl font-bold font-headline mb-4">¿Por qué elegirme?</h3>
            <div className="space-y-3">
                {whyMeData.map(item => (
                    <div key={item.label} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <UiBadge variant="secondary" className="font-bold text-sm">{item.value}</UiBadge>
                    </div>
                ))}
            </div>
        </Card>
    )
}
