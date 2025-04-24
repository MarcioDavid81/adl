"use client";

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuMobile from "./MenuMobile";

const navItems = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Sobre Nós",
    href: "#sobre",
  },
  {
    label: "Produtos",
    href: "#produtos",
  },
  {
    label: "Serviços",
    href: "#servicos",
  },
  {
    label: "Cotações",
    href: "#cotacoes",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // IMPEDE O SCROOL DA PÁGINA QUANDO O MENU MOBILE ESTIVER ABERTO
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#1E3B39] shadow-md border-b border-[#7EBFB3]/20">
      <div className="container mx-auto flex justify-between items-center p-4">
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[#E6B325] transition-colors cursor-pointer whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MenuIcon
          size={32}
          className="md:hidden text-gray-400 hover:text-gray-500 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>

      <MenuMobile
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;
