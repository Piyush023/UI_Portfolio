'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

// Skill icons mapping
const skillIcons: { [key: string]: string } = {
  'UX Research': '🔍',
  'User Journey Mapping': '🧭',
  'Personas & Scenarios': '📝',
  'Usability Testing': '📊',
  'Design Thinking': '🔄',
  'Information Architecture': '📂',
  'Visual Design': '🎨',
  'Design Systems': '🧱',
  'Component-Based UI': '🧩',
  'High-Fidelity Mockups': '🖼',
  'Micro-interactions': '✨',
  'Responsive Design': '⚡',
  'Figma': '🖌',
  'Miro': '🧠',
  'Notion': '🗂',
  'Photoshop': '🖼',
  'Illustrator': '📐',
  'ChatGPT': '💬',
  'Interactive Prototypes': '🔗',
  'Design Handoff (Figma → Dev)': '💬',
  'A/B Testing': '🧪',
  'UX Documentation': '📦',
  'Agile / Sprint Collaboration': '🤝',
  'Stakeholder Communication': '👥',
};

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'UX Research & Strategy',
      gradient: 'from-blue-500/10 via-cyan-500/10 to-blue-600/10',
      borderGradient: 'from-blue-500/30 to-cyan-500/30',
      skills: [
        {
          name: 'UX Research',
          level: 90,
          experience: '2+ years',
          description: 'Conducting user interviews, surveys, and usability testing',
        },
        {
          name: 'User Journey Mapping',
          level: 88,
          experience: '2+ years',
          description: 'Mapping user flows and identifying pain points',
        },
        {
          name: 'Personas & Scenarios',
          level: 85,
          experience: '2+ years',
          description: 'Creating user personas and scenario-based design',
        },
        {
          name: 'Usability Testing',
          level: 87,
          experience: '2+ years',
          description: 'Testing designs with real users to validate solutions',
        },
        {
          name: 'Design Thinking',
          level: 90,
          experience: '2+ years',
          description: 'Applying design thinking methodology to solve problems',
        },
        {
          name: 'Information Architecture',
          level: 85,
          experience: '2+ years',
          description: 'Structuring and organizing information effectively',
        },
      ],
    },
    {
      title: 'User Interface Design',
      gradient: 'from-green-500/10 via-emerald-500/10 to-green-600/10',
      borderGradient: 'from-green-500/30 to-emerald-500/30',
      skills: [
        {
          name: 'Visual Design',
          level: 92,
          experience: '2+ years',
          description: 'Creating visually appealing and modern interfaces',
        },
        {
          name: 'Design Systems',
          level: 88,
          experience: '2+ years',
          description: 'Building consistent design systems and component libraries',
        },
        {
          name: 'Component-Based UI',
          level: 90,
          experience: '2+ years',
          description: 'Designing reusable UI components',
        },
        {
          name: 'High-Fidelity Mockups',
          level: 93,
          experience: '2+ years',
          description: 'Creating pixel-perfect design mockups',
        },
        {
          name: 'Micro-interactions',
          level: 80,
          experience: '1+ years',
          description: 'Designing delightful micro-interactions',
        },
        {
          name: 'Responsive Design',
          level: 90,
          experience: '2+ years',
          description: 'Designing for multiple screen sizes and devices',
        },
      ],
    },
    {
      title: 'Tools & Software',
      gradient: 'from-purple-500/10 via-pink-500/10 to-purple-600/10',
      borderGradient: 'from-purple-500/30 to-pink-500/30',
      skills: [
        {
          name: 'Figma',
          level: 95,
          experience: '2+ years',
          description: 'Primary design tool for UI/UX work',
        },
        {
          name: 'Miro',
          level: 88,
          experience: '2+ years',
          description: 'Collaborative whiteboarding and ideation',
        },
        {
          name: 'Notion',
          level: 85,
          experience: '2+ years',
          description: 'Documentation and project management',
        },
        {
          name: 'Photoshop',
          level: 82,
          experience: '2+ years',
          description: 'Image editing and manipulation',
        },
        {
          name: 'Illustrator',
          level: 80,
          experience: '2+ years',
          description: 'Vector graphics and illustration',
        },
        {
          name: 'ChatGPT',
          level: 85,
          experience: '2+ years',
          description: 'AI-assisted design ideation and research',
        },
      ],
    },
    {
      title: 'Prototyping & Collaboration',
      gradient: 'from-orange-500/10 via-red-500/10 to-orange-600/10',
      borderGradient: 'from-orange-500/30 to-red-500/30',
      skills: [
        {
          name: 'Interactive Prototypes',
          level: 90,
          experience: '2+ years',
          description: 'Creating clickable prototypes for user testing',
        },
        {
          name: 'Design Handoff (Figma → Dev)',
          level: 88,
          experience: '2+ years',
          description: 'Handing off designs to development teams',
        },
        {
          name: 'A/B Testing',
          level: 75,
          experience: '1+ years',
          description: 'Testing design variations to optimize performance',
        },
        {
          name: 'UX Documentation',
          level: 87,
          experience: '2+ years',
          description: 'Documenting design decisions and processes',
        },
        {
          name: 'Agile / Sprint Collaboration',
          level: 85,
          experience: '2+ years',
          description: 'Working in agile environments with cross-functional teams',
        },
        {
          name: 'Stakeholder Communication',
          level: 90,
          experience: '2+ years',
          description: 'Presenting designs and gathering feedback effectively',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.3,
      },
    }),
  };

  return (
    <div className='py-24 px-6 bg-muted/5'>
      <div className='container mx-auto max-w-7xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className='text-3xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
            Skills & Expertise
          </h2>
          <div className='w-16 h-1 bg-gradient-to-r from-foreground to-muted-foreground mx-auto mb-8 rounded-full'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto text-lg'>
            A comprehensive toolkit of design skills and tools I use to create intuitive, user-centered digital experiences.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className='space-y-4'
              variants={cardVariants}
            >
              <div
                className={`p-6 rounded-2xl border bg-gradient-to-br ${category.gradient} backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-all duration-300 ease-out`}
                style={{
                  borderImage: `linear-gradient(135deg, ${category.borderGradient}) 1`,
                }}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className='relative z-10'>
                  <h3 className='text-lg font-semibold mb-6 text-foreground/90'>
                    {category.title}
                  </h3>
                  <div className='space-y-4'>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className='group/skill cursor-pointer'
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className='flex items-center justify-between mb-3'>
                          <div className='flex items-center gap-2'>
                            <span className='text-lg'>
                              {skillIcons[skill.name] || '⚡'}
                            </span>
                            <span className='font-medium text-sm group-hover/skill:text-foreground transition-colors'>
                              {skill.name}
                            </span>
                          </div>
                          <Badge
                            variant='secondary'
                            className='text-xs px-2 py-1'
                          >
                            {skill.experience}
                          </Badge>
                        </div>

                        <div className='relative h-2 bg-muted/20 rounded-full overflow-hidden'>
                          <motion.div
                            className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${category.borderGradient}`}
                            custom={skill.level}
                            variants={progressVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true }}
                          />

                          {/* Glow effect on hover */}
                          <div
                            className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${category.borderGradient} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 blur-sm`}
                          />
                        </div>

                        {/* Tooltip */}
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-xs shadow-lg z-20'
                            initial={{ opacity: 0, y: 5, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.9 }}
                          >
                            <div className='font-medium mb-1'>
                              {skill.level}% Proficiency
                            </div>
                            <div className='text-background/80 max-w-48'>
                              {skill.description}
                            </div>
                            <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground'></div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='mt-20 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className='text-xl mb-8 font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
            Always Learning & Growing
          </h3>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {[
              'Framer',
              'Principle',
              'After Effects',
              'Sketch',
              'Adobe XD',
              'Webflow',
              'UserTesting',
              'Hotjar',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant='outline'
                  className='px-4 py-2 border-border/50 hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300 text-sm font-medium'
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
