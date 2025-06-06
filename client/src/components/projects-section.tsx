import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import olaImage from "@assets/ola1.jpg";
import hrImage from "@assets/tableau_hr_dashboard.jpg";
import amazonImage from "@assets/sales analysis Amazon.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Ola Trip Analysis",
      description: "Comprehensive analysis of Ola trip data with interactive dashboards showing trip patterns, peak hours, and customer behavior insights using Power BI and DAX functions.",
      image: olaImage,
      tags: ["Power BI", "DAX", "Analytics"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "HR Analytics Dashboard",
      description: "Interactive Tableau dashboard tracking employee attrition, department performance, and HR KPIs with clean visualizations and actionable insights.",
      image: hrImage,
      tags: ["Tableau", "HR Analytics", "KPI"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Amazon Sales Analysis",
      description: "Comprehensive Power BI dashboard analyzing Amazon sales data with focus on revenue, profit margins, and product performance across different regions and categories.",
      image: amazonImage,
      tags: ["Power BI", "Sales Analytics", "Business Intelligence"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
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
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Data-driven projects showcasing analytical skills and business insights
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card p-6 hover-glow group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-foreground">
                    {project.description.slice(0, 80)}...
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex items-center space-x-4 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 p-0"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 p-0"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div variants={fadeInUp} className="text-center mt-12">
          <Button size="lg" className="hover-glow">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
