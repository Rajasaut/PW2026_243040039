// src/App.jsx
import KartuProfil from "./kartuprofil";
import BadgeSkill from "./Tugas1/BadgeSkill";
import ItemMatkul from "./Tugas1/ItemMatkul";
import KartuProyek from "./Tugas1/KartuProyek";

function App() {
  // Data mata kuliah (Tugas 2)
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  // Data skill (Tugas 1)
  const daftarSkill = [
    { id: 1, namaSkill: "HTML & CSS", level: "Mahir" },
    { id: 2, namaSkill: "JavaScript", level: "Menengah" },
    { id: 3, namaSkill: "React JS", level: "Pemula" },
    { id: 4, namaSkill: "Git", level: "Menengah" },
  ];

  // Data proyek (Tugas 3) - ganti dengan proyek dan tautan GitHub milik sendiri
  const daftarProyek = [
    {
      id: 1,
      judul: "Portal KRS Mini",
      deskripsi:
        "Aplikasi pengisian kartu rencana studi sederhana dengan daftar mata kuliah dan total SKS.",
      teknologi: ["React", "Vite", "CSS"],
      repoUrl: "https://github.com/Rajasaut/PW2026_243040039",
    },
    {
      id: 2,
      judul: "Catatan Harian",
      deskripsi:
        "Aplikasi pencatat kegiatan harian dengan penyimpanan lokal di peramban.",
      teknologi: ["JavaScript", "HTML", "LocalStorage"],
      repoUrl: "https://github.com/Rajasaut/PW2026_243040039",
    },
    {
      id: 3,
      judul: "Katalog Buku",
      deskripsi:
        "Halaman katalog buku yang mengambil data JSON dan menampilkannya dalam bentuk kartu.",
      teknologi: ["React", "REST API", "JSON"],
      repoUrl:
        "https://github.com/Rajasaut/PW2026_243040039/tree/main/pertemuan1",
    },
    {
      id: 4,
      judul: "Sistem Basis Data Perpustakaan",
      deskripsi:
        "Perancangan skema basis data perpustakaan beserta query pelaporan peminjaman.",
      teknologi: ["PostgreSQL", "SQL"],
      repoUrl:
        "https://github.com/Rajasaut/PW2026_243040039/tree/main/pertemuan1",
    },
  ];

  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  const judulSeksi = {
    color: "#2C3E50",
    borderBottom: "2px solid #E1E4E8",
    paddingBottom: "8px",
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      {/* Profil + Tugas 1: BadgeSkill di bawah profil */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>Profil Mahasiswa Praktikan</h2>
        <KartuProfil
          fotoUrl="/foto.jpg"
          nama="Raja Saut Sihaloho"
          npm="243040039"
          kelas="IF - Praktikum"
          status="Aktif"
        />
        <h3 style={{ color: "#2C3E50", marginBottom: "10px" }}>Keahlian</h3>
        <div>
          {daftarSkill.map((skill) => (
            <BadgeSkill
              key={skill.id}
              namaSkill={skill.namaSkill}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      {/* Tugas 2: App.jsx hanya iterasi data dan memanggil <ItemMatkul /> */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      {/* Tugas 3: Showcase Portofolio Mini */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>Showcase Portofolio Mini</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              repoUrl={proyek.repoUrl}
            />
          ))}
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
