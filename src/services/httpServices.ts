import { axiosInstance } from "./axios";

export const getProducts = async () => {
  const response = await axiosInstance.get("/products?offset=0&limit=20");
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};
