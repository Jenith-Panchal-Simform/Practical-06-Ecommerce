import { useState, type ReactNode } from 'react';

import { ProductFilterContext } from '../hooks/useFilter';

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <ProductFilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};
