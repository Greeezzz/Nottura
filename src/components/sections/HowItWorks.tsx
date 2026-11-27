import { Badge } from "@/components/ui/Badge";
import { EditorialBackdrop } from "@/components/ui/EditorialBackdrop";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/data/steps";
import { usageRules } from "@/data/usage-rules";

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="bg-[linear-gradient(180deg,#121212_0%,#090A33_50%,#121212_100%)] py-20 md:py-32"
    >
      <EditorialBackdrop variant="section" index="03" label="FLOW" />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Cara kerja"
            lines={["Mulai pakai dalam", "4 langkah."]}
          />
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08}>
              <GlassCard as="li" className="flex h-full flex-col p-7">
                <span className="text-fade text-3xl font-semibold tracking-[-0.04em]">
                  {step.n}
                </span>
                <h3 className="mt-5 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] md:text-[20px]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.65] text-muted">
                  {step.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge dot>Biar nggak salah paham</Badge>
              <h3 className="text-fade text-[26px] font-semibold leading-[1.12] tracking-[-0.03em] md:text-[36px]">
                Ini cara kerjanya.
              </h3>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {usageRules.map((rule, index) => (
              <Reveal key={rule.id} delay={index * 0.08}>
                <GlassCard as="article" className="flex h-full flex-col p-7">
                  <h4 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.02em]">
                    {rule.title}
                  </h4>
                  <p className="mt-2.5 text-[15px] leading-[1.65] text-muted">
                    {rule.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
