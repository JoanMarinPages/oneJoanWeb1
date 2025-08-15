"use client"

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Loader } from 'lucide-react'

// Carga dinámica del visor 3D para asegurar que solo se renderice en el cliente
const SplattingViewer = dynamic(() => import('@/components/page/splatting-viewer').then(mod => mod.SplattingViewer), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center bg-muted"><Loader className="animate-spin h-8 w-8 text-primary"/></div>
})

export function Splatting() {
    return (
        <section id="splatting" className="w-full h-[300vh] relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
                 <div className="container absolute top-10 left-1/2 -translate-x-1/2 text-center opacity-0 animate-fade-in-up z-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline animated-gradient-text">
                        Visualización 3D y Splatting Gaussiano
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                        Presenta tus productos con un nivel de detalle y realismo sin precedentes utilizando las últimas técnicas de renderizado 3D en tiempo real.
                    </p>
                </div>
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-muted"><Loader className="animate-spin h-8 w-8 text-primary"/></div>}>
                    <SplattingViewer path="/assets/models/shoe.glb" />
                </Suspense>
                 <p className="absolute bottom-10 text-center text-xs text-muted-foreground z-10">
                        *El modelo 3D es una representación. La tecnología Gaussian Splatting permite una calidad y detalle aún superiores.
                 </p>
            </div>
        </section>
    )
}
