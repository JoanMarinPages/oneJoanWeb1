
"use client";

import { useRef, useState } from 'react';
import { Play, Pause, Home, Building } from "lucide-react";

const projects = [
  {
    title: "Villa de Lujo con Vistas al Mar",
    description: "Recorrido virtual por una villa moderna, mostrando su arquitectura y diseño interior.",
    video: "/assets/videos/video-real-estate-1.mp4",
    icon: <Home className="h-8 w-8 text-primary" />
  },
  {
    title: "Apartamento Urbano Inteligente",
    description: "Demostración de un apartamento en la ciudad con tecnología domótica integrada.",
    video: "/assets/videos/video-real-estate-2.mp4",
    icon: <Building className="h-8 w-8 text-primary" />
  },
];

export function RealEstate() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState<{[key: number]: boolean}>({});

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
  }

  return (
    <section id="real-estate" className="w-full">
      <div className="container">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Soluciones para <span className="animated-gradient-text">Inmobiliaria y Arquitectura</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            Visualizaciones interactivas y experiencias inmersivas que dan vida a tus proyectos antes de construirlos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${200 * (index + 1)}ms` }}
            >
              <div 
                className="relative overflow-hidden rounded-2xl group aspect-video shadow-2xl shadow-primary/10 cursor-pointer border"
                onClick={() => togglePlay(index)}
              >
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={project.video}
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onPlay={() => setPlayingStates(prev => ({...prev, [index]: true}))}
                  onPause={() => setPlayingStates(prev => ({...prev, [index]: false}))}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {playingStates[index] ? <Pause className="h-12 w-12 text-white/80" /> : <Play className="h-12 w-12 text-white/80" />}
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1 shrink-0">
                  {project.icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                    <p className="text-muted-foreground mt-1">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
