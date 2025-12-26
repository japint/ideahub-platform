import { ROADMAP_ITEMS } from '@/constants';
import { RoadmapCard } from './RoadmapCard';

export const RoadmapSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Strategic Framework
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            A Roadmap to Strategic Energy Management
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A phased approach to optimizing your organization's energy portfolio
          </p>
        </div>

        {/* Desktop roadmap - horizontal */}
        <div
          className="hidden lg:flex items-stretch justify-between gap-0"
          role="list"
          aria-label="Energy management roadmap steps"
        >
          {ROADMAP_ITEMS.map((item, index) => (
            <div key={item.targetId} role="listitem">
              <RoadmapCard
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                index={index}
                isLast={index === ROADMAP_ITEMS.length - 1}
                targetId={item.targetId}
                href={item.href}
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet roadmap - vertical */}
        <div
          className="lg:hidden flex flex-col gap-4"
          role="list"
          aria-label="Energy management roadmap steps"
        >
          {ROADMAP_ITEMS.map((item, index) => (
            <div key={item.targetId} className="relative" role="listitem">
              <RoadmapCard
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                index={index}
                isLast={true}
                targetId={item.targetId}
                href={item.href}
              />
              {/* Vertical connector */}
              {index < ROADMAP_ITEMS.length - 1 && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-4 flex flex-col items-center"
                  aria-hidden="true"
                >
                  <div className="w-px h-4 bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <p className="text-center text-sm text-muted-foreground mt-8 lg:mt-12">
          Click any stage to explore details
        </p>
      </div>
    </section>
  );
};
