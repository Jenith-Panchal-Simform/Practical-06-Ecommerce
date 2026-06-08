import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

type ProductSearchContextType = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const ProductSearchContext = createContext<
  ProductSearchContextType | undefined
>(undefined);

export const useProductSearch = () => {
  const context = useContext(ProductSearchContext);

  if (!context) {
    throw new Error(
      "useProductSearch must be used within ProductSearchProvider",
    );
  }

  return context;
};
