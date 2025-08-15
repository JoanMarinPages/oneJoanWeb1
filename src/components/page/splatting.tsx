
"use client"

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Loader } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

const SplattingViewer = dynamic(() => import('@/components/page/splatting-viewer').then(mod => mod.SplattingViewer), {
    ssr: false,
    loading: () => <div className="w-full h-[500px] flex items-center justify-center bg-muted rounded-lg"><Loader className="animate-spin h-8 w-8 text-primary"/></div>
})

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
                
                <Card className="bg-secondary/30 border-border/50 h-[50vh] md:h-[70vh]">
                    <CardContent className="p-0 h-full">
                            <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-muted rounded-lg"><Loader className="animate-spin h-8 w-8 text-primary"/></div>}>
                            <SplattingViewer />
                        </Suspense>
                    </CardContent>
                </Card>
                
                <p className="text-center text-xs text-muted-foreground mt-8">
                    *Interactúa con el modelo: arrastra para rotar y haz scroll para hacer zoom.
                </p>
            </div>
        </section>
    )
}
