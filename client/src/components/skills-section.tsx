import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Code, BarChart3, Database, Settings } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimateProgress(true), 500);
    }
  }, [isInView]);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Excel", level: 88 },
        { name: "DAX", level: 80 },
      ],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Development",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "MySQL", level: 82 },
        { name: "Firebase", level: 75 },
      ],
    },
  ];

  const certificates = [
    {
      title: "Data Modeling with Power BI",
      issuer: "Coursera Project Network",
    },
    {
      title: "Web Development",
      issuer: "Johns Hopkins University",
    },
    {
      title: "Dynamic Dashboards with Tableau",
      issuer: "Coursera Project Network",
    },
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Proficient in modern data science tools and programming languages
          </motion.p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-8 hover-glow group"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 orange-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={
                          animateProgress ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <div className="text-center">
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold text-primary mb-8"
          >
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card p-6 hover-glow"
              >
                <Database className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
