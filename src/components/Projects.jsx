import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiMessageCircle, FiShoppingCart, FiTrendingUp, FiCloud } from 'react-icons/fi';
import chatApp from '../../public/chatapp.png'
import ecommerse from '../../public/E-Commerce.jpg'
import expense from '../../public/expense.png'
import weather from '../../public/weather.png'


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Real-Time Chat App',
      description: 'A modern real-time chat application built with React.js and Firebase. Features include instant messaging, user authentication, and responsive design.',
      image: chatApp,
      tech: ['React.js', 'Firebase', 'CSS 3'],
      icon: FiMessageCircle,
      github: 'https://github.com/saliksiddiqui/Real-Time-Chat-App',
      demo: 'https://jocular-selkie-287dff.netlify.app/login',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'E-commerce Web Page',
      description: 'A fully responsive e-commerce landing page with modern design, product showcases, and interactive elements built with react.js and css.',
      image: ecommerse,
      tech: ['React.js', 'CSS 3'],
      icon: FiShoppingCart,
      github: 'https://github.com/saliksiddiqui/ECommerse-website',
      demo: 'https://ecommerce0436.netlify.app/',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Expense Tracker',
      description: 'A comprehensive expense tracking application that helps users manage their finances with categorization, charts, and budget planning features.',
      image: expense,
      tech: ['React.js', 'CSS 3'],
      icon: FiTrendingUp,
      github: 'https://github.com/saliksiddiqui/ExpenseTraker',
      demo: 'https://expensetracker234.netlify.app/',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Live Weather App',
      description: 'A dynamic weather application that provides real-time weather information with beautiful UI, location-based forecasts, and weather animations.',
      image: weather,
      tech: ['React.js', 'Weather API', 'CSS 3'],
      icon: FiCloud,
      github: 'https://github.com/saliksiddiqui/Weather-Api',
      demo: 'https://weatherapp343.netlify.app/',
      color: 'from-cyan-500 to-blue-600'
    }
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="project-card group"
            >
              {/* Project Image/Icon */}
              <div className="relative overflow-hidden rounded-t-xl bg-gradient-to-br from-primary/20 to-primary-glow/20 h-40 flex items-center justify-center">
                <div className={`w-full h-full bg-gradient-to-br absolute inset-0`}></div>
                <motion.div
                  whileHover={{ scale: 1.1}}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <img src={project.image} alt="image" />
                </motion.div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-3">

                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    aria-label="View source code"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    aria-label="View live demo"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>


              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span className="font-medium">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;