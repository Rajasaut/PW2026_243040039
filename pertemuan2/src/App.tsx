import { useState } from "react";
import "./App.css";
import FormTugas from "./Componen/FormTugas";
import ItemTugas, { type Tugas } from "./Componen/ItemTugas";
import Kartu from "./Componen/Kartu";
import Penghitung from "./Componen/penghitung";

function App() {
  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>([
    { id: 1, judul: "Install Node.js dan Vite", selesai: true },
    { id: 2, judul: "Pelajari useState", selesai: false },
  ]);

  const tambahTugas = (judul: string) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas((tugasSaatIni) => [...tugasSaatIni, tugasBaru]);
  };

  const ubahStatus = (id: number) => {
    setDaftarTugas((tugasSaatIni) =>
      tugasSaatIni.map((tugas) =>
        tugas.id === id ? { ...tugas, selesai: !tugas.selesai } : tugas,
      ),
    );
  };

  const hapusTugas = (id: number) => {
    setDaftarTugas((tugasSaatIni) =>
      tugasSaatIni.filter((tugas) => tugas.id !== id),
    );
  };

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>
      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>
      <Penghitung />
      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>
      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>
        {/* Conditional rendering dengan ternary: tampilkan pesan jika kosong */}
        {daftarTugas.length === 0 ? (
          <p className="kosong">
            Belum ada tugas. Yuk tambahkan tugas pertamamu!
          </p>
        ) : (
          <ul className="daftar">
            {daftarTugas.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
