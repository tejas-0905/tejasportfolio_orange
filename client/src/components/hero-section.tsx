import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, floatingAnimation } from "@/lib/animations";
import { Rocket, Download } from "lucide-react";
import tejasPhoto from "@assets/tejass_pass_photo-Photoroom.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 3 },
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          {/* Professional Photo */}
          <motion.div variants={fadeInUp} className="mb-8">
            <img
              src={tejasPhoto}
              alt="Tejas Jiddewar"
              className="w-40 h-40 rounded-full mx-auto border-4 border-primary shadow-2xl object-cover floating-animation"
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            Crafting{" "}
            <span className="text-transparent bg-clip-text orange-gradient">
              Data-Driven
            </span>
            <br />
            Solutions
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science student specializing in Data Science & Analytics.
            Transforming raw data into actionable insights with modern visualization tools.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="text-lg font-semibold hover-glow glow-animation"
            >
              <Rocket className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8.7</div>
              <div className="text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">7+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
