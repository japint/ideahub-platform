'use client';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface RoadmapCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  index: number;
  isLast?: boolean;
  targetId: string;
  href?: string;
}

export const RoadmapCard = ({
  icon,
  title,
  subtitle,
  index,
  isLast = false,
  targetId,
  href,
}: RoadmapCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="flex items-center flex-1 min-w-0">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative flex flex-col items-center text-center p-6 lg:p-8
          bg-card rounded-lg border transition-all duration-300 ease-out
          w-full cursor-pointer group
          ${
            isHovered
              ? 'scale-[1.03] shadow-card-active border-accent z-10'
              : 'shadow-card border-border hover:shadow-card-hover'
          }
        `}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Icon */}
        <div
          className={`
          w-12 h-12 rounded-full flex items-center justify-center mb-4
          transition-all duration-300
          ${isHovered ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'}
        `}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-base lg:text-lg font-semibold text-foreground mb-1 transition-colors duration-300">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>

        {/* Learn more hint */}
        <span
          className={`
          text-xs font-medium flex items-center gap-1
          transition-all duration-300
          ${isHovered ? 'text-accent opacity-100 translate-y-0' : 'text-muted-foreground opacity-0 -translate-y-1'}
        `}
        >
          {href ? 'Explore' : 'Learn more'}
          {href ? <ArrowRight className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </span>

        {/* Bottom accent line */}
        <div
          className={`
          absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full
          transition-all duration-300 bg-accent
          ${isHovered ? 'w-16' : 'w-0'}
        `}
        />
      </button>

      {/* Connector arrow */}
      {!isLast && (
        <div className="hidden lg:flex items-center px-2 flex-shrink-0">
          <div className="w-8 h-px bg-border" />
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-border" />
        </div>
      )}
    </div>
  );
};
