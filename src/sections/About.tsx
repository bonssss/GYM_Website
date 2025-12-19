import { Dumbbell, Users, Trophy, Clock } from "lucide-react";

const stats = [
  { icon: Dumbbell, value: "50+", label: "Equipment" },
  { icon: Users, value: "2000+", label: "Members" },
  { icon: Trophy, value: "15+", label: "Expert Trainers" },
  { icon: Clock, value: "24/7", label: "Access" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-4">
              About Us
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              MORE THAN JUST
              <br />
              <span className="text-primary">A GYM</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              At Oliyad Gym, we believe that fitness is a journey, not a
              destination. Our state-of-the-art facility is designed to inspire
              and motivate you to reach your full potential. Whether you're a
              beginner or a seasoned athlete, our expert trainers and supportive
              community will help you achieve your goals.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Founded with a passion for transforming lives, we've helped
              thousands of members build strength, confidence, and lasting
              healthy habits. Join us and become part of a family that
              celebrates every milestone.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-secondary/50 border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="font-heading text-4xl md:text-5xl text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-muted-foreground uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
