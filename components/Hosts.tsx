import React, { useState } from 'react';

const Hosts: React.FC = () => {
  // Nomes exatos conforme sua instrução
  const [oldPhotoSrc, setOldPhotoSrc] = useState('/foto-antiga.jpg.png');
  const [newPhotoSrc, setNewPhotoSrc] = useState('/foto-nova.jpg.jpg');

  const handleOldPhotoError = () => {
    // Fallback caso ainda haja erro
    if (oldPhotoSrc.endsWith('.png')) setOldPhotoSrc('/foto-antiga.jpg');
  };

  const handleNewPhotoError = () => {
    // Fallback caso ainda haja erro
    if (newPhotoSrc.endsWith('.jpg')) setOldPhotoSrc('/foto-nova.jpg');
  };

  return (
    <section id="hosts" className="py-20 bg-party-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-party-800 mb-4 tracking-tight">Os Donos da Festa</h2>
          <div className="w-24 h-2 bg-party-500 mx-auto rounded-full"></div>
        </div>

        {/* Fotos dos Aniversariantes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl">
            <div className="aspect-[3/4] bg-gray-200 relative">
              <img 
                src={oldPhotoSrc}
                alt="Mário e Cesar - O Início" 
                onError={handleOldPhotoError}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-white/90 px-4 py-1 rounded-full text-xs font-bold text-party-800 shadow-sm">Onde tudo começou (2005)</span>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl">
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
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-party-200 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-party-600 text-white px-8 py-2 rounded-full font-bold shadow-lg text-lg">
            A História
          </div>
          
          <div className="text-gray-700 text-lg md:text-xl leading-relaxed text-center font-medium space-y-4">
            <p>Mário faz aniversário em 15/12 e Cesar em 28/12. Como manda a tradição, comemoram juntos numa data entre os dois aniversários. Este ano ambos completando 33 anos.</p>
            <p>Amigos desde 2005, em 17/12/2006, estavam lá comemorando juntos o título mundial do Sport Club Internacional pelas ruas de Bagé.</p>
            <p className="text-party-600 font-bold text-2xl block mt-8 italic">E agora querem comemorar contigo também!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hosts;