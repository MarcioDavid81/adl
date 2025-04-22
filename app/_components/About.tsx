const About = () => {
    return ( 
        <section id="sobre" className="py-20 bg-white text-[#1E3B39]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Sobre Nós</h2>
            <div className="w-24 h-1 bg-[#E6B325] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Conheça a história da ADL Comércio de Cereais e nossa trajetória
              de sucesso no mercado agrícola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1E3B39]">
                Nossa História
              </h3>
              <p className="mb-4">
                Fundada em 2005 na cidade de Cruz Alta, Rio Grande do Sul, a ADL
                Comércio de Cereais nasceu do sonho de oferecer soluções de
                qualidade para o setor agrícola da região.
              </p>
              <p className="mb-4">
                Com mais de 15 anos de experiência, nos tornamos referência no
                comércio de cereais, construindo relações sólidas com produtores
                e parceiros comerciais.
              </p>
              <p className="mb-8">
                Nossa equipe é formada por profissionais altamente qualificados
                e comprometidos com a excelência em todos os processos, desde a
                seleção dos melhores grãos até a entrega final ao cliente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#1E3B39]/5 p-6 rounded-lg text-center">
                  <i className="fas fa-handshake text-3xl text-[#E6B325] mb-3"></i>
                  <h4 className="font-bold mb-2">Missão</h4>
                  <p className="text-sm">
                    Fornecer produtos de alta qualidade, promovendo o
                    desenvolvimento sustentável do agronegócio.
                  </p>
                </div>
                <div className="bg-[#1E3B39]/5 p-6 rounded-lg text-center">
                  <i className="fas fa-eye text-3xl text-[#E6B325] mb-3"></i>
                  <h4 className="font-bold mb-2">Visão</h4>
                  <p className="text-sm">
                    Ser referência nacional no comércio de cereais, reconhecida
                    pela excelência e inovação.
                  </p>
                </div>
                <div className="bg-[#1E3B39]/5 p-6 rounded-lg text-center">
                  <i className="fas fa-star text-3xl text-[#E6B325] mb-3"></i>
                  <h4 className="font-bold mb-2">Valores</h4>
                  <p className="text-sm">
                    Ética, transparência, qualidade, sustentabilidade e
                    valorização das pessoas.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20agricultural%20facility%20with%20silos%20and%20grain%20storage%2C%20professional%20business%20setting%2C%20golden%20wheat%20field%20in%20foreground%2C%20sunset%20lighting%2C%20high%20quality%20photography%20for%20grain%20trading%20company&width=600&height=700&seq=4&orientation=portrait"
                alt="Instalações ADL"
                className="rounded-lg shadow-xl w-full h-auto object-cover object-top"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#E6B325] p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-[#1E3B39] font-bold text-xl mb-2">+15</div>
                <div className="text-[#1E3B39] text-sm">
                  Anos de experiência
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-[#7EBFB3] p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-white font-bold text-xl mb-2">100%</div>
                <div className="text-white text-sm">Satisfação garantida</div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default About;