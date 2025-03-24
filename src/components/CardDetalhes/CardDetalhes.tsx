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

const logos = [
    {id:0, name:"Javascript", src:"/java-script.png",},
    {id:1, name:"Pythons", src:"/python.png",},
    {id:2, name:"Django", src:"/django.png" , },
    {id:3, name:"Next", src:"/Alternative.svg", },
]

export function CardDetalhes ({ className, ...props }: CardProps) {
    return (
        <div>
        <Card className={cn("w-40", className)} {...props}>
            <CardHeader>
                <CardTitle>Habilidades </CardTitle>
            </CardHeader>
            <CardContent className="grid  gap-4">
                {logos.map((log) => 
                    (<div key={log.id} className="flex items-center gap-2">
                        <Image
                            src={log.src}
                            alt={log.name}
                            width={30}
                            height={30}
                        className="object-cover"
                        />
                        <CardTitle className="hover:text-amber-200">{log.name}</CardTitle>
                    </div>
                ))}
                
            </CardContent>
        </Card>
    </div>
    )
}