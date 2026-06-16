import { Filter } from './Filter';
import { ProductList } from './ProductList';

export const Products = () => {
  return (
    <main className="relative flex min-h-screen">
      <Filter />
      <ProductList />
    </main>
  );
};
