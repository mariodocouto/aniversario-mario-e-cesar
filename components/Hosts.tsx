import React from 'react';

const Hosts: React.FC = () => {
  return (
    <section id="hosts" className="py-20 bg-party-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-party-800 mb-4">Os Donos da Festa</h2>
          <div className="w-24 h-2 bg-party-500 mx-auto rounded-full"></div>
        </div>

        {/* Área das Fotos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          
          {/* Foto 1 - Antiga */}
          {/* Importante: Salve a foto antiga (camisa xadrez) como 'foto-antiga.jpg' na pasta public */}
          <div className="relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl hover:z-10">
            <div className="aspect-[3/4] bg-gray-200">
              <img 
                src="/foto-antiga.jpg" 
                alt="Mário e Cesar - O Início (2005)" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                onError={(e) => {
                    // Fallback visual caso a imagem não exista
                    e.currentTarget.src = "https://placehold.co/600x800/fb923c/ffffff?text=Salve+como+foto-antiga.jpg";
                }}
              />
            </div>
            {/* Texto sobreposto removido conforme solicitado */}
          </div>

          {/* Foto 2 - Recente */}
          {/* Importante: Salve a foto recente (camisa rosa) como 'foto-nova.jpg' na pasta public */}
          <div className="relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl hover:z-10">
             <div className="aspect-[3/4] bg-gray-200">
              <img 
                src="/foto-nova.jpg" 
                alt="Mário e Cesar - Atualmente" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                onError={(e) => {
                    // Fallback visual caso a imagem não exista
                    e.currentTarget.src = "https://placehold.co/600x800/c2410c/ffffff?text=Salve+como+foto-nova.jpg";
                }}
              />
            </div>
            {/* Texto sobreposto removido conforme solicitado */}
          </div>
        </div>

        {/* Texto Unificado */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-party-200 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-party-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
            A História
          </div>
          
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center font-medium space-y-4">
            Mário faz aniversário em 15/12 e Cesar em 28/12. Como manda a tradição, comemoram juntos numa data entre os dois aniversários. Este ano ambos completando 33 anos.
            <br/><br/>
            Amigos desde 2005, quando se encontraram pelas ruas de Bagé e nunca mais desgrudaram.
            Em 17/12/2006, estavam lá comemorando juntos o título mundial do Internacional pelas ruas de Bagé.
            <br/><br/>
            <span className="text-party-600 font-bold text-2xl block mt-6">E agora querem comemorar contigo também.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hosts;