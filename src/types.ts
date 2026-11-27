import type { LucideIcon } from "lucide-react";

export type PlanId = "squad" | "shared" | "private";

export interface Plan {
  id: PlanId;
  name: string;
  /** label kecil di atas nama */
  eyebrow: string;
  /** dalam rupiah, angka utama yang ditampilkan */
  price: number;
  /** "/ orang / bulan" */
  priceUnit: string;
  /** "Rp150.000 per grup per bulan" */
  priceNote?: string;
  /** "Wajib 5 orang langsung pesan" */
  warning?: string;
  /** true => kartu putih */
  highlighted?: boolean;
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

export interface Step {
  n: string;
  title: string;
  description: string;
}

export interface UsageRule {
  id: string;
  title: string;
  description: string;
}

export interface Faq {
  id: string;
  q: string;
  a: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  plan?: PlanId;
}

export interface Stat {
  value: string;
  label: string;
}
