import bannerImg from "../../assets/banner.png"
export default function Banner() {
    const title = "StreamLab";
    const subtitle = "Histórias que cabem na sua noite";
    const imageAlt =" Montagem de destaques em cartaz do catálogo StreamLab";

    return (
      <header className="banner">
        <img className="banner-image" src={bannerImg} alt={imageAlt} />
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subtitle">{subtitle}</p>
      </header>
    )
}