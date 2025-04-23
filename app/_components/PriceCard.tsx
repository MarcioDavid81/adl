import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BeanIcon, WheatIcon } from "lucide-react";
import { GiCorn } from "react-icons/gi";

interface PriceItemProps {
    product: string;
    price: string;
    icon: React.ReactNode;
}

const priceItems = [
    {
        product: "Trigo",
        price: "R$ 70,00",
        icon: <WheatIcon size={32} />
    },
    {
        product: "Soja",
        price: "R$ 120,00",
        icon: <BeanIcon size={32} />
    },
    {
        product: "Milho",
        price: "R$ 80,00",
        icon: <GiCorn size={32} />
    }
]

const PriceCard = () => {
    return ( 
        <>
            {priceItems.map((item: PriceItemProps) => (
                <Card key={item.product} className="bg-[#1E3B39] text-white">
                    <CardHeader className="flex flex-row items-center justify-center gap-6">
                        <CardTitle className="flex items-center gap-4">
                            {item.icon}
                            {item.product}
                        </CardTitle>
                        <CardDescription className="text-2xl font-bold text-[#E6B325]">{item.price}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </>
     );
}
 
export default PriceCard;