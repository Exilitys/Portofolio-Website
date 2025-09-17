import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import jonathanPortrait from "@/assets/jonathan-portrait.jpg";

const HeroSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Floating Geometric Elements */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-primary/30 rounded-lg rotate-45"
      />
      <motion.div
        animate={floatingAnimation}
        className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-accent/20 rounded-full"
        transition={{ delay: 2 }}
      />
      <motion.div
        animate={floatingAnimation}
        className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-primary/10 rounded-lg rotate-12"
        transition={{ delay: 4 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-foreground">Jonathan Carlo is a </span>
                <span className="text-gradient">Computer Science Student</span>
                <span className="text-foreground"> and </span>
                <span className="text-gradient">AI Enthusiast</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Passionate about Artificial Intelligence and Broadcasting. Currently seeking internship opportunities to apply my skills in machine learning and content creation.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium glow-primary"
                asChild
              >
                <motion.a
                  href="mailto:jonathancarlo20@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact me ↗
                </motion.a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-secondary px-8 py-6 text-lg"
                asChild
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </motion.a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </motion.div>

            {/* Currently Working On Status */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg"
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
              <span className="text-sm text-primary font-medium">Currently working on Portfolio</span>
            </motion.div>
          </div>

          {/* Right Content - Profile Image with Geometric Overlay */}
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={jonathanPortrait}
                  alt="Jonathan Carlo - Computer Science Student and AI Enthusiast"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </motion.div>

              {/* Geometric Overlay Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary rounded-lg rotate-12"
                animate={{ rotate: [12, 24, 12] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-6 h-6 bg-primary rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 max-w-lg mx-auto">
          <blockquote className="text-center">
            <p className="text-lg text-foreground mb-4 italic">
              "Innovation distinguishes between a leader and a follower."
            </p>
            <cite className="text-sm text-muted-foreground">— Steve Jobs</cite>
          </blockquote>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;