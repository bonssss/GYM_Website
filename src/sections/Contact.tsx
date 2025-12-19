import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "123 Fitness Street, Addis Ababa, Ethiopia",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+251 911 123 456",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@oliyadgym.com",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Open 24/7",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding py-40" >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            CONTACT <span className="text-primary">US</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Ready to start your fitness journey? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-heading text-3xl text-foreground mb-6">
              Send Us A Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">
                  Phone
                </label>
                <Input
                  type="tel"
                  placeholder="+251 911 123 456"
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your fitness goals..."
                  className="bg-secondary/50 border-border focus:border-primary min-h-[120px]"
                />
              </div>
              <Button variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading text-xl text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card border border-border rounded-xl overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.63740379!2d38.6898!3d9.0107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(1) opacity(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oliyad Gym Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
