
"use client";

import { Home, Building } from "lucide-react";
import { Section } from './section';
import Image from "next/image";
import Link from "next/link";

interface RealEstateProps {
  backgroundVideoUrl: string;
  dictionary: any;
}

export function RealEstate({ backgroundVideoUrl, dictionary }: RealEstateProps) {

  const projects = [
    {
      video: "/assets/videosCasa/new hero.mp4",
      icon: <Home className="h-8 w-8 text-primary" />,
      overlay: (
        <>
          <div className="absolute top-8 left-8">
            <h3 className="text-5xl md:text-6xl font-bold font-headline text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }} dangerouslySetInnerHTML={{ __html: dictionary.project1_title }}/>
          </div>
          <div className="absolute bottom-8 left-8 text-left">
              <p className="mt-2 text-xl md:text-2xl text-white">
                  {dictionary.project1_desc}
              </p>
          </div>
        </>
      )
    },
    {
      video: "/assets/videosCasa/creator 1080 p 60 fps.mp4",
      icon: <Building className="h-8 w-8 text-primary" />,
      overlay: (
          <>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 max-w-md text-center">
                <h3 className="text-3xl md:text-4xl font-bold font-headline text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }} dangerouslySetInnerHTML={{ __html: dictionary.project2_title }}/>
            </div>
            <div className="absolute bottom-8 right-8">
                <Link href="https://visionlux.es/" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/logos/visionlux-logo.png" alt="VisionLux Logo" width={150} height={50} />
                </Link>
            </div>
          </>
      )
    },
  ];

  const title = (
    <span dangerouslySetInnerHTML={{ __html: dictionary.title.replace("Inmobiliaria y Arquitectura", `<span class="text-primary">Inmobiliaria y Arquitectura</span>`) }} />
  );

  const description = dictionary.subtitle;

  return (
    <Section id="real-estate" title={title} description={description} backgroundVideoUrl={backgroundVideoUrl}>
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
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

              </div>
            </div>
          ))}
        </div>
    </Section>
  );
}
