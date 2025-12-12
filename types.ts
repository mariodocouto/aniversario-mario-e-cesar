export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageColor: string;
  paymentLink?: string;
}

export interface RSVPFormData {
  name: string;
  guests: number;
  isVegan: boolean;
}