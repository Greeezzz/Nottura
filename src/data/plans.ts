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
