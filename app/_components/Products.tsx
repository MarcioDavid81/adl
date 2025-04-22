import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
    return ( 
        <section id="produtos" className="py-20 bg-[#f8f9fa] text-[#1E3B39]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nossos Produtos
            </h2>
            <div className="w-24 h-1 bg-[#E6B325] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Comercializamos cereais de alta qualidade, selecionados com rigor
              para atender às mais diversas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Close-up%20of%20premium%20quality%20wheat%20grains%2C%20golden%20color%2C%20professional%20studio%20lighting%2C%20clean%20background%2C%20high%20detail%2C%20product%20photography%20for%20grain%20trading%20company&width=600&height=400&seq=5&orientation=landscape"
                  alt="Trigo"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1E3B39] flex items-center">
                  <i className="fas fa-wheat-awn text-[#E6B325] mr-2"></i>
                  Trigo
                </CardTitle>
                <CardDescription className="text-[#1E3B39]/70">
                  Grãos selecionados de alta qualidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#1E3B39]">
                  Nosso trigo passa por rigoroso processo de seleção, garantindo
                  qualidade superior para a indústria de panificação e
                  alimentícia.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#1E3B39] hover:bg-[#1E3B39]/90 text-white w-full !rounded-button cursor-pointer whitespace-nowrap">
                  Solicitar Informações
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Close-up%20of%20premium%20quality%20white%20oats%20grains%2C%20professional%20studio%20lighting%2C%20clean%20background%2C%20high%20detail%2C%20product%20photography%20for%20grain%20trading%20company&width=600&height=400&seq=6&orientation=landscape"
                  alt="Aveia Branca"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1E3B39] flex items-center">
                  <i className="fas fa-seedling text-[#E6B325] mr-2"></i>
                  Aveia Branca
                </CardTitle>
                <CardDescription className="text-[#1E3B39]/70">
                  Nutrição e qualidade garantidas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#1E3B39]">
                  Nossa aveia branca é reconhecida por seu alto valor
                  nutricional, ideal para a indústria alimentícia e para
                  alimentação animal.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#1E3B39] hover:bg-[#1E3B39]/90 text-white w-full !rounded-button cursor-pointer whitespace-nowrap">
                  Solicitar Informações
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Close-up%20of%20premium%20quality%20black%20oats%20grains%2C%20professional%20studio%20lighting%2C%20clean%20background%2C%20high%20detail%2C%20product%20photography%20for%20grain%20trading%20company&width=600&height=400&seq=7&orientation=landscape"
                  alt="Aveia Preta"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1E3B39] flex items-center">
                  <i className="fas fa-leaf text-[#E6B325] mr-2"></i>
                  Aveia Preta
                </CardTitle>
                <CardDescription className="text-[#1E3B39]/70">
                  Ideal para cobertura de solo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#1E3B39]">
                  A aveia preta é excelente para cobertura de solo, adubação
                  verde e alimentação animal, contribuindo para a
                  sustentabilidade agrícola.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#1E3B39] hover:bg-[#1E3B39]/90 text-white w-full !rounded-button cursor-pointer whitespace-nowrap">
                  Solicitar Informações
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Close-up%20of%20premium%20quality%20Ukrainian%20oats%20grains%2C%20professional%20studio%20lighting%2C%20clean%20background%2C%20high%20detail%2C%20product%20photography%20for%20grain%20trading%20company&width=600&height=400&seq=8&orientation=landscape"
                  alt="Aveia Ucraniana"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1E3B39] flex items-center">
                  <i className="fas fa-wheat-alt text-[#E6B325] mr-2"></i>
                  Aveia Ucraniana
                </CardTitle>
                <CardDescription className="text-[#1E3B39]/70">
                  Variedade premium de alta produtividade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#1E3B39]">
                  A aveia ucraniana se destaca pela alta produtividade e
                  resistência, sendo uma excelente opção para produtores que
                  buscam resultados superiores.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#1E3B39] hover:bg-[#1E3B39]/90 text-white w-full !rounded-button cursor-pointer whitespace-nowrap">
                  Solicitar Informações
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white shadow-lg border-none hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Close-up%20of%20premium%20quality%20ryegrass%20seeds%2C%20professional%20studio%20lighting%2C%20clean%20background%2C%20high%20detail%2C%20product%20photography%20for%20grain%20trading%20company&width=600&height=400&seq=9&orientation=landscape"
                  alt="Azevém"
                  className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#1E3B39] flex items-center">
                  <i className="fas fa-spa text-[#E6B325] mr-2"></i>
                  Azevém
                </CardTitle>
                <CardDescription className="text-[#1E3B39]/70">
                  Forrageira de alta qualidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#1E3B39]">
                  O azevém é uma forrageira de inverno de alta qualidade, ideal
                  para pastagens e cobertura de solo, proporcionando excelente
                  nutrição para o gado.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#1E3B39] hover:bg-[#1E3B39]/90 text-white w-full !rounded-button cursor-pointer whitespace-nowrap">
                  Solicitar Informações
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
     );
}
 
export default Products;