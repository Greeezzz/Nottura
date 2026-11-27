import { GraduationCap, BookOpen, Code, Video } from "lucide-react";
import type { Audience, Stat } from "@/types";

export const audiences: Audience[] = [
  {
    id: "mahasiswa",
    title: "Mahasiswa",
    icon: GraduationCap,
    description:
      "Rangkum jurnal dengan NotebookLM, riset tugas akhir dengan Deep Research, dan minta Gemini jelasin materi yang bikin pusing.",
  },
  {
    id: "pelajar",
    title: "Pelajar",
    icon: BookOpen,
    description:
      "Teman belajar yang sabar. Latihan soal, ringkasan materi, dan bantuan nulis tugas.",
  },
  {
    id: "developer",
    title: "Developer",
    icon: Code,
    description:
      "Gemini untuk debugging, Antigravity untuk workflow coding agent, semua dalam satu langganan.",
  },
  {
    id: "creator",
    title: "Content Creator",
    icon: Video,
    description: "Olah ide visual dan bikin video lewat Google Flow, simpan aset di cloud.",
  },
];

/** Semua angka berasal dari katalog, tidak boleh dikarang. */
export const stats: Stat[] = [
  { value: "6", label: "Fitur premium dalam satu paket" },
  { value: "5 TB", label: "Storage keluarga (dibagi satu grup)" },
  { value: "Rp30rb", label: "Mulai per orang per bulan (paket Squad)" },
];
