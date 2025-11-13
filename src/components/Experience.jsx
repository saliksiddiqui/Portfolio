// Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiCheckCircle, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import physioplus from "../../public/physioplus.jpeg";

const Experience = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techStack = [
    { name: "React.js", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNode },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git / GitHub", icon: FaGithub }
  ];

  const responsibilities = [
    "Contributed to the front-end development of the company’s live web project, focusing on creating responsive and user-friendly pages using React.js and Tailwind CSS.",
    "Collaborated with the founder and development team to improve UI/UX design consistency and enhance website performance.",
    "Implemented reusable components and optimized layouts for cross-browser compatibility and mobile responsiveness.",
    "Gained hands-on experience with remote teamwork, Git version control, and real-world product development workflows."
  ];

  const achievements = [
    "Delivered multiple production-ready pages within deadlines.",
    "Improved UI consistency and perceived performance across key sections.",
    "Gained practical experience in a remote product workflow."
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-3xl p-8 shadow-lg"
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-start gap-6 md:gap-8">
            <div className="p-1 bg-primary/10 rounded-xl">
              <img src={physioplus} alt="physioplus" className="h-[110px] rounded-[8px]"/>
              {/* <div className="w-6 h-6 border rounded-sm"></div>
              <FiBriefcase className="w-6 h-6 text-primary" /> */}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Web Developer Intern</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Physioplus Healthcare Pvt. Ltd. <span className="mx-1">•</span> Remote
                  </p>
                </div>

                <div className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-muted/40 border border-border rounded-full px-3 py-2">
                    <FiCalendar className="w-4 h-4" /> Sept 2025 – Oct 2025 (2 months)
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-4 max-w-2xl leading-relaxed">
                Worked on the front-end of a live healthcare web product, focusing on building responsive,
                reusable components and improving UI/UX while collaborating in a remote, deadline-driven environment.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-6" />

          {/* Body: Responsibilities + Achievements + Tech */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Responsibilities */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-medium text-foreground mb-3">Responsibilities</h4>
              <ul className="space-y-3">
                {responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="mt-1 text-primary"
                    >
                      <FiCheckCircle className="w-5 h-5" />
                    </motion.span>
                    <p className="text-sm text-muted-foreground">{r}</p>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-medium text-foreground mt-6 mb-3">Achievements</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                {achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>

              {/* <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-outline inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                >
                  View Related Projects <FiExternalLink />
                </a>
                <a
                  href="https://www.linkedin.com/in/salik-siddiqui-491049309/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://salikportfolio1.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                >
                  Portfolio
                </a>
              </div> */}
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">Tech Stack & Tools</h4>
              <div className="flex flex-col gap-3">
                {techStack.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.name} className="flex items-center gap-3 bg-muted/50 border border-border rounded-lg px-3 py-2">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{t.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-foreground/80">Certificate</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Official internship certificate issued upon completion.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
