"use client";

import { useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Play, Pause, Rewind, FastForward, Home, Building } from "lucide-react";

const projects = [
  {
    title: "Villa de Lujo con Vistas al Mar",
    description: "Recorrido virtual por una villa moderna, mostrando su arquitectura y diseño interior.",
    video: "/assets/videosBackground/video1.mp4",
    icon: <Home className="h-8 w-8 text-primary" />
  },
  {
    title: "Apartamento Urbano Inteligente",
    description: "Demostración de un apartamento en la ciudad con tecnología domótica integrada.",
    video: "/assets/videosBackground/video2.mp4",
    icon: <Building className="h-8 w-8 text-primary" />
  },
];

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleSeek = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      if (videoRef.current.paused) {
         videoRef.current.play();
         setIsPlaying(true);
      }
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg group">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => handleSeek(0.5)} className="text-white hover:bg-white/20">
            <Rewind />
          </Button>
          <Button variant="ghost" size="icon" onClick={togglePlay} className="h-16 w-16 text-white hover:bg-white/20">
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleSeek(2)} className="text-white hover:bg-white/20">
            <FastForward />
          </Button>
        </div>
      </div>
    </div>
  );
};

export function RealEstate() {
  return (
    <section id="real-estate" className="w-full py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline animated-gradient-text">
            Soluciones para Inmobiliaria y Arquitectura
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            Visualizaciones interactivas y experiencias inmersivas que dan vida a tus proyectos antes de construirlos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${200 * (index + 1)}ms` }}
            >
              <Card className="overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all duration-300 shadow-2xl">
                <CardContent className="p-0">
                  <VideoPlayer src={project.video} />
                </CardContent>
              </Card>
              <div className="mt-6 flex items-start gap-4">
                {project.icon}
                <div>
                    <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
