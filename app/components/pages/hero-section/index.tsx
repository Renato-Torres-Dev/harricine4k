'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { TbBrandWhatsapp } from "react-icons/tb"
import { Button } from "../../button"

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[883px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center pb-10 sm:pb-32 lg:py-32 py-12 lg:pb-[170px]">
      <div className="container flex items-center justify-between">
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="font-master sm:text-5xl text-xl text-center text-red-600 font-bold stroke-black lg:mt-8 leading-normal">
            O MELHOR SERVIÇO DE STREAMING DO BRASIL DISPONÍVEL PARA VOCÊ!
          </p>
        </motion.div>
      </div>
      <div className="w-full lg:h-[755px] flex flex-col items-center justify-center pt-12 sm:pb-20">
        <Image 
          width={150}
          height={150}
          src={"/images/harricine4k_logo.png"}
          alt="Logomarca Harricine4K"
          className="lg:w-[340px] lg:h-[327px]"
        />
      </div>
      <div className="w-full lg:h-[755px] flex flex-col items-center justify-center px-8 py-8 text-center">
        <p className="font-master sm:text-3xl text-lg text-neutral-200 font-semibold">
          Confira abaixo todos os nossos serviços e como contratar!
        </p>
      </div>
    </section>
  )
}