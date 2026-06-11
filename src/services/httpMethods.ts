import type { Product } from '../components/Products/ProductList/ProductList';
import { apiClient } from './apiClient';

export const getProducts = () => {
  return apiClient.get<Product[]>('/products?offset=0&limit=20');
};

export const getProduct = (id: string) => {
  return apiClient.get<Product>(`/products/${id}`);
};
