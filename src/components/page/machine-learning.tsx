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
      Casos de Estudio de <span className="animated-gradient-text">Machine Learning</span>
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
                <span>RL: Conducción Autónoma</span>
            </CardTitle>
            <CardDescription>Entrenamiento de un agente para aprender a conducir en un circuito.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-[300px] aspect-square">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Track */}
                <path d="M 50,10
                         A 40,40 0 0 1 90,50
                         A 40,40 0 0 1 50,90
                         A 40,40 0 0 1 10,50
                         A 40,40 0 0 1 50,10 Z"
                      stroke="hsl(var(--border))" strokeWidth="16" fill="none" />
                <path d="M 50,10
                         A 40,40 0 0 1 90,50
                         A 40,40 0 0 1 50,90
                         A 40,40 0 0 1 10,50
                         A 40,40 0 0 1 50,10 Z"
                      stroke="hsl(var(--muted))" strokeWidth="14" fill="none" />
                 {/* Finish Line */}
                <line x1="50" y1="2" x2="50" y2="18" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="2 2" />

                {/* Cars */}
                <circle cx="0" cy="0" r="2.5" fill="hsl(var(--chart-4))" className="animate-car-fail-1">
                    <animateMotion dur="8s" repeatCount="indefinite" path="M 50,10 A 40,40 0 0 1 90,50 A 40,40 0 0 1 50,90" />
                </circle>
                <circle cx="0" cy="0" r="2.5" fill="hsl(var(--chart-4))" className="animate-car-fail-2">
                     <animateMotion dur="12s" repeatCount="indefinite" path="M 50,10 A 40,40 0 0 1 90,50 A 40,40 0 0 1 50,90 A 40,40 0 0 1 10,50" />
                </circle>
                <circle cx="0" cy="0" r="3" fill="hsl(var(--chart-1))" className="animate-car-success">
                     <animateMotion dur="10s" repeatCount="indefinite" path="M 50,10 A 40,40 0 0 1 90,50 A 40,40 0 0 1 50,90 A 40,40 0 0 1 10,50 A 40,40 0 0 1 50,10 Z" />
                </circle>
              </svg>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <div className="w-full">
                <h4 className="font-semibold flex items-center gap-2 mb-2"><Eye className="h-5 w-5 text-primary"/>Análisis y Resultados</h4>
                <p className="text-sm text-muted-foreground">El agente (coche azul) aprende por prueba y error. Tras múltiples intentos fallidos (coches rojos), optimiza su ruta para maximizar la "recompensa" (avanzar) y completar el circuito, evitando penalizaciones.</p>
             </div>
          </CardFooter>
        </Card>
      </div>
    </Section>
  )
}
