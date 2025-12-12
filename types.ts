export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageColor: string;
}

export interface RSVPFormData {
  name: string;
  guests: number;
  isVegan: boolean;
}