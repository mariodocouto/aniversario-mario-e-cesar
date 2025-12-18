import React from 'react';
import { Beer, Music } from 'lucide-react';

const TheVibe: React.FC = () => {
  return (
    <section id="the-vibe" className="py-12 md:py-20 bg-party-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Bloco de Texto (O Vibe do Rolê) */}
          <div className="bg-party-50 p-6 md:p-12 rounded-3xl shadow-xl border-4 border-party-400 relative overflow-hidden flex flex-col justify-center">
            {/* Marca d'água de caneco de chope no fundo */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <Beer className="w-32 h-32 md:w-48 md:h-48 text-party-600" />
            </div>
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  Teremos churrasco completo, chope geladinho, água e refrigerante por nossa conta.
                </p>
              </div>
              
              <div className="mt-2">
                <h3 className="text-2xl md:text-4xl font-black text-party-600 uppercase tracking-tighter leading-tight">
                  O RESTO VOCÊ <br /> TRAZ NA <br />
                  BAGAGEM <br /> (PRINCIPALMENTE <br />
                  A ALEGRIA)!
                </h3>
              </div>
            </div>
          </div>

          {/* Bloco da Imagem da Banda (Atração Principal) */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[350px] md:h-auto transform hover:scale-[1.01] transition-all duration-300">
            <img 
              src="foto-pagode.png" 
              alt="Atração principal" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Overlay Gradiente com Texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div className="flex items-center gap-3">
                <Music className="w-6 h-6 text-party-400" />
                <h4 className="text-white font-black text-3xl uppercase italic leading-none tracking-tight">
                  Atração principal
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheVibe;