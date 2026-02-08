import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-card noise-overlay">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Start a </span>
            <span className="gradient-text">conversation</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16">
            Every great project begins with a single message. Share your vision, and let's explore what's possible together.
          </p>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm text-muted-foreground mb-2 group-focus-within:text-primary transition-colors"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 
                    focus:outline-none focus:border-primary focus:glow-primary transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm text-muted-foreground mb-2 group-focus-within:text-primary transition-colors"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 
                    focus:outline-none focus:border-primary focus:glow-primary transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm text-muted-foreground mb-2 group-focus-within:text-primary transition-colors"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={6}
                className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 
                  focus:outline-none focus:border-primary focus:glow-primary transition-all duration-300 resize-none"
                placeholder="Tell me about your project, your vision, your challenge..."
                required
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative px-10 py-4 bg-primary text-primary-foreground font-display font-medium tracking-wide 
                  transition-all duration-500 hover:glow-primary disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center gap-3"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isSubmitting ? "translate-x-2" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
