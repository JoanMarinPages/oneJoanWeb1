
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="hero" className="relative w-full pt-32 pb-20 flex items-center justify-center bg-background bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 z-0 bg-radial-gradient">
         <motion.div
          className="absolute top-[10%] left-[5%] h-48 w-48 border border-primary/10 rounded-full animate-shape-float-1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-[20%] right-[10%] h-40 w-64 border border-accent/10 rounded-2xl animate-shape-float-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[20%] h-32 w-32 border border-primary/10 rounded-full animate-shape-float-3"
           initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-8"
        >
           <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
             <Image src="/assets/logos/logoOnejoan.png" alt="OneJoan Logo" width={96} height={96} className="h-24 w-24" />
             <div className="relative">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute -inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] object-cover"
                >
                    <source src="/assets/ondesVideo/social_yow_one_httpss.mj.runHb7pva_IXRU_--ar_12869_--video_1_d1590073-1217-4c55-ab72-085a3085ba55_0.mp4" type="video/mp4" />
                </video>
                <h1
                    className={cn(
                        "font-bold font-headline text-5xl video-text-clip",
                    )}
                >
                   OneJoan
                </h1>
             </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Más que una web, tu 
            <br />
            <span className="animated-gradient-text bg-clip-text text-transparent">Ventaja Estratégica</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-lg text-muted-foreground md:text-xl"
          >
            Transformo ideas en soluciones digitales de alto impacto. Mi objetivo es simple: entregar resultados que impulsen tu crecimiento y te diferencien en el mercado.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#contact">
                Empezar mi Proyecto <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#services">Ver Servicios</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
