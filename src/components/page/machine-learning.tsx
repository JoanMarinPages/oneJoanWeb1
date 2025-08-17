
"use client"

import * as React from "react"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Legend, Cell, ResponsiveContainer, ComposedChart, Line } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Users, Fuel, LineChart as LineChartIcon, Eye, Award } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Section } from "./section"

// Example data for Logistic Regression (Customer Churn)
const churnData = [
  { tenure: 1, cost: 30, churn: 1 }, { tenure: 5, cost: 25, churn: 1 },
  { tenure: 12, cost: 80, churn: 0 }, { tenure: 24, cost: 120, churn: 0 },
  { tenure: 3, cost: 90, churn: 1 }, { tenure: 30, cost: 40, churn: 0 },
  { tenure: 6, cost: 50, churn: 1 }, { tenure: 18, cost: 100, churn: 0 },
  { tenure: 48, cost: 110, churn: 0 }, { tenure: 2, cost: 70, churn: 1 },
  { tenure: 60, cost: 95, churn: 0 }, { tenure: 4, cost: 65, churn: 1 },
];

const churnChartConfig = {
  "No Churn": {
    label: "No Churn",
    color: "hsl(var(--chart-2))",
  },
  "Churn": {
    label: "Churn",
    color: "hsl(var(--chart-4))",
  },
}

// Example data for K-Means Clustering
const kMeansData = Array.from({ length: 50 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
}));

// Example data for Linear Regression (Fuel Consumption)
const fuelData = [
  { engineSize: 1.6, mpg: 35 }, { engineSize: 2.0, mpg: 28 },
  { engineSize: 1.4, mpg: 38 }, { engineSize: 2.5, mpg: 24 },
  { engineSize: 3.0, mpg: 20 }, { engineSize: 1.8, mpg: 31 },
  { engineSize: 2.2, mpg: 26 }, { engineSize: 3.5, mpg: 18 },
  { engineSize: 1.0, mpg: 45 }, { engineSize: 4.0, mpg: 15 },
];

const fuelChartConfig = {
  mpg: {
    label: "MPG",
    color: "hsl(var(--chart-1))",
  },
  prediction: {
    label: "Predicción",
    color: "hsl(var(--chart-3))",
  },
}


interface MachineLearningProps {
  backgroundVideoUrl: string;
}

export function MachineLearning({ backgroundVideoUrl }: MachineLearningProps) {
  const title = (
    <>
      Casos de Estudio de <span className="text-primary">Machine Learning</span>
    </>
  );

  const description = "Visualizaciones de modelos de Machine Learning para demostrar su aplicación en problemas reales como la clasificación y segmentación de datos.";

  return (
    <Section id="machine-learning" title={title} description={description} backgroundVideoUrl={backgroundVideoUrl}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="flex flex-col bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="text-primary"/>
                <span>Clasificación de Clientes</span>
            </CardTitle>
            <CardDescription>Predicción de abandono (churn) de clientes usando Regresión Logística.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ChartContainer config={churnChartConfig} className="min-h-[300px] w-full">
               <ResponsiveContainer width="100%" height={300}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                  <XAxis type="number" dataKey="tenure" name="Antigüedad (meses)" unit="m" stroke="hsl(var(--muted-foreground))" />
                  <YAxis type="number" dataKey="cost" name="Coste Plan" unit="€" stroke="hsl(var(--muted-foreground))"/>
                   <ChartTooltip
                      cursor={{strokeDasharray: '3 3'}}
                      content={<ChartTooltipContent 
                        labelFormatter={(value, payload) => payload?.[0]?.payload.churn ? 'Cliente Abandona' : 'Cliente Fiel'}
                        formatter={(value, name) => `${name}: ${value}`}
                      />}
                  />
                  <Legend />
                  <Scatter name="No Churn" data={churnData.filter(d => d.churn === 0)} fill="var(--color-No Churn)" shape="circle" />
                  <Scatter name="Churn" data={churnData.filter(d => d.churn === 1)} fill="var(--color-Churn)" shape="cross" />
                </ScatterChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
           <CardFooter className="pt-6">
             <div className="w-full">
                <h4 className="font-semibold flex items-center gap-2 mb-2"><Eye className="h-5 w-5 text-primary"/>Análisis y Resultados</h4>
                <p className="text-sm text-muted-foreground">El modelo aprende a trazar una "frontera" invisible que separa eficazmente a los clientes que probablemente abandonarán (cruces rojas) de los que permanecerán (círculos verdes), permitiendo acciones de retención proactivas.</p>
             </div>
          </CardFooter>
        </Card>

        <Card className="flex flex-col bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Users className="text-primary"/>
                <span>Segmentación de Datos</span>
            </CardTitle>
            <CardDescription>Agrupación de datos no etiquetados en clústeres con K-Means.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
             <ChartContainer config={kMeansData} className="min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                  <XAxis type="number" dataKey="x" name="Variable X" stroke="hsl(var(--muted-foreground))" />
                  <YAxis type="number" dataKey="y" name="Variable Y" stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip cursor={{ strokeDasharray: '3 3' }} content={<ChartTooltipContent />} />
                  <Scatter name="Data Points" data={kMeansData} fill="var(--color-data)">
                    {kMeansData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.x + entry.y < 100 ? "hsl(var(--chart-1))" : "hsl(var(--chart-3))"} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
           <CardFooter className="pt-6">
               <div className="w-full">
                <h4 className="font-semibold flex items-center gap-2 mb-2"><Eye className="h-5 w-5 text-primary"/>Análisis y Resultados</h4>
                <p className="text-sm text-muted-foreground">El algoritmo K-Means identifica patrones y agrupa los datos en clústeres distintos (azul y violeta), lo que permite descubrir segmentos de clientes, como "usuarios de alto valor" vs. "usuarios ocasionales".</p>
             </div>
          </CardFooter>
        </Card>

         <Card className="flex flex-col bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Fuel className="text-primary"/>
                <span>Predicción de Consumo</span>
            </CardTitle>
            <CardDescription>Estimación del consumo de combustible usando Regresión Lineal.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
             <ChartContainer config={fuelChartConfig} className="min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={fuelData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                  <XAxis type="number" dataKey="engineSize" name="Motor (L)" unit="L" stroke="hsl(var(--muted-foreground))" />
                  <YAxis type="number" dataKey="mpg" name="Consumo (MPG)" stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip cursor={{strokeDasharray: '3 3'}} content={<ChartTooltipContent />} />
                  <Legend />
                  <Scatter name="Datos Reales" dataKey="mpg" fill="var(--color-mpg)" />
                  <Line name="Línea de Predicción" dataKey={(d) => 50 - 8.5 * d.engineSize} stroke="var(--color-prediction)" strokeWidth={2} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
          <CardFooter className="pt-6">
            <div className="w-full">
                <h4 className="font-semibold flex items-center gap-2 mb-2"><LineChartIcon className="h-5 w-5 text-primary"/>Análisis y Resultados</h4>
                <p className="text-sm text-muted-foreground">El modelo de regresión aprende la relación entre el tamaño del motor y el consumo, generando una línea de tendencia (violeta) que puede predecir el consumo para vehículos no vistos en los datos originales.</p>
             </div>
          </CardFooter>
        </Card>
        
        <Card className="flex flex-col bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Award className="text-primary"/>
                <span>RL: Car Racing</span>
            </CardTitle>
            <CardDescription>Entrenamiento de agentes para completar un circuito de carreras.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-[350px] aspect-square overflow-hidden relative">
              <svg viewBox="0 0 120 120" className="w-full h-full absolute top-0 left-0">
                 <path 
                    d="M 60,5 C 120,5 120,60 100,60 C 80,60 80,80 100,80 C 120,80 120,115 60,115 C 0,115 0,80 20,80 C 40,80 40,60 20,60 C 0,60 0,5 60,5 Z"
                    stroke="hsl(var(--border))" 
                    strokeWidth="12"
                    fill="hsl(var(--muted))" 
                />
                <rect x="55" y="-5" width="10" height="20" fill="hsl(var(--foreground))">
                    <animate attributeName="fill" values="hsl(var(--foreground));hsl(var(--primary));hsl(var(--foreground))" dur="1s" repeatCount="indefinite" />
                </rect>
              </svg>
               <div className="w-4 h-4 -mt-2 -ml-2 rounded-full bg-destructive shadow-lg animate-car-success"></div>
               <div className="w-4 h-4 -mt-2 -ml-2 rounded-full bg-muted-foreground shadow animate-car-fail-1"></div>
               <div className="w-4 h-4 -mt-2 -ml-2 rounded-full bg-muted-foreground shadow animate-car-fail-2"></div>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <div className="w-full">
                <h4 className="font-semibold flex items-center gap-2 mb-2"><Eye className="h-5 w-5 text-primary"/>Análisis y Resultados</h4>
                <p className="text-sm text-muted-foreground">La simulación muestra múltiples iteraciones. Los coches grises representan agentes "novatos" que fallan al salirse de la pista (penalización). El coche rojo es el agente "entrenado" que, tras miles de intentos, ha aprendido la ruta óptima para maximizar la recompensa completando el circuito.</p>
             </div>
          </CardFooter>
        </Card>
      </div>
    </Section>
  )
}
