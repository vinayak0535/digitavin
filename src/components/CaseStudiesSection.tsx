import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioGym from "@/assets/portfolio-gym.png";
import portfolioSalon from "@/assets/portfolio-salon.png";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    title: "FitZone Gym Website Redesign",
    client: "FitZone Fitness Center",
    challenge:
      "The gym had an outdated website that wasn't mobile-friendly and failed to convert visitors into members.",
    solution:
      "We redesigned the entire website with a modern, mobile-first approach. Added online class booking, membership plans showcase, and integrated social proof through member testimonials.",
    results: [
      "65% increase in membership signups",
      "40% improvement in mobile user engagement",
      "3x more class bookings through online system",
    ],
    image: portfolioGym,
  },
  {
    title: "Glamour Salon Digital Transformation",
    client: "Glamour Beauty Salon",
    challenge:
      "Manual appointment booking was causing missed opportunities and customer frustration.",
    solution:
      "Created an elegant website with integrated online booking system, service gallery, and automated appointment reminders via SMS and email.",
    results: [
      "40% more appointments booked",
      "90% reduction in no-shows",
      "5-star rating improvement on Google",
    ],
    image: portfolioSalon,
  },
];

const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="case-studies" className="py-16 sm:py-20 md:py-22 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Deep dive into how we transformed businesses through strategic web design
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <AnimatePresence mode="wait">
            {caseStudies.map((study, index) =>
              activeIndex === index ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 bg-card p-6 sm:p-8 rounded-2xl border border-border">
                    {/* Image */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative h-[250px] sm:h-[300px] lg:h-auto rounded-xl overflow-hidden"
                    >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex flex-col justify-center"
                    >
                    <p className="text-primary text-sm font-semibold mb-2">{study.client}</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">{study.title}</h3>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-primary w-8" : "bg-muted"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
