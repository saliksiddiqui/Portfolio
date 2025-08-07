import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiTrendingUp, FiUsers, FiCode } from 'react-icons/fi';
import me from "../../public/me.png"

const About = () => {
  const stats = [
    { icon: FiCalendar, label: 'Experience', value: '1+', suffix: 'Year' },
    { icon: FiCode, label: 'Projects', value: '4+', suffix: 'Completed' },
    { icon: FiTrendingUp, label: 'Skills', value: '12+', suffix: 'Technologies' },
    { icon: FiUsers, label: 'Education', value: 'BCA', suffix: '3nd Year' },
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
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Placeholder for profile image */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                <img className='w-full h-full rounded-2xl' src={me} alt="myimg" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Hi, I'm <span className="gradient-text">Salik</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Salik, a BCA 3nd-year student at Translam College of Education. I am passionate about 
                full-stack web development and skilled in HTML, CSS, JavaScript, Tailwind CSS, React.js, 
                Node.js, Express.js, MongoDB, and Git.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy building responsive, dynamic, and user-friendly web applications that solve real-world 
                problems. My goal is to create digital experiences that are not only functional but also 
                beautiful and intuitive.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.filter(stat => stat.label !== 'Experience' && stat.label !== 'Projects').map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.suffix}
                  </div>
                  
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;