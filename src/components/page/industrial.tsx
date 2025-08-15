"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Building2 } from "lucide-react"

const chartData = [
  { month: "Enero", contacts: 186, sales: 80 },
  { month: "Febrero", contacts: 305, sales: 200 },
  { month: "Marzo", contacts: 237, sales: 120 },
  { month: "Abril", contacts: 273, sales: 190 },
  { month: "Mayo", contacts: 209, sales: 130 },
  { month: "Junio", contacts: 214, sales: 140 },
]

const chartConfig = {
  contacts: {
    label: "Contactos",
    color: "hsl(var(--accent))",
  },
  sales: {
    label: "Ventas",
    color: "hsl(var(--primary))",
  },
} satisfies React.ComponentProps<typeof ChartContainer>["config"]

export function Industrial() {
  return (
    <section id="industrial" className="w-full py-20 md:py-32 bg-secondary/20">
        <div className="container">
            <div className="text-center mb-12 opacity-0 animate-fade-in-up">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline animated-gradient-text">
                    Simulación y Analítica Industrial
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                    Optimiza procesos y predice resultados mediante la simulación de movimientos, análisis de datos y visualizaciones interactivas.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Análisis de Rendimiento</CardTitle>
                            <CardDescription>Enero - Junio {new Date().getFullYear()}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis />
                                <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" />}
                                />
                                <Bar dataKey="contacts" fill="var(--color-contacts)" radius={4}>
                                    <LabelList
                                        position="top"
                                        offset={12}
                                        className="fill-foreground"
                                        fontSize={12}
                                    />
                                </Bar>
                                 <Bar dataKey="sales" fill="var(--color-sales)" radius={4}>
                                    <LabelList
                                        position="top"
                                        offset={12}
                                        className="fill-foreground"
                                        fontSize={12}
                                    />
                                </Bar>
                            </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6 opacity-0 animate-fade-in-up [animation-delay:400ms]">
                    <div className="flex items-start gap-4">
                        <Building2 className="h-8 w-8 text-primary mt-1"/>
                        <div>
                            <h3 className="text-xl font-bold font-headline">Simulación de Procesos</h3>
                            <p className="text-muted-foreground">
                                Visualiza y optimiza cadenas de montaje, flujos logísticos o cualquier proceso industrial para identificar cuellos de botella y mejorar la eficiencia antes de la implementación física.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Building2 className="h-8 w-8 text-primary mt-1"/>
                        <div>
                            <h3 className="text-xl font-bold font-headline">Gemelos Digitales</h3>
                            <p className="text-muted-foreground">
                                Crea réplicas virtuales de tus activos para monitorización en tiempo real, mantenimiento predictivo y pruebas de escenarios sin riesgo para la producción.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Building2 className="h-8 w-8 text-primary mt-1"/>
                        <div>
                            <h3 className="text-xl font-bold font-headline">Dashboards de Datos</h3>
                            <p className="text-muted-foreground">
                                Transforma datos brutos de sensores y maquinaria en insights accionables a través de dashboards interactivos que muestran KPIs clave de tu operación.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
