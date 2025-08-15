"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { createDesignPromptAction } from '@/app/actions';
import { Wand2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  designDescription: z.string().min(10, {
    message: "La descripción debe tener al menos 10 caracteres.",
  }),
});

// Videos from /public/assets/videosBackground
const availableVideos = ['video1.mp4', 'video2.mp4', 'video3.mp4'];

const getRandomVideo = () => {
    if (availableVideos.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    return `/assets/videosBackground/${availableVideos[randomIndex]}`;
}


export function AiTool() {
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    setVideo(getRandomVideo());
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      designDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedPrompt("");
    try {
      const result = await createDesignPromptAction({ designDescription: values.designDescription });
      if (result && result.designPrompt) {
        setGeneratedPrompt(result.designPrompt);
      } else {
        throw new Error("No se pudo generar el prompt.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al generar el prompt. Inténtalo de nuevo.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    toast({ title: "Copiado!", description: "El prompt se ha copiado al portapapeles." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tool" className="container py-20 md:py-24">
      <div className="text-center opacity-0 animate-fade-in-up">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Herramienta de Diseño IA</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mt-4">
          Describe tu idea para un logo o diseño, y la IA generará un prompt detallado para herramientas como DALL-E o Midjourney.
        </p>
      </div>
      <Card className="max-w-3xl mx-auto mt-12 shadow-2xl opacity-0 animate-fade-in-up [animation-delay:200ms] overflow-hidden relative">
        {video && (
          <>
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10" />
          </>
        )}
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Wand2 className="text-accent" /> Generador de Prompts
          </CardTitle>
          <CardDescription>
            Cuanto más detallada sea tu descripción, mejor será el resultado.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <FormField
                control={form.control}
                name="designDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción de tu diseño</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: Un logo para una cafetería moderna llamada 'AstroCafé', con un astronauta bebiendo café en el espacio, estilo minimalista y colores azules."
                        rows={5}
                        {...field}
                        className="bg-background/80"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? "Generando..." : "Generar Prompt"}
              </Button>
            </CardFooter>
          </form>
        </Form>
        {(isLoading || generatedPrompt) && (
            <CardContent className="border-t pt-6">
                {isLoading && (
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:200ms]" />
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse [animation-delay:400ms]" />
                        <span className="text-sm text-muted-foreground">La IA está pensando...</span>
                    </div>
                )}
                {generatedPrompt && !isLoading && (
                    <div className="opacity-0 animate-fade-in">
                        <h3 className="font-semibold mb-2">Prompt Generado:</h3>
                        <div className="relative p-4 bg-muted/80 rounded-md">
                        <p className="text-sm pr-10">{generatedPrompt}</p>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8"
                            onClick={handleCopy}
                            aria-label="Copiar prompt"
                        >
                            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        )}
      </Card>
    </section>
  );
}
