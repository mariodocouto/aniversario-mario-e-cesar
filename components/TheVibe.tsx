import React from 'react';
import { Beer } from 'lucide-react';

const TheVibe: React.FC = () => {
  return (
    <section id="the-vibe" className="py-12 md:py-20 bg-party-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-party-50 p-8 md:p-16 rounded-3xl shadow-xl border-4 border-party-400 relative overflow-hidden">
          {/* Marca d'água de caneco de chope no fundo */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <Beer className="w-32 h-32 md:w-64 md:h-64 text-party-600" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="text-gray-700 text-xl md:text-2xl leading-relaxed font-medium">
              <p>
                Teremos churrasco completo, chope geladinho, água e refrigerante por nossa conta.
              </p>
            </div>
            
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-black text-party-600 uppercase tracking-tighter leading-none">
                O RESTO VOCÊ TRAZ NA BAGAGEM <br className="hidden md:block" />
                <span className="text-party-800">(PRINCIPALMENTE A ALEGRIA)!</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheVibe;