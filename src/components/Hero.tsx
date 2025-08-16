import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, MapPin } from "lucide-react";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import { PERSONAL_INFO, EMAIL_TEMPLATES } from "@/lib/constants";

const Hero = () => {
  const { downloadResume } = useDownloadResume();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-primary-glow/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-primary-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <div className="text-xl md:text-2xl mb-8 opacity-90">
            {PERSONAL_INFO.title}
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-80">
            {PERSONAL_INFO.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-secondary shadow-glow transition-all duration-300 hover:scale-105"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-secondary shadow-glow transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = EMAIL_TEMPLATES.contact.getMailtoUrl()}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-secondary shadow-glow transition-all duration-300 hover:scale-105"
                onClick={() => window.open(PERSONAL_INFO.linkedin.url, '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          <div className="text-sm opacity-70">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              {PERSONAL_INFO.location}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;