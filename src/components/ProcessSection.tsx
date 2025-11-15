import { MessageCircle, Palette, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals and target audience to create a tailored strategy.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description:
      "Our designers craft beautiful, conversion-focused layouts that drive engagement . ",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description:
      "We build fast, secure, and scalable websites using the latest technologies and best practices .",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "We launch your site and provide ongoing support to ensure continued success and growth.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-22 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Simple <span className="gradient-text">4-Step Process</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            From concept to launch, we handle everything to bring your vision to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}

              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:card-glow">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center font-bold text-primary-foreground shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
