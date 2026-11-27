# DESIGN.md — Nottura Design System

Referensi: landing page SEO dark glossy (hero dengan bintang chrome, kartu bento kaca, heading gradient fade, pricing dengan satu kartu putih sebagai highlight, footer dengan wordmark raksasa).

---

## 1. Warna

| Token | Hex | Pakai untuk |
|---|---|---|
| `--bg` | `#121212` | Background utama halaman |
| `--navy` | `#090A33` | Glow hero, section selang-seling, gradient kartu |
| `--fg` | `#FFFFFF` | Teks utama, tombol primer, kartu highlight |
| `--fg-muted` | `rgba(255,255,255,0.62)` | Paragraf, subtext |
| `--fg-subtle` | `rgba(255,255,255,0.38)` | Label kecil, caption |
| `--border` | `rgba(255,255,255,0.10)` | Border kartu |
| `--border-strong` | `rgba(255,255,255,0.18)` | Border hover |
| `--card-top` | `rgba(255,255,255,0.07)` | Ujung atas gradient kartu |
| `--card-bottom` | `rgba(255,255,255,0.02)` | Ujung bawah gradient kartu |

Aturan: **tidak ada warna lain.** Hierarki dibuat lewat opacity putih, bukan warna baru.
Teks di atas kartu putih memakai `#121212`.

### `src/index.css` (Tailwind v4)

```css
@import "tailwindcss";
@import "@fontsource-variable/inter";

@theme {
  --color-bg: #121212;
  --color-navy: #090A33;
  --color-fg: #ffffff;
  --color-muted: rgb(255 255 255 / 0.62);
  --color-subtle: rgb(255 255 255 / 0.38);
  --color-line: rgb(255 255 255 / 0.10);
  --color-line-strong: rgb(255 255 255 / 0.18);

  --font-sans: "Inter Variable", ui-sans-serif, system-ui, sans-serif;

  --radius-card: 20px;
  --radius-pill: 999px;

  --animate-float: float 7s ease-in-out infinite;
  --animate-marquee: marquee 32s linear infinite;
  --animate-shine: shine 3.5s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-14px) rotate(4deg); }
  }
  @keyframes marquee {
    to { transform: translateX(-50%); }
  }
  @keyframes shine {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
}

html { background: var(--color-bg); color: var(--color-fg); scroll-behavior: smooth; }
body { font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
```

---

## 2. Tipografi

Font: **Inter Variable** (alternatif: Geist).

| Peran | Ukuran (mobile → desktop) | Weight | Tracking | Line-height |
|---|---|---|---|---|
| Hero H1 | 44px → 84px | 600 | -0.04em | 1.02 |
| Section H2 | 32px → 56px | 600 | -0.035em | 1.08 |
| Card title | 18px → 22px | 600 | -0.02em | 1.25 |
| Body | 15px → 17px | 400 | 0 | 1.65 |
| Label / badge | 12px | 500 | 0.02em | 1 |
| Harga besar | 44px → 56px | 600 | -0.04em | 1 |

Heading **selalu pakai gradient fade** (putih penuh di atas, memudar ke bawah), ini ciri khas ref.

```css
.text-fade {
  background: linear-gradient(180deg, #fff 0%, rgb(255 255 255 / 0.42) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

Trik dari ref: pada H2, **baris pertama putih, baris kedua lebih redup** (misal "Semua yang kamu butuh" putih, "dalam satu paket" redup `rgba(255,255,255,0.45)`).

---

## 3. Background & Atmosfer

### Grid halus + glow navy (hero)

```css
.hero-bg {
  position: relative;
  background:
    radial-gradient(60% 50% at 50% 0%, rgb(9 10 51 / 0.95) 0%, transparent 70%),
    var(--color-bg);
}
.hero-bg::before {
  content: "";
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgb(255 255 255 / 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 0.045) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(70% 60% at 50% 20%, #000 30%, transparent 100%);
  pointer-events: none;
}
```

### Lingkaran konsentris (seperti ring samar di ref)

Dua-tiga ring `border: 1px solid rgba(255,255,255,0.05)` berukuran 900px, 1300px, 1700px, ditaruh di tengah hero dengan `position:absolute` dan `pointer-events:none`.

### Selang-seling section

- Section ganjil: `--bg` polos
- Section genap: `linear-gradient(180deg, #121212 0%, #090A33 50%, #121212 100%)`

---

## 4. Kartu Kaca (Glass Card)

```css
.card-glass {
  position: relative;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-line);
  background: linear-gradient(180deg, rgb(255 255 255 / 0.07), rgb(255 255 255 / 0.02));
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.12),
    0 24px 60px -24px rgb(0 0 0 / 0.9);
  backdrop-filter: blur(14px);
  transition: border-color .3s, transform .3s;
}
.card-glass:hover {
  border-color: var(--color-line-strong);
  transform: translateY(-3px);
}
/* kilau tipis di sudut kiri atas */
.card-glass::after {
  content: "";
  position: absolute; inset: 0;
  border-radius: inherit;
  background: radial-gradient(80% 60% at 0% 0%, rgb(255 255 255 / 0.10), transparent 60%);
  pointer-events: none;
}
```

### Kartu putih (highlight, khusus Shared di pricing)

```css
.card-solid {
  background: #fff;
  color: #121212;
  border-radius: var(--radius-card);
  box-shadow: 0 0 0 1px rgb(255 255 255 / 0.9), 0 30px 80px -20px rgb(255 255 255 / 0.18);
}
```

---

## 5. Komponen UI

### Button

| Varian | Style |
|---|---|
| `primary` | bg putih, teks `#121212`, rounded-full, `px-5 py-2.5`, ikon panah kecil, hover: `scale-[1.03]` + glow putih tipis |
| `secondary` | bg `rgba(255,255,255,0.06)`, border `--border`, teks putih, hover: bg naik ke `0.1` |
| `ghost` | teks `--fg-muted`, hover putih |

Fokus: `outline: 2px solid #fff; outline-offset: 3px`.

### Badge (pill kecil di atas heading, ala ref "Latest AI Integration")

`inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1.5 text-xs`, dengan titik putih 6px yang berkedip pelan di kiri.

### Navbar

- Sticky, `backdrop-blur-xl`, bg `rgba(18,18,18,0.6)`, border-bottom `--border`
- Kiri: ✦ + "NOTTURA" (tracking lebar `0.18em`, weight 600)
- Tengah: Paket · Fitur · Cara Kerja · FAQ
- Kanan: tombol primary "Pesan Sekarang"
- Mobile: hamburger, panel fullscreen dengan blur

### Bintang ✦ Chrome (elemen signature hero)

SVG 4-point star dengan gradient metalik. Pakai 3 bintang berbeda ukuran (besar, sedang, kecil), `animate-float` dengan delay berbeda.

```tsx
export function ChromeStar({ size = 160, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#8a8a99" />
          <stop offset="0.55" stopColor="#ffffff" />
          <stop offset="1" stopColor="#3a3a4a" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path
        d="M50 2 C53 32 68 47 98 50 C68 53 53 68 50 98 C47 68 32 53 2 50 C32 47 47 32 50 2Z"
        fill="none" stroke="url(#chrome)" strokeWidth="3.2" filter="url(#glow)"
      />
      <path
        d="M50 14 C52 36 64 48 86 50 C64 52 52 64 50 86 C48 64 36 52 14 50 C36 48 48 36 50 14Z"
        fill="url(#chrome)" opacity="0.14"
      />
    </svg>
  );
}
```

### Strip fitur (marquee)

Baris nama-nama fitur (Gemini Pro · NotebookLM · Deep Research · Flow · Antigravity · Google One) berjalan pelan, di-duplikasi 2x untuk loop mulus, dengan mask fade kiri-kanan:

```css
.marquee-mask {
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}
```

### Accordion FAQ

Item: kartu glass tipis, ikon `+` yang berputar jadi `×` saat buka, konten animasi `height: auto` via Motion `AnimatePresence`. Hanya satu item terbuka sekaligus. Gunakan `<button aria-expanded>` dan `aria-controls`.

### Footer Wordmark

Teks "NOTTURA" ukuran `clamp(72px, 18vw, 260px)`, weight 800, outline putih tipis dengan fill gradient yang memudar ke bawah, dipotong separuh oleh batas bawah halaman (efek "SEOtalos" di ref).

```css
.wordmark {
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: .8;
  background: linear-gradient(180deg, rgb(255 255 255 / 0.55), rgb(255 255 255 / 0.02));
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px rgb(255 255 255 / 0.25);
}
```

---

## 6. Layout

- Container: `max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8`
- Jarak antar section: `py-20 md:py-32`
- Grid bento fitur: desktop 6 kolom (`2 kartu lebar 3 kolom` + `4 kartu lebar 2 kolom`, baris selang-seling), tablet 2 kolom, mobile 1 kolom
- Grid pricing: desktop 3 kolom, kartu tengah (Shared) sedikit lebih tinggi (`md:-my-4`), mobile ditumpuk dengan Shared **di urutan pertama**
- Breakpoint: Tailwind default (`sm 640`, `md 768`, `lg 1024`, `xl 1280`)

---

## 7. Motion

| Efek | Detail |
|---|---|
| Reveal on scroll | `opacity 0 → 1`, `y 24 → 0`, durasi 0.6s, ease `[0.22, 1, 0.36, 1]`, `viewport={{ once: true, margin: "-80px" }}` |
| Stagger | anak-anak grid delay `index * 0.08s` |
| Float | bintang hero, 7s, delay 0 / 1.2s / 2.4s |
| Hover kartu | naik 3px + border menyala |
| Shine tombol primer | gradient putih → abu muda bergeser pelan |
| Counter angka | angka stat naik dari 0 saat masuk viewport (opsional) |
| Navbar | border-bottom muncul setelah scroll > 8px |

Wajib hormati `prefers-reduced-motion`.

---

## 8. Aksesibilitas

- Kontras teks utama: putih di `#121212` = 18.7:1 (lulus AAA)
- `--fg-muted` (62%) tetap di atas 7:1, **jangan turunkan di bawah 55%** untuk teks paragraf
- Semua ikon dekoratif `aria-hidden`
- Urutan heading benar: satu `h1`, lalu `h2` per section
- Semua tombol dan accordion bisa dioperasikan keyboard
- Hit area minimum 44×44px di mobile

---

## 9. Yang Dihindari

- Warna di luar palet (tidak ada biru terang, ungu, gradient pelangi)
- Logo Google dipakai besar sebagai elemen utama (Nottura bukan mitra resmi). Pakai nama fitur sebagai teks, ikon generik, atau logo kecil secukupnya
- Angka statistik atau testimoni karangan
- Disclaimer berukuran sangat kecil dengan kontras rendah
