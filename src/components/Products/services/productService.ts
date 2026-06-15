import { httpMethods } from '../../../services/httpMethods';
import type { Product } from '../ProductList/ProductList';

export const getProducts = () => {
  return httpMethods.get<Product[]>('/products?offset=0&limit=20');
};

export const getProduct = (id: string) => {
  return httpMethods.get<Product>(`/products/${id}`);
};
