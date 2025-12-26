export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-background border border-border text-sm text-muted-foreground mb-6">
          Enterprise Energy Services
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-6 leading-tight tracking-tight">
          Strategic Energy
          <br />
          <span className="text-muted-foreground">Management</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Transform your facility's energy performance through a comprehensive, phased approach to
          optimization and sustainability.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Explore the framework below</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
