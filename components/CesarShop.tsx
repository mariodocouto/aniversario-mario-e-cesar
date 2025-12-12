import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, Smartphone, PartyPopper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CesarShop: React.FC = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const pixKey = "(55) 8153-3204";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-emerald-50 pt-20 pb-20 flex flex-col">
      <div className="max-w-3xl mx-auto px-4 w-full flex-1 flex flex-col">
        
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para a festa
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full border-4 border-emerald-100">
            <div className="bg-emerald-600 p-8 text-center">
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PartyPopper className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Presentear o Cesar</h1>
                <p className="text-emerald-100 text-lg">A contribuição vai direto pra alegria!</p>
            </div>
            
            <div className="p-10 text-center space-y-8">
              <p className="text-xl text-gray-700 font-medium">
                Quer deixar o Cesar feliz? <br/>Manda aquele Pix caprichado.
              </p>

              <div className="bg-gray-100 p-6 rounded-2xl border-2 border-dashed border-gray-300">
                <div className="flex items-center justify-center gap-3 text-gray-500 mb-2">
                    <Smartphone className="w-5 h-5" />
                    <span className="uppercase text-xs font-bold tracking-wider">Chave Pix (Telefone)</span>
                </div>
                <p className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight font-mono">
                  {pixKey}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${
                  copied 
                    ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-200' 
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-6 h-6" />
                    Chave Pix copiada!
                  </>
                ) : (
                  <>
                    <Copy className="w-6 h-6" />
                    Copiar chave Pix
                  </>
                )}
              </button>
              
              <p className="text-sm text-gray-400">
                Ao clicar, o número será copiado para sua área de transferência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CesarShop;