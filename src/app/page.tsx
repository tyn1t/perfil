import { CardCantado } from "@/components/CardCantado/CardCantado";
import { CardDetalhes } from "@/components/CardDetalhes/CardDetalhes";
import { CardProjcts } from "@/components/CardProjcts/CardProjcts";
import Footer from "@/components/Footer/footer";
import { Perfil } from "@/components/Perfil/Perfil";
import { Row } from "@/components/Row/Row";
import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Perfil',
  description: 'Confira o perfil completo de um currículo, destacando habilidades, experiências e competências profissionais essenciais para a construção de uma carreira de sucesso.',
  icons: ["/perfil/circle-user-solid.svg"]
}

const apiUrl = process.env.NEXT_PUBLIC_IMAGE_PATH;;


export default function Home() {
  

  return (
    <>
      <main className="flex flex-col  md:flex-row  md:mx-10 lg:mx-3   min-h-screen overflow-hidden">
        <Row className="hidden md:flex lg:mx-1">
          <div className="relative items-center  z-30 right-1 top-80 rounded-full h-16 w-16 bg-blue-300  lg:bg-amber-100  
            lg:top-96
          ">
            <Image
                src={`${apiUrl}/arrow-right-solid.svg`}
                alt="arrow-right-solid"
                width={50}
                height={10}
                className="mx-auto"
            />
          </div>
          <div className="relative z-30 right-1 top-96 mt-40 lg:top-72 h-16 w-16 rounded-full bg-blue-300 lg:bg-amber-100 ">
            <Image
                src={`${apiUrl}/arrow-right-solid.svg`}
                alt="arrow-right-solid"
                width={50}
                height={10}
                className="mx-auto"
            />
          </div>
        </Row>
        <div className="flex flex-col md:flex-row relative md:my-10 px-5 max-w-[1200px] w-full min-h-96 mx-auto md:mx-0
          lg:mx-0
        ">
          <div className="flex flex-col">
            <div className="relative">
              <Perfil />
            </div>
            <div  className="">
              <CardProjcts />
            </div>
          </div>
          <Row className="relative -top-11 hidden md:flex lg:mx-0"/>
          <div className="flex md:flex-col lg:flex-col my-3 md:relative md:-right-28 lg:-right-16 gap-2 mx-auto">
              <CardDetalhes className="" />
              <CardCantado className="" />
          </div>
        </div>
      </main>
    <footer className="bottom-0">
      <Footer />
    </footer>
    </>
  )
}
