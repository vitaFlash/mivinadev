import { useState } from "react";
import flowersVideo from "@/assets/videos/flowers.mp4";
import vhsVideo from "@/assets/videos/vhs-art.mp4";
import bacteriaVideo from "@/assets/videos/bacteria-neon.mp4";

const projects = [
  {
    id: 1,
    title: "Necroblend",
    category: "E-commerce",
    video: bacteriaVideo,
    description: "Glitchwear for synthetic souls & candycore misfits",
    url: "https://necroblend.com/",
  },
  {
    id: 2,
    title: "Cyberheroin",
    category: "Digital Experience",
    video: flowersVideo,
    description: "Electronic music artist platform & identity",
    url: "https://cyberheroin.love/",
  },
  {
    id: 3,
    title: "AMMEC",
    category: "Web Application",
    video: vhsVideo,
    description: "Association promoting autonomy for people with physical disabilities",
    url: "https://www.ammec.org/",
  },
  {
    id: 4,
    title: "Fragments",
    category: "Web Application",
    video: bacteriaVideo,
    description: "Pieces that form a greater whole",
  },
  {
    id: 5,
    title: "Nocturne",
    category: "Digital Experience",
    video: flowersVideo,
    description: "Beauty found in darkness",
  },
  {
    id: 6,
    title: "Signal",
    category: "AI Integration",
    video: vhsVideo,
    description: "Where machines learn to create",
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 bg-background noise-overlay">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Recent </span>
            <span className="gradient-text">creations</span>
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative aspect-[4/5] bg-card overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video background on hover */}
              <div className="absolute inset-0 bg-muted">
                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  className={`w-full h-full object-cover transition-opacity duration-700 ${
                    hoveredId === project.id ? "opacity-50" : "opacity-20"
                  }`}
                  ref={(el) => {
                    if (el) {
                      if (hoveredId === project.id) {
                        el.play();
                      } else {
                        el.pause();
                      }
                    }
                  }}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-primary text-xs tracking-[0.2em] uppercase mb-2 transition-transform duration-500 group-hover:translate-x-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 transition-transform duration-500 group-hover:translate-x-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-700" />
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/30 group-hover:border-primary transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
