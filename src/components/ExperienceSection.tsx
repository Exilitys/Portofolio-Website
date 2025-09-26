import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import jonathanPortrait from "@/assets/jonathan-portrait.jpg";
import jonathanPortrait1 from "@/assets/jonathan-portrait1.jpg";
import cinesparkImage from "@/assets/cinespark.png";
import vispaImage from "@/assets/vispa.png";
import temubicaraImage from "@/assets/temubicara.png";

// Unit Production Manager images
import upm1 from "@/assets/unit production manager/139882_0.jpg";
import upm2 from "@/assets/unit production manager/140519_0.jpg";
import upm3 from "@/assets/unit production manager/140524_0.jpg";

// Head of Technical images
import hot1 from "@/assets/Head of Technical/139888_0.jpg";
import hot2 from "@/assets/Head of Technical/139892_0.jpg";
import hot3 from "@/assets/Head of Technical/139896_0.jpg";
import hot4 from "@/assets/Head of Technical/139899_0.jpg";
import hot5 from "@/assets/Head of Technical/140515_0.jpg";

// PKM images
import pkm1 from "@/assets/pkm/1.jpg";

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

const ExperienceSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentExperience, setCurrentExperience] = useState<any>(null);

  const openModal = (experience: any, imageIndex: number) => {
    setCurrentExperience(experience);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentExperience(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentExperience) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % currentExperience.images.length
      );
    }
  };

  const prevImage = () => {
    if (currentExperience) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + currentExperience.images.length) %
          currentExperience.images.length
      );
    }
  };

  const experiences = [
    {
      title: "Unit Production Manager Uni-Verse Diaries Season 2",
      company: "BINUS TV Club",
      location: "Indonesia",
      duration: "May 2025 - Present",
      type: "Current Role",
      images: [upm1, upm2, upm3],
      description:
        "As a Unit Production Manager, I'm responsible for overseeing all equipment used during the shooting process across departments, ensuring its safety, proper handling, and availability. I provide technical assistance, manage logistics, coordinate with crew members, and ensure the production runs efficiently, on schedule, and within budget.",
      technologies: [
        "Film Production",
        "Leadership",
        "Teamwork",
        "Equipment Management",
        "Logistics",
      ],
      achievements: [
        "Successfully managed equipment across multiple departments during shooting",
        "Coordinated with crew members to ensure efficient production workflow",
        "Maintained production schedule and budget compliance",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Head of Technical Alam Sutera",
      company: "BINUS TV Club",
      location: "Tangerang Selatan, Indonesia",
      duration: "Feb 2025 - Present",
      type: "Full-time",
      images: [hot1, hot2, hot3, hot4, hot5],
      description:
        "As Head of Technical at BINUS TV Alam Sutera, I was responsible for supervising the usage and maintenance of broadcasting equipment for club-related events and productions. I collaborated with over 60 fellow team members and managed more than 250 active members within the BINUS TV Club.",
      technologies: [
        "Broadcasting",
        "Communication",
        "Critical Thinking",
        "Leadership",
        "Audio Visual System Design",
        "Camera Operation",
        "Film Production",
        "Live Event Production",
      ],
      achievements: [
        "Supervised broadcasting equipment for club events and productions",
        "Managed technical operations for BINUS TV studio in Alam Sutera",
        "Collaborated with 60+ team members and supported 250+ active members",
        "Trained members in broadcasting, content creation, and equipment handling",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Technical Coordinator PKM 2024",
      company: "BINUS TV Club",
      location: "Kota Tangerang Selatan, Banten, Indonesia",
      duration: "Apr 2024 - Jul 2024",
      type: "Full-time",
      images: [pkm1],
      description:
        "Led a team of 6 as the technical team lead for PKM 2024, collaborating with other divisions to prepare and organize a 3-day educational event at SMAN 7 Tangerang Selatan. The event focused on broadcasting-related topics, aimed at inspiring and educating students.",
      technologies: [
        "Broadcasting",
        "Communication",
        "Problem Solving",
        "Leadership",
        "Teamwork",
        "Critical Thinking",
      ],
      achievements: [
        "Led a team of 6 technical crew members",
        "Successfully organized 3-day educational broadcasting event",
        "Collaborated across divisions for event preparation and execution",
        "Inspired and educated students about broadcasting careers",
      ],
      gradient: "from-green-500 to-teal-500",
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
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 pattern-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hash-header">
            experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in technology, AI research, and
            broadcasting, showcasing the diverse experiences that shaped my
            expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.slice(0, 2).map((experience, index) => (
            <motion.div
              key={experience.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 glow-card">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-semibold text-foreground">
                              {experience.title}
                            </h3>
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${experience.gradient} text-white`}
                            >
                              {experience.type}
                            </span>
                          </div>
                          <p className="text-lg text-primary font-medium">
                            {experience.company}
                          </p>
                        </div>

                        <div className="flex flex-col sm:items-end gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {experience.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      {/* Image Slider */}
                      {experience.images && experience.images.length > 0 && (
                        <ImageSlider
                          images={experience.images}
                          alt={experience.title}
                          onImageClick={(imageIndex) =>
                            openModal(experience, imageIndex)
                          }
                        />
                      )}

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements
                            .slice(0, 2)
                            .map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <ChevronRight className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
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
            <Link to="/experience">
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View All Experience
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && currentExperience && (
          <ImageModal
            images={currentExperience.images}
            currentImage={currentImageIndex}
            onClose={closeModal}
            onPrevious={prevImage}
            onNext={nextImage}
            alt={currentExperience.title}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
