import { Button } from "@/components/ui/Button";
import { ChromeStar } from "@/components/ui/ChromeStar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildOrderUrl, config } from "@/config";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(9_10_51/0.95)_0%,transparent_75%)]"
      />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <GlassCard className="relative overflow-hidden px-6 py-16 text-center sm:px-12 md:py-24">
            <ChromeStar
              size={72}
              className="pointer-events-none absolute -top-4 right-8 hidden opacity-60 animate-float sm:block"
            />
            <SectionHeading
              lines={["Mulai pakai Google AI Pro", "hari ini."]}
              subtext={config.tagline}
            />
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button variant="primary" href={buildOrderUrl()} icon className="w-full sm:w-auto">
                Pesan Sekarang
              </Button>
              <Button variant="secondary" href={buildOrderUrl()} className="w-full sm:w-auto">
                Tanya Admin Dulu
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
