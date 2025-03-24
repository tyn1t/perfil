import Image from "next/image"

export function Perfil () {
    return (
        <div className="flex flex-col mx-10 w-[1000px] my-10">
            <div className="flex items-center rounded-l-full">
                <div className="absolute  rounded-l-full w-1/2 h-60 bg-amber-300"></div>
                <div className="relative right-10 w-65 h-45 rounded-full">
                    <Image 
                        src={"/circle-user-solid.svg"}
                        alt="Foto de Perfil"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col relative gap-5">
                    <h1 className="relative text-center font-semibold text-3xl right-15 ">Giovanni Rodrigues de souza</h1>
                    <div className="relative right-7">
                        <p>Idade: 23 anos</p>
                        <p>Desenvolvedor</p>
                        <p>Experiência: 3 anos</p>
                    </div>
                </div>
            </div>
            
            <div className="w-[1000px]  text-ellipsis text-zinc-800 my-20">
                <p>
                    Desenvolvedor com três anos de experiência em  linguagens específicas, 
                    como JavaScript, Python. Apaixonado por tecnologia e soluções inovadoras, 
                    possui habilidades em front-end, back-end, desenvolvimento full-stack. 
                    Experiência em projetos [web], e conhecimento em [bancos de dados, frameworks, 
                    metodologias ágeis]. Sempre em busca de novos desafios e aprendizado contínuo.
                </p>
                <p>
                    Desenvolvedor com três anos de experiência em  linguagens específicas, 
                    como JavaScript, Python. Apaixonado por tecnologia e soluções inovadoras, 
                    possui habilidades em front-end, back-end, desenvolvimento full-stack. 
                    Experiência em projetos [web], e conhecimento em [bancos de dados, frameworks, 
                    metodologias ágeis]. Sempre em busca de novos desafios e aprendizado contínuo.
                </p>
            </div>
        </div>
    )
}