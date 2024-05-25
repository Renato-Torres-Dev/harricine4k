'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { TbBrandWhatsapp } from "react-icons/tb"
import { Button } from "../../button"

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[883px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[170px]">
      <div className="container flex items-center justify-between">
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="font-master text-6xl text-red-600 font-bold stroke-black mt-8">
            O MELHOR SERVIÇO DE STREAMING DO BRASIL DISPONÍVEL PARA VOCÊ!
          </p>
        </motion.div>
      </div>
      <div className="w-full lg:h-[755px] flex flex-col items-center justify-center pt-12 sm:pb-20">
        <Image 
          width={340}
          height={327}
          src={"/images/harricine4k_logo.png"}
          alt="Logomarca Harricine4K"
        />
      </div>
      <div className="w-full lg:h-[755px] flex flex-col items-center justify-center">
        <p className="font-master text-xl text-neutral-200 font-semibold">
          Confira abaixo todos os nossos serviços e como contratar!
        </p>
      </div>
    </section>
  )
}