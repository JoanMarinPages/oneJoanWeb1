"use client"

import * as React from "react"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Legend, Cell, ResponsiveContainer, ComposedChart, Line } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Users, Fuel, LineChart as LineChartIcon, Eye, Award, Play, Pause, RotateCcw, Settings, Map, Route } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Section } from "./section"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { cn } from "@/lib/utils"

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
                    <Route className="text-primary"/>
                    <span>Problema del Viajante (TSP)</span>
                </CardTitle>
                <CardDescription>Encuentra la ruta más corta que visite todas las ciudades y regrese al inicio.</CardDescription>
            </CardHeader>
            <CardContent>
              <TSPVisualizer />
            </CardContent>
        </Card>
      </div>
    </Section>
  )
}


const TSPVisualizer = () => {
  // Generar 10 ciudades aleatorias
  const generateCities = React.useCallback(() => {
    const cities = [];
    const names = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao', 'Málaga', 'Zaragoza', 'Murcia', 'Palma', 'Córdoba'];
    
    for (let i = 0; i < 10; i++) {
      cities.push({
        id: i,
        name: names[i],
        x: Math.random() * 300 + 25,
        y: Math.random() * 200 + 25
      });
    }
    return cities;
  }, []);

  const [cities, setCities] = React.useState(generateCities);
  const [currentPath, setCurrentPath] = React.useState<number[]>([]);
  const [bestPath, setBestPath] = React.useState<number[]>([]);
  const [bestDistance, setBestDistance] = React.useState(Infinity);
  const [isRunning, setIsRunning] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [totalSteps, setTotalSteps] = React.useState(0);
  const [algorithm, setAlgorithm] = React.useState('nearestNeighbor');
  const [speed, setSpeed] = React.useState(300);

  // Calcular distancia entre dos ciudades
  const calculateDistance = (city1: {x:number, y:number}, city2: {x:number, y:number}) => {
    const dx = city1.x - city2.x;
    const dy = city1.y - city2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Calcular distancia total de un camino
  const calculateTotalDistance = React.useCallback((path: number[]) => {
    if (path.length < 2) return 0;
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) {
      total += calculateDistance(cities[path[i]], cities[path[i + 1]]);
    }
    // Agregar distancia de vuelta al inicio
    if (path.length === cities.length) {
      total += calculateDistance(cities[path[path.length - 1]], cities[path[0]]);
    }
    return total;
  }, [cities]);

  // Algoritmo del vecino más cercano
  const nearestNeighborAlgorithm = React.useCallback(() => {
    const visited = new Set();
    const path = [0]; // Comenzar en la ciudad 0
    visited.add(0);
    
    const steps = [];
    
    while (visited.size < cities.length) {
      const currentCity = path[path.length - 1];
      let nearestCity = -1;
      let nearestDistance = Infinity;
      
      for (let i = 0; i < cities.length; i++) {
        if (!visited.has(i)) {
          const distance = calculateDistance(cities[currentCity], cities[i]);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestCity = i;
          }
        }
      }
      
      if (nearestCity !== -1) {
        path.push(nearestCity);
        visited.add(nearestCity);
        steps.push([...path]);
      }
    }
    
    return steps;
  }, [cities]);

  // Algoritmo 2-opt (mejora local)
  const twoOptAlgorithm = React.useCallback((initialPath: number[]) => {
    let currentBPath = [...initialPath];
    let currentBDistance = calculateTotalDistance(currentBPath);
    const steps : number[][] = [[...currentBPath]];
    let improved = true;
    
    while (improved) {
      improved = false;
      for (let i = 1; i < currentBPath.length - 1; i++) {
        for (let j = i + 1; j < currentBPath.length; j++) {
          const newPath = [...currentBPath];
          const segment = newPath.slice(i, j).reverse();
          newPath.splice(i, j - i, ...segment);
          
          const newDistance = calculateTotalDistance(newPath);
          if (newDistance < currentBDistance) {
            currentBPath = newPath;
            currentBDistance = newDistance;
            steps.push([...currentBPath]);
            improved = true;
          }
        }
      }
    }
    
    return steps;
  }, [calculateTotalDistance]);

  // Ejecutar algoritmo seleccionado
  const runAlgorithm = React.useCallback(() => {
    let steps: number[][] = [];
    
    if (algorithm === 'nearestNeighbor') {
      steps = nearestNeighborAlgorithm();
    } else if (algorithm === 'twoOpt') {
      const initialPath = cities.map((_,i) => i);
      const shuffledPath = [...initialPath].sort(() => Math.random() - 0.5);
      steps = twoOptAlgorithm(shuffledPath);
    }
    
    setTotalSteps(steps.length);
    return steps;
  }, [algorithm, nearestNeighborAlgorithm, twoOptAlgorithm, cities]);

  // Animar algoritmo
  React.useEffect(() => {
    if (!isRunning) return;
    
    const steps = runAlgorithm();
    if (steps.length === 0) {
        setIsRunning(false);
        return;
    };
    
    let stepIndex = 0;
    
    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        const path = steps[stepIndex];
        setCurrentPath(path);
        setCurrentStep(stepIndex + 1);
        
        const distance = calculateTotalDistance(path);
        if (distance < bestDistance) {
          setBestDistance(distance);
          setBestPath([...path]);
        }
        
        stepIndex++;
      } else {
        const finalPath = steps[steps.length - 1];
        const finalDistance = calculateTotalDistance(finalPath);
        if (finalDistance < bestDistance) {
            setBestDistance(finalDistance);
            setBestPath([...finalPath]);
        }
        setIsRunning(false);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [isRunning, runAlgorithm, speed, bestDistance, calculateTotalDistance]);

  const handleStart = () => {
    handleReset(false);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = (regenerateCities = true) => {
    setIsRunning(false);
    setCurrentPath([]);
    setBestPath([]);
    setBestDistance(Infinity);
    setCurrentStep(0);
    setTotalSteps(0);
    if(regenerateCities) {
      setCities(generateCities());
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Controles */}
      <div className="flex flex-wrap gap-2 items-center">
        <Button
            onClick={isRunning ? handleStop : handleStart}
            variant={isRunning ? "destructive" : "default"}
            size="sm"
            disabled={totalSteps > 0 && currentStep >= totalSteps}
          >
            {isRunning ? <Pause size={16} /> : <Play size={16} />}
            <span>{isRunning ? 'Pausar' : 'Iniciar'}</span>
        </Button>
         <Button
            onClick={() => handleReset()}
            variant="outline"
            size="sm"
          >
            <RotateCcw size={16} />
            <span>Reiniciar</span>
        </Button>
        <div className="flex-1" />
        <Select value={algorithm} onValueChange={setAlgorithm} disabled={isRunning}>
            <SelectTrigger className="w-[150px] h-9 text-xs">
                <SelectValue placeholder="Algoritmo" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="nearestNeighbor">Vecino Cercano</SelectItem>
                <SelectItem value="twoOpt">2-Opt</SelectItem>
            </SelectContent>
        </Select>
      </div>

      {/* Visualización */}
      <div className="rounded-lg overflow-hidden aspect-video relative bg-muted/50">
        <svg viewBox="0 0 350 250" className="w-full h-full">
          {/* Mejor ruta (en gris claro) */}
          {bestPath.length > 1 && (
            <g stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" fill="none">
              {bestPath.map((cityIndex, i) => {
                const nextIndex = (i + 1) % bestPath.length;
                const city1 = cities[cityIndex];
                const city2 = cities[bestPath[nextIndex]];
                return (
                  <line
                    key={`best-${i}`}
                    x1={city1.x}
                    y1={city1.y}
                    x2={city2.x}
                    y2={city2.y}
                  />
                );
              })}
            </g>
          )}

          {/* Ruta actual */}
          {currentPath.length > 1 && (
            <g stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none">
              {currentPath.map((cityIndex, i) => {
                if (i === currentPath.length - 1) return null;
                const city1 = cities[cityIndex];
                const city2 = cities[currentPath[i + 1]];
                return (
                  <line
                    key={`current-${i}`}
                    x1={city1.x}
                    y1={city1.y}
                    x2={city2.x}
                    y2={city2.y}
                  />
                );
              })}
              {/* Línea de regreso al inicio si la ruta está completa */}
              {currentPath.length === cities.length && (
                <line
                  x1={cities[currentPath[currentPath.length - 1]].x}
                  y1={cities[currentPath[currentPath.length - 1]].y}
                  x2={cities[currentPath[0]].x}
                  y2={cities[currentPath[0]].y}
                  strokeDasharray="5,3"
                />
              )}
            </g>
          )}

          {/* Ciudades */}
          {cities.map((city, index) => {
            const isVisited = currentPath.includes(index);
            const isCurrent = currentPath.length > 0 && currentPath[currentPath.length - 1] === index;
            
            return (
              <g key={city.id} className="cursor-pointer">
                <circle
                  cx={city.x}
                  cy={city.y}
                  r="6"
                  fill={isCurrent ? "hsl(var(--destructive))" : isVisited ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"}
                  stroke="hsl(var(--card))"
                  strokeWidth="1"
                />
                <text
                  x={city.x}
                  y={city.y - 10}
                  textAnchor="middle"
                  className="text-[8px] font-medium fill-foreground"
                >
                  {city.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

       <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-muted p-2 rounded-md">
          <h3 className="font-semibold text-muted-foreground">Progreso</h3>
          <p className="font-mono">{currentStep} / {totalSteps}</p>
        </div>
        <div className="bg-muted p-2 rounded-md">
          <h3 className="font-semibold text-muted-foreground">Mejor Distancia</h3>
          <p className="font-mono">
            {bestDistance !== Infinity ? bestDistance.toFixed(0) : '...'}
          </p>
        </div>
      </div>

      {/* Explicación del algoritmo */}
      <div className="mt-2 bg-primary/10 p-3 rounded-lg">
        <h4 className="font-semibold text-primary mb-1 text-sm">
          {algorithm === 'nearestNeighbor' ? 'Algoritmo del Vecino Más Cercano' : 'Algoritmo 2-Opt'}
        </h4>
        <p className="text-primary/80 text-xs">
          {algorithm === 'nearestNeighbor' 
            ? 'En cada paso, viaja a la ciudad más cercana no visitada. Es rápido pero no garantiza la solución óptima.'
            : 'Mejora una ruta inicial intercambiando aristas para ver si acorta el camino. Se repite hasta no encontrar mejoras.'
          }
        </p>
      </div>
    </div>
  );
};
