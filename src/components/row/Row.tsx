import type { RowProps } from "../../models/rowProps";
import TitleCard from "../title-card/TitleCard";
export default function Row({ label, titles }: RowProps) {

  if (titles === undefined || titles.length === 0) {
    return (
      <section className="row">
        <h2 className="row-label">{label}</h2>
        <p className="row-empty">Nenhum título nesta seção</p>
      </section>
    );
  }

  return (
    <section className="row">
      <h2 className="row-label">{label}</h2>
      <div className="row-track">
        {titles.map((title) => (
          <TitleCard key={title.id} {...title} />
        ))}
      </div>
    </section>
  )
}