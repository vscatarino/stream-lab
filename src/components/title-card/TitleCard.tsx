import type { TitleCardProps } from "../../models/titleCardProps";

export default function TitleCard({ title, year, description }: TitleCardProps) {
    return (
    <article className="title-card">
      <h3 className="title-card-name">{title}</h3>
      <span className="title-card-year">{year}</span>
      <p className="title-card-description">{description}</p>
    </article>
  )
}