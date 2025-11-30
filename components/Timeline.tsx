import React from 'react';
import { timelineEvents } from '../data';
import { MapPin } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="trajetoria" className="py-20 bg-fng-navy text-white relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fng-blue rounded-full filter blur-[100px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nossa Marcha (2022 - 2024)
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            De uma ideia em Carira a apresentações interestaduais. Acompanhe nossa evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-fng-accent transition-colors duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-fng-accent text-fng-navy font-bold px-4 py-1 rounded-bl-lg">
                  {event.year}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-fng-accent text-sm mb-2 font-semibold">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-fng-accent transition-colors">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-fng-accent mb-2">2025: A Maturidade</h3>
            <p className="text-gray-300">
              Deixamos de ser uma promessa para nos tornarmos uma realidade sólida. 
              <br className="hidden md:block" />
              Uma família que leva arte e disciplina por onde passa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};