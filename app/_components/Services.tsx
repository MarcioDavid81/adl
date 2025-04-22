import { BadgeDollarSign, ChartLine, Handshake, Microscope, Truck, Warehouse } from "lucide-react";

const Services = () => {
    return ( 
        <section id="servicos" className="py-20 bg-[#1E3B39] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-[#E6B325] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Oferecemos soluções completas para atender às necessidades do
              setor agrícola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1E3B39]/30 border border-[#7EBFB3]/20 p-8 rounded-lg hover:bg-[#1E3B39]/50 transition-colors">
              <div className="bg-[#E6B325] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BadgeDollarSign className="text-[#1E3B39] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Compra e Venda de Cereais
              </h3>
              <p className="text-center">
                Realizamos a compra e venda de cereais, oferecendo as melhores
                condições do mercado e garantindo a qualidade dos produtos.
              </p>
            </div>

            <div className="bg-[#1E3B39]/30 border border-[#7EBFB3]/20 p-8 rounded-lg hover:bg-[#1E3B39]/50 transition-colors">
              <div className="bg-[#E6B325] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Truck className="text-[#1E3B39] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Logística e Transporte
              </h3>
              <p className="text-center">
                Contamos com uma estrutura logística eficiente para garantir a
                entrega dos produtos nos prazos estabelecidos.
              </p>
            </div>

            <div className="bg-[#1E3B39]/30 border border-[#7EBFB3]/20 p-8 rounded-lg hover:bg-[#1E3B39]/50 transition-colors">
              <div className="bg-[#E6B325] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Warehouse className="text-[#1E3B39] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Armazenamento
              </h3>
              <p className="text-center">
                Oferecemos serviços de armazenamento com instalações modernas e
                seguras, garantindo a preservação da qualidade dos grãos.
              </p>
            </div>

            <div className="bg-[#1E3B39]/30 border border-[#7EBFB3]/20 p-8 rounded-lg hover:bg-[#1E3B39]/50 transition-colors">
              <div className="bg-[#E6B325] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ChartLine className="text-[#1E3B39] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Consultoria de Mercado
              </h3>
              <p className="text-center">
                Fornecemos informações atualizadas sobre o mercado de cereais,
                auxiliando nossos clientes na tomada de decisões estratégicas.
              </p>
            </div>

            <div className="bg-[#1E3B39]/30 border border-[#7EBFB3]/20 p-8 rounded-lg hover:bg-[#1E3B39]/50 transition-colors">
              <div className="bg-[#E6B325] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Microscope className="text-[#1E3B39] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Análise de Qualidade
              </h3>
              <p className="text-center">
                Realizamos análises rigorosas para garantir a qualidade dos
                cereais comercializados, atendendo aos mais altos padrões do
                mercado.
              </p>
            </div>

            <div className="bg-[#1E3B39]/30 border border-[#7EBFB3]/20 p-8 rounded-lg hover:bg-[#1E3B39]/50 transition-colors">
              <div className="bg-[#E6B325] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Handshake className="text-[#1E3B39] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Parcerias Estratégicas
              </h3>
              <p className="text-center">
                Estabelecemos parcerias estratégicas com produtores e empresas
                do setor, criando relações de confiança e benefício mútuo.
              </p>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Services;