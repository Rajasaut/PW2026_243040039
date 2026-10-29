type ItemMatkulProps = {
  kode: string;
  nama: string;
  sks: number;
  hari: string;
};

function ItemMatkul({ kode, nama, sks, hari }: ItemMatkulProps) {
  return (
    <div
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
        <span style={{ fontWeight: "bold", color: "#1B365D" }}>{kode}</span> -{" "}
        {nama}
        <div style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>
          Jadwal Sesi: {hari}
        </div>
      </div>
      <span
        style={{
          backgroundColor: "#E1E4E8",
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "13px",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
