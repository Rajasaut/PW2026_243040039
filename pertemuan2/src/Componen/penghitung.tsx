import { useState } from "react";
import Kartu from "./Kartu";

function Penghitung() {
  const [jumlah, setJumlah] = useState(0);

  function tambah() {
    setJumlah(jumlah + 1);
  }

  function ulangi() {
    setJumlah(0);
  }

  return (
    <Kartu judul="Menghitung Klik">
      <p>Jumlah klik: {jumlah}</p>
      {jumlah >= 5 && <p>Keren nih sudah banyak klik!</p>}
      <div className="baris">
        <button onClick={tambah}>Tambah</button>
        <button onClick={ulangi}>Ulangi</button>
      </div>
    </Kartu>
  );
}

export default Penghitung;
