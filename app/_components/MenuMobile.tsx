'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-25 z-40" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-[60%] bg-[#1e3b39] z-50 shadow-lg transition-transform duration-300 transform">
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-50">Menu</h3>
              <X size={32} onClick={onClose} className="text-gray-400 hover:text-gray-500 cursor-pointer" />
          </div>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#e6b325] hover:bg-gray-50 hover:text-[#1e3b39] transition-colors"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;