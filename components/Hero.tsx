import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteImages } from '../data';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={siteImages.heroBackground} 
          alt="Fanfarra Nova Geração em apresentação" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fng-navy/80 via-fng-navy/70 to-fng-navy/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-fng-accent/20 border border-fng-accent text-fng-accent text-sm font-bold tracking-widest mb-6 uppercase">
            Carira - Sergipe
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
            O Ritmo que Transforma a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fng-accent to-sky-200">
              Capital Sergipana do Milho
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Disciplina, Arte e Liderança, forjando a Nova Geração. 
            Junte-se a nós e faça parte desta história de impacto social e cultural.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#inscricao" 
              onClick={(e) => handleScroll(e, 'inscricao')}
              className="w-full sm:w-auto px-8 py-4 bg-fng-accent hover:bg-fng-accentLight text-fng-navy font-bold rounded-lg shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              QUERO PARTICIPAR
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#sobre" 
              onClick={(e) => handleScroll(e, 'sobre')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              CONHECER HISTÓRIA
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};