import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { useState, useEffect } from "react";
import portfolioGym from "@/assets/portfolio-gym.png";
import portfolioSalon from "@/assets/portfolio-salon.png";
import portfolioRealEstate from "@/assets/portfolio-realestate.png";

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect for mobile
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoSlide);
  }, []);

  const projects = [
    {
      id: 1,
      category: "REAL ESTATE",
      title: "Prime Properties",
      challenge:
        "Outdated website failing to showcase properties effectively, resulting in low lead generation and poor user engagement.",
      solution:
        "Built a modern, mobile-responsive real estate portal with advanced property search, interactive virtual tours, lead capture system.",
      result:
        "47% increase in qualified property leads within the first quarter and reduced admin workload by 40%.",
      stats: "+47%",
      metric: "Lead Generation",
      url: "https://realestatesitedemo.netlify.app/",
    },
    {
      id: 2,
      category: "FITNESS & WELLNESS",
      title: "FitZone Gym",
      challenge:
        "Lacked online visibility and struggled to attract new members through digital channels.",
      solution:
        "Built a modern, mobile-responsive website with membership management, class schedules, and online booking system.",
      result:
        "65% increase in member signups within the first quarter and reduced admin workload by 40%.",
      stats: "+65%",
      metric: "Member Growth",
      url: "https://demogymwebs.netlify.app/",
    },
    {
      id: 3,
      category: "BEAUTY & LIFESTYLE",
      title: "Glamour Beauty Salon",
      challenge:
        "Manual appointment booking led to double bookings, missed opportunities, and frustrated customers.",
      solution:
        "Built an elegant website with integrated online booking system, service gallery, automated SMS reminders, loyalty program, and social media integration.",
      result:
        "40% increase in bookings and 100% elimination of double bookings, plus 35% increase in repeat customers.",
      stats: "+40%",
      metric: "Revenue Growth",
      url: "https://demosalonweb.netlify.app/",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Prepare content for StickyScroll component (desktop)
  const portfolioContent = projects.map((project) => ({
    title: project.category,
    description: `📋 The Challenge
${project.challenge}

✨ Our Solution
${project.solution}

🎯 The Result
${project.result}

📊 Impact: ${project.metric} ${project.stats}`,
    content: (
      <div className="w-full relative group align-middle overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm h-full">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full w-full block relative group cursor-pointer"
        >
          <img
            src={
              project.id === 1
                ? portfolioRealEstate
                : project.id === 2
                ? portfolioGym
                : portfolioSalon
            }
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent group-hover:via-background/30 transition-colors duration-300" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary text-primary-foreground rounded-full p-2">
              <ExternalLink className="h-5 w-5" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <h4 className="text-4xl font-bold text-white mb-2">{project.title}</h4>
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-primary/20 backdrop-blur-md border border-primary/30 rounded-lg px-6 py-3">
                <p className="text-white text-3xl font-bold">{project.stats}</p>
                <p className="text-white/80 text-sm">{project.metric}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    ),
  }));

  return (
    <section id="portfolio" className="py-6 sm:py-10 md:py-22 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Demo Projects Showcasing Our Expertise in Building High-Converting Websites for Local Businesses.
          </p>
        </div>

        {/* Desktop: Sticky Scroll Effect */}
        <div className="hidden lg:block">
          <StickyScroll content={portfolioContent} />
        </div>

        {/* Mobile: Carousel (entire card clickable) */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-full block group"
                >
                  <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-[24rem] sm:h-[28rem] md:h-[32rem] overflow-hidden">
                      <img
                        src={
                          project.id === 1
                            ? portfolioRealEstate
                            : project.id === 2
                            ? portfolioGym
                            : portfolioSalon
                        }
                        alt={project.title}
                        className="block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-primary text-xs font-semibold uppercase tracking-wider bg-background/80 px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>

                      <div>
                        <h4 className="text-sm font-semibold text-primary">📋 The Challenge</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-primary">✨ Our Solution</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-primary">🎯 The Result</h4>
                        <p className="text-foreground text-sm leading-relaxed font-medium">
                          {project.result}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">{project.metric}</p>
                          <p className="text-2xl font-bold gradient-text">{project.stats}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
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
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
