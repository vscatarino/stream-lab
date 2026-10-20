import type { TitleCardProps } from "../../models/titleCardProps";
import Badge from "../badge/Badge";

export default function TitleCard({
  title,
  year,
  description,
  available,
  isNew,
  badgeLabel }: TitleCardProps) {

  let descriptionContent;

  if (description.trim().length === 0) {
    descriptionContent = (
      <p className="title-card-description title-card-description-fallback">
        Sinopse em breve
      </p>
    );
  } else {
    descriptionContent = (
      <p className="title-card-description">{description}</p>
    );
  }

  return (
    <article className="title-card">
      {isNew === true && <span className="title-card-new">NOVO</span>}

      <h3 className="title-card-name">{title}</h3>
      <span className="title-card-year">{year}</span>

      <span className="title-card-availability">
        {available ? "Disponível" : "Em breve"}
      </span>

      {descriptionContent}

      <Badge label={badgeLabel} />
    </article>
  )
}