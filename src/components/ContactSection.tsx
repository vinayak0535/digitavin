import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactSection = () => {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const formY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const infoY = useTransform(scrollYProgress, [0, 1], [50, -100]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp integration
    const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message} Contact: ${formData.phone}, ${formData.email}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you shortly.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section ref={ref} id="contact" className="py-16 sm:py-20 md:py-22 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute inset-0 opacity-5 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-primary rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Let's Build Something That <span className="gradient-text">Brings You Clients</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Ready to transform your online presence? Get in touch and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            style={{ y: formY }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="p-6 sm:p-8 rounded-2xl bg-card border border-border w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            style={{ y: infoY }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground">digitavin@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+91 97024 90987</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">Taloje,Navi Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-border h-[300px]">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.503238641854!2d73.09843289999999!3d19.085566699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ea72f5aaf277%3A0xd5c1bcc87354ca1f!2sshree%20Datta%20Mandir%20Taloja(Bhoirpada)!5e0!3m2!1sen!2sin!4v1762785095971!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Digitavin Location - Navi Mumbai"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
