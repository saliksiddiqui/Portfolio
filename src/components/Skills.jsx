import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaBootstrap, 
  FaFigma 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiRedux, 
  SiFirebase 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90 },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85 },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 88 },
        { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 85 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
        { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', level: 80 },
        { name: 'Redux', icon: SiRedux, color: '#764ABC', level: 75 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 80 },
        { name: 'Express.js', icon: SiExpress, color: '#000000', level: 78 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 82 },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 75 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
        { name: 'GitHub', icon: FaGithub, color: '#181717', level: 85 },
        { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 70 },
      ]
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

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="skill-card"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <skill.icon 
                            className="w-5 h-5" 
                            style={{ color: skill.color }} 
                          />
                        </div>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut' 
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              As a passionate developer, I'm constantly exploring new technologies and improving my skills. 
              I believe in continuous learning and staying updated with the latest trends in web development 
              to deliver the best solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;