import { EditorialBackdrop } from "@/components/ui/EditorialBackdrop";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/features";
import type { Feature } from "@/types";

const primaryFeatures = features.filter((f) => f.size === "lg");
const secondaryFeatures = features.filter((f) => f.size === "sm");

function FeatureCard({ f, index }: { f: Feature; index: number }) {
  const Icon = f.icon;
  return (
    <Reveal delay={index * 0.08} className="h-full">
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
}

export function Features() {
  return (
    <section id="fitur" className="relative isolate overflow-hidden py-20 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_45%_at_80%_20%,rgb(9_10_51/0.75)_0%,transparent_70%)]"
      />

      <EditorialBackdrop variant="section" index="01" label="TOOLS" />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Fitur"
            lines={["Semua tools Google Pro,", "dalam satu paket."]}
            subtext="Enam fitur premium yang biasanya dibeli terpisah, sekarang bisa kamu pakai bareng lewat Family Sharing."
          />
        </Reveal>

        {/* Baris atas: 2 kartu utama (simetris 2 kolom penuh) */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {primaryFeatures.map((f, index) => (
            <FeatureCard key={f.id} f={f} index={index} />
          ))}
        </div>

        {/* Baris bawah: 4 kartu lainnya (1 kolom mobile, 2x2 tablet, 4 kolom penuh di desktop) */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryFeatures.map((f, index) => (
            <FeatureCard key={f.id} f={f} index={index + primaryFeatures.length} />
          ))}
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
