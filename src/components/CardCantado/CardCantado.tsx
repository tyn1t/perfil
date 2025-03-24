import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import Link from "next/link";

interface CardProps {
    className: string;
}


export function CardCantado ({ className, ...props }: CardProps) {
    return (
        <div>
        <Card className={cn("w-40 mx-0", className)} {...props}>
            <CardContent className="grid  gap-4">
                <Link 
                    href="tel:+5592992192528"
                >
                    <div className="flex items-center gap-2 hover:bg-amber-100 hover:py-1 hover:px-2 hover:my-2 hover:rounded-full">
                            <Image
                                src={"/icons8-github-100.svg"}
                                alt="whatsapp"
                                width={30}
                                height={30}
                                className="object-cover"
                            />
                            <CardTitle>GitHub</CardTitle>
                    </div>
                </Link>   
                <Link 
                    href="tel:+5592992192528"
                >
                    <div className="flex items-center gap-2">
                        <Image
                            src={"/whatsapp.png"}
                            alt="whatsapp"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                        <CardTitle>
                            WhatsApp
                        </CardTitle>
                    </div>
                </Link>
                <div className="flex items-center gap-2">
                    <Image
                        src={"/gmail.png"}
                        alt="whatsapp"
                        width={30}
                        height={30}
                        className="object-cover"
                    />
                    <CardTitle>Mail</CardTitle>
                </div>
            </CardContent>
        </Card>
    </div>
    )
}