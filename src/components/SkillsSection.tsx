import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  Puzzle,
  Clock,
  Heart,
  Zap,
  Sun,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "C"],
    },
    {
      title: "Frameworks",
      skills: [
        "ReactJS",
        "NextJS",
        "Flask",
        "FastAPI",
        "TensorFlow",
        "LangGraph",
        "Streamlit",
      ],
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "Git", "Docker", "Supabase", "Vercel", "VSCode"],
    },
    {
      title: "Broadcasting",
      skills: ["VMIX", "OBS Studio", "Premiere Pro"],
    },
  ];

  const softSkills = [
    {
      name: "Leadership",
      icon: Users,
      description: "Leading teams and projects effectively",
    },
    {
      name: "Communication",
      icon: MessageSquare,
      description: "Clear and effective interpersonal skills",
    },
    {
      name: "Problem Solving",
      icon: Puzzle,
      description: "Analytical thinking and solution-oriented approach",
    },
    {
      name: "Critical Thinking",
      icon: Lightbulb,
      description: "Evaluating information and making informed decisions",
    },
    {
      name: "Teamwork",
      icon: Heart,
      description: "Collaborative mindset and team player attitude",
    },
    {
      name: "Time Management",
      icon: Clock,
      description: "Efficient prioritization and deadline management",
    },
    {
      name: "Adaptability",
      icon: Target,
      description: "Flexibility in changing environments and situations",
    },
    {
      name: "Fast Learner",
      icon: Zap,
      description: "Quick to acquire new skills and knowledge",
    },
    {
      name: "Optimistic",
      icon: Sun,
      description: "Positive outlook and solution-focused mindset",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hash-header">
            skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and expertise
            across different domains.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={categoryVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium text-foreground hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
                Soft Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                        <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Language Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Language Proficiency
              </h3>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full"
                >
                  <span className="text-lg font-medium">🇮🇩 Indonesian</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 text-sm font-semibold rounded-full">
                    Native
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full"
                >
                  <span className="text-lg font-medium">🇺🇸 English</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full">
                    Fluent
                  </span>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
