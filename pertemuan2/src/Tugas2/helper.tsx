export interface Transaksi {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: "pemasukan" | "pengeluaran";
}

export const formatRupiah = (angka: number): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);
