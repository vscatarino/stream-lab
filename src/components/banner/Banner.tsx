import type { BannerProps } from "../../models/bannerProps"

export default function Banner({ title, subtitle, imageSrc, imageAlt }: BannerProps) {
  return (
    <header className="banner">
      <img className="banner-image" src={imageSrc} alt={imageAlt} />
      <h1 className="banner-title">{title}</h1>
      <p className="banner-subtitle">{subtitle}</p>
    </header>
  )
}