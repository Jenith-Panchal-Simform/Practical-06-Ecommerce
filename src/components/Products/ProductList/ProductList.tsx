import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProductCard } from './ProductCard';

import { ProductsSkeleton } from '../Skeleton/ProductsSkeleton';
import { getProducts } from '../services/productService';
import { useFilter } from '../hooks/useFilter';

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
  const { searchTerm } = useFilter();
  const [searchParams] = useSearchParams();

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

  const selectedSort = searchParams.get('sort');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (searchTerm.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Sort
    if (selectedSort === 'price') {
      result.sort((a, b) => a.price - b.price);
    }

    if (selectedSort === 'name') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [products, searchTerm, selectedSort]);

  if (loading) {
    return <ProductsSkeleton />;
  }

  return (
    <section className="w-full lg:w-9/12 xl:w-10/12">
      <div className="bg-tertiary min-h-screen px-10 pt-25 pb-20">
        {/* top section  */}
        <div>
          <h1 className="font-heading text-primary text-5xl">Curated Products</h1>
          <div className="font-body flex w-full justify-between pt-10">
            <p className="w-[40%]">
              Exceptional quality for every lifestyle. Explore our latest collection of premium
              products and accessories designed to elevate your everyday.
            </p>

            <p className="text-lg">{filteredProducts.length} Items</p>
          </div>
        </div>

        {/* ProductItems Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card */}

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <h2 className="font-heading text-primary text-3xl">No Products Found</h2>

              <p className="mt-3 text-gray-500">Try searching with a different keyword.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
