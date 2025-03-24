import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

interface CardProps {
    className: string;
}




export function CardCantado ({ className, ...props }: CardProps) {
    
    const apiUrl = process.env.NEXT_PUBLIC_IMAGE_PATH;

    const contados = [
        {id:0, log:`${apiUrl}/icons8-github-100.svg`, name:"GitHub", url:"https://github.com/tyn1t", target:"_blank"},
        {id:1, log:`${apiUrl}/whatsapp.png`, name:"WhatsApp", url:"tel:+5592992192528"},
        {id:2, log:`${apiUrl}/gmail.png`, name:"Mail", url:"#"},
    ]

    return (
        <div id="contado">
        <Card className={cn("w-36 md:w-40 lg:w-44", className)} {...props}>
            <CardHeader >
                <CardTitle>
                    Contado
                </CardTitle>
            </CardHeader>
            <CardContent className="grid  gap-4">
                {contados.map((contado) => (
                    <div key={contado.id}>
                        <Link 
                            href={contado.url} target={contado.target || ""}
                        >
                            <div className="flex items-center gap-2 hover:bg-amber-100 hover:py-1 hover:px-2 hover:my-2 hover:rounded-full">
                                    <Image
                                        src={contado.log}
                                        alt="github"
                                        width={25}
                                        height={25}
                                        className="object-cover"
                                    />
                                    <CardTitle>{contado.name}</CardTitle>
                            </div>
                        </Link>
                    </div>
                ))}
            </CardContent>
        </Card>
    </div>
    )
}