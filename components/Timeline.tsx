import React from 'react';
import { timelineEvents } from '../data';
import { MapPin, Music, Trophy, Star, Calendar, ArrowRight } from 'lucide-react';

export const Timeline: React.FC = () => {
  // Helper para escolher o ícone com base no tipo definido no data.ts
  const getIcon = (type?: string) => {
    switch (type) {
      case 'map': return <MapPin className="w-5 h-5 text-white" />;
      case 'trophy': return <Trophy className="w-5 h-5 text-white" />;
      case 'star': return <Star className="w-5 h-5 text-white" />;
      default: return <Music className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="trajetoria" className="py-24 bg-fng-navy relative overflow-hidden scroll-mt-20">
      
      {/* Background Gradients (Decorativo) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fng-blue rounded-full filter blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fng-accent rounded-full filter blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fng-accent/10 border border-fng-accent/30 text-fng-accent text-xs font-bold uppercase tracking-widest mb-4">
            <Star className="w-3 h-3" />
            Nossa História
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Uma Jornada de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fng-accent to-fng-accentLight">Superação</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            De Carira para o mundo. Acompanhe os marcos que transformaram um sonho coletivo em uma realidade de impacto social.
          </p>
        </div>

        {/* Container da Timeline */}
        <div className="relative">
          
          {/* Linha Central (Vertical) - Gradient */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-fng-accent via-fng-blue to-fng-navy/20 md:transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Marcador/Ponto na Linha */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-fng-navy border-4 border-fng-accent rounded-full transform -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Lado Vazio (Spacer) */}
                  <div className="w-full md:w-1/2"></div>

                  {/* Cartão de Conteúdo */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    
                    <div className="group relative">
                      {/* Ano Flutuante */}
                      <span className={`absolute -top-10 md:-top-8 ${isEven ? 'md:right-0 left-0' : 'left-0'} text-5xl font-display font-bold text-white/5 group-hover:text-fng-accent/20 transition-colors duration-500`}>
                        {event.year}
                      </span>

                      <div className="relative bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:border-fng-accent/50 hover:shadow-lg hover:shadow-fng-accent/10 hover:-translate-y-1">
                        
                        {/* Header do Card */}
                        <div className={`flex flex-col gap-2 mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          <div className={`inline-flex items-center gap-2 text-fng-accent font-bold text-sm uppercase tracking-wide`}>
                            <Calendar className="w-4 h-4" />
                            {event.year}
                          </div>
                          <div className="flex items-center gap-3">
                             {/* Ícone Específico */}
                             <div className={`p-2 rounded-lg bg-gradient-to-br from-fng-blue to-fng-navy shadow-inner ${isEven ? 'md:order-2' : ''}`}>
                                {getIcon(event.icon)}
                             </div>
                             <h3 className="text-xl font-bold text-white leading-tight">
                                {event.title}
                             </h3>
                          </div>
                        </div>

                        {/* Localização */}
                        <div className={`flex items-center gap-1.5 text-gray-300 text-sm font-semibold mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <MapPin className="w-4 h-4 text-fng-accent" />
                          {event.location}
                        </div>

                        {/* Descrição */}
                        <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Final da Linha - Indicador de Futuro */}
          <div className="relative mt-24 flex justify-center">
            <div className="relative z-10 bg-fng-navy px-6 py-2 border border-fng-accent/30 rounded-full flex items-center gap-2 text-fng-accent font-bold shadow-[0_0_30px_rgba(14,165,233,0.2)]">
               <ArrowRight className="w-5 h-5 animate-pulse" />
               <span className="uppercase tracking-widest text-sm">O Futuro nos Espera</span>
            </div>
            {/* Extensão da linha até o botão */}
            <div className="absolute top-0 left-8 md:left-1/2 h-full w-1 bg-gradient-to-b from-fng-navy/20 to-transparent md:-translate-x-1/2 -z-10 -mt-24"></div>
          </div>
        </div>

      </div>
    </section>
  );
};