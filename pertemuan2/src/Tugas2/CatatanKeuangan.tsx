import { useState, useEffect } from "react";
import Kartu from "./Kartu";
import FormTransaksi from "./FormTransaksi";
import ItemTransaksi from "./ItemTransaksi";
import Ringkasan from "./Ringkasan";
import type { Transaksi } from "./helper";

function CatatanKeuangan() {
  // State utama: baca dari localStorage dulu, kalau kosong/rusak pakai array kosong
  const [daftar, setDaftar] = useState<Transaksi[]>(() => {
    try {
      const tersimpan = localStorage.getItem("catatan-keuangan");
      return tersimpan ? JSON.parse(tersimpan) : [];
    } catch {
      return [];
    }
  });

  // Efek: simpan ke localStorage setiap daftar berubah
  useEffect(() => {
    localStorage.setItem("catatan-keuangan", JSON.stringify(daftar));
  }, [daftar]);

  // Efek: judul tab menampilkan jumlah transaksi
  useEffect(() => {
    document.title = `Catatan Keuangan (${daftar.length} transaksi)`;
  }, [daftar]);

  const tambahTransaksi = (
    keterangan: string,
    nominal: number,
    jenis: Transaksi["jenis"],
  ) => {
    const baru: Transaksi = { id: Date.now(), keterangan, nominal, jenis };
    setDaftar([...daftar, baru]);
  };

  const hapusTransaksi = (id: number) => {
    setDaftar(daftar.filter((t) => t.id !== id));
  };

  return (
    <div className="wadah">
      <h1 className="judul">Catatan Keuangan Mini</h1>

      <Kartu judul="Total Saldo">
        <Ringkasan daftar={daftar} />
      </Kartu>

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {daftar.length === 0 ? (
          <p className="kosong">
            Belum ada transaksi. Yuk catat transaksi pertamamu!
          </p>
        ) : (
          <ul className="daftar">
            {daftar.map((t) => (
              <ItemTransaksi
                key={t.id}
                transaksi={t}
                onHapus={hapusTransaksi}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default CatatanKeuangan;
