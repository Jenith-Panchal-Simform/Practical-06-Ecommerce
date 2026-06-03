import { Filter } from "../components/Filter";
import { ProductList } from "../components/ProductList";

export const Products = () => {
  return (
    <section className="relative min-h-screen flex">
      <Filter />
      <ProductList />
    </section>
  );
};
