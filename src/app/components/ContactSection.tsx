'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success('Message sent successfully! I&apos;ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lasikag3109@gmail.com',
      href: 'mailto:lasikag3109@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote / India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: ExternalLink,
      label: 'Behance',
      href: 'https://www.behance.net/lasikag',
      color: 'hover:text-blue-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lasika-gupta-9bbb49192/',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:lasikag3109@gmail.com',
      color: 'hover:text-blue-400',
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
          <h2 className='text-3xl md:text-4xl mb-6'>
            Let&apos;s Work Together
          </h2>
          <div className='w-16 h-1 bg-foreground mx-auto mb-8'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <motion.div
          className='grid lg:grid-cols-2 gap-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className='p-8 border-border/50'>
              <h3 className='text-2xl mb-6'>Send a Message</h3>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Input
                      name='name'
                      placeholder='Your Name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='border-border/50 focus:border-foreground/50'
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Input
                      name='email'
                      type='email'
                      placeholder='Your Email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='border-border/50 focus:border-foreground/50'
                    />
                  </motion.div>
                </div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Input
                    name='subject'
                    placeholder='Subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className='border-border/50 focus:border-foreground/50'
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Textarea
                    name='message'
                    placeholder='Your Message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='border-border/50 focus:border-foreground/50 resize-none'
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type='submit'
                    size='lg'
                    disabled={isSubmitting}
                    className='w-full group'
                  >
                    {isSubmitting ? (
                      <motion.div
                        className='w-5 h-5 border-2 border-background/30 border-t-background rounded-full'
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    ) : (
                      <>
                        Send Message
                        <motion.div
                          className='ml-2'
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Send size={18} />
                        </motion.div>
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className='space-y-8'>
            <Card className='p-8 border-border/50'>
              <h3 className='text-2xl mb-6'>Get in Touch & Follow Me</h3>
              <div className='space-y-6 mb-8'>
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    className='flex items-center space-x-4 group'
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className='flex items-center justify-center w-12 h-12 rounded-xl bg-muted/20 group-hover:bg-muted/30 transition-colors'>
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className='text-muted-foreground'>{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className='hover:text-muted-foreground transition-colors'
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className='flex gap-4'>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`flex items-center justify-center w-12 h-12 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                    <span className='sr-only'>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* <motion.div
              className='p-8 rounded-2xl bg-gradient-to-br from-muted/20 to-muted/5 border border-border/50'
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className='text-lg mb-4'>Quick Response</h4>
              <p className='text-muted-foreground mb-4'>
                I typically respond to messages within 24 hours. For urgent
                matters, feel free to reach out via phone or LinkedIn.
              </p>
              <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                <span>Usually responds within a few hours</span>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
