import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { SEO_CONFIG, OG_IMAGES } from "@/lib/constants";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title={SEO_CONFIG.siteName}
        description="Full-Stack Developer & AI Agent Manager. Experienced in React, TypeScript, Node.js, and modern AI-powered development tools."
        image={OG_IMAGES.resume}
        url="/"
      />
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
