import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Search, Layers, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Palette,
      title: 'User-Centered Design',
      description:
        'Designing solutions rooted in empathy, research, and usability — ensuring every interaction feels intuitive and meaningful.',
    },
    {
      icon: Search,
      title: 'UX Research & Testing',
      description:
        'Conducting user interviews, surveys, and usability testing to gather insights and translate them into actionable design decisions.',
    },
    {
      icon: Layers,
      title: 'Wireframing & Prototyping',
      description:
        'Crafting structured wireframes and interactive prototypes that validate ideas early and guide product development efficiently.',
    },
    {
      icon: Sparkles,
      title: 'Visual & Interaction Design',
      description:
        'Creating clean, modern, and accessible UI with thoughtful interactions that elevate user experience and brand identity.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
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
          <h2 className='text-3xl md:text-4xl mb-6'>About Me</h2>
          <div className='w-16 h-1 bg-foreground mx-auto mb-8'></div>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className='text-2xl mb-6'>Passionate UI/UX Designer</h3>
            <div className='space-y-4 text-muted-foreground'>
              <p>
                I&apos;m a dedicated UI/UX designer with a strong passion for creating intuitive, user-centered digital experiences. My design approach blends research, usability, and visual storytelling to solve real problems and help products feel effortless and enjoyable for users.
              </p>
              <p>
                Over the past few years, I&apos;ve worked on projects across healthcare, AI, and lifestyle apps — transforming insights from user research into wireframes, prototypes, and pixel-perfect interfaces. I enjoy collaborating with cross-functional teams to align design with business goals and build solutions that drive measurable impact.
              </p>
              <p>
                I believe great design is not just about how it looks, but how it works — and I focus on accessibility, empathy, and clean interaction patterns that enhance every step of the user journey.
              </p>
              <p>
                My expertise in user research, prototyping, usability testing, and high-fidelity UI allows me to contribute meaningfully to product teams and deliver seamless digital experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className='aspect-square bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border border-border/50 flex items-center justify-center'>
              <motion.div
                className='text-6xl'
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                🎨
              </motion.div>
            </div>
            <motion.div
              className='absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full border-4 border-background'
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute -bottom-6 -left-6 w-16 h-16 bg-secondary rounded-full border-4 border-background'
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>

        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {highlights.map((highlight) => (
            <motion.div key={highlight.title} variants={itemVariants}>
              <Card className='p-6 h-full border-border/50 hover:border-foreground/20 transition-colors group'>
                <motion.div
                  className='flex items-center justify-center w-12 h-12 rounded-xl bg-muted/20 mb-4 group-hover:bg-muted/30 transition-colors'
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <highlight.icon size={24} />
                </motion.div>
                <h4 className='mb-3'>{highlight.title}</h4>
                <p className='text-muted-foreground'>{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
