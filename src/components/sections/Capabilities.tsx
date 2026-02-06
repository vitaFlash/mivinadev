import { useState } from "react";
import { Globe, ShoppingCart, Sparkles } from "lucide-react";

const capabilities = [
  {
    id: "websites",
    icon: Globe,
    title: "Websites",
    tagline: "Digital presence, elevated",
    description:
      "From striking portfolios to immersive experiences. Each website is a canvas—designed to captivate, built to perform.",
    features: ["Custom Design", "Responsive Development", "Performance Optimization", "CMS Integration"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    tagline: "Where commerce meets craft",
    description:
      "Online stores that don't just sell—they tell stories. Seamless shopping experiences that convert visitors into devoted customers.",
    features: ["Shopify / Custom Builds", "Payment Integration", "Inventory Systems", "Analytics & Insights"],
  },
  {
    id: "ai",
    icon: Sparkles,
    title: "AI & Automation",
    tagline: "Intelligence, applied",
    description:
      "Harness the power of artificial intelligence. Automate the mundane, amplify the meaningful, and unlock new possibilities.",
    features: ["AI Chatbots", "Workflow Automation", "Data Analysis", "Custom Integrations"],
  },
];

const Capabilities = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="capabilities" className="py-32 bg-card noise-overlay">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="text-secondary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Capabilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">What </span>
            <span className="gradient-text">emerges</span>
            <span className="text-foreground"> here</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every project begins as a conversation. These are the forms that conversation might take.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            const isActive = activeId === capability.id;

            return (
              <div
                key={capability.id}
                className="group relative p-8 bg-background/50 border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setActiveId(capability.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center mb-6 border transition-all duration-500 ${
                    isActive
                      ? "border-primary bg-primary/10 glow-primary"
                      : "border-muted bg-muted/20"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 transition-colors duration-500 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p
                  className={`text-sm mb-4 transition-colors duration-500 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {capability.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {capability.description}
                </p>

                {/* Features */}
                <div
                  className={`space-y-2 transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-60"
                  }`}
                >
                  {capability.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-1 h-1 rounded-full transition-colors duration-500 ${
                          isActive ? "bg-primary" : "bg-muted-foreground"
                        }`}
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
