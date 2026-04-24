import { Download, MapPin, ArrowRight } from "lucide-react";
import { useDownloadResume } from "@/hooks/useDownloadResume";
import { useHeroData } from "@/hooks/useHeroData";
import { PERSONAL_INFO } from "@/lib/constants";
import { scrollToAnchor } from "@/lib/utils";
import { RotatingText } from "@/components/ui/rotating-text";
import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/ui/error-state";

const EMPTY_ROLES: string[] = [];

const DOT_GRID_STYLE: React.CSSProperties = {
  backgroundImage: "radial-gradient(circle, hsl(218 14% 72% / 0.5) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  maskImage: "radial-gradient(ellipse 65% 70% at 85% 20%, black 10%, transparent 75%)",
  WebkitMaskImage: "radial-gradient(ellipse 65% 70% at 85% 20%, black 10%, transparent 75%)",
};

const FINE_GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(hsl(var(--border) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.6) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  maskImage: "radial-gradient(ellipse 50% 60% at 90% 25%, black 0%, transparent 70%)",
  WebkitMaskImage: "radial-gradient(ellipse 50% 60% at 90% 25%, black 0%, transparent 70%)",
  animation: "heroGridDrift 24s linear infinite",
};

const GLOW_STYLE: React.CSSProperties = {
  background:
    "radial-gradient(circle at 82% 22%, hsl(var(--primary) / 0.22), transparent 55%)",
  animation: "heroGlow 9s ease-in-out infinite",
};

const scrollToWork = () => scrollToAnchor("#experience");

const Hero = () => {
  const { downloadResume } = useDownloadResume();
  const { data: heroData, error, refetch } = useHeroData();

  if (error) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        <ErrorState message="Failed to load" onRetry={() => refetch()} />
      </section>
    );
  }

  const rotatingRoles = heroData?.rotatingRoles ?? EMPTY_ROLES;
  const subheadline = heroData?.subheadline ?? "";

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={FINE_GRID_STYLE}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={DOT_GRID_STYLE}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={GLOW_STYLE}
        aria-hidden
      />

      <svg
        className="absolute top-0 right-0 pointer-events-none select-none hidden md:block"
        width="340"
        height="260"
        viewBox="0 0 340 260"
        fill="none"
        aria-hidden
      >
        <g stroke="hsl(var(--primary) / 0.35)" strokeWidth="1">
          <path d="M60 200 L140 140 L220 160 L300 80" fill="none" />
          <path d="M100 230 L180 180 L260 120" fill="none" strokeDasharray="2 4" />
        </g>
        <g fill="hsl(var(--primary))">
          <circle cx="60" cy="200" r="3" style={{ animation: "heroNodePulse 3.2s ease-in-out infinite" }} />
          <circle cx="140" cy="140" r="3" style={{ animation: "heroNodePulse 3.2s ease-in-out 0.4s infinite" }} />
          <circle cx="220" cy="160" r="3" style={{ animation: "heroNodePulse 3.2s ease-in-out 0.8s infinite" }} />
          <circle cx="300" cy="80" r="3.5" style={{ animation: "heroNodePulse 3.2s ease-in-out 1.2s infinite" }} />
          <circle cx="180" cy="180" r="2" style={{ animation: "heroNodePulse 3.2s ease-in-out 0.6s infinite" }} />
          <circle cx="260" cy="120" r="2" style={{ animation: "heroNodePulse 3.2s ease-in-out 1s infinite" }} />
        </g>
      </svg>

      <div
        className="absolute bottom-10 right-8 hidden lg:flex flex-col items-start gap-1 font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/50 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
        aria-hidden
      >
        <span>{"● claude code · session active"}</span>
        <span className="text-primary/60">{"● building with intent"}</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 pt-28 pb-24 w-full">
        <div
          className="flex items-center gap-2 mb-10 animate-fade-in"
          style={{ animationDelay: "0.05s" }}
        >
          <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary">
            {PERSONAL_INFO.location}
          </span>
        </div>

        <h1
          className="font-display font-bold text-foreground leading-[0.9] tracking-tight mb-8 animate-fade-in"
          style={{
            fontSize: "clamp(3rem, 8.5vw, 9rem)",
            animationDelay: "0.12s",
          }}
        >
          Liam
          <br />
          Duncan
        </h1>

        <div
          className="flex items-center gap-5 mb-8 animate-fade-in"
          style={{ animationDelay: "0.22s" }}
        >
          <div className="h-px w-8 bg-border flex-shrink-0" />
          <RotatingText
            prefix="Software"
            options={rotatingRoles}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/55"
          />
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-light animate-fade-in"
          style={{ animationDelay: "0.32s" }}
        >
          {subheadline}
        </p>

        <div
          className="flex flex-wrap items-center gap-3 animate-fade-in"
          style={{ animationDelay: "0.42s" }}
        >
          <Button
            onClick={scrollToWork}
            className="group bg-primary text-primary-foreground hover:bg-primary/90 font-medium gap-2 rounded-sm"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
          <Button
            variant="outline"
            onClick={downloadResume}
            className="border-border text-foreground hover:bg-secondary gap-2 rounded-sm"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToWork}
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 animate-fade-in group"
        style={{ animationDelay: "0.6s" }}
      >
        <span className="font-mono text-[10px] tracking-[0.32em] uppercase">
          Scroll
        </span>
        <span className="relative block h-10 w-px bg-border overflow-hidden">
          <span
            className="absolute inset-0 block bg-primary"
            style={{ animation: "scrollLine 6s ease-in-out infinite" }}
          />
        </span>
      </button>
    </section>
  );
};

export default Hero;
