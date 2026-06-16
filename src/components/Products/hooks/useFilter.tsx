import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';

type ProductFilterContextType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const ProductFilterContext = createContext<ProductFilterContextType | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(ProductFilterContext);

  if (!context) {
    throw new Error('useProduct must be used within ProductSearchProvider');
  }

  return context;
};
