
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    <section id="hero" className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center bg-hero-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Animated Shapes */}
        <motion.div
          className="absolute top-[10%] left-[5%] h-48 w-48 bg-indigo-500/10 rounded-full blur-2xl backdrop-blur-md border border-indigo-500/20 animate-shape-float-1"
        />
        <motion.div
          className="absolute top-[20%] right-[10%] h-40 w-64 bg-rose-500/10 rounded-2xl blur-2xl backdrop-blur-md border border-rose-500/20 animate-shape-float-2"
        />
        <motion.div
          className="absolute bottom-[15%] left-[20%] h-32 w-32 bg-violet-500/10 rounded-full blur-2xl backdrop-blur-md border border-violet-500/20 animate-shape-float-3"
        />
         <motion.div
          className="absolute bottom-[25%] right-[25%] h-24 w-24 bg-amber-500/10 rounded-full blur-2xl backdrop-blur-md border border-amber-500/20 animate-shape-float-1"
        />
         <motion.div
          className="hidden md:block absolute top-[50%] left-[30%] h-20 w-20 bg-cyan-500/10 rounded-lg blur-2xl backdrop-blur-md border border-cyan-500/20 animate-shape-float-2"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-8"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="py-2 px-4 rounded-full bg-white/5 border-white/10 text-white backdrop-blur-sm">
                <Code2 className="h-5 w-5 text-primary mr-2" />
                <span className="font-bold font-headline text-lg">OneJoan</span>
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-headline text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl"
          >
            Elevate Your <span className="animated-gradient-text">Digital Vision</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-lg text-white/70 md:text-xl"
          >
            Crafting immersive and intelligent digital experiences. I specialize in building high-performance web applications, integrating advanced AI, and creating stunning visual solutions that captivate and engage.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#services">
                Explore Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/5 border-white/20 text-white hover:bg-white/10">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
