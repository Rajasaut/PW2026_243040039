import { formatRupiah } from "./helper";
import type { Transaksi } from "./helper";

interface ItemTransaksiProps {
  transaksi: Transaksi;
  onHapus: (id: number) => void;
}

function ItemTransaksi({ transaksi, onHapus }: ItemTransaksiProps) {
  const masuk = transaksi.jenis === "pemasukan";

  return (
    <li className="item">
      <span className="ket">{transaksi.keterangan}</span>
      {/* className dinamis: hijau untuk pemasukan, merah untuk pengeluaran */}
      <span className={masuk ? "pemasukan" : "pengeluaran"}>
        {masuk ? "+" : "-"} {formatRupiah(transaksi.nominal)}
      </span>
      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;
