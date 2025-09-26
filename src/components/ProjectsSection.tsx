import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Eye,
  Image,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// CineSpark images
import cinesparkMain from "@/assets/cinespark/cinespark.png";
import cinesparkImg1 from "@/assets/cinespark/Screenshot 2025-09-17 214205.png";
import cinesparkImg2 from "@/assets/cinespark/Screenshot 2025-09-17 214227.png";
import cinesparkImg3 from "@/assets/cinespark/Screenshot 2025-09-17 214241.png";

// TemuBicara images
import temubicaraMain from "@/assets/temubicara/temubicara.png";
import temubicaraChat from "@/assets/temubicara/chat-interface.png";
import temubicaraEvent from "@/assets/temubicara/event-dashboard.png";
import temubicaraHomepage from "@/assets/temubicara/homepage-features.png";
import temubicaraPayment from "@/assets/temubicara/payment-system.png";
import temubicaraSpeaker from "@/assets/temubicara/speaker-profiles.png";
import temubicaraScreenshot from "@/assets/temubicara/Screenshot 2025-07-25 163446.png";

// VISPA images
import vispaMain from "@/assets/vispa/vispa.png";
import vispaScreenshot1 from "@/assets/vispa/Screenshot 2025-09-17 214114.png";
import vispaScreenshot2 from "@/assets/vispa/Screenshot 2025-09-17 215232.png";
import vispaScreenshot3 from "@/assets/vispa/Screenshot 2025-09-17 215245.png";
import vispaScreenshot4 from "@/assets/vispa/Screenshot 2025-09-17 215253.png";
import vispaScreenshot5 from "@/assets/vispa/Screenshot 2025-09-17 215302.png";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Image */}
        <img
          src={images[currentImage]}
          alt={`${alt} - Image ${currentImage + 1}`}
          className="w-full h-full object-contain rounded-lg"
        />

        {/* Navigation */}
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

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

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
    <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted mb-4 group">
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
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
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

const ProjectsSection = () => {
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
      title: "CineSpark AI",
      description:
        "AI-powered pre-production assistant designed to revolutionize the way filmmakers plan, visualize, and bring their stories to life, with integrated payment system.",
      technologies: ["ReactJS", "PostgreSQL", "LangGraph", "FastAPI", "Paddle"],
      liveUrl: "https://cinesparkai.online/",
      sourceUrl: "https://github.com/Exilitys/CineSpark",
      status: "Live",
      category: "AI/ML",
      gradient: "from-purple-500 to-pink-500",
      imageUrl: cinesparkMain,
      images: [cinesparkMain, cinesparkImg1, cinesparkImg2, cinesparkImg3],
    },
    {
      title: "VISPA",
      description:
        "Interactive sign language learning platform designed to help users learn sign language through a combination of video lessons, interactive quizzes, and real-time sign detection.",
      technologies: ["NextJS", "PostgreSQL", "Flask", "scikit-learn"],
      liveUrl: "https://vispa-pv5j.vercel.app/home",
      sourceUrl: "https://github.com/Exilitys/vispa",
      status: "Down",
      category: "AI/ML",
      gradient: "from-green-500 to-teal-500",
      imageUrl: vispaMain,
      images: [
        vispaMain,
        vispaScreenshot1,
        vispaScreenshot2,
        vispaScreenshot3,
        vispaScreenshot4,
        vispaScreenshot5,
      ],
    },
    {
      title: "TemuBicara",
      description:
        "A platform that connects speakers with event organizers while providing a secure and transparent payment system to empower lesser-known voices.",
      technologies: ["ReactJS", "PostgreSQL"],
      liveUrl: "https://garudahacks-orcin.vercel.app/",
      sourceUrl: "https://github.com/Exilitys/TemuBicara",
      status: "Live",
      category: "Web App",
      gradient: "from-blue-500 to-indigo-500",
      imageUrl: temubicaraMain,
      images: [
        temubicaraMain,
        temubicaraHomepage,
        temubicaraChat,
        temubicaraEvent,
        temubicaraPayment,
        temubicaraSpeaker,
        temubicaraScreenshot,
      ],
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hash-header">
            projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my passion for AI and web development through innovative
            projects that solve real-world problems.
          </p>
          {/* <div className="flex justify-center mt-6">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View all →
            </Button>
          </div> */}
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
                  {/* Project Image Slider */}
                  {project.images && project.images.length > 0 && (
                    <ImageSlider
                      images={project.images}
                      alt={project.title}
                      onImageClick={(imageIndex) =>
                        openModal(project, imageIndex)
                      }
                    />
                  )}

                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <span className="text-sm text-primary font-medium">
                        {project.category}
                      </span>
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg group"
            asChild
          >
            <Link to="/projects">
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View All Projects
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && currentProject && (
          <ImageModal
            images={currentProject.images}
            currentImage={currentImageIndex}
            onClose={closeModal}
            onPrevious={prevImage}
            onNext={nextImage}
            alt={currentProject.title}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
