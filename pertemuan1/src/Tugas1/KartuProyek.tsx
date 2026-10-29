type KartuProyekProps = {
  judul: string;
  deskripsi: string;
  teknologi: string[];
  repoUrl: string;
};

function KartuProyek({
  judul,
  deskripsi,
  teknologi,
  repoUrl,
}: KartuProyekProps) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h3 style={{ margin: 0, color: "#1B365D" }}>{judul}</h3>

      <p
        style={{ margin: 0, fontSize: "14px", color: "#555", lineHeight: 1.5 }}
      >
        {deskripsi}
      </p>

      {/* Tagar teknologi: array di-map, key memakai nama teknologi (unik per proyek) */}
      <div>
        {teknologi.map((tek) => (
          <span
            key={tek}
            style={{
              display: "inline-block",
              marginRight: "6px",
              marginBottom: "6px",
              padding: "3px 10px",
              borderRadius: "12px",
              fontSize: "12px",
              backgroundColor: "#E8EEF6",
              color: "#1B365D",
            }}
          >
            #{tek}
          </span>
        ))}
      </div>

      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#1B365D",
          color: "#FFFFFF",
          padding: "8px 16px",
          borderRadius: "6px",
          fontSize: "13px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Lihat di GitHub
      </a>
    </div>
  );
}

export default KartuProyek;
