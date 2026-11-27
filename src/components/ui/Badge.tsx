import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  dot?: boolean;
  className?: string;
}

export function Badge({ children, dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1.5 text-xs font-medium tracking-[0.02em] text-white",
        className,
      )}
    >
      {dot && (
        <span aria-hidden="true" className="size-1.5 rounded-full bg-white animate-pulse" />
      )}
      {children}
    </span>
  );
}
