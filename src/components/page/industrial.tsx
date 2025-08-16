"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, TrendingUp, Zap } from "lucide-react"

const barChartData = [
  { date: "Ene", "Nuevos Contactos": 186, "Ventas Realizadas": 80 },
  { date: "Feb", "Nuevos Contactos": 305, "Ventas Realizadas": 200 },
  { date: "Mar", "Nuevos Contactos": 237, "Ventas Realizadas": 120 },
  { date: "Abr", "Nuevos Contactos": 273, "Ventas Realizadas": 190 },
  { date: "May", "Nuevos Contactos": 209, "Ventas Realizadas": 130 },
  { date: "Jun", "Nuevos Contactos": 214, "Ventas Realizadas": 140 },
]

const lineChartData = [
  { month: 'Enero', oee: 65 },
  { month: 'Febrero', oee: 72 },
  { month: 'Marzo', oee: 78 },
  { month: 'Abril', oee: 75 },
  { month: 'Mayo', oee: 82 },
  { month: 'Junio', oee: 85 },
];

const pieChartData = [
    { name: 'Producción', value: 400, color: 'hsl(var(--chart-1))' },
    { name: 'Logística', value: 300, color: 'hsl(var(--chart-2))' },
    { name: 'Mantenimiento', value: 200, color: 'hsl(var(--chart-3))' },
    { name: 'Calidad', value: 278, color: 'hsl(var(--chart-4))' },
];

export function Industrial() {
  return (
    <section id="industrial" className="w-full py-20 md:py-32 bg-secondary/30">
        <div className="container">
            <div className="text-center mb-12 fade-in-up">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                    Dashboard de <span className="animated-gradient-text">Analítica Industrial</span>
                </h2>
                <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed mt-4">
                    Optimiza procesos y predice resultados mediante la simulación de movimientos, análisis de datos y visualizaciones interactivas.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <Card className="lg:col-span-2 fade-in-up" style={{animationDelay: '200ms'}}>
                    <CardHeader>
                        <CardTitle>Análisis de Rendimiento (Enero - Junio {new Date().getFullYear()})</CardTitle>
                        <CardDescription>Comparativa de contactos generados vs. ventas cerradas.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barChartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip
                                    contentStyle={{
                                        background: "hsl(var(--background))",
                                        borderColor: "hsl(var(--border))",
                                        borderRadius: "var(--radius)"
                                    }}
                                />
                                <Legend />
                                <Bar dataKey="Nuevos Contactos" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="Ventas Realizadas" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                 <Card className="fade-in-up" style={{animationDelay: '400ms'}}>
                    <CardHeader>
                        <CardTitle>Eficiencia por Sector</CardTitle>
                         <CardDescription>Distribución de recursos y efectividad.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                     contentStyle={{
                                        background: "hsl(var(--background))",
                                        borderColor: "hsl(var(--border))",
                                        borderRadius: "var(--radius)"
                                    }}
                                />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-1 fade-in-up" style={{animationDelay: '600ms'}}>
                    <CardHeader>
                        <CardTitle>Evolución OEE</CardTitle>
                        <CardDescription>Overall Equipment Effectiveness</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={lineChartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                                <XAxis dataKey="month" />
                                <YAxis domain={[60, 90]} />
                                <Tooltip 
                                    contentStyle={{
                                        background: "hsl(var(--background))",
                                        borderColor: "hsl(var(--border))",
                                        borderRadius: "var(--radius)"
                                    }}
                                />
                                <Line type="monotone" dataKey="oee" stroke="hsl(var(--primary))" strokeWidth={2} name="OEE (%)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <div className="lg:col-span-2 space-y-6 fade-in-up" style={{animationDelay: '800ms'}}>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border">
                        <Zap className="h-8 w-8 text-primary mt-1"/>
                        <div>
                            <h3 className="text-xl font-bold font-headline">Simulación de Procesos</h3>
                            <p className="text-muted-foreground">
                                Visualiza y optimiza cadenas de montaje, flujos logísticos o cualquier proceso industrial para identificar cuellos de botella y mejorar la eficiencia antes de la implementación física.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 p-4 rounded-lg bg-card border">
                        <Building2 className="h-8 w-8 text-primary mt-1"/>
                        <div>
                            <h3 className="text-xl font-bold font-headline">Gemelos Digitales</h3>
                            <p className="text-muted-foreground">
                                Crea réplicas virtuales de tus activos para monitorización en tiempo real, mantenimiento predictivo y pruebas de escenarios sin riesgo para la producción.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 p-4 rounded-lg bg-card border">
                        <TrendingUp className="h-8 w-8 text-primary mt-1"/>
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
