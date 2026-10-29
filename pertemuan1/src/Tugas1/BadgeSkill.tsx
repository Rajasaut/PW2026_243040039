type BadgeSkillProps = {
  namaSkill: string;
  level: string;
};

type WarnaBadge = {
  bg: string;
  teks: string;
};

const warnaLevel: Record<string, WarnaBadge> = {
  Pemula: { bg: "#FFF3CD", teks: "#856404" },
  Menengah: { bg: "#D1ECF1", teks: "#0C5460" },
  Mahir: { bg: "#D4EDDA", teks: "#155724" },
};

function BadgeSkill({ namaSkill, level }: BadgeSkillProps) {
  const warna = warnaLevel[level] || { bg: "#E1E4E8", teks: "#444" };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 12px",
        marginRight: "8px",
        marginBottom: "8px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "bold",
        backgroundColor: warna.bg,
        color: warna.teks,
      }}
    >
      {namaSkill} · {level}
    </span>
  );
}

export default BadgeSkill;
