import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartLine } from "lucide-react";
import PriceCard from "./PriceCard";

const Market = () => {
    return ( 
        <section id="cotacoes" className="py-20 bg-white text-[#1E3B39]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Cotações de Cereais
            </h3>
            <div className="w-24 h-1 bg-[#E6B325] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Acompanhe as cotações e variações do mercado de cereais para tomar
              as melhores decisões.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6">Cotações Atuais</h3>
              <div className="space-y-6">
                <PriceCard />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Tendências de Mercado</h3>
              <div className="space-y-6">
                <div className="bg-[#f8f9fa] p-6 rounded-lg border-l-4 border-[#E6B325]">
                  <h4 className="font-bold mb-2 flex items-center">
                    <i className="fas fa-arrow-trend-up text-[#E6B325] mr-2"></i>
                    Trigo em Alta
                  </h4>
                  <p className="text-sm">
                    O mercado de trigo apresenta tendência de alta para os
                    próximos meses, impulsionado pela crescente demanda global e
                    condições climáticas favoráveis.
                  </p>
                </div>

                <div className="bg-[#f8f9fa] p-6 rounded-lg border-l-4 border-[#7EBFB3]">
                  <h4 className="font-bold mb-2 flex items-center">
                    <i className="fas fa-chart-pie text-[#7EBFB3] mr-2"></i>
                    Aveia: Mercado Estável
                  </h4>
                  <p className="text-sm">
                    O mercado de aveia mantém-se estável, com perspectivas
                    positivas para o segundo semestre, especialmente para a
                    aveia branca e ucraniana.
                  </p>
                </div>

                <div className="bg-[#f8f9fa] p-6 rounded-lg border-l-4 border-[#1E3B39]">
                  <h4 className="font-bold mb-2 flex items-center">
                    <i className="fas fa-seedling text-[#1E3B39] mr-2"></i>
                    Azevém: Oportunidade de Investimento
                  </h4>
                  <p className="text-sm">
                    O azevém apresenta-se como uma excelente oportunidade de
                    investimento, com demanda crescente para pastagens de
                    inverno e cobertura de solo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Market;