import React from 'react';
import { Beer } from 'lucide-react';

const TheVibe: React.FC = () => {
  return (
    <section id="the-vibe" className="py-12 md:py-20 bg-party-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Bloco principal seguindo o design da imagem anexa */}
        <div className="bg-party-50 p-6 md:p-12 rounded-3xl shadow-xl border-4 border-party-400 relative overflow-hidden">
          {/* Marca d'água de caneco de chope no fundo conforme a imagem */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <Beer className="w-32 h-32 md:w-56 md:h-56 text-party-600" />
          </div>
          
          <div className="relative z-10 flex flex-col gap-6">
            <div className="text-gray-700 text-lg md:text-2xl leading-relaxed font-medium max-w-2xl">
              <p>
                Teremos churrasco completo, chope geladinho, água e refrigerante por nossa conta.
              </p>
            </div>
            
            <div className="mt-4">
              <h3 className="text-2xl md:text-5xl font-black text-party-600 uppercase tracking-tighter leading-[1.1] md:leading-none">
                O RESTO VOCÊ <br className="md:hidden" /> TRAZ NA <br />
                BAGAGEM <br className="md:hidden" /> (PRINCIPALMENTE <br />
                A ALEGRIA)!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheVibe;