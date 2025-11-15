import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative  min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://www.elegantthemes.com/images/divi/divi-hero-video-small.webm"
            type="video/webm"
          />
        </video>
      </motion.div>

      {/* Content with Parallax */}
      <motion.div 
        style={{ y: contentY, opacity }} 
        className="container mx-auto px-4 sm:px-6 z-20 w-full"
      >
        <div className="max-w-4xl w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mb-3 sm:mb-4 pt-20"
          >
            Website Development
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            We help local businesses grow online through{" "}
            <span className="gradient-text">modern, high-converting</span> websites.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl"
          >
            Digitavin is a Taloje, Navi Mumbai-based web design studio crafting digital experiences that
            build trust and sales.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start w-full sm:w-auto"
          >

            <a href="#contact">      <Button variant="gradient" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
              Get Your Website
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4" />
            </Button> </a>
       
       <a href="https://wa.me/9702490987?text=hey digitavin i want to book a free consultation" target="_blank">
        <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              Book Free Consultation
            </Button>
       </a>
          
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
