"use client"

import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Card, CardContent } from '../ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Loader } from 'lucide-react'

// This is a placeholder model component.
// You would replace 'model.glb' with the path to your actual 3D model.
function Model({ path }: { path: string}) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} />
}

// Preload the models
useGLTF.preload('/assets/models/shoe.glb')
useGLTF.preload('/assets/models/headphone.glb')
useGLTF.preload('/assets/models/vr-headset.glb')


const models = [
    { name: "Zapatilla Deportiva", path: "/assets/models/shoe.glb", description: "Visualización 3D fotorrealista para e-commerce." },
    { name: "Auriculares Hi-Fi", path: "/assets/models/headphone.glb", description: "Modelo detallado para marketing de producto." },
    { name: "Casco de RV", path: "/assets/models/vr-headset.glb", description: "Activo digital para experiencias de realidad virtual." },
]

export function Splatting() {
    return (
        <section id="splatting" className="w-full py-20 md:py-32">
            <div className="container">
                <div className="text-center mb-12 opacity-0 animate-fade-in-up">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Visualización 3D y Splatting Gaussiano
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                        Presenta tus productos con un nivel de detalle y realismo sin precedentes utilizando las últimas técnicas de renderizado 3D en tiempo real.
                    </p>
                </div>

                <div className="opacity-0 animate-fade-in-up [animation-delay:200ms]">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {models.map((model, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="overflow-hidden">
                                            <CardContent className="p-0 aspect-square">
                                                <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-muted"><Loader className="animate-spin h-8 w-8 text-primary"/></div>}>
                                                    <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ touchAction: 'none' }}>
                                                        <color attach="background" args={['#222631']} />
                                                        <Stage environment="city" intensity={0.6}>
                                                            <Model path={model.path} />
                                                        </Stage>
                                                        <OrbitControls autoRotate enableZoom={false} />
                                                    </Canvas>
                                                </Suspense>
                                            </CardContent>
                                        </Card>
                                        <div className="mt-4 text-center">
                                            <h3 className="text-lg font-bold font-headline">{model.name}</h3>
                                            <p className="text-sm text-muted-foreground">{model.description}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex"/>
                    </Carousel>
                </div>
                 <p className="text-center text-xs text-muted-foreground mt-8">
                        *Los modelos 3D son representaciones. La tecnología Gaussian Splatting permite una calidad y detalle aún superiores.
                 </p>
            </div>
        </section>
    )
}
