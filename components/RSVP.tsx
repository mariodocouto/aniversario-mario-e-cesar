import React, { useState } from 'react';
import { submitRSVP } from '../services/rsvpService';
import { Send, CheckCircle, Salad, AlertCircle, Skull, Eye, X } from 'lucide-react';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 0,
    isVegan: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showVeganModal, setShowVeganModal] = useState(false);
  const [showCuriousModal, setShowCuriousModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await submitRSVP(formData);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleVeganChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setFormData({ ...formData, isVegan: isChecked });
    
    if (isChecked) {
      setShowVeganModal(true);
    }
  };

  const handleMistake = () => {
    setShowVeganModal(false);
    setFormData(prev => ({ ...prev, isVegan: false }));
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com.br";
  };

  return (
    <section id="rsvp" className="py-20 bg-party-200 relative">
      {/* Modal de Desconvite (Vegano) */}
      {showVeganModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border-4 border-red-500 transform scale-100 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Skull className="w-10 h-10 text-red-600" />
            </div>
            
            <h3 className="text-3xl font-black text-red-600 mb-4 uppercase leading-none">
              Você foi<br/>desconvidado!
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 font-medium">
              Detectamos uma incompatibilidade grave com o evento. É um churrasco, amigo(a).
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={handleExit}
                className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors text-lg uppercase tracking-wide"
              >
                Sair do site
              </button>
              
              <button
                onClick={handleMistake}
                className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors text-sm"
              >
                Cliquei por engano, eu como carne sim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Curioso */}
      {showCuriousModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border-4 border-party-400 transform scale-100 animate-in zoom-in-95 duration-300 relative">
            <button 
              onClick={() => setShowCuriousModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-party-600" />
            </div>
            
            <h3 className="text-3xl font-black text-party-800 mb-4 uppercase leading-none">
              Deixa de ser<br/>curioso(a)!
            </h3>
            
            <p className="text-gray-600 text-lg mb-8 font-medium">
              O importante é tu ir, fofoqueiro(a).
            </p>
            
            <button
              onClick={() => setShowCuriousModal(false)}
              className="w-full py-3 px-6 bg-party-600 hover:bg-party-700 text-white font-bold rounded-xl transition-colors shadow-lg"
            >
              Entendi, desculpa
            </button>
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-party-800 mb-2">Confirmar Presença</h2>
            <p className="text-gray-600">
              Preencha os dados abaixo para garantir seu lugar no churrasco.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-10 animate-fade-in-up">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Presença Confirmada!</h3>
              <p className="text-gray-600 mb-6">Já avisamos o assador. Te esperamos lá!</p>
              <button 
                onClick={() => {
                  setFormData({ name: '', guests: 0, isVegan: false });
                  setStatus('idle');
                }}
                className="text-party-600 font-bold underline hover:text-party-800"
              >
                Confirmar outra pessoa
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-party-500 focus:border-party-500 outline-none transition-all"
                  placeholder="Seu nome aqui"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número de acompanhantes</label>
                <input
                  type="number"
                  min="0"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-party-500 focus:border-party-500 outline-none transition-all"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-party-600 rounded focus:ring-party-500 border-gray-300"
                    checked={formData.isVegan}
                    onChange={handleVeganChange}
                  />
                  <span className="text-gray-700 font-medium flex items-center gap-2">
                    <Salad className="w-4 h-4" /> Sou vegano/vegetariano
                  </span>
                </label>
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Houve um erro ao enviar. Tente novamente.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-party-600 hover:bg-party-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Enviando...' : (
                  <>
                    Confirmar Presença
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <button 
              onClick={() => setShowCuriousModal(true)}
              className="text-sm text-gray-500 hover:text-party-600 font-medium underline decoration-dashed underline-offset-4 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <Eye className="w-4 h-4" />
              Ver lista de convidados confirmados
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;