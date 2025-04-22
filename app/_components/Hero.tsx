import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
    return ( 
        <section
        id="inicio"
        className="relative min-h-[600px] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Beautiful%20golden%20wheat%20field%20with%20sunset%2C%20aerial%20view%20of%20agricultural%20landscape%2C%20rich%20golden%20colors%2C%20dark%20green%20accents%2C%20professional%20photography%20for%20grain%20trading%20company%2C%20high%20quality%2C%20atmospheric%20lighting&width=1440&height=600&seq=2&orientation=landscape"
            alt="Campo de trigo"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3B39]/90 to-[#1E3B39]/60"></div>
        </div>

        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">ADL</span>
              <span className="text-[#E6B325]"> Comércio de Cereais</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#7EBFB3]">
              Qualidade e excelência desde 2005
            </p>
            <p className="text-lg mb-8 max-w-xl">
              Especialistas no comércio de trigo, aveia e azevém, com
              compromisso de qualidade e atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="https://wa.me/552199999999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E6B325]">
                <Button className="bg-[#E6B325] hover:bg-[#E6B325]/90 text-[#1E3B39] font-bold px-8 py-6 text-lg !rounded-button cursor-pointer whitespace-nowrap">
                  Solicitar Cotação
                </Button>
              </Link>
              <Link
                href="#produtos"
                className="text-white hover:text-[#E6B325]"
              >
                <Button
                  variant="outline"
                  className="border-[#7EBFB3] text-[#7EBFB3] hover:bg-[#7EBFB3]/10 px-8 py-6 text-lg !rounded-button cursor-pointer whitespace-nowrap"
                >
                  Conheça Nossos Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Hero;