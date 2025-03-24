import {
Card,
CardContent,
// CardDescription,
// CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils"
import Image from "next/image";

interface CardProps {
    className: string;
}

const apiUrl = process.env.PUBLIC;

const logos = [
    {id:0, name:"Javascript", src:`${apiUrl}/java-script.png`,},
    {id:1, name:"Pythons", src: "/perfil/python.png",},
    {id:2, name:"Django", src:`${apiUrl}/django.png` , },
    {id:3, name:"Next", src:`${apiUrl}/Alternative.svg`, },
]

export function CardDetalhes ({ className, ...props }: CardProps) {


    return (
        <Card className={cn("w-36 md:w-40 lg:w-44", className)} {...props}>
            <CardHeader>
                <CardTitle>Habilidades </CardTitle>
            </CardHeader>
            <CardContent className="grid  gap-2">
                {logos.map((log) => 
                    (<div key={log.id} className="flex items-center gap-2">
                        <Image
                            src={log.src}
                            alt={log.name}
                            width={25}
                            height={25}
                        className="object-cover"
                        />
                        <CardTitle className="hover:text-amber-200">{log.name}</CardTitle>
                    </div>
                ))}
                
            </CardContent>
        </Card>
    )
}