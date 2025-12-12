import React, { useState } from 'react';
import { submitRSVP } from '../services/rsvpService';
import { Send, CheckCircle, Salad, AlertCircle } from 'lucide-react';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 0,
    isVegan: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  return (
    <section id="rsvp" className="py-20 bg-party-200">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
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
                    onChange={(e) => setFormData({ ...formData, isVegan: e.target.checked })}
                  />
                  <span className="text-gray-700 font-medium flex items-center gap-2">
                    <Salad className="w-4 h-4" /> Sou vegano/vegetariano
                  </span>
                </label>
                
                {formData.isVegan && (
                  <div className="mt-3 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100 flex items-center gap-2 animate-fade-in-up">
                    <span role="img" aria-label="steak">🥩</span>
                    Relaxa, a gente providencia algo sem carne pra você!
                  </div>
                )}
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
        </div>
      </div>
    </section>
  );
};

export default RSVP;