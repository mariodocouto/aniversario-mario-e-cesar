import { supabase } from './supabaseClient';
import { RSVPFormData } from '../types';

export const submitRSVP = async (data: RSVPFormData): Promise<void> => {
  // Mapeia os dados do formulário para as colunas do banco de dados
  const { error } = await supabase
    .from('rsvp')
    .insert([
      {
        name: data.name,
        guests: data.guests,
        is_vegan: data.isVegan,
        created_at: new Date().toISOString(),
      },
    ]);

  if (error) {
    console.error('Erro ao salvar no Supabase:', error);
    throw new Error('Não foi possível confirmar sua presença. Tente novamente.');
  }
};