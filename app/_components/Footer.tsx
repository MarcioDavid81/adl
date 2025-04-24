import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return ( 
         <footer className="bg-[#1E3B39] text-white pt-16 pb-8 border-t border-[#7EBFB3]/20">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                      <div className="flex flex-col gap-4 items-center">
                        <Image
                          src="/adl-sf.png"
                          alt="Logo ADL Comércio de Cereais"
                          width={150}
                          height={200}
                        />
                        <p className="mb-6">
                          Qualidade e excelência no comércio de cereais desde 2005,
                          atendendo produtores e empresas com compromisso e
                          responsabilidade.
                        </p>
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="bg-[#7EBFB3] hover:bg-[#E6B325] w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <FaFacebook className="text-[#1E3B39]" size={24} />
                        </a>
                        <a
                          href="#"
                          className="bg-[#7EBFB3] hover:bg-[#E6B325] w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <FaInstagram className="text-[#1E3B39]" size={24} />
                        </a>
                        <a
                          href="#"
                          className="bg-[#7EBFB3] hover:bg-[#E6B325] w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <FaLinkedin className="text-[#1E3B39]" size={24} />
                        </a>
                        <a
                          href="#"
                          className="bg-[#7EBFB3] hover:bg-[#E6B325] w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <FaWhatsapp className="text-[#1E3B39]" size={24} />
                        </a>
                      </div>
                    </div>
        
                    <div>
                      <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
                      <ul className="space-y-3">
                        <li>
                          <a
                            href="#inicio"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Início
                          </a>
                        </li>
                        <li>
                          <a
                            href="#sobre"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Sobre Nós
                          </a>
                        </li>
                        <li>
                          <a
                            href="#produtos"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Produtos
                          </a>
                        </li>
                        <li>
                          <a
                            href="#servicos"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Serviços
                          </a>
                        </li>
                        <li>
                          <a
                            href="#cotacoes"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Cotações
                          </a>
                        </li>
                        <li>
                          <a
                            href="#contato"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Contato
                          </a>
                        </li>
                      </ul>
                    </div>
        
                    <div>
                      <h4 className="text-lg font-bold mb-6">Produtos</h4>
                      <ul className="space-y-3">
                        <li>
                          <a
                            href="#"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Trigo
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Aveia Branca
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Aveia Preta
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Aveia Ucraniana
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-[#7EBFB3] hover:text-[#E6B325] transition-colors cursor-pointer"
                          >
                            Azevém
                          </a>
                        </li>
                      </ul>
                    </div>
        
                    <div>
                      <h4 className="text-lg font-bold mb-6">Contato</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <i className="fas fa-map-marker-alt text-[#E6B325] mt-1 mr-3"></i>
                          <span>Av. General Osório, 1234, Centro - Cruz Alta/RS</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-phone text-[#E6B325] mt-1 mr-3"></i>
                          <span>(55) 3321-0000</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-envelope text-[#E6B325] mt-1 mr-3"></i>
                          <span>contato@adlcereais.com.br</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-clock text-[#E6B325] mt-1 mr-3"></i>
                          <span>Seg-Sex: 8h às 18h, Sáb: 8h às 12h</span>
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  <div className="pt-8 border-t border-[#7EBFB3]/20 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-[#7EBFB3] mb-4 md:mb-0">
                      &copy; {new Date().getFullYear()} ADL Comércio de Cereais. Todos os direitos reservados.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="/privacy-politic"
                        className="text-sm text-[#7EBFB3] hover:text-[#E6B325] cursor-pointer"
                      >
                        Política de Privacidade
                      </a>
                      <a
                        href="/terms-of-use"
                        className="text-sm text-[#7EBFB3] hover:text-[#E6B325] cursor-pointer"
                      >
                        Termos de Uso
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
     );
}
 
export default Footer;