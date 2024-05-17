import { Metadata } from "next"
import { HeroSection } from "./components/pages/hero-section"

export const metadata: Metadata = {
  title: "Harricine4K - Sua melhor IPTV",
  icons: "/images/icons/harricine4k_icon.svg"
}

export default async function Home() {
  return (
    <>
      <HeroSection />
    </>
  )
}
