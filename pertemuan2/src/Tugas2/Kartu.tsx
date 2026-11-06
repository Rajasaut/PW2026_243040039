import type { ReactNode } from "react";

interface KartuProps {
  judul: string;
  children: ReactNode;
}

function Kartu({ judul, children }: KartuProps) {
  return (
    <section className="kartu">
      <h2>{judul}</h2>
      {children}
    </section>
  );
}

export default Kartu;
