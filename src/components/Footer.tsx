import { Instagram, Facebook, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const quickLinks = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <footer className="bg-card py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="font-heading text-3xl text-primary">OLIYAD</span>
              <span className="font-heading text-3xl text-foreground">GYM</span>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Your fitness journey starts here. Join us for the best training and wellness programs.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-heading text-lg text-primary mb-2">Quick Links</h3>
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="font-heading text-lg text-primary mb-2">Contact</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone className="w-4 h-4" /> +251 900 000 000
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4" /> contact@oliyadgym.com
            </div>
            <div className="text-muted-foreground text-sm mt-1">
              Addis Ababa, Ethiopia
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="font-body text-muted-foreground text-sm text-center mt-10">
          © {currentYear} Oliyad Gym. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
