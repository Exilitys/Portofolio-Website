import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ArrowLeft,
  ExternalLink,
  Github,
  Code,
  Globe,
  Database,
  Smartphone,
  Monitor,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Project images

import cinesparkImg1 from "@/assets/cinespark/Screenshot 2025-09-17 214205.png";
import cinesparkImg2 from "@/assets/cinespark/Screenshot 2025-09-17 214227.png";
import cinesparkImg3 from "@/assets/cinespark/Screenshot 2025-09-17 214241.png";

import temubicaraMain from "@/assets/temubicara/temubicara.png";
import temubicaraChat from "@/assets/temubicara/chat-interface.png";
import temubicaraEvent from "@/assets/temubicara/event-dashboard.png";
import temubicaraHomepage from "@/assets/temubicara/homepage-features.png";
import temubicaraPayment from "@/assets/temubicara/payment-system.png";
import temubicaraSpeaker from "@/assets/temubicara/speaker-profiles.png";
import temubicaraScreenshot from "@/assets/temubicara/Screenshot 2025-07-25 163446.png";

import vispaMain from "@/assets/vispa/vispa.png";
import vispaScreenshot1 from "@/assets/vispa/Screenshot 2025-09-17 214114.png";
import vispaScreenshot2 from "@/assets/vispa/Screenshot 2025-09-17 215232.png";
import vispaScreenshot3 from "@/assets/vispa/Screenshot 2025-09-17 215245.png";
import vispaScreenshot4 from "@/assets/vispa/Screenshot 2025-09-17 215253.png";
import vispaScreenshot5 from "@/assets/vispa/Screenshot 2025-09-17 215302.png";

import hanacaraka1 from "@/assets/hanacaraka/output.png";
import hanacaraka2 from "@/assets/hanacaraka/streamlit.png";
import hanacaraka3 from "@/assets/hanacaraka/ipynb.png";

// Image Slider Component
const ImageSlider = ({
  images,
  alt,
  onImageClick,
}: {
  images: string[];
  alt: string;
  onImageClick: (index: number) => void;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-80 rounded-lg overflow-hidden bg-muted mb-6 group">
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt={`${alt} - Image ${currentImage + 1}`}
        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => onImageClick(currentImage)}
      />

      {images.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentImage ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Image Modal Component
const ImageModal = ({
  images,
  currentImage,
  onClose,
  onPrevious,
  onNext,
  alt,
}: {
  images: string[];
  currentImage: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  alt: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image */}
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`${alt} - Image ${currentImage + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState<any>(null);

  const openModal = (project: any, imageIndex: number) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + currentProject.images.length) %
          currentProject.images.length
      );
    }
  };

  const projects = [
    {
      title: "CineSpark",
      description:
        "AI-powered pre-production assistant built with React, Supabase, and LangGraph",
      longDescription:
        "AI-powered pre-production assistant designed to revolutionize the way filmmakers plan, visualize, and bring their stories to life, with integrated payment system.",
      category: "Web App Development",
      status: "Completed",
      duration: "1 Week",
      year: "2025",
      images: [cinesparkImg1, cinesparkImg2, cinesparkImg3],
      technologies: [
        "ReactJS",
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
        "LangGraph",
        "FastAPI",
        "Paddle",
      ],
      features: [
        "User authentication and profile management",
        "AI-Generated Story Concepts",
        "Automated Shot Lists & Storyboards",
        "Fast Pre-Production Workflows",
        "Creator-Centric Design",
      ],
      challenges: [
        "Implementing custom AI agent with LangGraph",
        "Creating responsive design across all devices",
        "Managing user authentication, security, and payment system",
      ],
      learnings: [
        "AI Agent workflow with LangGraph",
        "Database integration with Supabase",
        "User experience design principles",
        "Full-stack web development workflow",
      ],
      demoUrl: "http://cinesparkai.online/",
      githubUrl: "https://github.com/Exilitys/CineSpark",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "TemuBicara",
      description:
        "Speaker-organizer matchmaking and event management platform built with React and Supabase",
      longDescription:
        "Temu Bicara is a comprehensive speaker-organizer matchmaking and event management platform that also serves as a secure payment bridge. The platform empowers new and lesser-known speakers by giving them access to professional opportunities, and helps organizers find suitable, trustworthy, and verified speakers with ease. Built for Garuda Hacks 2025.",
      category: "Web App Development",
      status: "Completed",
      duration: "30 Hours",
      year: "2025",
      images: [
        temubicaraMain,
        temubicaraChat,
        temubicaraEvent,
        temubicaraHomepage,
        temubicaraPayment,
        temubicaraSpeaker,
        temubicaraScreenshot,
      ],
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      features: [
        "AI-Based Speaker & Organizer Matching",
        "Secure Booking & Payment System",
        "Speaker Growth Tools & Analytics",
        "Event Management & Documentation",
        "Real-time Chat & Communication",
        "Trust & Safety with ID Verification",
        "Multi-Payment Support (E-wallets, QRIS)",
        "Role-Based Dashboards",
      ],
      challenges: [
        "Implementing secure escrow payment system",
        "Rapid application development within a 30-hour hackathon timeframe",
        "Creating comprehensive role-based access control",
      ],
      learnings: [
        "Full-stack development with Supabase",
        "Complex database design with RLS",
        "Payment gateway integration strategies",
        "Rapid Application Development",
        "Collaboration and teamwork using collborative tools",
      ],
      demoUrl: "https://garudahacks-orcin.vercel.app/",
      githubUrl: "https://github.com/Exilitys/Garudahacks",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "VISPA",
      description: "AI-Powered Sign Language Learning Platform",
      longDescription:
        "VISPA is an AI-powered learning platform designed to support individuals in need by making the process of learning sign language simple, interactive, and accessible. Through advanced sign language recognition features, VISPA not only teaches users how to communicate effectively but also provides real-time feedback to ensure accuracy and confidence.",
      category: "Web Application",
      status: "Down",
      duration: "1 Month",
      year: "2024",
      images: [
        vispaMain,
        vispaScreenshot1,
        vispaScreenshot2,
        vispaScreenshot3,
        vispaScreenshot4,
        vispaScreenshot5,
      ],
      technologies: [
        "ReactJS",
        "Node.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Flask",
        "Scikit-Learn",
      ],
      features: [
        "Interactive Sign Language Learning",
        "Progress tracking and analytics",
        "Personalized learning recommendations",
        "Gamified learning experience",
        "Real Time Sign Detection",
      ],
      challenges: [
        "Developing Real Time Sign Detection Model",
        "Ensuring multi-device responsiveness",
        "Implementing an efficient real-time communication system bwtween app and API",
        "Managing large volume of course data",
      ],
      learnings: [
        "Computer vison AI model development workflow",
        "Integrating AI models with real-world applications",
        "User experience in educational applications",
        "Collaboration and teamwork using collborative tools",
      ],
      demoUrl: "https://vispa-pv5j.vercel.app",
      githubUrl: "https://github.com/Exilitys/vispa",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Hanacaraka Aksara Jawa Handwriting Detection",
      description:
        "A deep learning computer vison project for recognizing handwritten Javanese script (Aksara Jawa/Hanacaraka) ",
      longDescription:
        "This project implements a convolutional neural network to classify 20 different Javanese script characters. The model uses transfer learning with ResNet50V2 as the base architecture and achieves high accuracy (>96%) through data augmentation and fine-tuning techniques. An interactive Streamlit web application is included for easy testing and demonstration.",
      category: "AI Model",
      status: "Completed",
      duration: "1 Week",
      year: "2025",
      images: [hanacaraka1, hanacaraka2, hanacaraka3],
      technologies: ["Tensorflow", "OpenCV", "Streamlit"],
      features: [
        "Fine-tuned ResNet50V2 for 20-class Javanese character classification",
        "Streamlit-based interface for real-time image classification",
        "Complete notebook with data preprocessing, training, and evaluation",
        "Saved model and class mappings for deployment",
      ],
      challenges: [
        "Managing long model training times",
        "Applying effective data augmentation techniques",
        "Selecting the most suitable model architecture",
      ],
      learnings: [
        "Built a complete end-to-end computer vision model pipeline",
        "Explored transfer learning techniques using ResNet50V2",
        "Gained experience in deploying AI models with Streamlit",
      ],
      demoUrl: null,
      githubUrl:
        "https://github.com/Exilitys/Hanacaraka-Aksara-Jawa-Handwriting-Detection",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Jabodetabek House Prediction",
      description:
        "Jabodetabek House Prediction using Random Forest with Next.js and Flask",
      longDescription: "",
      category: "AI Model",
      status: "Down",
      duration: "1 Month",
      year: "2025",
      images: [],
      technologies: ["Google Colab", "Scikit-Learn", "Flask", "Next.js"],
      features: [],
      challenges: [],
      learnings: [],
      demoUrl: null,
      githubUrl: "http://localhost:8080/projects",
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Live":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Down":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return <Globe className="h-5 w-5" />;
      case "Mobile Development":
        return <Smartphone className="h-5 w-5" />;
      case "Backend Development":
        return <Database className="h-5 w-5" />;
      case "Educational Technology":
        return <Monitor className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection="projects" />

      <motion.div
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto pt-20">
          {/* Header */}
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Portfolio
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my development projects, showcasing
              various technologies and solutions across web, mobile, and backend
              development.
            </p>
          </motion.div>

          {/* Projects List */}
          <motion.div className="space-y-8 pt-10" variants={itemVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full glow-card">
                  <CardContent className="p-8">
                    {/* Project Images Slider */}
                    {project.images.length > 0 && (
                      <ImageSlider
                        images={project.images}
                        alt={project.title}
                        onImageClick={(index) => openModal(project, index)}
                      />
                    )}

                    {/* Project Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {getCategoryIcon(project.category)}
                          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                            {project.title}
                          </h2>
                        </div>
                        <p className="text-muted-foreground text-lg mb-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.year}</span>
                          </div>
                          <span className="text-xs">•</span>
                          <span>{project.duration}</span>
                          <span className="text-xs">•</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              project.status
                            )}`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Overview
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges & Learnings */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            Challenges
                          </h3>
                          <div className="space-y-2">
                            {project.challenges.map(
                              (challenge, challengeIndex) => (
                                <div
                                  key={challengeIndex}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground text-sm">
                                    {challenge}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            Key Learnings
                          </h3>
                          <div className="space-y-2">
                            {project.learnings.map(
                              (learning, learningIndex) => (
                                <div
                                  key={learningIndex}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground text-sm">
                                    {learning}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        {project.demoUrl && (
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            asChild
                          >
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View Demo
                            </a>
                          </Button>
                        )}

                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Button
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Back to Top
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <Footer />

      {/* Image Modal */}
      {isModalOpen && (
        <ImageModal
          images={currentProject?.images || []}
          currentImage={currentImageIndex}
          alt={currentProject?.title || ""}
          onClose={closeModal}
          onNext={nextImage}
          onPrevious={prevImage}
        />
      )}
    </div>
  );
};

export default Projects;
