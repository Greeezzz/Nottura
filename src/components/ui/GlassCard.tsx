import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps {
  as?: ElementType;
  /** "solid" = kartu putih highlight (.card-solid) */
  variant?: "glass" | "solid";
  className?: string;
  children: ReactNode;
}

export function GlassCard({
  as: Tag = "div",
  variant = "glass",
  className,
  children,
}: GlassCardProps) {
  return (
    <Tag className={cn(variant === "solid" ? "card-solid" : "card-glass", className)}>
      {children}
    </Tag>
  );
}
