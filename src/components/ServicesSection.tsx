import { Globe, Search, MapPinned, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Get a website that actually brings clients.",
    features: [
      "Custom responsive design",
      "Fast loading speeds",
      "Mobile-first approach",
      "User-friendly CMS",
    ],
  },
  {
    icon: Search,
    title: "SEO Setup & Optimization",
    description: "Rank higher and appear in 'near me' searches.",
    features: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO audit",
      "Local SEO strategy",
    ],
  },
  {
    icon: MapPinned,
    title: "Google My Business Optimization",
    description: "Be visible when customers search locally.",
    features: [
      "GMB profile setup",
      "Review management",
      "Local citations",
      "Map pack ranking",
    ],
  },
  {
    icon: Instagram,
    title: "Instagram Growth Strategy",
    description: "Faceless Reels + Content Strategy for small businesses.",
    features: [
      "Content calendar",
      "Reel templates",
      "Engagement strategy",
      "Analytics tracking",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-22 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Transformation outcomes that drive real business growth
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:card-glow group w-full"
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
