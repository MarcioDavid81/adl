import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartLine } from "lucide-react";

const Market = () => {
    return ( 
        <section id="cotacoes" className="py-20 bg-white text-[#1E3B39]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Cotações de Cereais
            </h2>
            <div className="w-24 h-1 bg-[#E6B325] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Acompanhe as cotações e variações do mercado de cereais para tomar
              as melhores decisões.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Tabs defaultValue="mensal" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger
                    value="trigo"
                    className="!rounded-button cursor-pointer whitespace-nowrap"
                  >
                    Trigo
                  </TabsTrigger>
                  <TabsTrigger
                    value="aveia-branca"
                    className="!rounded-button cursor-pointer whitespace-nowrap"
                  >
                    Aveia Branca
                  </TabsTrigger>
                  <TabsTrigger
                    value="azevem"
                    className="!rounded-button cursor-pointer whitespace-nowrap"
                  >
                    Azevém
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="trigo" className="h-[400px]">
                  <div className="w-full h-full">
                    <Card>
                      <CardHeader>
                        <CardTitle>Trigo</CardTitle>
                      </CardHeader>
                      <CardContent className="flex gap-4">
                        <ChartLine className="text-[#1E3B39] text-2xl" />
                        <div>
                          <span>R$1.400,00 por tn</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="aveia-branca" className="h-[400px]">
                  <div className="w-full h-full">
                    <Card>
                      <CardHeader>
                        <CardTitle>Aveia Branca</CardTitle>
                      </CardHeader>
                      <CardContent className="flex gap-4">
                        <ChartLine className="text-[#1E3B39] text-2xl" />
                        <div className="flex gap-4">
                          <p>PH acima de 50,0</p>
                          <span>R$1,00 por kg</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="azevem" className="h-[400px]">
                  <div className="w-full h-full">
                    <Card>
                      <CardHeader>
                        <CardTitle>Azevém</CardTitle>
                      </CardHeader>
                      <CardContent className="flex gap-4">
                        <ChartLine className="text-[#1E3B39] text-2xl" />
                        <div>
                          <span>R$4,00 por kg</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Tendências de Mercado</h3>
              <p className="mb-6">
                O mercado de cereais está em constante evolução, influenciado
                por diversos fatores como clima, políticas agrícolas, demanda
                global e inovações tecnológicas.
              </p>

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

              <Button className="mt-8 bg-[#1E3B39] hover:bg-[#1E3B39]/90 text-white !rounded-button cursor-pointer whitespace-nowrap">
                <i className="fas fa-download mr-2"></i>
                Baixar Relatório Completo
              </Button>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Market;