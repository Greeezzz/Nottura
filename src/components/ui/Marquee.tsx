import { cn } from "@/lib/cn";

interface MarqueeProps {
  items: string[];
  /** durasi satu putaran, dalam detik (makin kecil makin cepat) */
  speed?: number;
  className?: string;
}

/** Daftar diduplikasi 2x agar loop mulus, pause saat hover, ada mask fade kiri-kanan. */
export function Marquee({ items, speed = 32, className }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-10 whitespace-nowrap text-lg font-medium text-muted"
        >
          {item}
          <span aria-hidden="true" className="text-subtle">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("marquee-mask group overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
