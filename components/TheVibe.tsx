import React from 'react';
import { Star, Beer } from 'lucide-react';

const TheVibe: React.FC = () => {
  return (
    <section id="the-vibe" className="py-12 md:py-20 bg-party-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-5 md:p-12 rounded-3xl shadow-2xl border-4 border-party-400 relative overflow-hidden">
          {/* Decoração de fundo sutil */}
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <Beer className="w-32 h-32 md:w-40 md:h-40 text-party-800" />
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-party-600 p-2 rounded-lg shrink-0">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-party-800 uppercase tracking-tight italic">O Rolê</h3>
          </div>

          <div className="text-gray-700 text-lg md:text-2xl leading-relaxed font-medium">
            <p className="mb-6">
              O aniversário conjunto do Mário e do Cesar chegou! <br className="hidden md:block"/>
              A festa vai rolar no estilo que a gente gosta: pé no chão, copo na mão e sorriso no rosto.
            </p>
            
            <div className="bg-party-50 p-5 md:p-8 rounded-2xl border-2 border-party-100 shadow-inner">
               <p className="text-sm md:text-xl text-gray-700 leading-snug">
                 Teremos churrasco completo, chope geladinho, água e refrigerante por nossa conta. 
                 <span className="block font-black text-party-600 mt-4 text-lg md:text-3xl uppercase tracking-tighter leading-tight break-words">
                   O resto você traz na bagagem (principalmente a alegria)!
                 </span>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheVibe;