import type { BannerLayoutProps } from "../../models/layoutsProps"
import Banner from "../banner/Banner"

export default function BannerLayout({ bannerProps, children }: BannerLayoutProps) {
    return (
        <>
            <Banner
                {...bannerProps}
            />
            {children}
        </>
    )
}