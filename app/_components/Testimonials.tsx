"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
    return ( 
        <section className="py-20 bg-[#f8f9fa] text-[#1E3B39] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Depoimentos</h2>
            <div className="w-24 h-1 bg-[#E6B325] mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Veja o que nossos clientes e parceiros dizem sobre a ADL Comércio
              de Cereais.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="pb-16"
          >
            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E6B325] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-[#1E3B39]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">João Silva</h4>
                    <p className="text-sm text-[#1E3B39]/60">
                      Produtor Rural - Cruz Alta/RS
                    </p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "Trabalho com a ADL há mais de 8 anos e sempre fui muito bem
                  atendido. A qualidade dos produtos e o compromisso com os
                  prazos são diferenciais importantes."
                </p>
                <div className="flex text-[#E6B325]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-[#7EBFB3] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Maria Oliveira</h4>
                    <p className="text-sm text-[#1E3B39]/60">
                      Cooperativa Agrícola - Ijuí/RS
                    </p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "A parceria com a ADL tem sido fundamental para o crescimento
                  da nossa cooperativa. A transparência nas negociações e a
                  qualidade dos cereais são pontos fortes."
                </p>
                <div className="flex text-[#E6B325]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-[#1E3B39] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Carlos Santos</h4>
                    <p className="text-sm text-[#1E3B39]/60">
                      Indústria de Alimentos - Santa Maria/RS
                    </p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "A ADL é uma parceira confiável que entende as necessidades da
                  nossa indústria. Os cereais fornecidos são de excelente
                  qualidade, o que reflete nos nossos produtos."
                </p>
                <div className="flex text-[#E6B325]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E6B325] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-[#1E3B39]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold">Ana Rodrigues</h4>
                    <p className="text-sm text-[#1E3B39]/60">
                      Produtora Rural - Passo Fundo/RS
                    </p>
                  </div>
                </div>
                <p className="italic mb-4">
                  "A consultoria de mercado oferecida pela ADL tem sido
                  fundamental para as minhas decisões de plantio. Além disso, a
                  qualidade das sementes é excepcional."
                </p>
                <div className="flex text-[#E6B325]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
     );
}
 
export default Testimonials;