"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative w-full py-24 md:py-40 overflow-hidden">
      <video
        src="/assets/ondesVideo/video-real-estate-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 text-center text-white flex flex-col items-center">
        <div className="fade-in-up max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-white">
            Hola
          </h2>
          <p className="mx-auto text-white/80 md:text-xl/relaxed mt-6">
            Mi misión es entender tus objetivos de negocio para construir soluciones digitales que no solo funcionen, sino que generen un impacto real y medible. Me involucro en cada proyecto como si fuera mío, asegurando la excelencia técnica y una comunicación transparente en cada paso del camino.
          </p>
          <Button size="lg" asChild className="mt-8">
            <Link href="#contact">Empezar un Proyecto <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
