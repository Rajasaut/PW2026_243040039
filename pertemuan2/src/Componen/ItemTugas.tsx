export type Tugas = {
  id: number;
  judul: string;
  selesai: boolean;
};

type ItemTugasProps = {
  tugas: Tugas;
  onUbahStatus: (id: number) => void;
  onHapus: (id: number) => void;
};

function ItemTugas({ tugas, onUbahStatus, onHapus }: ItemTugasProps) {
  return (
    <li className="item">
      <label className="label-tugas">
        <input
          type="checkbox"
          checked={tugas.selesai}
          onChange={() => onUbahStatus(tugas.id)}
        />
        <span className={tugas.selesai ? "selesai" : ""}>{tugas.judul}</span>
      </label>

      <button
        className="tombol tombol-merah tombol-kecil"
        type="button"
        onClick={() => onHapus(tugas.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTugas;
