import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildOrderUrl, config } from "@/config";
import { useScrolled } from "@/hooks/useScrolled";
import { trackOrderClick } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const links = [
  { label: "Paket", href: "#paket" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Navbar() {
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);

  // Tutup dropdown popup dengan Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-bg/60 backdrop-blur-xl transition-colors duration-300",
          scrolled || open ? "border-line" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            onClick={close}
            className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em]"
          >
            <span aria-hidden="true">✦</span>
            {config.brand}
          </a>

          <nav aria-label="Navigasi utama" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm text-muted">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button
                href={buildOrderUrl()}
                icon
                onClick={() => trackOrderClick("navbar_desktop")}
              >
                Pesan Sekarang
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full md:hidden"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown popup mobile di kanan atas dengan backdrop tipis */}
      {open && (
        <>
          <div
            aria-hidden="true"
            onClick={close}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
          />
          <div
            id="mobile-menu"
            className="fixed right-4 top-[72px] z-50 w-[min(280px,calc(100vw-2rem))] rounded-2xl border border-line-strong bg-[#18181c]/95 p-3 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.85)] backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Navigasi mobile">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={close}
                      className="flex min-h-11 items-center rounded-xl px-3.5 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-fg"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-2 border-t border-line pt-3">
              <Button
                href={buildOrderUrl()}
                icon
                onClick={() => {
                  trackOrderClick("navbar_mobile");
                  close();
                }}
                className="w-full"
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
