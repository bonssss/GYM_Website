import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pb-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Oliyad Gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Transform Your Body
          </p>

          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
            PUSH YOUR <br />
            <span className="text-primary">LIMITS</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10">
            Join Oliyad Gym and unlock your full potential. State-of-the-art
            equipment, expert trainers, and a community that pushes you to be
            your best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero">Start Free Trial</Button>
            <Button variant="heroOutline">View Programs</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
