
"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Cell, YAxis, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, TrendingUp, Zap } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Section } from "./section"

interface IndustrialProps {
  backgroundVideoUrl: string;
  dictionary: any;
}

export function Industrial({ backgroundVideoUrl, dictionary }: IndustrialProps) {
    
    const barChartData = [
      { date: "Ene", [dictionary.chart1_legend1]: 186, [dictionary.chart1_legend2]: 80 },
      { date: "Feb", [dictionary.chart1_legend1]: 305, [dictionary.chart1_legend2]: 200 },
      { date: "Mar", [dictionary.chart1_legend1]: 237, [dictionary.chart1_legend2]: 120 },
      { date: "Abr", [dictionary.chart1_legend1]: 273, [dictionary.chart1_legend2]: 190 },
      { date: "May", [dictionary.chart1_legend1]: 209, [dictionary.chart1_legend2]: 130 },
      { date: "Jun", [dictionary.chart1_legend1]: 214, [dictionary.chart1_legend2]: 140 },
    ]

    const barChartConfig = {
      [dictionary.chart1_legend1]: {
        label: dictionary.chart1_legend1,
        color: "hsl(var(--accent))",
      },
      [dictionary.chart1_legend2]: {
        label: dictionary.chart1_legend2,
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
        { name: dictionary.chart2_legend1, value: 400, fill: 'hsl(var(--chart-1))' },
        { name: dictionary.chart2_legend2, value: 300, fill: 'hsl(var(--chart-2))' },
        { name: dictionary.chart2_legend3, value: 200, fill: 'hsl(var(--chart-3))' },
        { name: dictionary.chart2_legend4, value: 278, fill: 'hsl(var(--chart-4))' },
    ];
    
    const pieChartConfig = {
      value: {
        label: "Value",
      },
      [dictionary.chart2_legend1]: {
        label: dictionary.chart2_legend1,
        color: "hsl(var(--chart-1))",
      },
      [dictionary.chart2_legend2]: {
        label: dictionary.chart2_legend2,
        color: "hsl(var(--chart-2))",
      },
      [dictionary.chart2_legend3]: {
        label: dictionary.chart2_legend3,
        color: "hsl(var(--chart-3))",
      },
      [dictionary.chart2_legend4]: {
        label: dictionary.chart2_legend4,
        color: "hsl(var(--chart-4))",
      },
    }

    const title = (
        <span dangerouslySetInnerHTML={{ __html: dictionary.title.replace("Analítica Industrial", `<span class="text-primary">Analítica Industrial</span>`) }} />
    );

    const description = dictionary.subtitle;

  return (
    <Section id="industrial" title={title} description={description} backgroundVideoUrl={backgroundVideoUrl}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                <CardHeader>
                    <CardTitle>{dictionary.chart1_title} ({new Date().getFullYear()})</CardTitle>
                    <CardDescription>{dictionary.chart1_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={barChartConfig} className="min-h-[300px] w-full">
                        <BarChart data={barChartData} margin={{ left: -20, right: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
                            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                            <ChartTooltip
                                cursor={{fill: 'hsl(var(--accent) / 0.1)'}}
                                content={<ChartTooltipContent />}
                            />
                            <Legend />
                            <Bar dataKey={dictionary.chart1_legend1} fill={`var(--color-${dictionary.chart1_legend1})`} radius={[4, 4, 0, 0]} />
                            <Bar dataKey={dictionary.chart1_legend2} fill={`var(--color-${dictionary.chart1_legend2})`} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
                <Card className="bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                <CardHeader>
                    <CardTitle>{dictionary.chart2_title}</CardTitle>
                        <CardDescription>{dictionary.chart2_desc}</CardDescription>
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
            <Card className="lg:col-span-1 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                <CardHeader>
                    <CardTitle>{dictionary.chart3_title}</CardTitle>
                    <CardDescription>{dictionary.chart3_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={lineChartConfig} className="min-h-[300px] w-full">
                        <LineChart data={lineChartData} margin={{ left: -20, right: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)"/>
                            <YAxis domain={[60, 90]} tickLine={false} axisLine={false}/>
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                            <ChartTooltip 
                                cursor={{stroke: 'hsl(var(--primary))', strokeWidth: 1.5, strokeDasharray: '3 3'}}
                                content={<ChartTooltipContent />}
                            />
                            <Line type="monotone" dataKey="oee" stroke="var(--color-oee)" strokeWidth={3} name="OEE" dot={{ r: 5, fill: 'var(--color-oee)' }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <div className="lg:col-span-2 space-y-6">
                <Card className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                    <div className="p-3 bg-primary/10 rounded-full"><Zap className="h-7 w-7 text-primary"/></div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">{dictionary.card1_title}</h3>
                        <p className="text-muted-foreground mt-1">
                            {dictionary.card1_desc}
                        </p>
                    </div>
                </Card>
                    <Card className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                    <div className="p-3 bg-primary/10 rounded-full"><Building2 className="h-7 w-7 text-primary"/></div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">{dictionary.card2_title}</h3>
                        <p className="text-muted-foreground mt-1">
                            {dictionary.card2_desc}
                        </p>
                    </div>
                </Card>
                    <Card className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm border-white/10 shadow-lg shadow-primary/5">
                    <div className="p-3 bg-primary/10 rounded-full"><TrendingUp className="h-7 w-7 text-primary"/></div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">{dictionary.card3_title}</h3>
                        <p className="text-muted-foreground mt-1">
                           {dictionary.card3_desc}
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    </Section>
  )
}
