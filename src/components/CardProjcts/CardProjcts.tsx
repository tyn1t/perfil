import Image from "next/image";
import Link from "next/link";


interface CardProdutoProps {
    className?: string;
}



export function CardProjcts({ className}: CardProdutoProps)  {
    
    const imgPath = process.env.NEXT_PUBLIC_IMAGE_PATH
    
    console.log(imgPath)
    
    return (
        <div  id="projeto"  className={`md:border md:border-amber-500 md:p-6 ${className || ""}`}>
        
            <div className="text-center font-bold text-3xl mx-auto my-8">
                <h2>Projetos</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
    
            <div  className="border border-gray-300 rounded-lg p-4 shadow-lg max-w-xs">
                <Link href="https://tyn1t.github.io/github-pages/" target="_blank">
                    <h1 className="text-xl font-semibold text-center mb-4">
                        Landing Page de Pet Shop
                    </h1>
                    <div className="relative w-32 h-40 mx-auto">
                        <Image 
                        src={"/perfil/dog-3431913_640.jpg"}
                        alt="Landing Page de Pet Shop"
                        fill
                        className="object-cover"
                        />
                    </div>
                </Link>
            </div>
            </div>
        </div>
    );
}
