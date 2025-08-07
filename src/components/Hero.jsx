import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
const Hero = () => {
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl" />
        <motion.div animate={{
        scale: [1.2, 1, 1.2],
        rotate: [360, 180, 0]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute top-40 right-10 w-80 h-80 bg-primary-glow/10 rounded-full mix-blend-multiply filter blur-xl" />
        <motion.div animate={{
        scale: [1, 1.3, 1],
        x: [0, 100, 0],
        y: [0, -50, 0]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="absolute bottom-20 left-1/3 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-8">
          {/* Greeting */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="inline-block">
            <span className="text-lg md:text-xl text-muted-foreground font-medium px-6 py-3 rounded-full glass border border-primary/20">
              👋 Hi, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
            <span className="gradient-text">Salik</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground animate-bounce-gentle">
            Full-Stack Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8
        }} className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building beautiful, scalable web applications with modern technologies. 
            Transforming ideas into stunning digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1,
          duration: 0.8
        }} className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-8">
            <motion.button whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 60px hsl(var(--primary) / 0.4)',
            y: -5
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scrollToSection('#projects')} className="btn-primary text-lg px-10 py-5 animate-glow transform transition-all duration-300">
              View Projects
            </motion.button>
            
            <motion.button whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: '0 10px 30px hsl(var(--primary) / 0.2)'
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scrollToSection('#contact')} className="btn-outline text-lg px-10 py-5 transform transition-all duration-300">
              Hire Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          
        </motion.div>

        {/* Scroll Indicator */}
        
      </div>
    </section>;
};
export default Hero;