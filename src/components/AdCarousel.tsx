import * as React from "react";
import { cn } from "@/lib/utils";

export interface AdItem {
  title: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface AdCarouselProps {
  items: AdItem[];
  rotationMs?: number;
  visibleCount?: number;
  pauseOnHover?: boolean;
  className?: string;
  cardClassName?: string;
}

/**
 * Single-height advertisement carousel with continuous looping.
 * - Uniform card height, responsive widths
 * - Step animation: slides one card left per rotation
 * - Accessible pause/play control and keyboard focus
 */
export function AdCarousel({
  items,
  rotationMs = 3000,
  visibleCount = 3,
  pauseOnHover = true,
  className,
  cardClassName,
}: AdCarouselProps) {
  const [data, setData] = React.useState<AdItem[]>(items);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const prefersReduced = React.useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  React.useEffect(() => setData(items), [items]);

  React.useEffect(() => {
    if (prefersReduced) return;
    if (paused) return;
    const id = setInterval(() => {
      if (isAnimating) return;
      setIsAnimating(true);
    }, rotationMs);
    return () => clearInterval(id);
  }, [rotationMs, paused, isAnimating, prefersReduced]);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (!isAnimating) return;
    el.style.transition = "transform 600ms ease";
    el.style.transform = "translateX(calc(-100% / var(--visible)))";
    const handleEnd = () => {
      el.style.transition = "none";
      el.style.transform = "translateX(0)";
      setData((prev) => {
        if (prev.length === 0) return prev;
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setIsAnimating(false);
    };
    el.addEventListener("transitionend", handleEnd, { once: true });
    return () => el.removeEventListener("transitionend", handleEnd);
  }, [isAnimating]);

  const onMouseEnter = () => pauseOnHover && setPaused(true);
  const onMouseLeave = () => pauseOnHover && setPaused(false);

  return (
    <section
      className={cn("relative", className)}
      aria-label="Advertisement carousel"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          style={{
            // @ts-expect-error CSS var number
            "--visible": visibleCount,
            willChange: "transform",
          }}
          className="flex gap-4"
        >
          {data.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className={cn(
                "flex-1 basis-[calc(100%/var(--visible))]",
                "h-28 md:h-32", // single-height constraint
                "rounded-xl border border-border bg-card/80 shadow-sm",
                "px-4 py-4 flex items-center",
                cardClassName,
              )}
            >
              {item.icon ? (
                <div className="mr-3 shrink-0 text-primary">{item.icon}</div>
              ) : null}
              <div className="min-w-0">
                <div className="text-sm md:text-base font-semibold text-foreground truncate">
                  {item.href ? (
                    <a href={item.href} className="hover:underline focus:outline-none focus:ring-2 focus:ring-ring">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </div>
                {item.description ? (
                  <div className="mt-2 text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className={cn(
            "w-9 h-9 rounded-full border border-border bg-background text-foreground",
            "flex items-center justify-center hover:bg-muted transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-ring",
          )}
          aria-label={paused ? "Play carousel" : "Pause carousel"}
        >
          {paused ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zm8 0h4v14h-4z" /></svg>
          )}
        </button>
      </div>
    </section>
  );
}

export default AdCarousel;