import { useRef } from "react";
import { MapPin, Rocket, Smartphone, Palette, Headphones } from "lucide-react";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    icon: MapPin,
    title: "Local Business Focus",
    description: "We understand Navi Mumbai's market and what works for local businesses.",
  },
  {
    icon: Rocket,
    title: "SEO-Optimized Websites",
    description: "Built to rank higher in search results and attract organic traffic.",
  },
  {
    icon: Smartphone,
    title: "Fast & Mobile-Friendly",
    description: "Lightning-fast loading on all devices for better user experience.",
  },
  {
    icon: Palette,
    title: "Personalized Branding",
    description: "Custom designs that reflect your unique brand identity.",
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    description: "We're here for you long after your website goes live.",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} id="why-choose" className="py-16 sm:py-20 md:py-22 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            style={{ y: contentY }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              We don't just design websites —{" "}
              <span className="gradient-text">we design digital growth.</span>
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Video/Dashboard */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl card-glow">
              <img
                src={analyticsDashboard}
                alt="Analytics Dashboard showing website growth"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
