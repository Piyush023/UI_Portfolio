'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'DRxprss — Healthcare Management Platform',
      description:
        'A comprehensive healthcare platform designed to simplify appointment booking, medicine ordering, and medical report management — making healthcare more accessible and efficient for patients.',
      longDescription:
        '🏆 Featured in college exhibition; appreciated for UI aesthetics. A comprehensive healthcare platform designed to simplify appointment booking, medicine ordering, and medical report management — making healthcare more accessible and efficient for patients. Conducted 40 user interviews & 250+ surveys to identify major pain points in healthcare journeys. Designed complete UX flow including journeys, sitemaps, IA, and wireframes. Built a clean, modern UI system with consistent visual hierarchy. Improved user navigation by reducing multi-step actions into a 3-step streamlined flow. Created prototypes, usability tested, and iterated to maximize efficiency.',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: [
        'Figma',
        'Miro',
        'User Research',
        'UX Strategy',
        'Prototyping',
      ],
      demoUrl: 'https://www.behance.net/lasikag',
      githubUrl: null,
      category: 'Mobile Application, Website',
      badge: '🏆 Featured',
    },
    {
      title: 'MakeMySong — AI-powered Song Creation App',
      description:
        'An AI-driven music creation app where users can generate songs, remix vocals, create reels, and produce studio-quality output without complex software.',
      longDescription:
        'An AI-driven music creation app where users can generate songs, remix vocals, create reels, and produce studio-quality output without complex software. Designed the full UI/UX end-to-end for the mobile app. Created personas, problem statements, key insights & solution frameworks. Built smooth user flows for song generation, editing, and sharing. Designed engaging interaction patterns & visually appealing micro-interactions. Supported marketing by creating static creatives & promotional visuals.',
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      technologies: [
        'Figma',
        'Prototyping',
        'UX Research',
        'Interaction Design',
      ],
      demoUrl: 'https://www.behance.net/lasikag',
      githubUrl: null,
      category: 'Mobile Application / AI Product',
      badge: null,
    },
    {
      title: 'Recipe App — Personalized Food Recommendation Platform',
      description:
        'A recipe discovery and smart food recommendation app that helps users explore dishes, view ingredients, customize servings, and follow step-by-step cooking guides.',
      longDescription:
        '🏆 Won in Designation, Cognizance, IIT Roorkee. A recipe discovery and smart food recommendation app that helps users explore dishes, view ingredients, customize servings, and follow step-by-step cooking guides. Conducted research on user cooking habits & food exploration patterns. Designed onboarding, home, search, recipe detail, and cooking guide screens. Built a bright and friendly UI with a playful yet structured design style. Created a modular component library for consistent visual experience. Added accessibility features such as contrast-friendly colors and icon-first navigation.',
      image:
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop',
      technologies: [
        'Figma',
        'UX Research',
        'UI Design',
        'Wireframing',
      ],
      demoUrl: 'https://www.behance.net/lasikag',
      githubUrl: null,
      category: 'Mobile Application',
      badge: '🏆 Winner',
    },
  ];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className='py-24 px-6'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className='text-3xl md:text-4xl mb-6'>Featured Projects</h2>
          <div className='w-16 h-1 bg-foreground mx-auto mb-8'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            A selection of projects that showcase my skills in UI/UX design,
            user research, and creating intuitive digital experiences.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Project Cards */}
          <motion.div
            className='lg:col-span-1 space-y-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-4 cursor-pointer transition-all duration-300 border-border/50 ${
                    selectedProject === index
                      ? 'border-foreground/50 bg-muted/20'
                      : 'hover:border-foreground/30'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-muted/20 to-muted/5 border border-border/50 flex items-center justify-center'>
                        <span className='text-lg'>
                          {index === 0
                            ? '🏥'
                            : index === 1
                            ? '🎵'
                            : index === 2
                            ? '🍳'
                            : '📚'}
                        </span>
                      </div>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-base mb-1 truncate'>
                        {project.title}
                      </h3>
                      <p className='text-sm text-muted-foreground line-clamp-2'>
                        {project.description}
                      </p>
                      <Badge variant='secondary' className='mt-2 text-xs'>
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Selected Project Detail */}
          <motion.div
            className='lg:col-span-2'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card className='p-0 overflow-hidden border-border/50'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='relative h-64 md:h-80 overflow-hidden'>
                    <ImageWithFallback
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent'></div>
                    <div className='absolute top-4 right-4 flex space-x-2'>
                      <Button
                        size='sm'
                        variant='secondary'
                        className='bg-background/80 backdrop-blur-sm'
                        onClick={prevProject}
                      >
                        <ChevronLeft size={16} />
                      </Button>
                      <Button
                        size='sm'
                        variant='secondary'
                        className='bg-background/80 backdrop-blur-sm'
                        onClick={nextProject}
                      >
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className='p-6'>
                      <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-2xl mb-2'>
                          {projects[selectedProject].title}
                        </h3>
                        <div className='flex items-center gap-2 flex-wrap'>
                          <Badge variant='outline'>
                            {projects[selectedProject].category}
                          </Badge>
                          {projects[selectedProject].badge && (
                            <Badge variant='secondary'>
                              {projects[selectedProject].badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className='flex space-x-2'>
                        {projects[selectedProject].demoUrl && (
                          <Button size='sm' variant='outline' asChild>
                            <a
                              href={projects[selectedProject].demoUrl}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <ExternalLink size={16} className='mr-2' />
                              View on Behance
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <p className='text-muted-foreground mb-6 leading-relaxed'>
                      {projects[selectedProject].longDescription}
                    </p>

                    <div>
                      <h4 className='mb-3'>Technologies Used</h4>
                      <div className='flex flex-wrap gap-2'>
                        {projects[selectedProject].technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant='secondary'
                            className='px-3 py-1'
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Button variant='outline' size='lg' asChild>
            <a
              href='https://www.behance.net/lasikag'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ExternalLink size={20} className='mr-2' />
              View All Projects on Behance
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
