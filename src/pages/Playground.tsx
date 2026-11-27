import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ChromeStar } from "@/components/ui/ChromeStar";
import { FooterWordmark } from "@/components/ui/FooterWordmark";
import { GlassCard } from "@/components/ui/GlassCard";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Halaman sementara untuk cek komponen UI: buka /#/playground */
export default function Playground() {
  return (
    <div className="min-h-screen bg-bg">
      <HeroBackground className="px-4 py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
          <div className="flex items-end gap-6">
            <ChromeStar size={48} className="animate-float" />
            <ChromeStar size={120} className="animate-float [animation-delay:1.2s]" />
            <ChromeStar size={72} className="animate-float [animation-delay:2.4s]" />
          </div>
          <SectionHeading
            asH1
            badge="Playground komponen"
            lines={["Fitur Google Pro,", "harga yang masuk akal."]}
            subtext="Halaman sementara untuk cek visual komponen Fase 2."
          />
        </div>
      </HeroBackground>

      <section className="mx-auto max-w-[1200px] space-y-10 px-4 py-20 sm:px-6">
        <SectionHeading align="left" badge="Kartu" lines={["Glass dan solid", "dua varian"]} />
        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-8">
            <h3 className="text-lg font-semibold">Glass card</h3>
            <p className="mt-2 text-muted">Gradient, highlight inset, kilau sudut, hover naik 3px.</p>
          </GlassCard>
          <GlassCard variant="solid" className="p-8">
            <h3 className="text-lg font-semibold">Solid card</h3>
            <p className="mt-2 opacity-70">Kartu putih highlight, teks #121212.</p>
          </GlassCard>
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge>Badge biasa</Badge>
          <Badge dot>Badge dengan titik</Badge>
        </div>
        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </section>

      <footer className="border-t border-line pt-10">
        <FooterWordmark />
      </footer>
    </div>
  );
}
