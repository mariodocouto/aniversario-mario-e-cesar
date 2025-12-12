import React from 'react';
import { MapPin, Calendar, Clock, Beer } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section id="event" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-party-800 mb-4">O Rolê</h2>
          <div className="w-24 h-2 bg-party-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-700 bg-party-50 p-8 rounded-2xl border-2 border-party-200 shadow-lg">
            <p className="font-medium text-xl leading-relaxed">
              O aniversário conjunto do Mário e do Cesar chegou! Vai rolar lá na casa dos pais do Cesar.
            </p>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-party-600 flex-shrink-0 mt-1" />
              <span>Rua Clarice Lispector, 375 – Tomazetti – Santa Maria/RS</span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-party-600 flex-shrink-0" />
              <span>Sábado, dia 20/12/2025</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-party-600 flex-shrink-0" />
              <span>A partir das 12h</span>
            </div>

            <div className="flex items-start gap-3">
              <Beer className="w-6 h-6 text-party-600 flex-shrink-0 mt-1" />
              <span>Teremos churrasco, chope, água e refrigerante.<br/>O resto você traz na alegria.</span>
            </div>
          </div>

          <div className="h-80 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-party-300">
            <iframe
              title="Local do Evento"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Rua+Clarice+Lispector,+375+Tomazetti+Santa+Maria+RS&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;