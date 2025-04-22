import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1E3B39] shadow-md border-b border-[#7EBFB3]/20">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <Image
            src="/adl-sf.png"
            alt="Logo"
            width={60}
            height={50}
            className="mr-2"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
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
      </div>
    </header>
  );
};

export default Header;
