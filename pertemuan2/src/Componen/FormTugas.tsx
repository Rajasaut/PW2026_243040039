import { useState, type FormEvent } from "react";

type FormTugasProps = {
  onTambah: (judul: string) => void;
};

function FormTugas({ onTambah }: FormTugasProps) {
  const [teks, setTeks] = useState("");
  const terlaluPanjang = teks.length > 50;
  const tidakValid = terlaluPanjang || teks.trim() === "";

  function tanganiKirim(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (tidakValid) return;

    onTambah(teks.trim());
    setTeks("");
  }

  return (
    <form onSubmit={tanganiKirim}>
      <label htmlFor="judul-tugas">Judul tugas</label>
      <div className="baris">
        <input
          id="judul-tugas"
          className="input"
          type="text"
          placeholder="Contoh: Kerjakan Laporan Modul 2"
          value={teks}
          onChange={(event) => setTeks(event.target.value)}
          aria-invalid={terlaluPanjang}
          aria-describedby={terlaluPanjang ? "galat-judul" : undefined}
        />
        <button className="tombol" type="submit" disabled={tidakValid}>
          Tambah
        </button>
      </div>
      {terlaluPanjang && (
        <p id="galat-judul" className="galat" role="alert">
          Judul tugas maksimal 50 karakter.
        </p>
      )}
    </form>
  );
}

export default FormTugas;
