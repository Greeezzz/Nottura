import { GraduationCap, BookOpen, Code, Video } from "lucide-react";
import type { Audience, Stat } from "@/types";

export const audiences: Audience[] = [
  {
    id: "mahasiswa",
    title: "Mahasiswa",
    icon: GraduationCap,
    description:
      "Rangkum jurnal, riset skripsi, dan pahami materi kuliah jauh lebih cepat.",
  },
  {
    id: "pelajar",
    title: "Pelajar",
    icon: BookOpen,
    description:
      "Teman belajar 24/7 buat latihan soal, rangkuman, dan bantu kerjain tugas.",
  },
  {
    id: "developer",
    title: "Developer",
    icon: Code,
    description:
      "Ngoding & debugging lebih ngebut bareng Gemini Pro dan Antigravity.",
  },
  {
    id: "creator",
    title: "Content Creator",
    icon: Video,
    description:
      "Bikin konsep visual, produksi video di Flow, dan simpan aset di cloud.",
  },
];

/** Semua angka berasal dari katalog, tidak boleh dikarang. */
export const stats: Stat[] = [
  { value: "6", label: "Fitur premium dalam satu paket" },
  { value: "5 TB", label: "Storage keluarga (dibagi satu grup)" },
  { value: "Rp30rb", label: "Mulai per orang per bulan (paket Squad)" },
];
