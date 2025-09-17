import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 88 },
        { name: "SQL", level: 82 },
        { name: "HTML/CSS", level: 92 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "NextJS", level: 85 },
        { name: "Flask", level: 80 },
        { name: "FastAPI", level: 78 },
        { name: "TensorFlow", level: 75 },
        { name: "LangGraph", level: 70 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "Git", level: 88 },
        { name: "Docker", level: 75 },
        { name: "Supabase", level: 82 },
        { name: "Vercel", level: 85 },
        { name: "VSCode", level: 95 }
      ]
    },
    {
      title: "AI & Broadcasting",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "NLP", level: 78 },
        { name: "Computer Vision", level: 75 },
        { name: "VMIX", level: 88 },
        { name: "OBS Studio", level: 90 },
        { name: "Premiere Pro", level: 85 }
      ]
    }
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hash-header">skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and expertise across different domains.
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
                  <h3 className="text-2xl font-semibold mb-6 text-primary">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-muted-foreground text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Language Proficiency</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Indonesian</span>
                  <span className="text-primary font-semibold">Native Speaker</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">English</span>
                  <span className="text-primary font-semibold">Fluent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;