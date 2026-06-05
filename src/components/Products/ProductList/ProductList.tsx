import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { getProducts } from "../../../services/httpServices";
import { type Product } from "../types/product.types";
import { ProductsSkeleton } from "../ProductSkeleton/ProductsSkeleton";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <ProductsSkeleton />;
  }

  return (
    <section className="w-full lg:w-9/12 xl:w-10/12 ">
      <div className="min-h-screen bg-tertiary pt-25 pb-20 px-10">
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

            <p className="text-lg">{products.length} Items</p>
          </div>
        </div>

        {/* ProductItems Cards */}
        <div
          className="grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-8"
        >
          {/* card */}
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
