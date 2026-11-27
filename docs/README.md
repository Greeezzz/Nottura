# ✦ NOTTURA — Landing Page

> **Fitur Google Pro, harga yang masuk akal.**

Landing page untuk Nottura, layanan akses Google AI Pro lewat Google Family Sharing.
Gaya visual: dark glossy, bintang ✦ chrome 3D, kartu bento kaca, teks gradient fade.

## Isi paket dokumen

| File | Fungsi |
|---|---|
| `README.md` | Ringkasan proyek, stack, cara jalan (file ini) |
| `DESIGN.md` | Design system: warna, tipografi, efek glossy, komponen, motion |
| `CONTENT.md` | Seluruh copywriting per section (Bahasa Indonesia) |
| `ARCHITECTURE.md` | Struktur folder, tipe TypeScript, data, spesifikasi komponen |
| `PROMPT.md` | Prompt siap tempel ke Claude Code / coding agent |

## Stack

- **Vite** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS v4** untuk styling
- **Motion** (`motion/react`, sebelumnya Framer Motion) untuk animasi
- **lucide-react** untuk ikon
- **Inter** (atau Geist) via `@fontsource-variable`
- Deploy: Vercel / Netlify / Cloudflare Pages

## Quickstart

```bash
npm create vite@latest nottura -- --template react-ts
cd nottura
npm i motion lucide-react @fontsource-variable/inter
npm i -D tailwindcss @tailwindcss/vite
npm run dev
```

Env yang dipakai:

```bash
# .env
VITE_CONTACT_URL=https://wa.me/62XXXXXXXXXX
VITE_CONTACT_LABEL=WhatsApp Admin
```

## Prinsip desain singkat

1. **Gelap, bersih, glossy.** `#121212` dasar, `#090A33` untuk glow dan section selang-seling, `#FFFFFF` untuk aksen.
2. **Satu kartu putih per section** sebagai titik fokus (kartu Shared di pricing).
3. **Transparan soal batasan.** Sistem kuota bersama dan disclaimer ditampilkan jelas, bukan disembunyikan.
4. **Mobile first.** Mayoritas calon pelanggan (mahasiswa) buka dari HP.

## Checklist sebelum rilis

- [ ] Isi `VITE_CONTACT_URL` dengan kontak admin
- [ ] Ganti testimoni placeholder dengan testimoni asli (atau sembunyikan section-nya)
- [ ] Cek ulang harga di `src/data/plans.ts`
- [ ] Pastikan disclaimer terlihat di hero area dan footer
- [ ] Tambah OG image, favicon, dan meta description
- [ ] Tes Lighthouse (target Performance 90+, Accessibility 95+)
