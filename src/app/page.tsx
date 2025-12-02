'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className='min-h-screen text-foreground overflow-x-hidden'
      style={
        {
          // background: `linear-gradient(to bottom, ${color}, ${color})`,
        }
      }
    >
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <>
          <ParticleBackground />
          <Navigation activeSection={activeSection} />

          <main className='relative z-10'>
            <section id='home'>
              <HeroSection />
            </section>

            <section id='about'>
              <AboutSection />
            </section>

            <section id='skills'>
              <SkillsSection />
            </section>

            <section id='experience'>
              <ExperienceSection />
            </section>

            <section id='projects'>
              <ProjectsSection />
            </section>

            <section id='contact'>
              <ContactSection />
            </section>
          </main>
        </>
      )}
    </div>
  );
}
