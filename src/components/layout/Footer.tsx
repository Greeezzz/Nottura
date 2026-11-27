import { FooterWordmark } from "@/components/ui/FooterWordmark";
import { GlassCard } from "@/components/ui/GlassCard";
import { buildOrderUrl, config } from "@/config";
import { disclaimers } from "@/data/legal";

const navLinks = [
  { label: "Paket", href: "#paket" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
] as const;

const legalLinks = [
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  { label: "Disclaimer", href: "#disclaimer" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg pt-16 md:pt-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div id="disclaimer">
          <GlassCard className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-fg">
              Disclaimer Penting
            </p>
            <ul className="mt-4 grid gap-2.5 text-sm leading-[1.65] text-muted sm:grid-cols-2">
              {disclaimers.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-white/60"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="mt-14 grid gap-10 border-t border-line pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em]"
            >
              <span aria-hidden="true">✦</span>
              {config.brand}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-[1.65] text-muted">{config.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-fg">
                Navigasi
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-fg">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-fg">Legal</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition-colors hover:text-fg">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-fg">
                Kontak
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>
                  <a
                    href={buildOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-fg"
                  >
                    {config.contactLabel}
                  </a>
                </li>
                <li>
                  <a
                    href={buildOrderUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-fg"
                  >
                    Tanya Admin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line py-6 text-xs text-muted">
          © 2026 Nottura. Semua hak dilindungi.
        </div>
      </div>

      <FooterWordmark />
    </footer>
  );
}
