import { Button } from "@/components/ui/Button";
import { ChromeStar } from "@/components/ui/ChromeStar";
import { EditorialBackdrop } from "@/components/ui/EditorialBackdrop";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const targetAudiences = ["Mahasiswa", "Pelajar", "Developer", "Content Creator"] as const;

export function Hero() {
  return (
    <section id="top">
      <HeroBackground className="pt-24 pb-20 md:pt-28 md:pb-32">
        <EditorialBackdrop variant="hero" />
        <ChromeStar
          size={200}
          className="pointer-events-none absolute -left-8 top-2 origin-center -rotate-12 scale-[0.55] opacity-65 animate-float md:left-[2%] md:top-8 md:scale-100 md:opacity-80"
        />
        <ChromeStar
          size={130}
          className="pointer-events-none absolute -right-4 top-6 origin-center rotate-12 scale-[0.55] opacity-60 animate-float [animation-delay:1.2s] md:right-[4%] md:top-10 md:scale-100 md:opacity-80"
        />
        <ChromeStar
          size={76}
          orbital={false}
          className="pointer-events-none absolute right-[8%] bottom-14 rotate-6 scale-75 opacity-70 animate-float [animation-delay:2.4s] md:right-[14%] md:bottom-24 md:scale-100"
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              asH1
              badge="Google AI Pro lewat Family Sharing"
              lines={["Fitur Google Pro,", "harga yang masuk akal."]}
              subtext="Satu paket, banyak fitur Google premium dengan harga yang lebih ramah di kantong. Nikmati Gemini Pro, NotebookLM, Deep Research, Google Flow, Antigravity, dan penyimpanan cloud."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button variant="primary" href="#paket" icon className="w-full sm:w-auto">
                Lihat Paket
              </Button>
              <Button variant="secondary" href="#cara-kerja" className="w-full sm:w-auto">
                Cara Kerja
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ul
              aria-label="Target pengguna"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              {targetAudiences.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-white/[0.04] px-3.5 py-1 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center text-xs text-muted">
              Nottura adalah layanan independen dan bukan mitra resmi Google.
            </p>
          </Reveal>
        </div>
      </HeroBackground>
    </section>
  );
}
