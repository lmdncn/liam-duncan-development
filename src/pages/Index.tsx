import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedExperience from "@/components/FeaturedExperience";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { SEO_CONFIG, OG_IMAGES, FEATURE_FLAGS } from "@/lib/constants";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title={SEO_CONFIG.siteName}
        description="As a Full-Stack Developer, I turn complex problems into scalable systems and AI-driven solutions that drive real results."
        image={OG_IMAGES.resume}
        url="/"
      />
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        {FEATURE_FLAGS.showFeaturedSection && <FeaturedExperience />}
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
