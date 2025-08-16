
"use client";

import { useRef, useState } from 'react';
import { Play, Pause, Home, Building } from "lucide-react";
import { Section } from './section';

const projects = [
  {
    title: "Villa de Lujo con Vistas al Mar",
    description: "Recorrido virtual por una villa moderna, mostrando su arquitectura y diseño interior.",
    video: "/assets/ondesVideo/video-real-estate-1.mp4",
    icon: <Home className="h-8 w-8 text-primary" />,
    overlay: (
      <>
        <div className="absolute top-8 left-8">
          <h3 className="text-4xl md:text-5xl font-bold font-headline text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            Luce tu<br />espacio
          </h3>
          <p className="mt-2 text-lg text-white/90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
            Crea vistas profesionales
          </p>
        </div>
      </>
    )
  },
  {
    title: "Apartamento Urbano Inteligente",
    description: "Demostración de un apartamento en la ciudad con tecnología domótica integrada.",
    video: "/assets/ondesVideo/video-real-estate-2.mp4",
    icon: <Building className="h-8 w-8 text-primary" />,
    overlay: (
        <div className="absolute bottom-8 left-8 max-w-md">
            <h3 className="text-2xl font-bold font-headline text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                World's most advanced<br/>3D Generative NeRF Technology
            </h3>
        </div>
    )
  },
];

interface RealEstateProps {
  backgroundVideoUrl: string;
}

export function RealEstate({ backgroundVideoUrl }: RealEstateProps) {
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

  const title = (
    <>
      Soluciones para <span className="animated-gradient-text">Inmobiliaria y Arquitectura</span>
    </>
  );

  const description = "Visualizaciones interactivas y experiencias inmersivas que dan vida a tus proyectos antes de construirlos.";

  return (
    <Section id="real-estate" title={title} description={description} backgroundVideoUrl={backgroundVideoUrl}>
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${200 * (index + 1)}ms` }}
            >
              <div 
                className="relative overflow-hidden rounded-2xl group aspect-video shadow-2xl shadow-primary/10 cursor-pointer border-white/10 border"
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
                
                {/* Text Overlay */}
                {project.overlay}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {playingStates[index] ? <Pause className="h-12 w-12 text-white/80" /> : <Play className="h-12 w-12 text-white/80" />}
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1 shrink-0">
                  {project.icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold font-headline text-white">{project.title}</h3>
                    <p className="text-white/80 mt-1">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
}
