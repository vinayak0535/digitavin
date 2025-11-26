import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();


 const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61584008123519",  label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: Instagram, href: "https://www.instagram.com/digitavin_/", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#515BD4]" },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ), 
      href: "https://wa.me/9702490987", target: "_blank" , 
      label: "WhatsApp",
      color: "hover:bg-[#25D366]"
    },
  ];

  return (
    // <footer className="bg-secondary/30 border-t border-border overflow-hidden">
    //   <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
    //     <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-12">
    //       {/* Brand Column */}
    //       <div className="lg:col-span-2 w-full">
    //         <a href="#home" className="flex items-center gap-2 mb-3 sm:mb-4">
    //           <img src={logo} alt="Digitavin Logo" className="w-40"  />
    //         </a>
    //         <p className="text-muted-foreground mb-6 max-w-sm">
    //           Transforming Ideas Into Digital Excellence. Elevate your business with innovative
    //           solutions that drive results.
    //         </p>
    //         <div className="flex gap-3">
    //           {socialLinks.map((social, index) => (
    //             <a
    //               key={index}
    //               href={social.href}
    //               aria-label={social.label}
    //               className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
    //             >
    //               <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
    //             </a>
    //           ))}
    //         </div>
    //       </div>

    //       {/* Services Column */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Services</h3>
    //         <ul className="space-y-3">
    //           {footerLinks.services.map((link, index) => (
    //             <li key={index}>
    //               <a
    //                 href={link.href}
    //                 className="text-muted-foreground hover:text-primary transition-colors"
    //               >
    //                 {link.name}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Support Column */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Support</h3>
    //         <ul className="space-y-3">
    //           {footerLinks.support.map((link, index) => (
    //             <li key={index}>
    //               <a
    //                 href={link.href}
    //                 className="text-muted-foreground hover:text-primary transition-colors"
    //               >
    //                 {link.name}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Company Column */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Company</h3>
    //         <ul className="space-y-3">
    //           {footerLinks.company.map((link, index) => (
    //             <li key={index}>
    //               <a
    //                 href={link.href}
    //                 className="text-muted-foreground hover:text-primary transition-colors"
    //               >
    //                 {link.name}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Bottom Bar */}
    //     <div className="pt-8 border-t border-border">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    //         <p className="text-muted-foreground text-sm">
    //           Copyright {currentYear} Digitavin. All rights reserved.
    //         </p>
    //         <div className="flex gap-6 text-sm">
    //           <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
    //             Term of use
    //           </a>
    //           <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
    //             Privacy Policy
    //           </a>
    //           <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
    //             Cookie Policy
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-background to-secondary/10" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo - Left */}
          <a 
            href="#home" 
            className="group transition-all duration-300 hover:scale-105 order-1 sm:order-1"
          >
            <img 
              src={logo} 
              alt="Digitavin Logo" 
              className="h-8 w-auto sm:h-10" 
            />
          </a>

          {/* Copyright - Center */}
          <p className="text-muted-foreground text-xs sm:text-sm text-center order-3 sm:order-2">
            Copyright © {currentYear} <span className="text-foreground">Digitavin</span>. All rights reserved.
          </p>

          {/* Social Icons - Right */}
          <div className="flex gap-3 order-2 sm:order-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm
                  border border-border/50 flex items-center justify-center  transition-all duration-300 hover:scale-110
                  hover:border-transparent group hover:shadow-lg
                  ${social.color}
                `}
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
