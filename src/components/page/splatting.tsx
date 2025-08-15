
"use client"

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Loader } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

const SplattingViewer = dynamic(() => import('@/components/page/splatting-viewer').then(mod => mod.SplattingViewer), {
    ssr: false,
    loading: () => <div className="w-full h-[500px] flex items-center justify-center bg-muted rounded-lg"><Loader className="animate-spin h-8 w-8 text-primary"/></div>
})

const models = [
    {
        name: "Retro Headphone",
        path: "/assets/models/headphone.glb"
    },
    {
        name: "VR Headset",
        path: "/assets/models/vr-headset.glb"
    },
    {
        name: "Futuristic Shoe",
        path: "/assets/models/shoe.glb"
    }
]

export function Splatting() {
    return (
        <section id="splatting" className="w-full py-20 md:py-32">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline animated-gradient-text">
                        Visualización 3D Interactiva
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                        Presenta tus productos con un nivel de detalle y realismo sin precedentes utilizando las últimas técnicas de renderizado 3D en tiempo real.
                    </p>
                </div>
                
                <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                        {models.map((model, index) => (
                        <CarouselItem key={index}>
                            <Card className="bg-secondary/30 border-border/50">
                                <CardContent className="p-4 h-[500px]">
                                     <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-muted rounded-lg"><Loader className="animate-spin h-8 w-8 text-primary"/></div>}>
                                        <SplattingViewer path={model.path} />
                                    </Suspense>
                                </CardContent>
                            </Card>
                             <p className="text-center text-lg font-medium mt-4">{model.name}</p>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4 md:-left-12" />
                    <CarouselNext className="-right-4 md:-right-12" />
                </Carousel>
                
                <p className="text-center text-xs text-muted-foreground mt-8">
                    *Interactúa con los modelos: arrastra para rotar y haz scroll para hacer zoom.
                </p>
            </div>
        </section>
    )
}
