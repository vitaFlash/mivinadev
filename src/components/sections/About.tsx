import vhsVideo from "@/assets/videos/vhs-art.mp4";

const About = () => {
  return (
    <section id="about" className="py-32 bg-background noise-overlay">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4">
              The Studio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              <span className="text-foreground">A space where </span>
              <br />
              <span className="gradient-text">possibility lives</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Technology and artistry converge here. Each project is a collaboration, a conversation, a new possibility waiting to unfold.
              </p>
              <p>
                What emerges is never quite what was expected—it's something more. The digital becomes tangible, the functional becomes beautiful, and the ordinary transforms into the extraordinary.
              </p>
              <p>
                This is not about following trends or meeting expectations. It's about pushing boundaries, questioning assumptions, and creating experiences that linger in memory long after the screen goes dark.
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: "5+", label: "Years" },
                { value: "50+", label: "Projects" },
                { value: "∞", label: "Possibilities" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden">
              {/* Video with artistic treatment */}
              <video
                src={vhsVideo}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover opacity-60"
              />

              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/20" />

              {/* Frame accent */}
              <div className="absolute inset-4 border border-primary/30" />
              <div className="absolute inset-8 border border-secondary/20" />

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-secondary" />
            </div>

            {/* Floating element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
