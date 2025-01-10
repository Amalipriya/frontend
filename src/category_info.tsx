export interface Products{
    id: number;
  name: string;
  price: number;
  imageUrl: string;
  
}
export interface CartItem{
    product: Products;
    quantity:number;
}



