import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const MenuMobile = () => {
  return (
    <>
      <nav className="flex flex-col md:hidden space-y-8">
        <a
          href="#inicio"
          className="text-white hover:text-[#E6B325] transition-colors cursor-pointer whitespace-nowrap"
        >
          Início
        </a>
        <a
          href="#sobre"
          className="text-white hover:text-[#E6B325] transition-colors cursor-pointer whitespace-nowrap"
        >
          Sobre Nós
        </a>
        <a
          href="#produtos"
          className="text-white hover:text-[#E6B325] transition-colors cursor-pointer whitespace-nowrap"
        >
          Produtos
        </a>
        <a
          href="#servicos"
          className="text-white hover:text-[#E6B325] transition-colors cursor-pointer whitespace-nowrap"
        >
          Serviços
        </a>
        <a
          href="#cotacoes"
          className="text-white hover:text-[#E6B325] transition-colors cursor-pointer whitespace-nowrap"
        >
          Cotações
        </a>
        <a
          href="#contato"
          className="text-white hover:text-[#E6B325] transition-colors cursor-pointer whitespace-nowrap"
        >
          Contato
        </a>
      </nav>
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-[#E6B325] !rounded-button cursor-pointer whitespace-nowrap"
        >
          <MenuIcon size={40} />
        </Button>
      </div>
    </>
  );
};

export default MenuMobile;
