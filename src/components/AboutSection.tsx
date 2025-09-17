import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "Maintaining a 3.91/4.00 GPA at Bina Nusantara University",
      highlight: "Perfect 4.0 GPA at 4th Semester",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership Experience",
      description: "Head of Technical Department at BINUS TV Club",
      highlight: "Leading 250+ members",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Technical Expertise",
      description:
        "Successfully managed and Lead Technical Operations of 10+ Events,",
      highlight: "Zero technical failures",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Continuous Collaboration",
      description: "Constantly exploring and collborating on new projects",
      highlight: "5+ team projects",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Continuous Learning",
      description: "Actively pursuing advanced AI and ML certifications",
      highlight: "Always growing",
    },
  ];

  const education = {
    university: "Bina Nusantara University",
    location: "Tangerang, Banten",
    degree: "Bachelor of Computer Science",
    concentration: "Intelligent Systems",
    gpa: "3.91/4.00",
    expectedGraduation: "September 2027",
    coursework: [
      "Machine Learning",
      "Natural Language Processing",
      "Speech Recognition",
      "Software Engineering",
      "Artificial Intelligence",
      "Database Technology",
      "Algorithm Design and Analysis",
      "Deep Learning",
      "Computer Vision",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 pattern-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hash-header">
            about-me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hello, I'm Jonathan Carlo! A passionate Computer Science student at
            Bina Nusantara University with a deep interest in AI and
            broadcasting technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - About Text & Education */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    My Journey
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a dedicated Computer Science student specializing in
                      Intelligent Systems, passionate about leveraging
                      technology to solve real-world problems. My journey
                      combines academic excellence with practical experience in
                      both AI development and broadcasting.
                    </p>
                    <p>
                      As the Head of Technical Department at BINUS TV Club, I've
                      had the privilege of leading technical operations for over
                      10 student-led productions, managing broadcasting
                      equipment, and training 250+ members in production
                      techniques.
                    </p>
                    <p>
                      My projects reflect my commitment to innovation, from
                      AI-powered filmmaking tools to sign language learning
                      platforms. I'm always eager to explore new technologies
                      and contribute to meaningful projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">
                          {education.university}
                        </h4>
                        <p className="text-muted-foreground">
                          {education.location}
                        </p>
                      </div>
                      <span className="text-sm text-primary font-medium">
                        {education.expectedGraduation}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-foreground font-medium">
                        {education.degree}
                      </p>
                      <p className="text-muted-foreground">
                        Concentration: {education.concentration}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          GPA:
                        </span>
                        <span className="text-primary font-semibold">
                          {education.gpa}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h5 className="font-medium text-foreground mb-3">
                        Relevant Coursework:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {education.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Achievements */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Key Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {achievement.description}
                        </p>
                        <span className="text-sm text-primary font-medium">
                          {achievement.highlight}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium"
            asChild
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect →
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
