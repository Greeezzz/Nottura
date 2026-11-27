import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Kata mereka"
            lines={["Apa kata", "pengguna Nottura."]}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal key={t.id} delay={index * 0.08}>
              <GlassCard as="figure" className="flex h-full flex-col justify-between p-7">
                <blockquote className="text-[15px] leading-[1.65] text-fg/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-semibold text-fg">{t.name}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    {t.role}
                    {t.plan ? ` · Paket ${t.plan}` : ""}
                  </p>
                </figcaption>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
