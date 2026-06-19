import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { ProductDescription } from './ProductDescription';
import { ProductImages } from './ProductImages';

import { ProductSkeleton } from '../Skeleton/ProductSkeleton';
import { getProduct } from '../services/productService';

export const ProductDetails = () => {
  const { productId } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => {
      if (!productId) {
        throw new Error('Product ID is required');
      }
      return getProduct(productId);
    },
    enabled: !!productId,
  });

  if (isLoading || !product) {
    return <ProductSkeleton />;
  }

  return (
    <main className="bg-tertiary px-4 pt-24 pb-16 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT SECTION */}
        <ProductImages images={product.images} />

        {/* RIGHT SECTION */}
        <ProductDescription product={product} />
      </div>
    </main>
  );
};
