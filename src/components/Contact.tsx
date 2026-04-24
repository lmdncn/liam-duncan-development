import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Download,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import { PERSONAL_INFO, EMAIL_TEMPLATES, SITE_CONFIG } from "@/lib/constants";
import { formatIndex } from "@/lib/utils";
import { trackEvent } from "@/utils/analytics";

const SECTION_INDEX = 6;

const openMailto = () => {
  trackEvent("contact_attempt", "engagement", "email");
  window.location.href = EMAIL_TEMPLATES.contact.getMailtoUrl();
};

const openExternal = (label: string, url: string) => {
  trackEvent("external_link", "social", label);
  window.open(url, "_blank");
};

const CONTACT_CHANNELS = [
  {
    channel: "Email",
    value: PERSONAL_INFO.email,
    icon: Mail,
    onClick: openMailto,
  },
  {
    channel: "LinkedIn",
    value: PERSONAL_INFO.linkedin.displayUrl,
    icon: Linkedin,
    onClick: () => openExternal("linkedin", PERSONAL_INFO.linkedin.url),
  },
  {
    channel: "GitHub",
    value: PERSONAL_INFO.github.displayUrl,
    icon: Github,
    onClick: () => openExternal("github", PERSONAL_INFO.github.url),
  },
];

const Contact = () => {
  const { downloadResume } = useDownloadResume();

  return (
    <Section id="contact">
      <Container>
        <SectionHeader
          index={SECTION_INDEX}
          title="Let's Connect"
          subtitle="Open to new opportunities, collaborations, and interesting conversations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[380px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={`${SITE_CONFIG.basePath}/liam-at-desk.jpeg`}
                  alt="Liam Duncan at his desk"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 max-w-[380px]">
              <span className="relative flex items-center justify-center mt-[7px]">
                <span className="absolute w-3 h-3 rounded-full bg-emerald-400/25 animate-ping" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              <div className="min-w-0">
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-emerald-600 dark:text-emerald-400 mb-1">
                  Actively building
                </div>
                <div className="text-sm text-muted-foreground leading-snug">
                  {PERSONAL_INFO.availability}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <ul className="border-t border-border">
              {CONTACT_CHANNELS.map(
                ({ channel, value, icon: Icon, onClick }, i) => (
                  <li key={channel}>
                    <button
                      onClick={onClick}
                      className="group relative w-full grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8 py-5 md:py-6 border-b border-border text-left transition-colors duration-200 hover:border-primary/50"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[2px] bg-primary transition-all duration-300 group-hover:h-[calc(100%-1.5rem)]"
                      />
                      <span className="pl-1 md:pl-3 font-mono text-[11px] tracking-[0.25em] text-muted-foreground group-hover:text-primary transition-colors duration-200">
                        {formatIndex(i + 1)}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <Icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
                            {channel}
                          </span>
                        </div>
                        <div className="font-display text-lg md:text-2xl text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                          {value}
                        </div>
                      </div>

                      <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </li>
                ),
              )}
            </ul>

            <figure className="mt-10 relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-px bg-primary/40"
              />
              <span
                aria-hidden="true"
                className="absolute -left-[3px] top-0 w-[7px] h-[7px] rounded-full bg-primary"
              />
              <blockquote className="font-display text-xl md:text-[26px] leading-[1.2] text-foreground">
                Always interested in new opportunities, innovative projects,
                and ways to build software that's genuinely useful.
              </blockquote>
            </figure>

            <div className="mt-10">
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-sm font-medium"
                  onClick={() => {
                    trackEvent("download_resume", "engagement", "pdf_download");
                    downloadResume();
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary gap-2 rounded-sm font-medium"
                  onClick={openMailto}
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
