import { useState } from "react";
import type { FormEvent } from "react";
import type { Transaksi } from "./helper";

interface FormTransaksiProps {
  onTambah: (
    keterangan: string,
    nominal: number,
    jenis: Transaksi["jenis"],
  ) => void;
}

function FormTransaksi({ onTambah }: FormTransaksiProps) {
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState<Transaksi["jenis"]>("pemasukan");

  // Input selalu teks, ubah ke angka dengan Number()
  const angka = Number(nominal);
  const tidakValid =
    keterangan.trim() === "" || nominal === "" || isNaN(angka) || angka <= 0;

  const tanganiKirim = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tidakValid) return;
    onTambah(keterangan.trim(), angka, jenis);
    setKeterangan("");
    setNominal("");
    setJenis("pemasukan");
  };

  return (
    <form className="form" onSubmit={tanganiKirim}>
      <input
        className="input"
        type="text"
        placeholder="Keterangan, contoh: Uang saku"
        value={keterangan}
        onChange={(e) => setKeterangan(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="Nominal, contoh: 50000"
        value={nominal}
        onChange={(e) => setNominal(e.target.value)}
      />
      <select
        className="input"
        value={jenis}
        onChange={(e) => setJenis(e.target.value as Transaksi["jenis"])}
      >
        <option value="pemasukan">Pemasukan</option>
        <option value="pengeluaran">Pengeluaran</option>
      </select>
      {nominal !== "" && angka <= 0 && (
        <p className="galat">Nominal harus lebih dari 0.</p>
      )}
      <button className="tombol" type="submit" disabled={tidakValid}>
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;
