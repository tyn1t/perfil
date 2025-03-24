import Image from "next/image"

const apiUrl = process.env.PUBLIC;

export function Perfil () {
    return (
        <section id="sobre" className="flex flex-col md:not-first-of-type:mx-2 max-w-screen-lg my-4 md:my-10  ">
            <div className="flex items-center rounded-l-full -top-2 md:top-0">
                <div className="absolute  rounded-l-full md:w-1/2 md:h-60 bg-amber-300"></div>
                <div className="relative  md:right-10 w-64  h-56 -z-30 md:z-0 rounded-full  overflow-hidden">
                    <Image 
                        src={`${apiUrl}/circle-user-solid.svg`}
                        alt="Foto de Perfil"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col gap-5 md:relative md:top-1 md:right-16 md:z-0 ">
                    <h1 className="font-semibold mx-2 not-only:text-lg md:text-xl text-left md:text-center">Giovanni Rodrigues de Souza</h1>
                    <div className="relative w-56 left-4 md:left-0 md:right-9 text-sm  md:text-lg text-left md:text-center">
                        <p>Idade: 23 anos</p>
                        <p>Desenvolvedor</p>
                        <p>Experiência: 3 anos</p>
                    </div>
                </div>
                
            </div>
            <div className="w-full h-0.5 bg-amber-300 my-1 md:hidden"></div>
            
            <div  className="w-full mx-auto max-w-[1000px]  text-ellipsis text-zinc-800 my-4 md:my-20 text-center md:text-left">
                <h3 className="text-2xl font-semibold my-4">Sobre Mim</h3>
                <p>
                    Desenvolvedor com três anos de experiência em  linguagens específicas, 
                    como JavaScript, Python. Apaixonado por tecnologia e soluções inovadoras, 
                    possui habilidades em front-end, back-end, desenvolvimento full-stack. 
                    Experiência em projetos [web], e conhecimento em [bancos de dados, frameworks, 
                    metodologias ágeis]. Sempre em busca de novos desafios e aprendizado contínuo.
                </p>
                
                <h3 className="text-2xl font-semibold my-4 mt-3">Experiência</h3>
                <ul className="">
                    <li>
                        <strong>Backend:</strong> Desenvolva APIs robustas, implemente sistemas de autenticação e crie soluções que demonstram sua habilidade em lidar com arquiteturas complexas e manipulação eficiente de dados.
                    </li>
                    <li>
                        <strong>Frontend:</strong> Construa interfaces de usuário interativas e responsivas, utilizando frameworks modernos e aplicando boas práticas de design para oferecer uma experiência intuitiva e visualmente agradável.
                    </li>
                    <li>
                        <strong>Banco de Dados:</strong> Demonstre sua expertise em modelagem de dados, otimização de consultas e gestão eficaz de diferentes tipos de sistemas de banco de dados, garantindo alta performance e escalabilidade.
                    </li>
                </ul>
                
            </div>
        </section>
    )
}