
"use client";

import * as React from "react";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from "./section";
import { createDesignPromptAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

export function AiDesignTool() {
  const [description, setDescription] = React.useState("");
  const [generatedPrompt, setGeneratedPrompt] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setIsLoading(true);
    setGeneratedPrompt("");

    try {
      const result = await createDesignPromptAction({ designDescription: description });
      setGeneratedPrompt(result.designPrompt);
    } catch (error) {
      console.error("Error generating design prompt:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo generar el prompt. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const title = (
    <>
      Herramienta de <span className="animated-gradient-text">Diseño con IA</span>
    </>
  );

  const descriptionText = "Prueba esta demo interactiva. Describe una idea para un logo o gráfico y la IA generará un 'prompt' listo para usar en herramientas como Midjourney o DALL-E.";

  return (
    <Section id="ai-tool" title={title} description={descriptionText}>
      <div className="max-w-3xl mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="text-primary"/>
                <span>Generador de Prompts para Diseño</span>
              </CardTitle>
              <CardDescription>
                Convierte tus ideas en instrucciones detalladas para la IA.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ej: Un logo para una cafetería con temática de cohetes espaciales, estilo minimalista..."
                rows={4}
                disabled={isLoading}
              />
              {generatedPrompt && (
                <Card className="bg-background/50 p-4">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sparkles className="h-5 w-5 text-primary"/>
                      Prompt Generado
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap font-mono bg-muted p-3 rounded-md">{generatedPrompt}</p>
                  </CardContent>
                </Card>
              )}
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading || !description.trim()} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generando...
                  </>
                ) : (
                  "Generar Prompt"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Section>
  );
}
