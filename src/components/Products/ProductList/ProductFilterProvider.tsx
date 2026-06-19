import { useRef, useState, type ReactNode } from 'react';
import { ProductFilterContext } from '../hooks/useFilter';

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null);

  function focusOnSearch() {
    searchRef.current?.focus();
  }

  return (
    <ProductFilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchRef,
        focusOnSearch,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};
