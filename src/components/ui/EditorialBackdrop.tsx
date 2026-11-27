import { cn } from "@/lib/cn";

type EditorialBackdropProps =
  | { variant: "hero"; className?: string }
  | { variant: "section"; index: string; label: string; className?: string }
  | { variant: "cta"; className?: string };

function Crosshair({ className }: { className?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
      className={cn("text-white/25", className)}
    >
      <path d="M5.5 0V11M0 5.5H11" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/**
 * Elemen grafis abstrak editorial (crosshair, micro-index, dan aksen geometris minimal)
 * dengan opacity terkendali agar landing page tetap bersih dan mudah dibaca.
 */
export function EditorialBackdrop(props: EditorialBackdropProps) {
  if (props.variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden select-none",
          props.className,
        )}
      >
        {/* Crosshair sudut area hero */}
        <Crosshair className="absolute left-6 top-8 hidden md:block" />
        <Crosshair className="absolute right-6 top-8 hidden md:block" />
        <Crosshair className="absolute bottom-10 left-6 hidden md:block" />
        <Crosshair className="absolute bottom-10 right-6 hidden md:block" />

        {/* Micro-label editorial vertikal di tepi desktop */}
        <span className="absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left font-mono text-[10px] tracking-[0.26em] text-white/25 xl:block">
          SYS // 00 — FAMILY SHARING
        </span>
        <span className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right font-mono text-[10px] tracking-[0.26em] text-white/25 xl:block">
          NOTTURA.AI // 2026
        </span>

        {/* Aksen geometris minimal sisi kiri (segitiga + garis tipis) */}
        <svg
          width="110"
          height="64"
          viewBox="0 0 110 64"
          fill="none"
          className="absolute bottom-16 left-10 hidden opacity-35 lg:block"
        >
          <path d="M0 14L14 0V14H0Z" fill="white" fillOpacity="0.4" />
          <path d="M18 14L32 0V14H18Z" fill="white" fillOpacity="0.22" />
          <path d="M36 14L50 0V14H36Z" fill="white" fillOpacity="0.12" />
          <path
            d="M0 38C28 38 42 54 96 54"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="0.9"
          />
          <circle cx="96" cy="54" r="2.2" fill="white" fillOpacity="0.4" />
        </svg>

        {/* Aksen geometris minimal sisi kanan (dot matrix 3x3 + garis potong) */}
        <svg
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
          className="absolute bottom-12 right-10 hidden opacity-35 lg:block"
        >
          {[16, 36, 56].map((cx) =>
            [16, 36, 56].map((cy) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="3.2"
                fill="white"
                fillOpacity={cx === 36 && cy === 36 ? "0.45" : "0.14"}
              />
            )),
          )}
          <line
            x1="4"
            y1="74"
            x2="78"
            y2="74"
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="0.8"
            strokeDasharray="3 4"
          />
        </svg>
      </div>
    );
  }

  if (props.variant === "section") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none mx-auto mb-8 flex max-w-[1200px] items-center justify-between gap-4 px-4 select-none sm:px-6 lg:px-8",
          props.className,
        )}
      >
        <div className="flex items-center gap-2.5">
          <Crosshair />
          <span className="font-mono text-[10px] tracking-[0.24em] text-white/30">
            // {props.index} {props.label}
          </span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
        <Crosshair className="hidden sm:block" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 select-none", props.className)}
    >
      <Crosshair className="absolute left-5 top-5 text-white/30" />
      <Crosshair className="absolute right-5 top-5 text-white/30" />
      <Crosshair className="absolute bottom-5 left-5 text-white/30" />
      <Crosshair className="absolute bottom-5 right-5 text-white/30" />
      <span className="absolute bottom-5 left-12 hidden font-mono text-[10px] tracking-[0.22em] text-white/25 sm:block">
        READY // FAMILY SHARING
      </span>
      <svg
        width="56"
        height="36"
        viewBox="0 0 56 36"
        fill="none"
        className="absolute bottom-4 right-12 hidden opacity-35 sm:block"
      >
        {[8, 22, 36, 50].map((cx) =>
          [8, 22].map((cy) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.4" fill="white" fillOpacity="0.45" />
          )),
        )}
      </svg>
    </div>
  );
}
