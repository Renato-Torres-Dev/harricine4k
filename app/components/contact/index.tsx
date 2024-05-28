import Link from "next/link"
import { Button } from "../button"

export const Contact = () => {
  return (
    <section className="w-full bg-black flex flex-col justify-center pb-10 py-32 sm:pb-32 lg:pb-[170px]">
      <div className="w-full flex items-center justify-center">
        <p className="max-w-[800px] font-master text-center text-2xl text-neutral-200 font-semibold">
          Se você procura um serviço de qualidade e variedade em entretenimento, 
          Harricine4K é a escolha perfeita.
        </p>
      </div>
      <div className="w-full flex items-center justify-center py-16">
        <p className="max-w-[800px] font-master text-center text-2xl text-neutral-200 font-semibold">
          Descubra por que Harricine4K é a escolha ideal para transformar 
          sua maneira de ver TV.
        </p>
      </div>
      <div className="w-full flex items-center justify-center py-16 text-2xl font-bold">
        <Link href={"https://api.whatsapp.com/send?phone=5581994119761"} target="_blank">
          <Button className="w-[600px] h-[100px]">
            Solicite agora!
          </Button>
        </Link>
      </div>
    </section>
  )
}