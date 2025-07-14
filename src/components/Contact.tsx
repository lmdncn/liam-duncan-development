import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">liammduncan@protonmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+1 250-863-1803</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">linkedin.com/in/liamduncan</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm always interested in discussing new opportunities, 
                    innovative projects, and ways to create impactful software solutions. 
                    Feel free to reach out!
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Download className="h-6 w-6 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-[1.02]"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume PDF
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-[1.02]"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  View LinkedIn Profile
                </Button>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Availability
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Open to remote opportunities worldwide and on-site positions. 
                      Currently exploring new challenges in software engineering and team leadership.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;