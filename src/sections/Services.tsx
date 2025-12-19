import { Flame, Heart, Zap, Target, Waves, Mountain } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Strength Training",
    description:
      "Build muscle and increase power with our comprehensive weight training programs and equipment.",
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    description:
      "Boost your endurance with state-of-the-art cardio machines and high-energy group classes.",
  },
  {
    icon: Zap,
    title: "HIIT Classes",
    description:
      "Burn calories and build stamina with our intense interval training sessions led by expert coaches.",
  },
  {
    icon: Target,
    title: "Personal Training",
    description:
      "Get customized workout plans and one-on-one guidance from our certified personal trainers.",
  },
  {
    icon: Waves,
    title: "Yoga & Flexibility",
    description:
      "Improve mobility, reduce stress, and enhance recovery with our yoga and stretching programs.",
  },
  {
    icon: Mountain,
    title: "CrossFit",
    description:
      "Challenge yourself with varied functional movements performed at high intensity.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Our Services
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            WHAT WE <span className="text-primary">OFFER</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            From strength training to yoga, we provide everything you need to
            achieve your fitness goals under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, _index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
