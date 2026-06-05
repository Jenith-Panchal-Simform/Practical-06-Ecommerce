import { Filter } from "./Filter/Filter";
import { ProductList } from "./ProductList/ProductList";

export const Products = () => {
  return (
    <section className=" relative min-h-screen flex">
      <Filter />
      <ProductList />
    </section>
  );
};
