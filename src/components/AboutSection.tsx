import { Award, Users, Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/founder-vinayak.jpg";
import myImage from "@/assets/me.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "100+", label: "Projects Completed" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Heart, value: "100%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} id="about" className="py-16 sm:py-20 md:py-22 bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <motion.div 
          style={{ y: imageY }}
          className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl card-glow">
              <img
                src={myImage}
                alt="Vinayak Aher - Founder of Digitavin"
                className="h-300 w-200 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-all"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </motion.div>

          {/* Content Section */}
          <motion.div 
            style={{ y: contentY }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              Meet <span className="gradient-text">Digitavin</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Digitavin is led by <span className="text-foreground font-semibold">Vinayak Aher</span> — a passionate web
              designer helping Navi Mumbai's small businesses grow online with digital-first
              experiences.
            </p>

            <p className="text-muted-foreground mb-6">
              With years of experience in web design and digital marketing, we understand what it
              takes to create websites that not only look stunning but also drive real business
              results.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Local Expertise</h4>
                  <p className="text-muted-foreground">
                    Deep understanding of Navi Mumbai's business landscape and local market needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Results-Driven Approach</h4>
                  <p className="text-muted-foreground">
                    Every project is built with your business goals and ROI in mind.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Personalized Service</h4>
                  <p className="text-muted-foreground">
                    Direct communication with the founder - no middlemen, just quality work.
                  </p>
                </div>
              </div>
            </div>

<a href="#contact">
     <Button variant="gradient" size="lg" >
              Let's Work Together
            </Button>

</a>
         
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
