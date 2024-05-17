'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { TbBrandWhatsapp } from "react-icons/tb"
import { Button } from "../../button"

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[883px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[170px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row pt-80">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="font-master text-2xl text-neutral-200">Bem-vindo à</p>

          <Image 
            height={35}
            width={271}
            src={"/images/logo_text.svg"}
            alt="Texto da Logo Harricine4K"
          />

          <p className="text-neutral-200 text-[17px]">
            o serviço de IPTV que transforma sua experiência de assistir TV.
          </p>

          <p className="text-neutral-200 text-xl my-6 sm:text-lg">
            Oferecemos mais de 600 canais ao vivo, 5 mil séries e 15 mil filmes, 
            incluindo os sucessos imperdíveis da Netflix, Prime Video, Disney Channel, 
            Paramount, HBO, e muito mais. Com Harricine4K, você tem o melhor do 
            entretenimento mundial ao seu alcance, tudo em um único lugar. Prepare-se 
            para explorar um universo de conteúdos incríveis e mergulhar em uma nova 
            dimensão de diversão.
          </p>

          <p className="text-neutral-200 text-[20px]">
            Solicite agora e descubra porque somos a escolha preferida dos apaixonados 
            por entretenimento!
          </p>
        </motion.div>
        <Image 
          width={340}
          height={327}
          src={"/images/harricine4k_logo.png"}
          alt="Logomarca Harricine4K"
        />
      </div>
      <div className="w-full lg:h-[755px] flex flex-col items-center justify-center pt-12 sm:pb-20">
        <a href="https://api.whatsapp.com/send?phone=5581994119761" target="_blank">
          <Button className="w-[250px] items-center h-[90px]">
              Solicite agora!
          </Button>
        </a>
      </div>
    </section>
  )
}