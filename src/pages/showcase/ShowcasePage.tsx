import './ShowcasePage.css';
import Row from '../../components/row/Row'
import bannerImg from '../../assets/banner.png'
import BannerLayout from '../../components/layouts/BannerLayout';
import type { TitleCardProps } from '../../models/titleCardProps';

export default function ShowcasePage() {
  const CATALOG: TitleCardProps[] = [
    { id: "matrix-1999", title: "Matrix", year: "1999", description: "Thomas Anderson descobre que a realidade é uma simulação.", available: true, isNew: true, badgeLabel: "Ficção científica" },
    { id: "arrival-2016", title: "A Chegada", year: "2016", description: "Uma linguista tenta se comunicar com visitantes alienígenas.", available: true, badgeLabel: "Drama" },
    { id: "dune-2021", title: "Duna", year: "2021", description: "", available: false, isNew: true, badgeLabel: "Aventura" },
    { id: "akira-1988", title: "Akira", year: "1988", description: "Em Neo-Tóquio, um motociclista desenvolve poderes perigosos.", available: true },
    { id: "blade-1982", title: "Blade Runner", year: "1982", description: "Um caçador de replicantes questiona a própria humanidade.", available: false, badgeLabel: "Clássico" },
  ];

  const avaiables = CATALOG.filter((t) => t.available === true);

  const emptyList = CATALOG.filter((t) => t.year === "3000");
  return (
    <BannerLayout
      bannerProps={{
        title: "StreamLab",
        subtitle: "Histórias que cabem na sua noite",
        imageSrc: bannerImg,
        imageAlt: "Montagem de destaques em cartaz do catálogo StreamLab"
      }}>


      <Row label="Catálogo completo" titles={CATALOG} />

      <Row label="Disponíveis agora" titles={avaiables} />

      <Row label="Em breve na sua região" titles={emptyList} />
    </BannerLayout >

  )
}