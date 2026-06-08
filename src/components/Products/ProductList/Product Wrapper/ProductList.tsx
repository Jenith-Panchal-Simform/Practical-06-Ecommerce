import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { getProducts } from "../../../../services/httpServices";
import { ProductsSkeleton } from "../../Skeleton/ProductsSkeleton";
import { useProductSearch } from "./context/ProductSearchContext";

export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { searchTerm } = useProductSearch();

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

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [products, searchTerm]);

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

            <p className="text-lg">{filteredProducts.length} Items</p>
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

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <h2 className="font-heading text-3xl text-primary">
                No Products Found
              </h2>

              <p className="mt-3 text-gray-500">
                Try searching with a different keyword.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
