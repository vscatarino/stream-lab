import './ShowcasePage.css';
import Row from '../../components/row/Row'
import bannerImg from '../../assets/banner.png'
import BannerLayout from '../../components/layouts/BannerLayout';

export default function ShowcasePage() {
  return (
    <BannerLayout
      bannerProps={{
        title: "StreamLab",
        subtitle: "Histórias que cabem na sua noite",
        imageSrc: bannerImg,
        imageAlt: "Montagem de destaques em cartaz do catálogo StreamLab"
      }}>
      <Row
        label="Em alta agora"
        titleCardProps={{
          title: "Matrix",
          year: "1999",
          description: "O programador Thomas Anderson, conhecido como o hacker Neo (Keanu Reeves), descobre que a realidade é uma simulação de computador criada por máquinas para controlar a humanidade."
        }}
      />
    </BannerLayout >

  )
}