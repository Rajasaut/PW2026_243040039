import "./App.css";
import KartuProfil from "./kartuprofil";

function App() {
  const daftarPraktikum = [
    { id: 101, kode: "IF211", nama: "Pemrograman Web (React & Laravel)", sks: 3, hari: "Senin" },
    { id: 102, kode: "IF212", nama: "Sistem Basis Data (PostgreSQL)", sks: 3, hari: "Rabu" },
    { id: 103, kode: "IF213", nama: "Rekayasa Perangkat Lunak Terapan", sks: 3, hari: "Kamis" },
    { id: 104, kode: "IF214", nama: "Arsitektur Sistem Terdistribusi", sks: 2, hari: "Jumat" },
  ];

  const notifikasiSapaan = () => {
    alert("Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.");
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 24px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>Praktikum Pemrograman Web</h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ color: "#2C3E50", borderBottom: "2px solid #E1E4E8", paddingBottom: "8px" }}>
          Profil Mahasiswa Praktikan
        </h2>
        <KartuProfil
          nama="Mahasiswa Informatika"
          npm="233040000"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="https://via.placeholder.com/80"
        />
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ color: "#2C3E50", borderBottom: "2px solid #E1E4E8", paddingBottom: "8px" }}>
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <div
              key={matkul.id}
              style={{
                padding: "14px 18px",
                backgroundColor: "#F8F9FA",
                borderLeft: "5px solid #1B365D",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span style={{ fontWeight: "bold", color: "#1B365D" }}>{matkul.kode}</span> - {matkul.nama}
                <div style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>
                  Jadwal Sesi: {matkul.hari}
                </div>
              </div>
              <span style={{ backgroundColor: "#E1E4E8", padding: "4px 10px", borderRadius: "12px", fontSize: "13px" }}>
                {matkul.sks} SKS
              </span>
            </div>
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
