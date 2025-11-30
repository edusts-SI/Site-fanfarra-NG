import React from 'react';
import { Music, Heart, Users, Star } from 'lucide-react';
import { siteImages } from '../data';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-fng-navy mb-4">
            Nossa História e Impacto
          </h2>
          <div className="w-24 h-1 bg-fng-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fundada em 2022, a Fanfarra Nova Geração nasceu do sonho coletivo de transformar vidas em Carira, Sergipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-fng-accent shadow-sm">
              <h3 className="flex items-center text-xl font-bold text-fng-navy mb-3">
                <Music className="w-6 h-6 text-fng-accent mr-3" />
                Histórico
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sob a liderança da maestra Natalia Alves, a corporação representa o esforço para oportunizar e semear o gosto pela musicalidade. Desde sua concepção, tem se consolidado como um importante polo cultural, levando com orgulho o nome de Carira para diversos municípios e estados.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-fng-blue shadow-sm">
              <h3 className="flex items-center text-xl font-bold text-fng-navy mb-3">
                <Heart className="w-6 h-6 text-fng-blue mr-3" />
                Impacto Social
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa maior contribuição é a formação gratuita de crianças e jovens. Agregamos valores essenciais de civismo e disciplina, oferecendo aos componentes melhores condições psicológicas e princípios de socialização num ambiente saudável.
              </p>
            </div>
            
             <div className="flex items-center justify-start pt-4">
               <div className="flex items-center bg-fng-navy text-white px-6 py-3 rounded-lg shadow-lg">
                 <Users className="w-8 h-8 text-fng-accent mr-4" />
                 <div>
                   <span className="block text-2xl font-bold font-display">90+</span>
                   <span className="text-sm text-gray-300">Integrantes Ativos</span>
                 </div>
               </div>
             </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="absolute top-4 left-4 w-full h-full bg-fng-accent/20 rounded-2xl z-0 transform translate-x-2 translate-y-2"></div>
            <img 
              src={siteImages.aboutSection}
              alt="Maestra e integrantes da Fanfarra" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover aspect-[3/4]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-xs hidden md:block border border-gray-100">
               <div className="flex items-center gap-2 mb-2">
                 <Star className="w-5 h-5 text-fng-accent fill-current" />
                 <span className="font-bold text-fng-navy">Desde 2022</span>
               </div>
               <p className="text-sm text-gray-500 italic">
                 "A arte é uma poderosa ferramenta de transformação."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};