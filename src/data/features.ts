import {
  Sparkles,
  Telescope,
  BookOpenText,
  Clapperboard,
  Rocket,
  Cloud,
} from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: "gemini",
    title: "Gemini Pro",
    size: "lg",
    icon: Sparkles,
    description:
      "Asisten AI untuk belajar, ngoding, dan nulis. Dipakai lewat akun masing-masing, dengan riwayat percakapan pribadi.",
    points: [
      "Bantu tugas kuliah dan jelaskan materi sulit",
      "Coding dan debugging",
      "Analisis dokumen, brainstorming, penulisan",
    ],
  },
  {
    id: "deep-research",
    title: "Deep Research",
    size: "sm",
    icon: Telescope,
    description: "Riset mendalam untuk kebutuhan akademik.",
    points: ["Kumpulkan dan analisis banyak sumber", "Bantu susun laporan dan referensi"],
  },
  {
    id: "notebooklm",
    title: "NotebookLM",
    size: "sm",
    icon: BookOpenText,
    description: "Pahami materi dari banyak sumber sekaligus.",
    points: ["Rangkum jurnal dan PDF", "Buat catatan belajar"],
  },
  {
    id: "flow",
    title: "Google Flow",
    size: "sm",
    icon: Clapperboard,
    description: "Bikin video dengan bantuan teknologi Google.",
    points: ["Kembangkan ide visual", "Dukung produksi konten kreatif"],
  },
  {
    id: "antigravity",
    title: "Google Antigravity",
    size: "sm",
    icon: Rocket,
    description: "Partner coding dan pengembangan aplikasi.",
    points: ["Jalankan workflow coding agent", "Bantu debugging proyek software"],
  },
  {
    id: "storage",
    title: "Google One Storage",
    size: "lg",
    icon: Cloud,
    description: "Penyimpanan cloud hingga 5 TB untuk paket keluarga.",
    points: [
      "Terhubung ke Google Drive, Gmail, Google Photos",
      "Kapasitas dibagi dalam satu grup keluarga",
    ],
  },
];
