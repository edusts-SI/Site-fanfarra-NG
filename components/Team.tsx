import React from 'react';
import { teamMembers } from '../data';
import { User } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-fng-blue font-bold tracking-wider uppercase text-sm">Comissão Organizadora</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-fng-navy mt-2">
            Quem Faz Acontecer
          </h2>
          <div className="w-16 h-1 bg-fng-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border-b-4 border-transparent hover:border-fng-accent transition-all text-center group">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-fng-navy transition-colors">
                <User className="w-8 h-8 text-gray-400 group-hover:text-fng-accent transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-fng-navy mb-1">{member.name}</h3>
              <p className="text-sm text-fng-blue font-medium uppercase tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};