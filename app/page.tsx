import { Metadata } from "next"
import { HeroSection } from "./components/pages/hero-section"
import { HorizontalDividerSection } from "./components/divider/horizontal"
import { Descripttion } from "./components/description"
import { Cards } from "./components/cards"

export const metadata: Metadata = {
  title: "Harricine4K - Sua melhor IPTV",
  icons: "/images/icons/harricine4k_icon.svg"
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Descripttion />
      <Cards />
    </>
  )
}
