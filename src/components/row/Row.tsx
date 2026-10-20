import type { RowProps } from "../../models/rowProps";
import TitleCard from "../title-card/TitleCard";
export default function Row({ label, titleCardProps }: RowProps) {

  if (titleCardProps === undefined) {
    return (
      <section className="row">
        <h2 className="row-label">{label}</h2>
        <p className="row-empty">Nenhum título nesta seção</p>
      </section>
    );
  }
  
  const titles = [0, 1, 2];
  return (
    <section className="row">
      <h2 className="row-label">{label}</h2>
      <div className="row-track">
        {titles.map((_, index) => (
          <TitleCard
            key={index}
            {...titleCardProps}
          />
        ))}
      </div>
    </section>
  )
}