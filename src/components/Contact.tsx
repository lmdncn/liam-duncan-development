import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { Mail, Linkedin, MapPin, Download, Github } from "lucide-react";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import { PERSONAL_INFO, EMAIL_TEMPLATES, SITE_CONFIG } from "@/lib/constants";
import { trackEvent } from "@/utils/analytics";

const Contact = () => {
  const { downloadResume } = useDownloadResume();

  return (
    <Section id="contact">
      <Container>
        <div className="flex flex-col items-center mb-8">
          <div className="overflow-hidden rounded-lg border-2 border-border/50 shadow-card w-32 h-32">
            <img
              src={`${SITE_CONFIG.basePath}/liam-at-desk.jpeg`}
              alt="Liam Duncan"
              className="h-32 w-32 object-cover"
            />
          </div>
        </div>
        <SectionHeader
          title="Let's Connect"
          subtitle="Ready to discuss opportunities or collaborate on exciting projects"
        />

        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="shadow-card bg-gradient-card border-border/50 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">
                        LinkedIn
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {PERSONAL_INFO.linkedin.displayUrl}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm always interested in discussing new opportunities,
                    innovative projects, and ways to create impactful software
                    solutions. Feel free to reach out!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card bg-gradient-card border-border/50 animate-fade-in">
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
                  onClick={() => {
                    trackEvent('download_resume', 'engagement', 'pdf_download');
                    downloadResume();
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => {
                    trackEvent('contact_attempt', 'engagement', 'email');
                    window.location.href = EMAIL_TEMPLATES.contact.getMailtoUrl();
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => {
                    trackEvent('external_link', 'social', 'linkedin');
                    window.open(PERSONAL_INFO.linkedin.url, "_blank");
                  }}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  View LinkedIn Profile
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => {
                    trackEvent('external_link', 'social', 'github');
                    window.open("https://github.com/lmdncn", "_blank");
                  }}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                </Button>

                <div className="pt-4 border-t border-border/50">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Availability
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {PERSONAL_INFO.availability}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
