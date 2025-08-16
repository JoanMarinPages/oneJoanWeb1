"use client";

import { Home, Building } from "lucide-react";
import { Section } from './section';

const projects = [
  {
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
    video: "/assets/ondesVideo/video-real-estate-2.mp4",
    icon: <Building className="h-8 w-8 text-primary" />,
    overlay: (
        <div className="absolute bottom-8 left-8 max-w-md">
            <h3 className="text-2xl font-bold font-headline text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
                La tecnología de generación 3D NeRF<br/>más avanzada del mundo
            </h3>
        </div>
    )
  },
];

interface RealEstateProps {
  backgroundVideoUrl: string;
}

export function RealEstate({ backgroundVideoUrl }: RealEstateProps) {
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
                className="relative overflow-hidden rounded-2xl group aspect-video shadow-2xl shadow-primary/10 border-white/10 border"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                   <source src={project.video} type="video/mp4" />
                </video>
                
                {project.overlay}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
}
