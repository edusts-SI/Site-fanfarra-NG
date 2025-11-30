import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteImages } from '../data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Início', href: 'inicio' },
    { name: 'Sobre Nós', href: 'sobre' },
    { name: 'Trajetória', href: 'trajetoria' },
    { name: 'Equipe', href: 'equipe' },
    { name: 'Doações', href: 'doacoes' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-fng-navy shadow-lg py-2' : 'bg-gradient-to-b from-fng-navy/90 to-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="h-12 w-12 md:h-14 md:w-14 relative filter drop-shadow-md">
               <img 
                 src={siteImages.logo} 
                 alt="Escudo Nova Geração" 
                 className="w-full h-full object-contain"
               />
            </div>
            <span className={`font-display font-bold text-lg md:text-xl tracking-wider ${isScrolled || window.innerWidth < 768 ? 'text-white' : 'text-white'} drop-shadow-sm`}>
              FANFARRA <span className="text-fng-accent">NG</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-200 hover:text-fng-accent transition-colors text-sm font-semibold uppercase tracking-wide cursor-pointer shadow-black drop-shadow-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={(e) => handleNavClick(e, 'inscricao')}
              className="bg-fng-accent hover:bg-fng-accentLight text-fng-navy px-5 py-2.5 rounded-full font-bold text-sm uppercase transition-all transform hover:scale-105 shadow-md cursor-pointer"
            >
              Quero Me Inscrever
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-fng-accent focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-fng-navy/95 backdrop-blur-md transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-3 rounded-md text-base font-medium text-white hover:text-fng-accent hover:bg-gray-800 text-center cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#inscricao"
            onClick={(e) => handleNavClick(e, 'inscricao')}
            className="block w-full text-center bg-fng-accent text-fng-navy px-4 py-3 rounded-md font-bold text-base mt-4 cursor-pointer"
          >
            QUERO ME INSCREVER
          </a>
        </div>
      </div>
    </nav>
  );
};