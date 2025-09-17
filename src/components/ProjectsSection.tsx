import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CineSpark AI",
      description: "AI-powered pre-production assistant designed to revolutionize the way filmmakers plan, visualize, and bring their stories to life, with integrated payment system.",
      technologies: ["ReactJS", "PostgreSQL", "LangGraph", "FastAPI", "Paddle"],
      liveUrl: "#",
      sourceUrl: "#",
      status: "Live",
      category: "AI/ML",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "VISPA",
      description: "Interactive sign language learning platform designed to help users learn sign language through a combination of video lessons, interactive quizzes, and real-time sign detection.",
      technologies: ["NextJS", "PostgreSQL", "Flask", "scikit-learn"],
      liveUrl: "#",
      sourceUrl: "#",
      status: "Live",
      category: "AI/ML",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "TemuBicara",
      description: "A platform that connects speakers with event organizers while providing a secure and transparent payment system to empower lesser-known voices.",
      technologies: ["ReactJS", "PostgreSQL"],
      liveUrl: "#",
      sourceUrl: "#",
      status: "Live",
      category: "Web App",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hash-header">projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my passion for AI and web development through innovative projects that solve real-world problems.
          </p>
          <div className="flex justify-center mt-6">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View all →
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full glow-card">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                          {project.status}
                        </span>
                      </div>
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Live
                      </motion.a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-border hover:bg-secondary"
                      asChild
                    >
                      <motion.a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </motion.a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;