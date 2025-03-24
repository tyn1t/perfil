import { CardCantado } from "@/components/CardCantado/CardCantado";
import { CardDetalhes } from "@/components/CardDetalhes/CardDetalhes";
import { CardProjcts } from "@/components/CardProjcts/CardProjcts";
import Footer from "@/components/Footer/footer";
import { Perfil } from "@/components/Perfil/Perfil";
import { Row } from "@/components/Row/Row";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex relative mx-4 h-[1200px] ">
      <Row className="">
        <div className="relative items-center  z-30 right-1 top-80 rounded-full h-16 w-16 bg-blue-300 ">
          <Image
              src={"/arrow-right-solid.svg"}
              alt="arrow-right-solid"
              width={50}
              height={10}
              className="mx-auto"
          />
        </div>
        <div className="relative z-30 right-1 top-96 mt-40  h-16 w-16 rounded-full bg-blue-300">
          <Image
              src={"/arrow-right-solid.svg"}
              alt="arrow-right-solid"
              width={50}
              height={10}
              className="mx-auto"
          />
        </div>
      </Row>
      <div className="flex relative right-12 my-10 px-5 w-[1000px] h-96 ">
        <div className="flex flex-col  ">
          <div className="relative">
            <Perfil />
          </div>
          <div className="">
            <CardProjcts />
          </div>
        </div>
        <Row className="relative -top-11"/>
        <div className="flex flex-col relative -right-28 gap-10 ">
          <CardDetalhes className={""}/>
          <CardCantado className=""/>
        </div>
      </div>
    </main>
    <footer className="bottom-1">
      <Footer />
    </footer>
    </>
  )
}
