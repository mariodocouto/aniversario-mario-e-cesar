import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-br from-party-100 to-party-200">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-4 border-party-400 transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <h1 className="text-4xl md:text-6xl font-black text-party-800 mb-4 leading-tight">
            Aniversário<br/>
            <span className="text-party-600">Mário & Cesar</span><br/>
            <span className="text-2xl md:text-4xl text-gray-600 mt-2 block">Edição 33 anos!</span>
          </h1>
          <p className="text-xl md:text-2xl text-party-900 font-medium">
            Churrasco, chope e mais de 20 anos de amizade: <br/>
            <span className="font-bold text-party-600">só falta você!</span>
          </p>
        </div>

        <button 
          onClick={() => document.getElementById('event')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex flex-col items-center gap-2 text-party-800 font-bold hover:text-party-600 transition-colors"
        >
          <span>Saber mais</span>
          <ChevronDown className="w-8 h-8 animate-bounce group-hover:text-party-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;