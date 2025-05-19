import PriceCard from "./PriceCard";

const Market = () => {
    return ( 
        <section id="cotacoes" className="py-20 bg-white text-[#1E3B39]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              Balcão ADL
            </h3>
            <div className="w-24 h-1 bg-[#E6B325] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Acompanhe as cotações e fique sabendo o que estamos comprando.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold">Estamos Comprando</h3>
              <p className="mb-6">Preços válidos para hoje: {new Date().toLocaleDateString()}.</p>
              <div className="space-y-6">
                <PriceCard />
              </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold">Tendências de Mercado</h3>
              <p className="mb-6">Preços válidos para hoje: {new Date().toLocaleDateString()}.</p>
              
                <iframe id="frmPreview" frameBorder="0" scrolling="no" width="500" height="400" style={{ border: "none" }} src="https://selos.agrolink.com.br/selos/carregaselo?servico=cotacoes&uf=9839,9844,9845&p=1090,9,1812&l=&esp=&cor=rgb(30,59,57)&w=300&h=200"></iframe>
              
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Market;