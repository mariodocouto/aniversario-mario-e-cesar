import React from 'react';
import { ShoppingCart, ArrowLeft, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

const products: Product[] = [
  { id: 1, name: "Pastilha de Freio HB20 2014", price: 10, description: "Pra frear na sinaleira", imageColor: "bg-slate-300" },
  { id: 2, name: "Parafuso do Motor HB20 2014", price: 12, description: "Essencial pra não cair o motor", imageColor: "bg-zinc-400" },
  { id: 3, name: "Tampa de Reservatório HB20 2014", price: 15, description: "Evita vazar água", imageColor: "bg-blue-200" },
  { id: 4, name: "Sensor Genérico HB20 2014", price: 20, description: "Ninguém sabe o que faz", imageColor: "bg-red-200" },
  { id: 5, name: "Suporte de Plástico HB20 2014", price: 25, description: "Quebra fácil, precisa repor", imageColor: "bg-gray-200" },
  { id: 6, name: "Mangueira de Ar HB20 2014", price: 30, description: "Pro carro respirar", imageColor: "bg-stone-300" },
  { id: 7, name: "Braço Auxiliar HB20 2014", price: 40, description: "Dando uma força", imageColor: "bg-neutral-300" },
  { id: 8, name: "Lâmpada de Farol HB20 2014", price: 50, description: "Iluminando caminhos", imageColor: "bg-yellow-100" },
  { id: 9, name: "Borracha de Porta HB20 2014", price: 60, description: "Contra chuva e vento", imageColor: "bg-slate-800" },
  { id: 10, name: "Chicote Elétrico HB20 2014", price: 80, description: "Energia pura", imageColor: "bg-orange-200" },
  { id: 11, name: "Cabo de Acelerador HB20 2014", price: 120, description: "Pra correr pro abraço", imageColor: "bg-lime-200" },
  { id: 12, name: "Alternador Genérico HB20 2014", price: 250, description: "O presente premium", imageColor: "bg-teal-200" },
];

const MarioShop: React.FC = () => {
  const navigate = useNavigate();

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    href="#" 
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors"
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Aqui seria aberto o link do Mercado Pago para: " + product.name);
                    }}
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