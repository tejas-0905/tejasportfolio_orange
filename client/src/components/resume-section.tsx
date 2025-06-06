import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Download, GraduationCap, Briefcase, Settings, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      content: [
        {
          title: "B.Tech Computer Science & Engineering",
          subtitle: "Shri Ramdeobaba College of Engineering",
          details: "Specialization in Data Science | CGPA: 8.7/10 | 2023-2027",
        },
        {
          title: "Higher Secondary Education",
          subtitle: "School of Scholars, Nagpur",
          details: "Grade: 87.20% | 2022-2023",
        },
      ],
    },
    {
      id: "experience",
      icon: <Briefcase className="w-6 h-6" />,
      title: "Experience",
      content: [
        {
          title: "Data Analytics Intern",
          subtitle: "Tata Group | May 2025",
          details: "Completed AI-driven data analytics simulation with Financial Services team. Performed EDA using GenAI to evaluate data quality and identify risk indicators. Proposed no-code predictive modeling framework for delinquency risk assessment. Designed AI-powered collections strategy using agentic AI and automation.",
        },
      ],
    },
    {
      id: "skills",
      icon: <Settings className="w-6 h-6" />,
      title: "Technical Skills",
      content: [
        {
          title: "Programming Languages",
          subtitle: "Java, C, Python, HTML, CSS, JavaScript, SQL",
          details: "",
        },
        {
          title: "Tools & Frameworks",
          subtitle: "Power BI, Tableau, Excel, VS Code, GitHub, Maven",
          details: "",
        },
        {
          title: "Databases",
          subtitle: "MySQL, Firebase Realtime Database",
          details: "",
        },
        {
          title: "Soft Skills",
          subtitle: "Critical Thinking, Teamwork, Communication, Problem Solving",
          details: "",
        },
      ],
    },
  ];

  return (
    <section id="resume" className="py-20">
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
            My <span className="text-primary">Resume</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Download my complete resume or explore key highlights below
          </motion.p>
        </div>

        {/* Download Button */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <Button
            size="lg"
            className="text-xl font-bold px-10 py-5 hover-glow glow-animation relative group"
          >
            <div className="absolute inset-0 rounded-lg orange-gradient opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <Download className="mr-3 h-6 w-6" />
              <span>Download Resume</span>
            </div>
          </Button>
        </motion.div>

        {/* Resume Highlights Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {accordionItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="glass-card overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/10 transition-colors"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="flex items-center">
                    <div className="text-primary mr-4">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <ChevronDown
                    className={`text-primary transition-transform duration-300 ${
                      openAccordion === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="space-y-4">
                      {item.content.map((contentItem, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4">
                          <h4 className="font-semibold text-primary">
                            {contentItem.title}
                          </h4>
                          <p className="text-muted-foreground">{contentItem.subtitle}</p>
                          {contentItem.details && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {contentItem.details}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
