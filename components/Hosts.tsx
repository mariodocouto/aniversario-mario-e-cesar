import React, { useState } from 'react';
import { Star, Beer, Heart } from 'lucide-react';

const Hosts: React.FC = () => {
  const [oldPhotoSrc, setOldPhotoSrc] = useState('/foto-antiga.jpg');
  const [newPhotoSrc, setNewPhotoSrc] = useState('/foto-nova.jpg');

  const handleOldPhotoError = () => {
    if (oldPhotoSrc === '/foto-antiga.jpg') setOldPhotoSrc('/foto-antiga.jpg.png');
    else if (oldPhotoSrc === '/foto-antiga.jpg.png') setOldPhotoSrc('/foto-antiga.png');
    else if (oldPhotoSrc === '/foto-antiga.png') setOldPhotoSrc('/foto-antiga.jpeg');
  };

  const handleNewPhotoError = () => {
    if (newPhotoSrc === '/foto-nova.jpg') setNewPhotoSrc('/foto-nova.jpg.jpg');
    else if (newPhotoSrc === '/foto-nova.jpg.jpg') setNewPhotoSrc('/foto-nova.png');
    else if (newPhotoSrc === '/foto-nova.png') setNewPhotoSrc('/foto-nova.jpeg');
  };

  return (
    <section id="hosts" className="py-20 bg-party-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-party-800 mb-4">Os Donos da Festa</h2>
          <div className="w-24 h-2 bg-party-500 mx-auto rounded-full"></div>
        </div>

        {/* Fotos dos Aniversariantes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl hover:z-10">
            <div className="aspect-[3/4] bg-gray-200 relative">
              <img 
                src={oldPhotoSrc}
                alt="Mário e Cesar - O Início (2005)" 
                onError={handleOldPhotoError}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-white/90 px-4 py-1 rounded-full text-xs font-bold text-party-800 shadow-sm">Onde tudo começou (2005)</span>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl hover:z-10">
             <div className="aspect-[3/4] bg-gray-200 relative">
              <img 
                src={newPhotoSrc}
                alt="Mário e Cesar - Atualmente" 
                onError={handleNewPhotoError}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-white/90 px-4 py-1 rounded-full text-xs font-bold text-party-800 shadow-sm">33 anos de história</span>
            </div>
          </div>
        </div>

        {/* Texto: A História */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-party-200 relative mb-16">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-party-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
            A História
          </div>
          
          <div className="text-gray-700 text-lg md:text-xl leading-relaxed text-center font-medium space-y-4">
            <p>Mário faz aniversário em 15/12 e Cesar em 28/12. Como manda a tradição, comemoram juntos numa data entre os dois aniversários. Este ano ambos completando 33 anos.</p>
            <p>Amigos desde 2005, em 17/12/2006, estavam lá comemorando juntos o título mundial do Sport Club Internacional pelas ruas de Bagé.</p>
            <p className="text-party-600 font-bold text-2xl block mt-6 italic">E agora querem comemorar contigo também!</p>
          </div>
        </div>

        {/* NOVA SEÇÃO: O Rolê (Conteúdo que estava no topo agora aqui embaixo) */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-4 border-party-400 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <Beer className="w-40 h-40 text-party-800" />
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-party-600 p-2 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-black text-party-800 uppercase tracking-tight italic">O Rolê</h3>
          </div>

          <div className="text-gray-700 text-xl leading-relaxed font-medium">
            <p className="mb-6">
              O aniversário conjunto do Mário e do Cesar chegou! <br/>
              A festa vai rolar no estilo que a gente gosta: pé no chão, copo na mão e sorriso no rosto.
            </p>
            
            <div className="bg-party-50 p-6 rounded-2xl border border-party-100 flex items-start gap-4">
               <Heart className="w-6 h-6 text-red-500 mt-1 shrink-0" />
               <p className="text-lg">
                 Teremos churrasco completo, chope geladinho, água e refrigerante por nossa conta. 
                 <span className="block font-bold text-party-600 mt-2">O resto você traz na bagagem (principalmente a alegria)!</span>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hosts;