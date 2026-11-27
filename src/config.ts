export const config = {
  brand: "NOTTURA",
  tagline: "Fitur Google Pro, harga yang masuk akal.",
  contactUrl: import.meta.env.VITE_CONTACT_URL ?? "https://wa.me/62XXXXXXXXXX",
  contactLabel: import.meta.env.VITE_CONTACT_LABEL ?? "WhatsApp Admin",
  /** true hanya jika testimoni asli sudah ada */
  showTestimonials: false,
} as const;

export const buildOrderUrl = (planName?: string): string => {
  const text = planName
    ? `Halo Nottura, saya mau pesan paket ${planName}.`
    : "Halo Nottura, saya mau tanya soal Google AI Pro.";
  const sep = config.contactUrl.includes("?") ? "&" : "?";
  return `${config.contactUrl}${sep}text=${encodeURIComponent(text)}`;
};
