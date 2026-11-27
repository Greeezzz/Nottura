import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { audiences, stats } from "@/data/audiences";

export function Audience() {
  return (
    <section className="bg-[linear-gradient(180deg,#121212_0%,#090A33_50%,#121212_100%)] py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Untuk siapa"
            lines={["Cocok untuk yang", "butuh tools lengkap."]}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, index) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.id} delay={index * 0.08}>
                <GlassCard as="article" className="flex h-full flex-col p-7">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-white/[0.06]">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] md:text-[20px]">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[1.65] text-muted">{a.description}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.24} className="mt-8">
          <GlassCard className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center px-6 py-8 text-center"
              >
                <p className="text-fade text-[40px] font-semibold leading-none tracking-[-0.04em] md:text-[52px]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
