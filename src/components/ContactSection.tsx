import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "jonathancarlo20@gmail.com",
      href: "mailto:jonathancarlo20@gmail.com",
      description: "Send me a message",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+62-811-883-515-1",
      href: "tel:+628118835151",
      description: "Let's have a call",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Tangerang, Banten",
      href: "#",
      description: "Indonesia",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/Exilitys",
      username: "@Exilitys",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "http://www.linkedin.com/in/jonathan-carlo-670b73233",
      username: "Jonathan Carlo",
    },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
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
            contacts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm interested in internship opportunities. However, if you have
            other requests or questions, don't hesitate to contact me.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    className="block group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">
                              {info.title}
                            </h4>
                            <p className="text-primary font-medium">
                              {info.value}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="p-4 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mx-auto w-fit mb-3">
                          {social.icon}
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {social.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {social.username}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Send className="h-10 w-10 text-primary" />
                </motion.div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Ready to Collaborate?
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm actively seeking internship opportunities where I can
                  contribute my skills in AI, machine learning, and software
                  development. Let's build something amazing together!
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-primary"
                    asChild
                  >
                    <motion.a
                      href="mailto:jonathancarlo20@gmail.com?subject=Internship Opportunity&body=Hello Jonathan,"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message →
                    </motion.a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Download Resume
                    </motion.a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3.91</div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground">Members Led</div>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
