import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/features";
import { cn } from "@/lib/cn";

export function Features() {
  return (
    <section id="fitur" className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Fitur"
            lines={["Semua tools Google Pro,", "dalam satu paket."]}
            subtext="Enam fitur premium yang biasanya dibeli terpisah, sekarang bisa kamu pakai bareng lewat Family Sharing."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {features.map((f, index) => {
            const Icon = f.icon;
            return (
              <Reveal
                key={f.id}
                delay={index * 0.08}
                className={cn(
                  f.size === "lg" ? "md:col-span-2 lg:col-span-3" : "lg:col-span-2",
                )}
              >
                <GlassCard as="article" className="flex h-full flex-col justify-between p-7 md:p-8">
                  <div>
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-white/[0.06]">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] md:text-[22px]">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-[1.65] text-muted md:text-[16px]">
                      {f.description}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-muted">
                    {f.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white/60"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted">
            Flow dan Antigravity memakai kuota bersama dalam grup. Detailnya ada di bagian{" "}
            <a
              href="#cara-kerja"
              className="text-fg underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              Cara Kerja
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
