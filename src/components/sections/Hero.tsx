import { useEffect, useState } from "react";
import mivinaLogo from "@/assets/mivina-logo.svg";
import bacteriaVideo from "@/assets/videos/bacteria-neon.mp4";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Video background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={bacteriaVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={mivinaLogo}
            alt="MIVINA"
            className="h-16 md:h-24 mx-auto filter brightness-0 invert"
          />
        </div>

        {/* Tagline */}
        <h1
          className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-foreground">Where </span>
          <span className="text-primary text-glow-primary">code</span>
          <span className="text-foreground"> meets </span>
          <span className="text-secondary text-glow-secondary">canvas</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Digital experiences that feel alive. Crafted at the intersection of technology and artistry.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToWork}
          className={`group relative px-8 py-4 border border-primary/50 text-primary font-display font-medium tracking-wide 
            transition-all duration-500 hover:border-primary hover:glow-primary
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ transitionDelay: "700ms" }}
        >
          <span className="relative z-10">View Work</span>
          <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
