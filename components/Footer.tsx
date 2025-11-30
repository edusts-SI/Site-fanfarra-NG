import React from 'react';
import { Instagram, MapPin, Mail } from 'lucide-react';
import { externalLinks } from '../data';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-fng-navy text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              FANFARRA <span className="text-fng-accent">NG</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Capital Sergipana do Milho.<br/>
              Um projeto de amor, música e disciplina fundado em 2022.
            </p>
            <div className="flex space-x-4">
              <a 
                href={externalLinks.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-fng-accent transition-colors"
                title="Siga-nos no Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href={externalLinks.tiktok} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-fng-accent transition-colors"
                title="Siga-nos no TikTok"
              >
                {/* Custom SVG for TikTok since standard Lucide version varies */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-fng-accent shrink-0" />
                <span>Carira - Sergipe, Brasil</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-fng-accent shrink-0" />
                <span>contato@fanfarrang.com.br</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')} className="hover:text-fng-accent transition-colors cursor-pointer">Início</a></li>
              <li><a href="#sobre" onClick={(e) => handleScroll(e, 'sobre')} className="hover:text-fng-accent transition-colors cursor-pointer">Histórico</a></li>
              <li><a href="#trajetoria" onClick={(e) => handleScroll(e, 'trajetoria')} className="hover:text-fng-accent transition-colors cursor-pointer">Galeria</a></li>
              <li><a href="#inscricao" onClick={(e) => handleScroll(e, 'inscricao')} className="hover:text-fng-accent transition-colors cursor-pointer">Inscrição</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fanfarra Nova Geração. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};