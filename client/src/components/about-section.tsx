import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { GraduationCap, Briefcase, School } from "lucide-react";

export default function AboutSection() {
  const timelineItems = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech Computer Science",
      subtitle: "Shri Ramdeobaba College of Engineering",
      description: "Specialization in Data Science | CGPA: 8.7/10",
      period: "2023-2027",
      side: "left",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Data Analytics Intern",
      subtitle: "Tata Group",
      description: "AI-driven analytics • Risk assessment • Predictive modeling",
      period: "May 2025",
      side: "right",
    },
    {
      icon: <School className="w-6 h-6" />,
      title: "Higher Secondary",
      subtitle: "School of Scholars, Nagpur",
      description: "Grade: 87.20%",
      period: "2022-2023",
      side: "left",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
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
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Detail-oriented Computer Science undergraduate with a strong foundation in Data Structures,
            Algorithms, and object-oriented programming. Passionate about leveraging data to solve real-world problems.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-transparent"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={item.side === "left" ? slideInLeft : slideInRight}
                  className="flex items-center justify-between"
                >
                  {item.side === "left" ? (
                    <>
                      <div className="w-5/12 text-right pr-8">
                        <div className="glass-card p-6 hover-glow">
                          <h3 className="text-xl font-bold text-primary mb-2">
                            {item.title}
                          </h3>
                          <h4 className="font-semibold mb-2">{item.subtitle}</h4>
                          <p className="text-muted-foreground text-sm mb-2">
                            {item.description}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full border-4 border-background z-10 flex items-center justify-center text-primary-foreground">
                        {item.icon}
                      </div>
                      <div className="w-5/12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12"></div>
                      <div className="w-8 h-8 bg-primary rounded-full border-4 border-background z-10 flex items-center justify-center text-primary-foreground">
                        {item.icon}
                      </div>
                      <div className="w-5/12 pl-8">
                        <div className="glass-card p-6 hover-glow">
                          <h3 className="text-xl font-bold text-primary mb-2">
                            {item.title}
                          </h3>
                          <h4 className="font-semibold mb-2">{item.subtitle}</h4>
                          <p className="text-muted-foreground text-sm mb-2">
                            {item.description}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
