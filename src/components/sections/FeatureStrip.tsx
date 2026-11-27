import { Marquee } from "@/components/ui/Marquee";
import { features } from "@/data/features";

const featureNames = features.map((f) => f.title);

export function FeatureStrip() {
  return (
    <section aria-label="Daftar fitur utama" className="border-y border-line bg-bg py-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.14em] text-subtle">
          Semua yang kamu dapat
        </p>
      </div>
      <Marquee items={featureNames} />
    </section>
  );
}
