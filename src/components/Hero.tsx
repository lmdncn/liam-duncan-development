import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-primary-glow/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-primary-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Liam Duncan
          </h1>
          <div className="text-xl md:text-2xl mb-8 opacity-90">
            Software Engineer
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-80">
            Experienced software engineer with expertise in full-stack development, 
            payment systems, and team leadership. Passionate about building scalable 
            solutions that process millions of dollars in transactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-secondary shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <div className="flex gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          <div className="text-sm opacity-70">
            <div className="mb-2">liammduncan@protonmail.com</div>
            <div>+1 250-863-1803</div>
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