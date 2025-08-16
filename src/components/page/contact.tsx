
"use client";

import * as React from "react";
import { Bot, User, Send, Loader2, Sparkles, Briefcase, DollarSign, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { salesAssistantAction } from "@/app/actions";
import type { SalesAssistantOutput } from "@/ai/schemas/sales-assistant-schemas";
import { cn } from "@/lib/utils";
import { Section } from "./section";

type Message = {
    role: 'user' | 'model';
    content: string;
    proposal?: SalesAssistantOutput['proposal'];
};

interface ContactProps {
  backgroundVideoUrl: string;
}

export function Contact({ backgroundVideoUrl }: ContactProps) {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [input, setInput] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        // Start the conversation with a greeting from the assistant
        setMessages([
            { role: 'model', content: "¡Hola! Soy el asistente virtual de OneJoan. Estoy aquí para ayudarte a perfilar tu proyecto y ofrecerte una propuesta inicial. Para empezar, ¿cuál es tu nombre y en qué tipo de proyecto estás pensando?" }
        ]);
    }, []);

    React.useEffect(() => {
        // Scroll to the bottom whenever messages change
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const history = messages.map(m => ({ role: m.role, content: m.content }));
            const response = await salesAssistantAction({ history, message: input });
            
            const assistantMessage: Message = {
                role: 'model',
                content: response.response,
                proposal: response.proposal,
            };
            setMessages(prev => [...prev, assistantMessage]);

        } catch (error) {
            console.error("Error calling sales assistant action:", error);
            const errorMessage: Message = {
                role: 'model',
                content: "Lo siento, ha ocurrido un error y no puedo responder en este momento. Por favor, inténtalo de nuevo más tarde."
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const title = (
        <>
            Hablemos de tu <span className="animated-gradient-text">Proyecto</span>
        </>
    );

    const description = "Chatea con mi asistente de IA para definir tus necesidades y obtener una propuesta preliminar en minutos.";


    return (
        <Section id="contact" title={title} description={description} backgroundVideoUrl={backgroundVideoUrl}>
            <div className="max-w-3xl mx-auto fade-in-up">
                <Card className="bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bot className="text-primary"/>
                            <span>Asistente de Ventas IA</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div 
                            ref={scrollAreaRef}
                            className="h-[450px] overflow-y-auto pr-4 space-y-6"
                        >
                            {messages.map((message, index) => (
                                <div key={index} className={cn("flex items-start gap-4", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                                    {message.role === 'model' && (
                                        <div className="bg-primary/10 text-primary p-2.5 rounded-full">
                                            <Bot className="h-5 w-5" />
                                        </div>
                                    )}
                                    <div className={cn(
                                        "max-w-[80%] p-4 rounded-2xl",
                                        message.role === 'user' 
                                            ? "bg-primary text-primary-foreground rounded-br-none" 
                                            : "bg-muted text-muted-foreground rounded-bl-none"
                                    )}>
                                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                        {message.proposal && <ProposalCard proposal={message.proposal} />}
                                    </div>
                                    {message.role === 'user' && (
                                        <div className="bg-muted p-2.5 rounded-full">
                                            <User className="h-5 w-5" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-start gap-4 justify-start">
                                    <div className="bg-primary/10 text-primary p-2.5 rounded-full">
                                        <Bot className="h-5 w-5" />
                                    </div>
                                    <div className="max-w-[80%] p-4 rounded-2xl bg-muted text-muted-foreground rounded-bl-none">
                                        <div className="flex items-center gap-2">
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            <span className="text-sm italic">Pensando...</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Escribe tu mensaje aquí..."
                                disabled={isLoading}
                                className="flex-1"
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            </div>
        </Section>
    );
}

function ProposalCard({ proposal }: { proposal: NonNullable<SalesAssistantOutput['proposal']> }) {
    return (
        <div className="mt-4 border-t border-primary/20 pt-4">
             <h4 className="flex items-center gap-2 font-bold text-base mb-4 text-foreground">
                <Sparkles className="h-5 w-5 text-primary"/>
                Propuesta Preliminar
            </h4>
            <div className="space-y-4 text-sm">
                <div className="p-3 rounded-lg bg-background/50">
                    <h5 className="font-semibold flex items-center gap-2 mb-1"><Briefcase className="h-4 w-4 text-primary"/>Resumen del Proyecto</h5>
                    <p className="text-muted-foreground">{proposal.summary}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                     <div className="p-3 rounded-lg bg-background/50">
                        <h5 className="font-semibold flex items-center gap-2 mb-1"><DollarSign className="h-4 w-4 text-primary"/>Presupuesto</h5>
                        <p className="text-muted-foreground">€{proposal.budget.min.toLocaleString()} - €{proposal.budget.max.toLocaleString()}</p>
                    </div>
                     <div className="p-3 rounded-lg bg-background/50">
                        <h5 className="font-semibold flex items-center gap-2 mb-1"><Calendar className="h-4 w-4 text-primary"/>Timeline</h5>
                        <p className="text-muted-foreground">{proposal.timeline.min}-{proposal.timeline.max} {proposal.timeline.unit}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
