import type { UsageRule } from "@/types";

export const usageRules: UsageRule[] = [
  {
    id: "personal",
    title: "Personal usage",
    description:
      "Gemini dan riwayat percakapan dipakai lewat akun Google masing-masing. Aktivitas percakapan antaranggota tidak otomatis terlihat oleh anggota lain.",
  },
  {
    id: "shared",
    title: "Shared usage",
    description:
      "Beberapa layanan dan kuota, termasuk Google Flow dan Antigravity, punya batas penggunaan bersama dalam grup. Pemakaian bisa memengaruhi kuota anggota lain.",
  },
  {
    id: "storage",
    title: "Cloud storage",
    description:
      "Kapasitas penyimpanan adalah fasilitas grup keluarga, bukan 5 TB privat untuk tiap anggota.",
  },
];
