import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';

type ProductContextType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used within ProductSearchProvider');
  }

  return context;
};
