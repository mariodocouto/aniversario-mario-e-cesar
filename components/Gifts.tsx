import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench, Gift } from 'lucide-react';

const Gifts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="gifts" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-party-800 mb-4">Presentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha como você quer presentear os aniversariantes. Temos opções para todos os gostos (e para o carro do Mário).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/mecanica-mario')}
            className="group relative flex flex-col items-center justify-center p-10 bg-slate-800 rounded-3xl shadow-2xl hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-100 group-hover:opacity-90 transition-opacity"></div>
            <div className="relative z-10 text-center">
              <div className="bg-gray-600/50 p-6 rounded-full inline-block mb-6 group-hover:bg-party-500 transition-colors duration-300">
                <Wrench className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Mecânica do Mário</h3>
              <p className="text-gray-300">Peças do HB20 2014</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/loja-cesar')}
            className="group relative flex flex-col items-center justify-center p-10 bg-emerald-700 rounded-3xl shadow-2xl hover:shadow-green-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800 opacity-100 group-hover:opacity-90 transition-opacity"></div>
            <div className="relative z-10 text-center">
              <div className="bg-emerald-500/50 p-6 rounded-full inline-block mb-6 group-hover:bg-emerald-400 transition-colors duration-300">
                <Gift className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Loja do Cesar</h3>
              <p className="text-emerald-100">Presentear via Pix</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gifts;