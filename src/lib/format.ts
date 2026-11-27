export const formatRupiah = (n: number): string =>
  "Rp" + new Intl.NumberFormat("id-ID").format(n);
