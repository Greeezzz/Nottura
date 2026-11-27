import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Footer } from "@/components/layout/Footer";
import { config } from "@/config";
import { terms } from "@/data/legal";

export function Terms() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-50 border-b border-line bg-bg/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em]"
          >
            <span aria-hidden="true">✦</span>
            {config.brand}
          </a>
          <Button variant="secondary" href="/">
            <ArrowLeft size={16} aria-hidden="true" />
            Kembali ke Beranda
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          asH1
          align="left"
          badge="Legal"
          lines={["Syarat & Ketentuan", "layanan Nottura."]}
          subtext="Harap pahami ketentuan di bawah ini sebelum melakukan pemesanan paket Google AI Pro lewat Family Sharing."
        />

        <GlassCard className="mt-12 p-6 sm:p-10">
          <ol className="space-y-4 text-[15px] leading-[1.65] text-muted md:text-base">
            {terms.map((item, idx) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-line bg-white/5 text-xs font-semibold text-fg">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </GlassCard>
      </main>

      <Footer />
    </div>
  );
}
