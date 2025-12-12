import { RSVPFormData } from '../types';

export const submitRSVP = async (data: RSVPFormData): Promise<boolean> => {
  // Simulating an API call to AI Studio storage or backend
  console.log("--- ENVIANDO DADOS PARA O AISTUDIO ---");
  console.log("Nome:", data.name);
  console.log("Acompanhantes:", data.guests);
  console.log("Vegano:", data.isVegan);
  console.log("--------------------------------------");
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};