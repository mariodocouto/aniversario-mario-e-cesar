import React from 'react';
import { Star, Beer, Heart } from 'lucide-react';

const TheVibe: React.FC = () => {
  return (
    <section id="the-vibe" className="py-20 bg-party-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-party-400 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <Beer className="w-40 h-40 text-party-800" />
          </div>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-party-600 p-2 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-4xl font-black text-party-800 uppercase tracking-tight italic">O Rolê</h3>
          </div>

          <div className="text-gray-700 text-xl md:text-2xl leading-relaxed font-medium">
            <p className="mb-8">
              O aniversário conjunto do Mário e do Cesar chegou! <br/>
              A festa vai rolar no estilo que a gente gosta: pé no chão, copo na mão e sorriso no rosto.
            </p>
            
            <div className="bg-party-50 p-8 rounded-2xl border-2 border-party-100 flex items-start gap-6 shadow-inner">
               <div className="bg-red-100 p-3 rounded-full shrink-0">
                 <Heart className="w-8 h-8 text-red-500" />
               </div>
               <p className="text-lg md:text-xl">
                 Teremos churrasco completo, chope geladinho, água e refrigerante por nossa conta. 
                 <span className="block font-bold text-party-600 mt-4 text-2xl uppercase tracking-tight">O resto você traz na bagagem (principalmente a alegria)!</span>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheVibe;