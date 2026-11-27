# TASKS.md — Pembagian Tugas Nottura (Chelo & Iwan)

Dua orang, satu target: landing page Nottura live. Peran sudah ditukar sesuai kesepakatan (Chelo pegang teknis dan bikin repo, Iwan pegang visual):

- **Iwan** → visual, brand, polesan UI, copy, konten
- **Chelo** → setup teknis, logic, integrasi, SEO, deploy

> Versi ini sudah hasil tukar peran. Kalau mau tukar lagi, tinggal tukar nama di kolom Owner.

Estimasi pakai hitungan hari kerja santai (2-3 jam per hari per orang). Sesuaikan sendiri.

---

## Alur Singkat

```
Fase 0  Kickoff & keputusan          (bareng)
Fase 1  Fondasi                      (Chelo setup, Iwan siapin aset)   ──┐
Fase 2  Komponen UI                  (bagi dua)                          │ paralel
Fase 3  Section halaman              (bagi dua)                        ──┘
Fase 4  Integrasi, SEO, legal        (Chelo utama, Iwan review)
Fase 5  QA & poles                   (bareng)
Fase 6  Deploy & rilis               (Chelo utama, Iwan cek)
Fase 7  Pasca rilis                  (bareng)
```

---

## Fase 0 — Kickoff & Keputusan (Hari 1, bareng)

Selesaikan dulu sebelum ngoding supaya nggak bongkar ulang.

| # | Tugas | Owner | Output |
|---|---|---|---|
| 0.1 | Putuskan kontak order: WhatsApp atau Telegram, nomor/username resmi | Bareng | Link kontak final |
| 0.2 | Konfirmasi harga final Squad / Shared / Private | Bareng | Angka final di `plans.ts` |
| 0.3 | Cek isi `CONTENT.md`: nomor S&K 9, klaim fitur, tone bahasa | Iwan | CONTENT.md disetujui |
| 0.4 | Tentukan domain (beli atau pakai subdomain gratis dulu) | Chelo | Nama domain |
| 0.5 | Tentukan platform deploy (Vercel / Netlify / Cloudflare Pages) | Chelo | Platform terpilih |
| 0.6 | Buat repo GitHub, undang satu sama lain, aktifkan branch protection di `main` | Chelo | Repo siap |
| 0.7 | Sepakati aturan kerja (lihat bagian "Aturan Kerja" di bawah) | Bareng | Disepakati |

**Selesai kalau:** semua poin di atas ada jawabannya.

---

## Fase 1 — Fondasi (Hari 1-2)

### Chelo

| # | Tugas | Detail | Output |
|---|---|---|---|
| 1.1 | Scaffold proyek | Vite + React 18 + TS strict, install `motion`, `lucide-react`, Tailwind v4, font Inter | Proyek jalan di `npm run dev` |
| 1.2 | Alias `@/` dan struktur folder | Ikuti `ARCHITECTURE.md` bagian 1-2 | Folder kosong siap isi |
| 1.3 | Token + CSS global | Salin `index.css` dari `DESIGN.md` bagian 1 | Warna, keyframes, reduced-motion aktif |
| 1.4 | `types.ts`, `config.ts`, `lib/cn.ts`, `lib/format.ts` | Dari `ARCHITECTURE.md` | Tipe dan util siap |
| 1.5 | Seluruh file `data/*.ts` | Plans, features, audiences, steps, usage-rules, faqs, legal | Data lengkap sesuai `CONTENT.md` |
| 1.6 | `.env` dan `.env.example` | `VITE_CONTACT_URL`, `VITE_CONTACT_LABEL` | Env terdokumentasi |
| 1.7 | Push ke `main`, kabari Iwan | | Iwan bisa clone |

### Iwan

| # | Tugas | Detail | Output |
|---|---|---|---|
| 1.8 | Logo ✦ NOTTURA final | Versi SVG: ikon bintang saja, wordmark, dan gabungan. Versi putih di dasar gelap | `logo.svg`, `logo-mark.svg` |
| 1.9 | Favicon | Bintang ✦ di 32px dan 180px (apple-touch) | `favicon.svg`, `apple-touch-icon.png` |
| 1.10 | Finalisasi `ChromeStar` | Rapikan SVG di `DESIGN.md`: gradient, glow, ketebalan stroke, tes di 3 ukuran | `ChromeStar.tsx` final |
| 1.11 | Mockup referensi hero + pricing (SVG dulu, versi Figma dikerjakan Chelo) | Satu frame desktop (1440) dan satu mobile (390) sebagai acuan polesan | `docs/mockups/desktop-1440.svg`, `mobile-390.svg` |
| 1.12 | Rancang OG image | 1200×630, wordmark besar + tagline + glow navy | `og.png` |
| 1.13 | Siapkan ikon pengganti | Cek ikon lucide per fitur sudah cocok, atau gambar ikon custom | Daftar ikon final |

**Selesai kalau:** proyek jalan di lokal kedua orang, aset brand lengkap di `public/`.

---

## Fase 2 — Komponen UI (Hari 2-4)

Bisa paralel karena komponennya independen. Bikin di branch masing-masing.

### Chelo (komponen berlogika)

| # | Tugas | Branch | Catatan |
|---|---|---|---|
| 2.1 | `Button` | `feat/ui-button` | Varian primary/secondary/ghost, render `<a>` atau `<button>` |
| 2.2 | `Reveal` | `feat/ui-reveal` | Dari `ARCHITECTURE.md`, hormati reduced-motion |
| 2.3 | `Marquee` | `feat/ui-marquee` | Duplikasi 2x, pause saat hover, mask fade |
| 2.4 | Hook `useScrolled` dan `useCountUp` | `feat/hooks` | Dipakai navbar dan stat |
| 2.5 | `Navbar` | `feat/navbar` | Sticky, blur, menu mobile fullscreen, smooth scroll ke anchor |

### Iwan (komponen visual)

| # | Tugas | Branch | Catatan |
|---|---|---|---|
| 2.6 | `GlassCard` | `feat/ui-glass-card` | Gradient, inset highlight, kilau sudut, hover |
| 2.7 | Varian kartu putih (`.card-solid`) | `feat/ui-glass-card` | Satu branch dengan 2.6 |
| 2.8 | `Badge` | `feat/ui-badge` | Pill dengan titik berkedip |
| 2.9 | `SectionHeading` | `feat/ui-heading` | Gradient fade, baris kedua redup, rata tengah/kiri |
| 2.10 | Background hero | `feat/hero-bg` | Grid halus, glow navy, ring konsentris |
| 2.11 | Footer wordmark raksasa | `feat/footer-wordmark` | Outline + fill gradient, terpotong di bawah |

**Selesai kalau:** semua komponen ter-merge ke `main`, dan ada halaman sementara (`/playground`) yang menampilkan semuanya untuk dicek mata.

---

## Fase 3 — Section Halaman (Hari 4-8)

Pembagian berdasarkan "berat visual" vs "berat logika" supaya adil.

### Iwan

| # | Section | Isi kerja | Branch |
|---|---|---|---|
| 3.1 | **Hero** | 3 bintang melayang (delay beda), headline gradient, 2 CTA, chip target pengguna, catatan "bukan mitra resmi" | `feat/hero` |
| 3.2 | **Features (bento)** | Grid 6 kolom, kartu besar/kecil, ikon, poin-poin, catatan kuota di bawah | `feat/features` |
| 3.3 | **Audience** | 4 kartu + strip 3 stat | `feat/audience` |
| 3.4 | **FinalCta** | Glow navy, headline, 2 tombol | `feat/final-cta` |
| 3.5 | **Footer** | Disclaimer jelas terbaca, 3 kolom link, wordmark | `feat/footer` |

### Chelo

| # | Section | Isi kerja | Branch |
|---|---|---|---|
| 3.6 | **FeatureStrip** | Marquee nama fitur | `feat/feature-strip` |
| 3.7 | **Pricing** | 3 kartu, Shared pakai kartu putih, urutan mobile (Shared dulu), tombol ke `buildOrderUrl`, warning Squad "wajib 5 orang" | `feat/pricing` |
| 3.8 | **HowItWorks** | 4 langkah + 3 kartu "sistem penggunaan" | `feat/how-it-works` |
| 3.9 | **Faq** | Accordion satu-buka-satu, `aria-expanded`, `aria-controls`, animasi height | `feat/faq` |
| 3.10 | **Testimonials** | Komponen siap tapi tersembunyi lewat `showTestimonials` | `feat/testimonials` |
| 3.11 | **Halaman `/syarat-ketentuan`** | Routing sederhana (react-router atau hash) + isi S&K | `feat/terms` |
| 3.12 | Rakit `App.tsx` | Susun semua section sesuai urutan | `feat/app-assembly` |

**Selesai kalau:** seluruh halaman tampil utuh dari atas ke bawah di desktop. Mobile boleh masih kasar, dirapikan di Fase 5.

---

## Fase 4 — Integrasi, SEO, Legal (Hari 8-10)

| # | Tugas | Owner | Detail |
|---|---|---|---|
| 4.1 | Semua CTA "Pesan" diarahkan ke `buildOrderUrl(...)` | Chelo | Cek tiap tombol, pesan WA terisi nama paket |
| 4.2 | Meta tags: title, description, OG, Twitter card, `theme-color` | Chelo | Pakai teks dari `CONTENT.md` bagian 0 |
| 4.3 | JSON-LD `Organization` dan `FAQPage` | Chelo | Tes di Rich Results Test |
| 4.4 | `robots.txt`, `sitemap.xml` | Chelo | Dasar saja |
| 4.5 | Analytics ringan (Plausible / Umami / GA4) + event klik tombol Pesan | Chelo | Biar tahu paket mana yang paling dilirik |
| 4.6 | Review teks disclaimer dan S&K di halaman | Iwan | Terbaca jelas, kontras cukup, tidak ada janji "unlimited" |
| 4.7 | Review tone copy di semua section | Iwan | Konsisten "kamu", tidak kaku |
| 4.8 | Kumpulkan testimoni asli (screenshot chat, minta izin, samarkan nama) | Iwan | Kalau sudah ada ≥3, aktifkan section-nya |
| 4.9 | Siapkan kontak resmi: akun WA bisnis, bio, foto profil bertema Nottura | Iwan | Konsisten dengan brand |

---

## Fase 5 — QA & Poles (Hari 10-12, bareng)

### Checklist visual (Iwan pimpin)

- [ ] Bandingkan dengan mockup Figma: spacing, ukuran heading, radius kartu
- [ ] Efek glossy terasa: kilau sudut, border tipis, gradient fade heading
- [ ] Hanya pakai palet `#121212`, `#090A33`, putih (+ opacity putih)
- [ ] Animasi tidak berlebihan (kalau ramai, kurangi bintang jadi 2)
- [ ] Teks di kartu putih terbaca (`#121212`)
- [ ] Wordmark footer terpotong rapi, tidak bikin scroll horizontal

### Checklist teknis (Chelo pimpin)

- [ ] `npm run build` dan `tsc --noEmit` bersih, tidak ada `any`
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] Navigasi keyboard: tab order masuk akal, fokus kelihatan
- [ ] `prefers-reduced-motion` mematikan animasi
- [ ] Semua link anchor (`#paket`, `#fitur`, `#cara-kerja`, `#faq`) jalan
- [ ] Bundle size wajar (cek `vite build` output)

### Tes perangkat (bagi dua)

| Perangkat | Penguji |
|---|---|
| Chrome desktop 1280 / 1440 | Iwan |
| Chrome Android 360px | Iwan |
| Safari iPhone (kalau ada) | Chelo |
| Firefox desktop | Chelo |
| Koneksi lambat (throttle 4G di DevTools) | Chelo |

### Tes alur pemesanan (bareng)

1. Klik "Pesan Paket Squad" → WA terbuka dengan pesan terisi?
2. Ulangi untuk Shared dan Private
3. Klik "Pesan Sekarang" di navbar dan CTA penutup
4. Buka `/syarat-ketentuan`, balik ke home, pastikan tidak error

---

## Fase 6 — Deploy & Rilis (Hari 12-13)

| # | Tugas | Owner |
|---|---|---|
| 6.1 | Hubungkan repo ke platform deploy, set env variables | Chelo |
| 6.2 | Preview deploy, kirim link ke Iwan untuk cek di HP asli | Chelo |
| 6.3 | Hubungkan domain, aktifkan HTTPS, redirect `www` | Chelo |
| 6.4 | Tes OG image: tempel link di WhatsApp, Telegram, Instagram DM | Iwan |
| 6.5 | Cek sekali lagi harga dan nomor kontak di versi live | Bareng |
| 6.6 | Pasang link landing di bio IG/WA/Telegram bisnis | Iwan |
| 6.7 | Umumkan rilis | Bareng |

---

## Fase 7 — Pasca Rilis (minggu 1-2)

| # | Tugas | Owner |
|---|---|---|
| 7.1 | Pantau analytics: klik tombol per paket, scroll depth, bounce | Chelo |
| 7.2 | Kumpulkan pertanyaan pelanggan yang berulang → tambah ke FAQ | Iwan |
| 7.3 | Aktifkan testimoni asli begitu terkumpul | Iwan |
| 7.4 | Perbaiki bug yang dilaporkan | Chelo |
| 7.5 | Update harga/paket bila ada perubahan dari Google (cukup edit `plans.ts`) | Chelo |
| 7.6 | Opsional: upgrade bintang 3D (react-three-fiber) pakai prompt di `PROMPT.md` | Bareng |

---

## Aturan Kerja

**Git**
- `main` selalu bisa di-deploy. Jangan push langsung, lewat Pull Request.
- Nama branch: `feat/...`, `fix/...`, `chore/...`
- Satu PR = satu tugas, kecil, gampang direview
- Commit pendek dan jelas: `feat: add pricing section`
- Saling review PR, minimal 1 approve sebelum merge (cukup cek cepat, jangan jadi hambatan)

**Komunikasi**
- Check-in singkat tiap hari (chat saja): "kemarin ngerjain apa, hari ini apa, ada yang nyangkut?"
- Kalau nyangkut lebih dari 30 menit, langsung bilang
- Keputusan desain dan copy dicatat di sini, jangan hilang di chat

**Pakai AI coding agent**
- Selalu suruh agent baca `DESIGN.md`, `CONTENT.md`, `ARCHITECTURE.md` dulu
- Satu agent session per tugas, jangan campur banyak tugas sekaligus
- Hasil agent tetap direview manusia sebelum merge

**Konflik file**
- Iwan jangan edit file `data/*.ts` tanpa kabar Chelo, dan sebaliknya Chelo jangan ubah `index.css` / token tanpa kabar Iwan
- Kalau perlu ubah file milik yang lain, bikin PR dan tag orangnya

---

## Dependensi Penting

```
1.7 (scaffold pushed) ──► semua tugas Iwan yang butuh kode
1.10 (ChromeStar final) ─► 3.1 (Hero)
2.6 (GlassCard)  ────────► 3.2, 3.3, 3.7, 3.8, 3.9
2.9 (SectionHeading) ────► semua section
2.1 (Button)  ───────────► 3.1, 3.4, 3.7
3.12 (App assembly) ─────► Fase 4 dan 5
```

Artinya: **Chelo harus push scaffold secepatnya** (target hari 1), dan **Iwan harus selesaiin GlassCard + SectionHeading lebih dulu** karena banyak section nunggu itu.

---

## Tracker Progres

Centang di sini biar dua-duanya lihat posisi terkini.

### Chelo
- [x] Fase 0: 0.4, 0.5, 0.6
- [x] Fase 1: 1.1 – 1.7
- [x] Fase 2: 2.1 – 2.5
- [x] Fase 3: 3.6 – 3.12
- [x] Fase 4: 4.1 – 4.5
- [ ] Fase 5: checklist teknis + tes perangkat bagian Chelo
- [ ] Fase 6: 6.1 – 6.3
- [ ] Fase 7: 7.1, 7.4, 7.5

### Iwan
- [ ] Fase 0: 0.3
- [x] Fase 1: 1.8 – 1.13 (1.11 versi SVG, Figma oleh Chelo)
- [x] Fase 2: 2.6 – 2.11 (PR feat/phase-2-iwan, cek visual di /#/playground)
- [x] Fase 3: 3.1 – 3.5 (Hero, Features, Audience, FinalCta, Footer — PR feat/phase-3-iwan)
- [ ] Fase 4: 4.6 – 4.9
- [ ] Fase 5: checklist visual + tes perangkat bagian Iwan
- [ ] Fase 6: 6.4, 6.6
- [ ] Fase 7: 7.2, 7.3

### Bareng
- [ ] Fase 0: 0.1, 0.2, 0.7
- [ ] Fase 5: tes alur pemesanan
- [ ] Fase 6: 6.5, 6.7

---

## Definition of Done (Rilis)

- [ ] Semua checklist Fase 5 lulus
- [ ] Harga dan kontak di versi live sudah dicek ulang berdua
- [ ] Disclaimer terlihat jelas di hero dan footer
- [ ] Tidak ada testimoni atau angka karangan
- [ ] Domain aktif dengan HTTPS, OG image muncul saat link dibagikan
- [ ] Analytics mencatat klik tombol Pesan

