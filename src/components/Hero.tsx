import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, MapPin, ArrowRight, Linkedin, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import { PERSONAL_INFO } from "@/lib/constants";

// Rotating text options
const ROTATING_ROLES = [
  "Engineer",
  "Builder",
  "AI Explorer",
  "Problem Solver",
  "System Architect",
];

const Hero = () => {
  const { downloadResume } = useDownloadResume();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
        setIsTyping(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="w-full h-full bg-gradient-to-br from-primary-glow/20 via-transparent to-accent-glow/10"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-16 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/8 rotate-45 blur-lg animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-primary-foreground">
          {/* Name with stagger animation */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            {/* Rotating role with typewriter effect */}
            <div className="text-2xl md:text-3xl mb-8 flex items-center justify-center gap-3 min-h-[3rem]">
              <span className="opacity-90 font-medium">Software</span>
              <span
                className={`font-bold text-accent transition-all duration-300 ${
                  isTyping ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                {ROTATING_ROLES[currentRoleIndex]}
              </span>
              <span
                className={`w-1 h-8 bg-accent animate-pulse ${
                  isTyping ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </div>
          </div>

          {/* Main headline */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 tracking-tight leading-tight max-w-4xl mx-auto opacity-90">
              Building scalable, AI-powered web applications
            </h2>
          </div>

          {/* Subheadline */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 font-medium">
              I build scalable systems that help teams accelerate, scale, and
              harness AI.
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="flex flex-col gap-4 justify-center items-center mb-12">
              {/* Desktop & Tablet: All buttons in one row, then main CTA wraps */}
              <div className="hidden sm:flex flex-wrap gap-3 justify-center lg:max-w-none max-w-lg">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 shadow-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <Link to="/blog">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Blog
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 shadow-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  onClick={downloadResume}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 shadow-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  onClick={() =>
                    window.open(PERSONAL_INFO.linkedin.url, "_blank")
                  }
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect
                </Button>
                <Button
                  size="lg"
                  className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold px-8 py-4 text-lg"
                  onClick={scrollToExperience}
                >
                  More About Me
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Mobile: Custom stacking - Blog top, Resume/Connect middle, Main CTA bottom */}
              <div className="flex flex-col gap-3 items-center sm:hidden">
                {/* First row: Blog */}
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 shadow-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <Link to="/blog">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Blog
                  </Link>
                </Button>

                {/* Second row: Resume and Connect */}
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 shadow-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    onClick={downloadResume}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 shadow-glow transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    onClick={() =>
                      window.open(PERSONAL_INFO.linkedin.url, "_blank")
                    }
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect
                  </Button>
                </div>

                {/* Third row: Main CTA */}
                <Button
                  size="lg"
                  className="group bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold px-8 py-4 text-lg"
                  onClick={scrollToExperience}
                >
                  More About Me
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Location with enhanced styling */}
          <div className="animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <div className="text-sm opacity-70 flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="font-medium">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center backdrop-blur-sm bg-primary-foreground/5">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
