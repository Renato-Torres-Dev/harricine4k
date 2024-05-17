'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { TbBrandWhatsapp } from "react-icons/tb"

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[170px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row pt-20">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="font-master text-neutral-200">Bem-vindo à</p>

          <p className="font-master text-4xl text-red-700">Harricine4K</p>

          <p className="text-neutral-200 text-[17px]">
            o serviço de IPTV que transforma sua experiência de assistir TV.
          </p>

          <p className="text-neutral-200 text-sm my-6 sm:text-base">
            Oferecemos mais de 600 canais ao vivo, 5 mil séries e 15 mil filmes, 
            incluindo os sucessos imperdíveis da Netflix, Prime Video, Disney Channel, 
            Paramount, HBO, e muito mais. Com Harricine4K, você tem o melhor do 
            entretenimento mundial ao seu alcance, tudo em um único lugar. Prepare-se 
            para explorar um universo de conteúdos incríveis e mergulhar em uma nova 
            dimensão de diversão.
          </p>

          <p className="text-neutral-200 text-[17px]">
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
      <div className="w-full lg:h-[755px] flex flex-col justify-center pb-10 sm:pb-32">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <button className="w-max">
            <a href="https://api.whatsapp.com/send?phone=5581994119761">
              Solicite agora!
              <TbBrandWhatsapp />
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  )
}