import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  ChevronRight,
  Award,
  Target,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

// Technical Advisor Sound Department images
import tasd1 from "@/assets/Technical ADvisor Sound Department/140516_0.jpg";
import tasd2 from "@/assets/Technical ADvisor Sound Department/140518_0.jpg";
import tasd3 from "@/assets/Technical ADvisor Sound Department/140520_0.jpg";
import tasd4 from "@/assets/Technical ADvisor Sound Department/140522_0.jpg";
import tasd5 from "@/assets/Technical ADvisor Sound Department/140523_0.jpg";

// Series Episode 3 images
import ep3_1 from "@/assets/Series ep3/1.jpg";
import ep3_2 from "@/assets/Series ep3/2.jpg";

// PKM images
import pkm1 from "@/assets/pkm/1.jpg";

// Express Reel images
import express1 from "@/assets/Express reel/1.jpg";
import express2 from "@/assets/Express reel/2.jpg";

// Series Episode 2 images
import ep2_1 from "@/assets/Series ep2/1.jpg";

// Camera Assistant images
import cam1 from "@/assets/cam assitant/1.jpg";
import cam2 from "@/assets/cam assitant/2.jpg";

// Activist Technical images
import activist1 from "@/assets/Activist Technical/139887_0.jpg";
import activist2 from "@/assets/Activist Technical/140535_0.jpg";
import activist3 from "@/assets/Activist Technical/140536_0.jpg";
import activist4 from "@/assets/Activist Technical/140537_0.jpg";
import activist5 from "@/assets/Activist Technical/140538_0.jpg";

// Image Slider Component
const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
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
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
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

const Experience = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        "Project Management",
      ],
      achievements: [
        "Successfully managed equipment across multiple departments during shooting",
        "Coordinated with crew members to ensure efficient production workflow",
        "Maintained production schedule and budget compliance",
        "Ensured safety and proper handling of all technical equipment",
        "Provided technical assistance across various production departments",
      ],
      responsibilities: [
        "Oversee all equipment used during shooting process across departments",
        "Ensure equipment safety, proper handling, and availability",
        "Provide technical assistance to crew members",
        "Manage production logistics and coordination",
        "Ensure production runs efficiently, on schedule, and within budget",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Technical, Sound, and Editing Department Advisor",
      company: "BINUS TV Club",
      location: "Indonesia",
      duration: "May 2025 - Present",
      type: "Current Role",
      images: [tasd1, tasd2, tasd3, tasd4, tasd5],
      description:
        "As a Boom Operator, Sound Recorder, and Sound Department Advisor, I ensure smooth sound recording and collection on set by operating and managing professional audio equipment. As an Editor Department Advisor, I oversee the entire editing process—from offline to online—guiding both editors and collaborating closely with the director to bring their vision to life.",
      technologies: [
        "Audio Recording",
        "Communication",
        "Film Production",
        "Leadership",
        "Teamwork",
        "Video Editing",
        "Professional Audio Equipment",
      ],
      achievements: [
        "Maintained high-quality sound recording throughout production processes",
        "Successfully guided editing teams from offline to online editing",
        "Collaborated closely with directors to achieve creative vision",
        "Managed professional audio equipment for multiple productions",
        "Provided technical expertise across sound and editing departments",
      ],
      responsibilities: [
        "Operate boom microphones and sound recording equipment",
        "Manage professional audio equipment on set",
        "Oversee entire editing process from offline to online",
        "Guide editors and collaborate with directors",
        "Ensure high-quality sound collection during productions",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Head of Technical Alam Sutera",
      company: "BINUS TV Club",
      location: "Tangerang Selatan, Indonesia",
      duration: "Feb 2025 - Present",
      type: "Full-time",
      images: [hot1, hot2, hot3, hot4, hot5],
      description:
        "As Head of Technical at BINUS TV Alam Sutera, I was responsible for supervising the usage and maintenance of broadcasting equipment for club-related events and productions. I collaborated with over 60 fellow team members and applied strong leadership skills to help manage and support more than 250 active members within the BINUS TV Club.",
      technologies: [
        "Broadcasting",
        "Communication",
        "Critical Thinking",
        "Leadership",
        "Problem Solving",
        "Teamwork",
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
        "Coordinated studio use for recordings and live sessions",
        "Provided technical support for live streaming events on campus",
      ],
      responsibilities: [
        "Supervise usage and maintenance of broadcasting equipment",
        "Manage video and audio equipment for live event productions",
        "Oversee BINUS TV studio operations in Alam Sutera",
        "Coordinate studio use for recordings and live sessions",
        "Train members in broadcasting and content creation",
        "Provide technical support for live streaming events",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Sound Recorder & Editor Uni-Verse Diaries Episode 3",
      company: "BINUS TV Club",
      location: "Indonesia",
      duration: "Feb 2025",
      type: "Project Role",
      images: [ep3_1, ep3_2],
      description:
        "As an Editor and part of the Sound Department for Universe Diaries Episode 3, I managed audio recording equipment, operated the boom mic, and collaborated closely with the crew to ensure high production standards. In post-production, I contributed to editing the series, enhancing both video and audio quality to deliver a polished final product.",
      technologies: [
        "Camera Operation",
        "Film Production",
        "Behind the Scenes",
        "Video Editing",
        "Audio Recording",
        "Teamwork",
      ],
      achievements: [
        "Managed audio recording equipment with technical precision",
        "Operated boom microphones during filming",
        "Enhanced video and audio quality in post-production",
        "Delivered polished final product aligned with creative vision",
        "Documented entire filmmaking process as BTS crew",
      ],
      responsibilities: [
        "Manage audio recording equipment during production",
        "Operate boom microphones for sound capture",
        "Collaborate with crew to maintain high production standards",
        "Edit video and audio in post-production",
        "Document filmmaking process through photo and video",
      ],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Technical Coordinator PKM 2024",
      company: "BINUS TV Club",
      location: "Kota Tangerang Selatan, Banten, Indonesia",
      duration: "Apr 2024 - Jul 2024",
      type: "Event Role",
      images: [pkm1],
      description:
        "Led a team of 6 as the technical team lead for PKM 2024, collaborating with other divisions to prepare and organize a 3-day educational event at SMAN 7 Tangerang Selatan. The event focused on broadcasting-related topics, aimed at inspiring and educating students about broadcasting careers.",
      technologies: [
        "Broadcasting",
        "Communication",
        "Problem Solving",
        "Leadership",
        "Teamwork",
        "Critical Thinking",
        "Event Management",
      ],
      achievements: [
        "Led a team of 6 technical crew members successfully",
        "Successfully organized 3-day educational broadcasting event",
        "Collaborated across divisions for event preparation and execution",
        "Inspired and educated students about broadcasting careers",
        "Managed technical aspects of educational workshops",
      ],
      responsibilities: [
        "Lead technical team of 6 members",
        "Collaborate with other divisions for event preparation",
        "Organize educational broadcasting workshops",
        "Manage technical setup for 3-day event",
        "Inspire students about broadcasting career opportunities",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Technical Team Express Reel Excellence 2024",
      company: "BINUS TV Club",
      location: "Indonesia",
      duration: "Sep 2024 - Dec 2024",
      type: "Event Role",
      images: [express1, express2],
      description:
        "Served as a Technical Crew member for a national short film competition and movie screening event at Binus University. Designed the visual and audio systems, managed operations, and operated vMix during the event. Communicated and collaborated with the team to ensure smooth and successful execution.",
      technologies: [
        "Audio Visual System Design",
        "Communication",
        "Leadership",
        "Problem Solving",
        "Teamwork",
        "Live Event Production",
        "vMix",
      ],
      achievements: [
        "Designed comprehensive visual and audio systems for national event",
        "Successfully operated vMix during live event execution",
        "Ensured smooth technical execution for film competition",
        "Collaborated effectively with team for successful event delivery",
        "Managed technical operations for movie screening event",
      ],
      responsibilities: [
        "Design visual and audio systems for events",
        "Operate vMix software during live productions",
        "Manage technical operations during events",
        "Collaborate with team members for smooth execution",
        "Provide technical support for film competitions and screenings",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "BTS Crew Uni-Verse Diaries Episode 2",
      company: "BINUS TV Club",
      location: "Indonesia",
      duration: "Sep 2024 - Nov 2024",
      type: "Project Role",
      images: [ep2_1],
      description:
        "Served as a BTS (Behind-the-Scenes) Crew member for a short film, capturing photos and videos to document the filmmaking process. Collaborated with the team and provided support to ensure smooth production.",
      technologies: [
        "Behind the Scenes",
        "Film Production",
        "Communication",
        "Problem Solving",
        "Camera Operation",
        "Photography",
        "Teamwork",
      ],
      achievements: [
        "Successfully documented entire filmmaking process through photography and videography",
        "Collaborated effectively with production team to ensure smooth operations",
        "Captured high-quality behind-the-scenes content for promotional use",
        "Provided crucial support to production crew during filming",
        "Maintained professional standards while working in fast-paced environment",
      ],
      responsibilities: [
        "Capture photos and videos to document filmmaking process",
        "Collaborate with team to provide production support",
        "Ensure smooth behind-the-scenes operations",
        "Document key moments and processes during filming",
        "Support production crew with various tasks as needed",
      ],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Camera Assistant Binus Inauguration 2024",
      company: "BINUS University",
      location: "Binus University Alam Sutera",
      duration: "Aug 2024",
      type: "Event Role",
      images: [cam1, cam2],
      description:
        "Served as a Camera Assistant for the Binus Inauguration 2024, contributing to the successful execution of the event for new university students at Binus University Alam Sutera.",
      technologies: [
        "Broadcasting",
        "Camera Operation",
        "Communication",
        "Teamwork",
        "Live Event Production",
      ],
      achievements: [
        "Successfully assisted in camera operations for major university event",
        "Contributed to seamless live coverage of inauguration ceremony",
        "Maintained professional standards during high-pressure live event",
        "Collaborated effectively with broadcasting team",
        "Ensured quality visual documentation of important university milestone",
      ],
      responsibilities: [
        "Assist with camera operations during live event",
        "Support main camera operators with equipment management",
        "Ensure smooth visual coverage of inauguration ceremony",
        "Collaborate with broadcasting team for optimal shots",
        "Maintain equipment and assist with technical setup",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Activist of Technical Division",
      company: "BINUS TV Club",
      location: "Indonesia",
      duration: "Feb 2024 - Feb 2025",
      type: "Club Member",
      images: [activist1, activist2, activist3, activist4, activist5],
      description:
        "Activist of the Binus TV Club, where I expanded my knowledge and received training in camera operations, systems, editing, and audio production. Built connections and collaborated with peers while enhancing soft skills such as teamwork, time management, leadership, communication, and collaboration. Contributed as a technical team member for various events, including PKM, Express Reel Excellence, Binus Inauguration, and other events and activities.",
      technologies: [
        "Broadcasting",
        "Communication",
        "Camera Operation",
        "Teamwork",
        "Problem Solving",
        "Film Production",
        "Photography",
        "Leadership",
        "Audio Visual System Design",
      ],
      achievements: [
        "Expanded technical knowledge in camera operations, editing, and audio production",
        "Built strong network and collaborative relationships with peers",
        "Enhanced soft skills including teamwork, time management, and leadership",
        "Contributed to successful execution of multiple major events",
        "Developed expertise in audio visual system design and implementation",
        "Gained hands-on experience across various aspects of broadcasting",
      ],
      responsibilities: [
        "Receive training in camera operations, systems, and editing",
        "Learn audio production techniques and equipment operation",
        "Collaborate with peers on various club projects and events",
        "Contribute as technical team member for events and activities",
        "Develop soft skills through practical experience and mentorship",
        "Support club operations and member development initiatives",
      ],
      gradient: "from-teal-500 to-green-500",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection="experience" />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 pattern-dots opacity-20" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Button
                variant="ghost"
                className="mb-8 text-muted-foreground hover:text-foreground"
                asChild
              >
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 hash-header">
                Professional Experience
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive overview of my professional journey, showcasing
                the diverse experiences that have shaped my expertise in
                technology, AI research, and content creation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Cards */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 glow-card">
                    <CardContent className="p-8 lg:p-12">
                      <div className="space-y-8">
                        {/* Image Slider */}
                        {experience.images && (
                          <ImageSlider
                            images={experience.images}
                            alt={experience.title}
                          />
                        )}

                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <h2 className="text-3xl font-bold text-foreground">
                                {experience.title}
                              </h2>
                              <span
                                className={`px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r ${experience.gradient} text-white`}
                              >
                                {experience.type}
                              </span>
                            </div>
                            <p className="text-xl text-primary font-semibold mb-2">
                              {experience.company}
                            </p>
                          </div>

                          <div className="flex flex-col gap-3 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5" />
                              <span className="font-medium">
                                {experience.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5" />
                              <span className="font-medium">
                                {experience.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            Technologies & Tools
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Responsibilities */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <ChevronRight className="h-5 w-5 text-primary" />
                            Key Responsibilities
                          </h3>
                          <ul className="space-y-3">
                            {experience.responsibilities.map(
                              (responsibility, i) => (
                                <li
                                  key={i}
                                  className="text-muted-foreground flex items-start gap-3"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="leading-relaxed">
                                    {responsibility}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            Key Achievements
                          </h3>
                          <ul className="space-y-3">
                            {experience.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-muted-foreground flex items-start gap-3"
                              >
                                <ChevronRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
