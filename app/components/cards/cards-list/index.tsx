import Image from "next/image"

export const CardList = () => {
  return (
    <section className="w-full bg-black items-center justify-center">
      <div className="flex flex-col gap-6 lg:gap-12 lg:flex-row px-8 justify-evenly">
        <Image 
          width={350}
          height={500}
          src={"/images/products/Netflix.png"}
          alt="Netflix"
        />
        <Image 
          width={350}
          height={500}
          src={"/images/products/PrimeVideo.png"}
          alt="Prime Video"
        />
        <Image 
          width={350}
          height={500}
          src={"/images/products/Max.png"}
          alt="Max"
        />
        <Image 
          width={350}
          height={500}
          src={"/images/products/DisneyPlus.png"}
          alt="Disney Plus"
        />
      </div>
      <div className="flex flex-col gap-6 lg:gap-12 lg:flex-row pt-8 px-8 justify-evenly">
        <Image 
          width={350}
          height={500}
          src={"/images/products/StarPlus.png"}
          alt="Star Plus"
        />
        <Image 
          width={350}
          height={500}
          src={"/images/products/AppleTV.png"}
          alt="Apple TV"
        />
        <Image 
          width={350}
          height={500}
          src={"/images/products/Paramount.png"}
          alt="Paramount"
        />
        <Image 
          width={350}
          height={500}
          src={"/images/products/GloboPlay.png"}
          alt="Globo Play"
        />
      </div>
    </section>
  )
}