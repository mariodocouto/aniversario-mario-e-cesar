import React, { useEffect } from 'react';
import { ShoppingCart, ArrowLeft, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

const products: Product[] = [
  { 
    id: 1, 
    name: "Pastilha de Freio", 
    price: 10, 
    description: "Pra frear na sinaleira", 
    imageColor: "bg-slate-300",
    paymentLink: "https://loja.infinitepay.io/mariodocouto/sza4362-pastilha-de-freio"
  },
  { 
    id: 2, 
    name: "Sensor Genérico", 
    price: 20, 
    description: "Ninguém sabe o que faz", 
    imageColor: "bg-red-200",
    paymentLink: "https://loja.infinitepay.io/mariodocouto/gme3903-sensor-generico"
  },
  { 
    id: 3, 
    name: "Lâmpada de Farol", 
    price: 50, 
    description: "Iluminando caminhos", 
    imageColor: "bg-yellow-100",
    paymentLink: "https://loja.infinitepay.io/mariodocouto/fjc3740-lampada-de-farol"
  },
  { 
    id: 4, 
    name: "Chicote Elétrico", 
    price: 75, 
    description: "Energia pura", 
    imageColor: "bg-orange-200",
    paymentLink: "https://loja.infinitepay.io/mariodocouto/sam7944-chicote-eletrico"
  },
  { 
    id: 5, 
    name: "Cabo de Acelerador", 
    price: 100, 
    description: "Pra correr pro abraço", 
    imageColor: "bg-lime-200",
    paymentLink: "https://loja.infinitepay.io/mariodocouto/kdk6175-cabo-de-acelerador"
  },
  { 
    id: 6, 
    name: "Alternador Recondicionado", 
    price: 200, 
    description: "O presente premium", 
    imageColor: "bg-teal-200",
    paymentLink: "https://loja.infinitepay.io/mariodocouto/npk8638-alternador-recondicionado"
  },
];

const MarioShop: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para a festa
          </button>
          
          <div className="flex items-center gap-3 bg-slate-800 text-white px-6 py-3 rounded-full shadow-lg">
            <Wrench className="w-6 h-6" />
            <span className="font-bold text-lg">Mecânica do Mário</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl mb-10 text-center">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Peças do HB20 2014</h1>
            <p className="text-slate-500">Ajude a manter a lenda rodando. (Valores simbólicos)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-slate-200">
              <div className={`h-32 ${product.imageColor} flex items-center justify-center`}>
                 <Wrench className="w-12 h-12 text-black/20" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-800 mb-1">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">{product.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xl font-bold text-party-600">R$ {product.price},00</span>
                  <a 
                    href={product.paymentLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all hover:scale-105 transform duration-200"
                  >
                    Presentear
                    <ShoppingCart className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarioShop;