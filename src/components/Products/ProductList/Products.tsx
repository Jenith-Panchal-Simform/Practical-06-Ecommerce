import { Filter } from "./Product Wrapper/Filter";
import { ProductList } from "./Product Wrapper/ProductList";

export const Products = () => {
  return (
    <section className=" relative min-h-screen flex">
      <Filter />
      <ProductList />
    </section>
  );
};
