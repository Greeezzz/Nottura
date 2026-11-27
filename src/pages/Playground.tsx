import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Audience } from "@/components/sections/Audience";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Halaman sementara untuk cek visual komponen Fase 2 & section Fase 3: buka /#/playground */
export default function Playground() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Audience />

        <section className="mx-auto max-w-[1200px] space-y-10 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            badge="Komponen Fase 2"
            lines={["Glass dan solid", "dua varian"]}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-8">
              <h3 className="text-lg font-semibold">Glass card</h3>
              <p className="mt-2 text-muted">
                Gradient, highlight inset, kilau sudut, hover naik 3px.
              </p>
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

        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
