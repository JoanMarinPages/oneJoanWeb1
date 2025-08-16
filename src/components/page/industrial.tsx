
"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Cell, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, TrendingUp, Zap } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Section } from "./section"

const barChartData = [
  { date: "Ene", "Nuevos Contactos": 186, "Ventas Realizadas": 80 },
  { date: "Feb", "Nuevos Contactos": 305, "Ventas Realizadas": 200 },
  { date: "Mar", "Nuevos Contactos": 237, "Ventas Realizadas": 120 },
  { date: "Abr", "Nuevos Contactos": 273, "Ventas Realizadas": 190 },
  { date: "May", "Nuevos Contactos": 209, "Ventas Realizadas": 130 },
  { date: "Jun", "Nuevos Contactos": 214, "Ventas Realizadas": 140 },
]

const barChartConfig = {
  "Nuevos Contactos": {
    label: "Nuevos Contactos",
    color: "hsl(var(--accent))",
  },
  "Ventas Realizadas": {
    label: "Ventas Realizadas",
    color: "hsl(var(--primary))",
  },
}

const lineChartData = [
  { month: 'Enero', oee: 65 },
  { month: 'Febrero', oee: 72 },
  { month: 'Marzo', oee: 78 },
  { month: 'Abril', oee: 75 },
  { month: 'Mayo', oee: 82 },
  { month: 'Junio', oee: 85 },
];

const lineChartConfig = {
  oee: {
    label: "OEE",
    color: "hsl(var(--primary))",
  },
}

const pieChartData = [
    { name: 'Producción', value: 400, fill: 'hsl(var(--chart-1))' },
    { name: 'Logística', value: 300, fill: 'hsl(var(--chart-2))' },
    { name: 'Mantenimiento', value: 200, fill: 'hsl(var(--chart-3))' },
    { name: 'Calidad', value: 278, fill: 'hsl(var(--chart-4))' },
];

const pieChartConfig = {
  value: {
    label: "Value",
  },
  Producción: {
    label: "Producción",
    color: "hsl(var(--chart-1))",
  },
  Logística: {
    label: "Logística",
    color: "hsl(var(--chart-2))",
  },
  Mantenimiento: {
    label: "Mantenimiento",
    color: "hsl(var(--chart-3))",
  },
  Calidad: {
    label: "Calidad",
    color: "hsl(var(--chart-4))",
  },
}

interface IndustrialProps {
  backgroundVideoUrl: string;
}

export function Industrial({ backgroundVideoUrl }: IndustrialProps) {
    const title = (
    <>
      Dashboard de <span className="animated-gradient-text">Analítica Industrial</span>
    </>
  );

  const description = "Optimiza procesos y predice resultados mediante la simulación de movimientos, análisis de datos y visualizaciones interactivas.";

  return (
    <Section id="industrial" title={title} description={description} backgroundVideoUrl={backgroundVideoUrl}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2 fade-in-up bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5" style={{animationDelay: '200ms'}}>
                <CardHeader>
                    <CardTitle>Análisis de Rendimiento (Enero - Junio {new Date().getFullYear()})</CardTitle>
                    <CardDescription>Comparativa de contactos generados vs. ventas cerradas.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={barChartConfig} className="min-h-[300px] w-full">
                        <BarChart data={barChartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                            <ChartTooltip
                                cursor={{fill: 'hsl(var(--accent) / 0.1)'}}
                                content={<ChartTooltipContent />}
                            />
                            <Legend />
                            <Bar dataKey="Nuevos Contactos" fill="var(--color-Nuevos Contactos)" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Ventas Realizadas" fill="var(--color-Ventas Realizadas)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
                <Card className="fade-in-up bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5" style={{animationDelay: '400ms'}}>
                <CardHeader>
                    <CardTitle>Eficiencia por Sector</CardTitle>
                        <CardDescription>Distribución de recursos y efectividad.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={pieChartConfig} className="min-h-[300px] w-full">
                        <PieChart>
                            <ChartTooltip
                                    content={<ChartTooltipContent nameKey="name" />}
                            />
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                dataKey="value"
                                nameKey="name"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-1 fade-in-up bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5" style={{animationDelay: '600ms'}}>
                <CardHeader>
                    <CardTitle>Evolución OEE (%)</CardTitle>
                    <CardDescription>Overall Equipment Effectiveness</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={lineChartConfig} className="min-h-[300px] w-full">
                        <LineChart data={lineChartData} margin={{ left: -20, right: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)"/>
                            <YAxis domain={[60, 90]} tickLine={false} axisLine={false}/>
                            <ChartTooltip 
                                cursor={{stroke: 'hsl(var(--primary))', strokeWidth: 1.5, strokeDasharray: '3 3'}}
                                content={<ChartTooltipContent />}
                            />
                            <Line type="monotone" dataKey="oee" stroke="var(--color-oee)" strokeWidth={3} name="OEE" dot={{ r: 5, fill: 'var(--color-oee)' }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <div className="lg:col-span-2 space-y-6 fade-in-up" style={{animationDelay: '800ms'}}>
                <Card className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                    <div className="p-3 bg-primary/10 rounded-full"><Zap className="h-7 w-7 text-primary"/></div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">Simulación de Procesos</h3>
                        <p className="text-muted-foreground mt-1">
                            Visualiza y optimiza cadenas de montaje, flujos logísticos o cualquier proceso industrial para identificar cuellos de botella y mejorar la eficiencia antes de la implementación física.
                        </p>
                    </div>
                </Card>
                    <Card className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                    <div className="p-3 bg-primary/10 rounded-full"><Building2 className="h-7 w-7 text-primary"/></div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">Gemelos Digitales</h3>
                        <p className="text-muted-foreground mt-1">
                            Crea réplicas virtuales de tus activos para monitorización en tiempo real, mantenimiento predictivo y pruebas de escenarios sin riesgo para la producción.
                        </p>
                    </div>
                </Card>
                    <Card className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                    <div className="p-3 bg-primary/10 rounded-full"><TrendingUp className="h-7 w-7 text-primary"/></div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">Dashboards de Datos</h3>
                        <p className="text-muted-foreground mt-1">
                            Transforma datos brutos de sensores y maquinaria en insights accionables a través de dashboards interactivos que muestran KPIs clave de tu operación.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    </Section>
  )
}
