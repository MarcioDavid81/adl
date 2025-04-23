import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WheatIcon } from "lucide-react";

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
        icon: <WheatIcon size={32} />
    },
    {
        product: "Milho",
        price: "R$ 80,00",
        icon: <WheatIcon size={32} />
    }
]

const PriceCard = () => {
    return ( 
        <>
            {priceItems.map((item: PriceItemProps) => (
                <Card key={item.product} className="bg-[#1E3B39] text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            {item.icon}
                            {item.product}
                        </CardTitle>
                        <CardDescription>{item.price}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </>
     );
}
 
export default PriceCard;