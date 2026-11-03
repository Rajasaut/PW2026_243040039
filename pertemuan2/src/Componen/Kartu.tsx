import type { ReactNode } from "react";

type KartuProps = {
  judul: string;
  children: ReactNode;
};

function Kartu({ judul, children }: KartuProps) {
  return (
    <section className="kartu">
      <h2>{judul}</h2>
      <div className="kartu-body">{children}</div>
    </section>
  );
}

export default Kartu;
