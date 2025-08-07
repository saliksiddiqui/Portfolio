import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';
import emailjs from 'emailjs-com';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // You would configure EmailJS with your actual service ID, template ID, and user ID
      // For demo purposes, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: FiMail,
    label: 'Email',
    value: 'salik@gmail.com',
    href: 'mailto:salik@gmail.com'
  }, {
    icon: FiGithub,
    label: 'GitHub',
    value: 'salikgithub.com',
    href: '#'
  }, {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'saliklinkdIn.com',
    href: '#'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }}>
            <motion.div variants={itemVariants} className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <motion.input whileFocus={{
                    scale: 1.02
                  }} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none" placeholder="Enter your name" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <motion.input whileFocus={{
                    scale: 1.02
                  }} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <motion.textarea whileFocus={{
                    scale: 1.02
                  }} id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 outline-none resize-none" placeholder="Tell me about your project or just say hello!" />
                  </div>
                </div>
                
                <motion.button type="submit" disabled={isSubmitting || isSubmitted} whileHover={{
                scale: isSubmitting ? 1 : 1.05
              }} whileTap={{
                scale: isSubmitting ? 1 : 0.95
              }} className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${isSubmitted ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground hover:shadow-lg'} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitted ? <>
                      <FiCheck className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </> : isSubmitting ? <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </> : <>
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Feel free to reach out through any of 
                the channels below.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((contact, index) => <motion.a key={contact.label} href={contact.href} whileHover={{
              scale: 1.05,
              x: 10
            }} className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-all duration-300 group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <contact.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>)}
            </motion.div>

            {/* Additional Info */}
            
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Contact;