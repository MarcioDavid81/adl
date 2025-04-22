"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPinned, Phone } from "lucide-react";
import HorarioComercialAvancado from "./HorarioComercial";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return ( 
         <section id="contato" className="py-20 bg-[#1E3B39] text-white">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      Entre em Contato
                    </h2>
                    <div className="w-24 h-1 bg-[#E6B325] mx-auto mb-8"></div>
                    <p className="text-lg max-w-3xl mx-auto">
                      Estamos à disposição para atender às suas necessidades e
                      esclarecer suas dúvidas.
                    </p>
                  </div>
        
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">
                        Envie-nos uma mensagem
                      </h3>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="nome"
                              className="block mb-2 text-sm font-medium"
                            >
                              Nome
                            </label>
                            <Input
                              id="nome"
                              type="text"
                              placeholder="Seu nome"
                              className="bg-[#1E3B39] border-[#7EBFB3]/30 focus:border-[#E6B325] text-white placeholder:text-white/50"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium"
                            >
                              Email
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Seu email"
                              className="bg-[#1E3B39] border-[#7EBFB3]/30 focus:border-[#E6B325] text-white placeholder:text-white/50"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="assunto"
                            className="block mb-2 text-sm font-medium"
                          >
                            Assunto
                          </label>
                          <Input
                            id="assunto"
                            type="text"
                            placeholder="Assunto da mensagem"
                            className="bg-[#1E3B39] border-[#7EBFB3]/30 focus:border-[#E6B325] text-white placeholder:text-white/50"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="mensagem"
                            className="block mb-2 text-sm font-medium"
                          >
                            Mensagem
                          </label>
                          <Textarea
                            id="mensagem"
                            placeholder="Sua mensagem"
                            rows={5}
                            className="bg-[#1E3B39] border-[#7EBFB3]/30 focus:border-[#E6B325] text-white placeholder:text-white/50"
                          />
                        </div>
                        <Button className="bg-[#E6B325] hover:bg-[#E6B325]/90 text-[#1E3B39] font-bold px-8 py-6 !rounded-button cursor-pointer whitespace-nowrap">
                          Enviar Mensagem
                        </Button>
                      </form>
                    </div>
        
                    <div>
                      <h3 className="text-2xl font-bold mb-6">
                        Informações de Contato
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="bg-[#E6B325] w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                            <MapPinned className="text-[#1E3B39]" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Endereço</h4>
                            <p className="text-[#7EBFB3]">Av. General Osório, 1234</p>
                            <p className="text-[#7EBFB3]">Centro - Cruz Alta/RS</p>
                            <p className="text-[#7EBFB3]">CEP: 98000-000</p>
                          </div>
                        </div>
        
                        <div className="flex items-start">
                          <div className="bg-[#E6B325] w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                            <Phone className="text-[#1E3B39]" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Telefone</h4>
                            <p className="text-[#7EBFB3]">(55) 3321-0000</p>
                            <p className="text-[#7EBFB3]">(55) 99999-0000</p>
                          </div>
                        </div>
        
                        <div className="flex items-start">
                          <div className="bg-[#E6B325] w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                            <Mail className="text-[#1E3B39]" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Email</h4>
                            <p className="text-[#7EBFB3]">contato@adlcereais.com.br</p>
                            <p className="text-[#7EBFB3]">
                              comercial@adlcereais.com.br
                            </p>
                          </div>
                        </div>
        
                        <div className="flex items-start">
                          <div className="bg-[#E6B325] w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                            <Clock className="text-[#1E3B39]" />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">Horário de Funcionamento</h4>
                            <p className="text-[#7EBFB3]">Segunda a Sexta: 8h às 18h</p>
                            <p className="text-[#7EBFB3]">Sábado: 8h às 12h</p>
                          </div>
                        </div>
                        <HorarioComercialAvancado
                          horarioAbertura={8}
                          horarioFechamento={18}
                          diasFuncionamento={[1, 2, 3, 4, 5, 6]} // Segunda a sábado
                          mensagemAberto="Loja aberta! Venha nos visitar!"
                          mensagemFechado="Loja fechada no momento. ⏳"
                          mensagemForaDoDia="Fechado aos domingos. Volte segunda-feira!"
                        />
                      </div>
        
                      <div className="mt-8">
                        <h4 className="font-bold mb-4">Siga-nos nas Redes Sociais</h4>
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
                    </div>
                  </div>
                </div>
              </section>
     );
}
 
export default Contact;