import { useState, type ReactNode } from 'react';
import { ProductContext } from '../hooks/useProduct';

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ProductContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
