import React from 'react';
import { ClipboardList, HeartHandshake, ExternalLink } from 'lucide-react';
import { externalLinks } from '../data';

export const CTASection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Recruitment Section */}
      <section id="inscricao" className="relative py-20 bg-fng-blue overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
            <ClipboardList className="w-8 h-8 text-fng-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Junte-se à Nova Geração!
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Vagas abertas para <strong>Instrumentistas, Corpo Coreográfico e Balizas</strong>. 
            Não é necessário experiência prévia. Oferecemos formação gratuita e todo o suporte necessário.
          </p>
          <a 
            href={externalLinks.inscricao}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-fng-navy bg-fng-accent hover:bg-white transition-all transform hover:scale-105 shadow-xl"
          >
            QUERO ME INSCREVER AGORA
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-blue-200 opacity-80">Link abre Formulário externo</p>
        </div>
      </section>

      {/* Donation Section */}
      <section id="doacoes" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-fng-navy font-bold mb-4 uppercase tracking-wider text-sm">
                <HeartHandshake className="w-5 h-5 text-red-500" />
                Apoio e Comunidade
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-800 mb-4">
                Apoie o Nosso Sonho
              </h2>
              <p className="text-gray-600 mb-6">
                Sua ajuda é fundamental para a manutenção de instrumentos, uniformes e para custear nossas viagens. 
                Contribua diretamente com a transformação de mais de 90 jovens de Carira.
              </p>
              <a 
                href={externalLinks.doacao}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-fng-navy text-fng-navy font-bold rounded-lg hover:bg-fng-navy hover:text-white transition-colors"
              >
                FAZER UMA DOAÇÃO
              </a>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <span className="block text-sm text-gray-500 mb-2">Chave PIX (CNPJ)</span>
                <code className="block bg-gray-100 p-3 rounded text-fng-navy font-mono text-sm break-all mb-4">
                  00.000.000/0001-00
                </code>
                <span className="text-xs text-gray-400">Associação Fanfarra Nova Geração</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};