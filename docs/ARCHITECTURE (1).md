# ARCHITECTURE.md — Nottura (React + TypeScript)

## 1. Struktur Folder

```
nottura/
├─ public/
│  ├─ favicon.svg
│  └─ og.png
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ index.css                 # token + utility (lihat DESIGN.md)
│  ├─ config.ts                 # kontak, feature flag
│  ├─ types.ts                  # semua tipe bersama
│  ├─ data/
│  │  ├─ plans.ts
│  │  ├─ features.ts
│  │  ├─ audiences.ts
│  │  ├─ steps.ts
│  │  ├─ usage-rules.ts
│  │  ├─ faqs.ts
│  │  ├─ testimonials.ts
│  │  └─ legal.ts               # T&C + disclaimer
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Badge.tsx
│  │  │  ├─ GlassCard.tsx
│  │  │  ├─ SectionHeading.tsx
│  │  │  ├─ Reveal.tsx          # wrapper animasi scroll
│  │  │  ├─ Marquee.tsx
│  │  │  └─ ChromeStar.tsx
│  │  ├─ layout/
│  │  │  ├─ Navbar.tsx
│  │  │  └─ Footer.tsx
│  │  └─ sections/
│  │     ├─ Hero.tsx
│  │     ├─ FeatureStrip.tsx
│  │     ├─ Features.tsx
│  │     ├─ Audience.tsx
│  │     ├─ Pricing.tsx
│  │     ├─ HowItWorks.tsx
│  │     ├─ Testimonials.tsx
│  │     ├─ Faq.tsx
│  │     └─ FinalCta.tsx
│  ├─ hooks/
│  │  ├─ useScrolled.ts
│  │  └─ useCountUp.ts
│  ├─ lib/
│  │  ├─ cn.ts
│  │  └─ format.ts              # formatRupiah
│  └─ pages/
│     └─ Terms.tsx              # /syarat-ketentuan
├─ .env
├─ tsconfig.json                # "strict": true
└─ vite.config.ts
```

## 2. `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
});
```

`tsconfig.app.json` tambahkan (TypeScript 7 sudah tidak mendukung `baseUrl`, jadi path pakai awalan `./`):

```json
{ "compilerOptions": { "strict": true, "paths": { "@/*": ["./src/*"] } } }
```

## 3. `src/types.ts`

```ts
import type { LucideIcon } from "lucide-react";

export type PlanId = "squad" | "shared" | "private";

export interface Plan {
  id: PlanId;
  name: string;
  eyebrow: string;            // label kecil di atas nama
  price: number;              // dalam rupiah, angka utama yang ditampilkan
  priceUnit: string;          // "/ orang / bulan"
  priceNote?: string;         // "Rp150.000 per grup per bulan"
  warning?: string;           // "Wajib 5 orang langsung pesan"
  highlighted?: boolean;      // true => kartu putih
  points: string[];
  cta: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  size: "lg" | "sm";
}

export interface Audience {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step { n: string; title: string; description: string }
export interface UsageRule { id: string; title: string; description: string }
export interface Faq { id: string; q: string; a: string }
export interface Testimonial { id: string; quote: string; name: string; role: string; plan?: PlanId }
export interface Stat { value: string; label: string }
```

## 4. `src/config.ts`

```ts
export const config = {
  brand: "NOTTURA",
  tagline: "Fitur Google Pro, harga yang masuk akal.",
  contactUrl: import.meta.env.VITE_CONTACT_URL ?? "https://wa.me/62XXXXXXXXXX",
  contactLabel: import.meta.env.VITE_CONTACT_LABEL ?? "WhatsApp Admin",
  showTestimonials: false, // true hanya jika testimoni asli sudah ada
} as const;

export const buildOrderUrl = (planName?: string) => {
  const text = planName
    ? `Halo Nottura, saya mau pesan paket ${planName}.`
    : "Halo Nottura, saya mau tanya soal Google AI Pro.";
  return `${config.contactUrl}?text=${encodeURIComponent(text)}`;
};
```

## 5. Contoh Data

### `src/data/plans.ts`

```ts
import type { Plan } from "@/types";

export const plans: Plan[] = [
  {
    id: "squad",
    name: "Squad",
    eyebrow: "Paling hemat",
    price: 30000,
    priceUnit: "/ orang / bulan",
    priceNote: "Rp150.000 per grup per bulan",
    warning: "Wajib 5 orang langsung pesan",
    points: [
      "Akses lewat Google Family Sharing",
      "Pakai akun Google pribadi",
      "Pas untuk mahasiswa dan budget terbatas",
      "Semua benefit Google AI Pro untuk anggota keluarga",
    ],
    cta: "Pesan Paket Squad",
  },
  {
    id: "shared",
    name: "Shared",
    eyebrow: "Pilihan fleksibel",
    price: 35000,
    priceUnit: "/ bulan",
    highlighted: true,
    points: [
      "Pakai akun Google pribadi",
      "Akses lewat Family Sharing",
      "Layanan pelanggan yang lebih personal",
      "Pas untuk yang ingin pelayanan lebih eksklusif",
    ],
    cta: "Pesan Paket Shared",
  },
  {
    id: "private",
    name: "Private",
    eyebrow: "Eksklusif",
    price: 175000,
    priceUnit: "/ bulan",
    points: [
      "Dedicated Family Group",
      "Satu pelanggan dalam satu grup khusus",
      "Tidak dicampur dengan pelanggan lain",
      "Pas untuk yang ingin grup eksklusif",
    ],
    cta: "Pesan Paket Private",
  },
];
```

### `src/data/features.ts`

```ts
import { Sparkles, Telescope, BookOpenText, Clapperboard, Rocket, Cloud } from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: "gemini", title: "Gemini Pro", size: "lg", icon: Sparkles,
    description: "Asisten AI untuk belajar, ngoding, dan nulis. Dipakai lewat akun masing-masing, dengan riwayat percakapan pribadi.",
    points: ["Bantu tugas kuliah dan jelaskan materi sulit", "Coding dan debugging", "Analisis dokumen, brainstorming, penulisan"],
  },
  {
    id: "deep-research", title: "Deep Research", size: "sm", icon: Telescope,
    description: "Riset mendalam untuk kebutuhan akademik.",
    points: ["Kumpulkan dan analisis banyak sumber", "Bantu susun laporan dan referensi"],
  },
  {
    id: "notebooklm", title: "NotebookLM", size: "sm", icon: BookOpenText,
    description: "Pahami materi dari banyak sumber sekaligus.",
    points: ["Rangkum jurnal dan PDF", "Buat catatan belajar"],
  },
  {
    id: "flow", title: "Google Flow", size: "sm", icon: Clapperboard,
    description: "Bikin video dengan bantuan teknologi Google.",
    points: ["Kembangkan ide visual", "Dukung produksi konten kreatif"],
  },
  {
    id: "antigravity", title: "Google Antigravity", size: "sm", icon: Rocket,
    description: "Partner coding dan pengembangan aplikasi.",
    points: ["Jalankan workflow coding agent", "Bantu debugging proyek software"],
  },
  {
    id: "storage", title: "Google One Storage", size: "lg", icon: Cloud,
    description: "Penyimpanan cloud hingga 5 TB untuk paket keluarga.",
    points: ["Terhubung ke Google Drive, Gmail, Google Photos", "Kapasitas dibagi dalam satu grup keluarga"],
  },
];
```

Data lain (`faqs`, `steps`, `usage-rules`, `audiences`, `legal`, `testimonials`) disalin langsung dari `CONTENT.md`.

## 6. Utility

### `src/lib/format.ts`

```ts
export const formatRupiah = (n: number) =>
  "Rp" + new Intl.NumberFormat("id-ID").format(n);
```

### `src/lib/cn.ts`

```ts
export const cn = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(" ");
```

### `src/components/ui/Reveal.tsx`

```tsx
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps { children: ReactNode; delay?: number; className?: string }

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

## 7. Spesifikasi Komponen

| Komponen | Props | Catatan |
|---|---|---|
| `Button` | `variant: "primary" \| "secondary" \| "ghost"`, `href?`, `onClick?`, `icon?` | Render `<a>` bila ada `href`, selain itu `<button>` |
| `Badge` | `children`, `dot?: boolean` | Pill kecil di atas heading |
| `GlassCard` | `as?`, `className`, `children` | Pakai class `.card-glass` dari DESIGN.md |
| `SectionHeading` | `badge`, `lines: [string, string?]`, `subtext?`, `align?` | Baris kedua otomatis redup (`text-white/45`) |
| `Marquee` | `items: string[]`, `speed?` | Duplikasi list 2x, pause saat hover |
| `ChromeStar` | `size?`, `className?` | SVG di DESIGN.md |
| `Navbar` | - | Pakai `useScrolled`, menu mobile fullscreen |
| `Footer` | - | Disclaimer + wordmark raksasa |

### Section

| Section | Id anchor | Data | Catatan layout |
|---|---|---|---|
| `Hero` | `#top` | `config` | 3 `ChromeStar` melayang, grid + ring background |
| `FeatureStrip` | - | `features` (judul saja) | `Marquee` |
| `Features` | `#fitur` | `features` | Bento 6 kolom, `lg` = `col-span-3`, `sm` = `col-span-2` |
| `Audience` | - | `audiences`, `stats` | 4 kartu + strip 3 stat |
| `Pricing` | `#paket` | `plans` | Kartu `highlighted` pakai `.card-solid`; urut Shared dulu di mobile |
| `HowItWorks` | `#cara-kerja` | `steps`, `usageRules` | 4 langkah + 3 kartu transparansi |
| `Testimonials` | - | `testimonials` | Render hanya jika `config.showTestimonials` |
| `Faq` | `#faq` | `faqs` | Accordion satu-buka-satu |
| `FinalCta` | - | `config` | Glow navy di belakang |

## 8. Susunan `App.tsx`

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { Features } from "@/components/sections/Features";
import { Audience } from "@/components/sections/Audience";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { config } from "@/config";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <Features />
        <Audience />
        <Pricing />
        <HowItWorks />
        {config.showTestimonials && <Testimonials />}
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
```

## 9. Performa & SEO

- Font: self-host via `@fontsource-variable/inter`, hanya subset `latin`
- Tidak ada gambar berat: semua visual SVG/CSS
- `<html lang="id">`, meta description, OG tags, `theme-color: #121212`
- Lazy-load section di bawah fold dengan `React.lazy` bila bundle > 200 KB
- Tambah JSON-LD `Organization` + `FAQPage` untuk rich result
- `prefers-reduced-motion` dihormati

## 10. Definition of Done

- [ ] Semua section tampil rapi di 360px, 768px, 1280px
- [ ] Tidak ada `any`, TypeScript strict lulus
- [ ] Semua CTA menuju `buildOrderUrl(...)`
- [ ] Disclaimer terlihat jelas di footer dan di bawah hero
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 95
- [ ] Navigasi keyboard dan screen reader aman
