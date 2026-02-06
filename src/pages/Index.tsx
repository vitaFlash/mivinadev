import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Capabilities from "@/components/sections/Capabilities";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
