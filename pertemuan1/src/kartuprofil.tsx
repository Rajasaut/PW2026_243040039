type KartuProfilProps = {
  nama: string;
  npm: string;
  kelas: string;
  status: string;
  fotoUrl?: string;
};

function KartuProfil({ nama, npm, kelas, status, fotoUrl }: KartuProfilProps) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        maxWidth: "450px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img
          src={fotoUrl || "https://via.placeholder.com/80"}
          alt={`Foto ${nama}`}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <div>
          <h3
            style={{
              margin: "0 0 4px 0",
              color: "#1B365D",
            }}
          >
            {nama}
          </h3>

          <p
            style={{
              margin: "2px 0",
              fontSize: "14px",
              color: "#555",
            }}
          >
            NPM: <strong>{npm}</strong>
          </p>

          <p
            style={{
              margin: "2px 0",
              fontSize: "14px",
              color: "#555",
            }}
          >
            Kelas: {kelas}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "16px",
          borderTop: "1px solid #E1E4E8",
          paddingTop: "10px",
        }}
      >
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
            backgroundColor: status === "Aktif" ? "#D4EDDA" : "#FFF3CD",
            color: status === "Aktif" ? "#155724" : "#856404",
          }}
        >
          Status Akademik: {status}
        </span>
      </div>
    </div>
  );
}

export default KartuProfil;
