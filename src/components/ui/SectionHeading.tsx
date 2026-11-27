import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  badge?: string;
  /** Baris pertama putih gradient, baris kedua redup */
  lines: [string, string?];
  subtext?: string;
  align?: "center" | "left";
  /** Pakai true untuk h1 (hanya di Hero) */
  asH1?: boolean;
}

export function SectionHeading({
  badge,
  lines,
  subtext,
  align = "center",
  asH1 = false,
}: SectionHeadingProps) {
  const Tag = asH1 ? "h1" : "h2";
  const center = align === "center";
  return (
    <div className={cn("flex flex-col gap-5", center ? "items-center text-center" : "items-start text-left")}>
      {badge && <Badge dot>{badge}</Badge>}
      <Tag
        className={cn(
          "font-semibold tracking-[-0.035em] leading-[1.08]",
          asH1 ? "text-[44px] md:text-[84px] leading-[1.02] tracking-[-0.04em]" : "text-[32px] md:text-[56px]",
        )}
      >
        <span className="text-fade block">{lines[0]}</span>
        {lines[1] && <span className="block text-white/45">{lines[1]}</span>}
      </Tag>
      {subtext && (
        <p className="max-w-2xl text-[15px] leading-[1.65] text-muted md:text-[17px]">{subtext}</p>
      )}
    </div>
  );
}
