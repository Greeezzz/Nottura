import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const rings = [900, 1300, 1700];

/** Grid halus + glow navy + ring konsentris. Bungkus konten hero di dalamnya. */
export function HeroBackground({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div className={cn("hero-bg relative isolate overflow-hidden", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {rings.map((d) => (
          <span
            key={d}
            className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
            style={{ width: d, height: d }}
          />
        ))}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
