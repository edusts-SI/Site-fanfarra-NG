import React from 'react';
import { Music, Heart, Users, Speaker, Sparkles } from 'lucide-react';

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
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-fng-accent shadow-sm hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-bold text-fng-navy mb-3">
                <Music className="w-6 h-6 text-fng-accent mr-3" />
                Histórico
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sob a liderança da maestra Natalia Alves, a corporação representa o esforço para oportunizar e semear o gosto pela musicalidade. Desde sua concepção, tem se consolidado como um importante polo cultural, levando com orgulho o nome de Carira para diversos municípios e estados.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-fng-blue shadow-sm hover:shadow-md transition-shadow">
              <h3 className="flex items-center text-xl font-bold text-fng-navy mb-3">
                <Heart className="w-6 h-6 text-fng-blue mr-3" />
                Impacto Social
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa maior contribuição é a formação gratuita de crianças e jovens. Agregamos valores essenciais de civismo e disciplina, oferecendo aos componentes melhores condições psicológicas e princípios de socialização num ambiente saudável.
              </p>
            </div>
            
             <div className="flex items-center justify-start pt-4">
               <div className="flex items-center bg-fng-navy text-white px-8 py-4 rounded-xl shadow-lg border border-white/10">
                 <Users className="w-10 h-10 text-fng-accent mr-4" />
                 <div>
                   <span className="block text-3xl font-bold font-display">90+</span>
                   <span className="text-sm text-blue-200">Integrantes Ativos</span>
                 </div>
               </div>
             </div>
          </div>

          {/* Visual Column (Substituindo Foto por Design Gráfico) */}
          <div className="relative h-full min-h-[400px] bg-fng-blue/5 rounded-3xl overflow-hidden border border-fng-blue/10 flex items-center justify-center p-8">
            
            {/* Background Decorativo */}
            <div className="absolute inset-0">
               <div className="absolute top-0 right-0 w-64 h-64 bg-fng-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-fng-blue/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Composição Central de Ícones */}
            <div className="relative z-10 text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-fng-accent/20 rounded-full blur-xl"></div>
                <Speaker className="w-32 h-32 text-fng-navy relative z-10" strokeWidth={1} />
                <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-fng-accent animate-pulse" />
                <Music className="absolute -bottom-2 -left-6 w-10 h-10 text-fng-blue" />
              </div>
              
              <div className="mt-8 space-y-2">
                 <h4 className="text-2xl font-display font-bold text-fng-navy">Música em Movimento</h4>
                 <p className="text-gray-500 font-medium italic">"A arte é uma poderosa ferramenta de transformação."</p>
              </div>

              {/* Decorative Lines */}
              <div className="mt-8 flex justify-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-fng-accent"></div>
                 <div className="w-2 h-2 rounded-full bg-fng-blue"></div>
                 <div className="w-2 h-2 rounded-full bg-fng-navy"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};