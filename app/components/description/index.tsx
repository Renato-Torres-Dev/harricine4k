import Image from "next/image"
import { Button } from "../button"
import Link from "next/link"

export const Descripttion = () => {
  return (
    <section className="w-full bg-black items-center justify-center">
      <div className="flex gap-6 lg:gap-12 lg:flex-row py-8 px-8 justify-evenly">
        <Image src={"/images/icons/ativacao.png"} alt="Ativação Rápida" width={86} height={111}/>
        <Image src={"/images/icons/envio.png"} alt="Envio Imediato" width={86} height={111}/>
        <Image src={"/images/icons/pacote.png"} alt="Pacote Premium" width={86} height={111}/>
      </div>
      <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row py-8 px-8 justify-center">
        <div className="w=full h-full">
          <Image 
            width={808}
            height={800}
            src={"/images/tv_moldurada.png"}
            alt="TV Moldurada"
          />
        </div>

        <div>
          <p className="text-neutral-100 text-2xl font-master font-semibold max-w-[800px] py-16 px-8">
            Oferecemos mais de 600 canais ao vivo, 5 mil séries e 
            15 mil filmes, incluindo os sucessos imperdíveis da 
            Netflix, Prime Video, Disney Channel, Paramount, HBO, 
            e muito mais. Com Harricine4K, você em um único 
            lugar. Prepare-se para explorar um universo de 
            conteúdos incríveis e mergulhar em uma nova 
            dimensão de diversão.
          </p>
          <p className="text-neutral-100 text-2xl font-master font-semibold max-w-[800px] px-8">
            Solicite agora e descubra porque somos a escolha 
            preferida dos apaixonados por entretenimento!
          </p>
          <div className="w-full mt-6 lg:mt-10 flex items-center gap-5 flex-col text-2xl font-bold">
            <Link href={"https://api.whatsapp.com/send?phone=5581994119761"} target="_blank">
              <Button className="w-[600px] h-[100px]">
                Solicite agora!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}