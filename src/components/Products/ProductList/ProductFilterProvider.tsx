import { useState, type ReactNode } from 'react';
import { ProductFilterContext } from '../hooks/useFilter';
import { useSearchParams } from 'react-router-dom';

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <ProductFilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};
