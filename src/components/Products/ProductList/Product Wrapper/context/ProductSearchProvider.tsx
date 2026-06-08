import { useState, type ReactNode } from "react";
import { ProductSearchContext } from "./ProductSearchContext";

type ProductSearchProviderProps = {
  children: ReactNode;
};

export const ProductSearchProvider = ({
  children,
}: ProductSearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ProductSearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductSearchContext.Provider>
  );
};
