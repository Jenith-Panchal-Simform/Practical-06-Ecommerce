import { useParams } from 'react-router-dom';
import { ProductDescription } from './ProductDescription';
import { ProductImages } from './ProductImages';
import { useEffect, useState } from 'react';

import { ProductSkeleton } from '../Skeleton/ProductSkeleton';
import type { Product } from '../ProductList/ProductList';
import { getProduct } from '../services/productService';

export const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        if (productId) {
          const data: Product = await getProduct(productId);
          setProduct(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <main className="bg-tertiary px-4 pt-24 pb-16 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT SECTION */}
        <ProductImages images={product!.images} />

        {/* RIGHT SECTION */}
        <ProductDescription product={product!} />
      </div>
    </main>
  );
};
