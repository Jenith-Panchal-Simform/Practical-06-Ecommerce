import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  return (
    <section className="w-10/12">
      <div className="min-h-screen bg-tertiary px-10 pt-15">
        {/* top section  */}
        <div>
          <h1 className="font-heading text-5xl text-primary">
            Curated Products
          </h1>
          <div className="flex w-full justify-between font-body pt-10">
            <p className="w-[40%]">
              Exceptional quality for every lifestyle. Explore our latest
              collection of premium products and accessories designed to elevate
              your everyday.
            </p>

            <p>Product Count</p>
          </div>
        </div>

        {/* ProductItems Cards */}
        <div className="grid grid-cols-4 gap-8">
          {/* card1 */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
