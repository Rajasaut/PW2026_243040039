import { formatRupiah } from "./helper";
import type { Transaksi } from "./helper";

interface RingkasanProps {
  daftar: Transaksi[];
}

function Ringkasan({ daftar }: RingkasanProps) {
  // Nilai turunan: dihitung dari state, tidak perlu state baru
  const totalMasuk = daftar
    .filter((t) => t.jenis === "pemasukan")
    .reduce((jumlah, t) => jumlah + t.nominal, 0);
  const totalKeluar = daftar
    .filter((t) => t.jenis === "pengeluaran")
    .reduce((jumlah, t) => jumlah + t.nominal, 0);
  const saldo = totalMasuk - totalKeluar;

  return (
    <>
      <p className={`saldo ${saldo >= 0 ? "pemasukan" : "pengeluaran"}`}>
        {formatRupiah(saldo)}
      </p>
      <div className="ringkasan-baris">
        <span>
          Pemasukan: <b className="pemasukan">{formatRupiah(totalMasuk)}</b>
        </span>
        <span>
          Pengeluaran:{" "}
          <b className="pengeluaran">{formatRupiah(totalKeluar)}</b>
        </span>
      </div>
    </>
  );
}

export default Ringkasan;
