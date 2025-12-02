import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const name = 'Hey, There!';
  const subtitle =
    "I'm Lasika, UI/UX Designer — crafting intuitive & human-centered digital experiences.";

  return (
    <div className='min-h-screen flex items-center justify-center relative px-6'>
      <div className='text-center max-w-4xl'>
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-muted/20 rounded-full border border-border/50 backdrop-blur-sm">
            Available for new opportunities
          </span>
        </motion.div> */}

        <motion.h1
          className='text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight'
          variants={titleVariants}
          initial='hidden'
          animate='visible'
        >
          {name.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className='inline-block'
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {subtitle}
        </motion.p>

        <motion.p
          className='text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Turning real problems into thoughtful design solutions through user research, wireframes, and visually polished UI — powered by projects across healthcare, AI & consumer apps.
        </motion.p>

        <motion.div
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Button
            size='lg'
            className='group px-8 py-3'
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
            <motion.span
              className='ml-2 inline-block'
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              →
            </motion.span>
          </Button>

          <Button
            variant='outline'
            size='lg'
            className='px-8 py-3'
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          className='flex items-center justify-center gap-6'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {[
            {
              Icon: ExternalLink,
              href: 'https://www.behance.net/lasikag',
              label: 'Behance',
            },
            {
              Icon: Linkedin,
              href: 'https://www.linkedin.com/in/lasika-gupta-9bbb49192/',
              label: 'LinkedIn',
            },
            {
              Icon: Mail,
              href: 'mailto:lasikag3109@gmail.com',
              label: 'Email',
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full border border-border/50 hover:border-foreground/50 transition-colors'
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
              <span className='sr-only'>{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.button
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full border border-border/50 hover:border-foreground/50 transition-colors'
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown size={24} />
      </motion.button>
    </div>
  );
};
