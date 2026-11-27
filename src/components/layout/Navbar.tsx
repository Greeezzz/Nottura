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

  // Kunci scroll body dan tutup dengan Escape saat menu mobile terbuka
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
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

      {/* Di luar <header>: backdrop-filter pada header membuat elemen fixed ikut terjebak di dalamnya */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-2 bg-bg/90 px-6 py-8 backdrop-blur-2xl md:hidden"
        >
          <nav aria-label="Navigasi mobile">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={close}
                    className="text-fade block border-b border-line py-4 text-3xl font-semibold tracking-tight"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            href={buildOrderUrl()}
            icon
            onClick={() => {
              trackOrderClick("navbar_mobile");
              close();
            }}
            className="mt-6 w-full"
          >
            Pesan Sekarang
          </Button>
        </div>
      )}
    </>
  );
}
