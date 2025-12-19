import React, { useState } from 'react';
import { MapPin, Calendar, Beer, Waves, Music, UtensilsCrossed, Star, ImageOff } from 'lucide-react';

const EventDetails: React.FC = () => {
  // Caminho relativo direto (sem barra) é o mais seguro para subpastas
  const [imgSrc, setImgSrc] = useState("foto.jpg");
  const [hasFailed, setHasFailed] = useState(false);

  const handleImageError = () => {
    if (imgSrc === "foto.jpg") {
      // Se foto.jpg falhar, tenta o outro arquivo que vi no seu print
      setImgSrc("foto-pagode.jpeg");
    } else if (imgSrc === "foto-pagode.jpeg") {
      setImgSrc("foto-pagode.png");
    } else {
      setHasFailed(true);
    }
  };

  return (
    <section id="event" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-party-800 mb-4 uppercase tracking-tight">O Evento</h2>
          <div className="w-24 h-2 bg-party-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 font-medium text-lg">Tudo o que você precisa saber para não se perder no caminho.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8 flex flex-col">
            {/* Cronograma */}
            <div className="bg-party-50 p-8 rounded-3xl border-2 border-party-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Star className="w-24 h-24 text-party-800" />
              </div>
              
              <h3 className="text-2xl font-black text-party-800 mb-8 flex items-center gap-2">
                <Calendar className="w-6 h-6" /> Cronograma do Dia
              </h3>

              <div className="space-y-8 relative">
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-party-200 hidden sm:block"></div>

                <div className="flex items-start gap-4 relative z-10">
                  <div className="bg-blue-600 p-2.5 rounded-full shadow-lg shrink-0">
                    <Waves className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-xl text-gray-800 leading-none mb-1">12:00h – O Início</p>
                    <p className="text-gray-600">Churrasco e chope gelado te esperando</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 relative z-10">
                  <div className="bg-orange-500 p-2.5 rounded-full shadow-lg shrink-0">
                    <UtensilsCrossed className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-xl text-gray-800 leading-none mb-1">Tarde Adentro</p>
                    <p className="text-gray-600">Carne no fogo, sol, piscina, chope e resenha</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 relative z-10">
                  <div className="bg-red-600 p-2.5 rounded-full shadow-lg shrink-0 animate-pulse">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-xl text-gray-800 leading-none mb-1">16:00h – Show ao Vivo</p>
                    <p className="text-gray-600">Pagode da Jubila animando a galera!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FOTO DA ATRAÇÃO */}
            <div className="relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl">
              <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
                {!hasFailed ? (
                  <img 
                    src={imgSrc}
                    alt="Pagode da Jubila" 
                    onError={handleImageError}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                ) : (
                  <div className="text-center p-6 bg-gray-50 w-full h-full flex flex-col items-center justify-center">
                    <ImageOff className="w-12 h-12 text-gray-300 mb-2" />
                    <p className="text-gray-400 font-bold text-xs uppercase">Foto não encontrada no servidor</p>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6">
                <div className="flex items-center gap-3">
                  <Music className="w-6 h-6 text-party-400" />
                  <h4 className="text-white font-black text-2xl uppercase italic tracking-tighter">Pagode da Jubila</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa e Localização */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-xl flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-party-600 p-3 rounded-2xl shadow-lg shadow-party-200">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-800 leading-none mb-2">Localização</h3>
                  <p className="text-gray-600 font-medium text-lg">
                    Rua Clarice Lispector, 375<br/>
                    Tomazetti – Santa Maria/RS
                  </p>
                  <p className="text-party-600 text-sm font-bold mt-2 uppercase tracking-wider flex items-center gap-1">
                    <Beer className="w-4 h-4" /> Na casa dos pais do Cesar
                  </p>
                </div>
              </div>

              <div className="flex-1 min-h-[350px] rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                <iframe
                  title="Local do Evento"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=Rua+Clarice+Lispector,+375+Tomazetti+Santa+Maria+RS&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+Clarice+Lispector+375+Santa+Maria+RS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-5 rounded-xl text-center transition-colors flex items-center justify-center gap-2 shadow-lg text-lg"
              >
                Abrir no GPS
                <MapPin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;