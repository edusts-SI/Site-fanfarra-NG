import React from 'react';
import { ArrowRight, Music4 } from 'lucide-react';
import { externalLinks } from '../data';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden scroll-mt-20 bg-fng-navy">
      
      {/* Background Gradient & Abstract Shapes */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-fng-navy via-blue-900 to-slate-900">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-fng-blue/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-fng-accent/10 rounded-full blur-[120px]"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      {/* Decorative Large Icon (Watermark) */}
      <div className="absolute right-10 bottom-20 opacity-[0.03] transform rotate-12 pointer-events-none hidden lg:block">
        <Music4 className="w-96 h-96 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-fng-accent text-sm font-bold tracking-widest mb-6 uppercase backdrop-blur-md">
            Carira - Sergipe
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6 tracking-tight">
            O Ritmo que Transforma a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fng-accent to-sky-200">
              Capital Sergipana do Milho
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
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
              href={externalLinks.historia}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg transition-colors cursor-pointer"
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