import { useNavigate } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';
import type { Product } from './ProductList';

interface ProductProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductProps): JSX.Element => {
  const navigate = useNavigate();

  function handleProductClick() {
    navigate(`/products/${product.id}`);
  }

  return (
    <div
      className="hover:border-primary mt-5 min-w-0 border border-transparent p-4 hover:cursor-pointer hover:rounded-lg hover:border"
      onClick={handleProductClick}
    >
      <div className="aspect-4/5 overflow-hidden">
        <img
          src={`${product.images[0]}`}
          alt="product name"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="font-body mt-2 flex min-w-0 flex-col gap-2">
        <p className="truncate text-lg font-bold md:text-xl">{product.title}</p>
        <p className="line-clamp-2 text-sm wrap-break-word text-gray-500">{product.description}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-base font-bold md:text-lg">₹ {product.price}</p>
          {/* Strikethroughed */}
          <p className="text-sm text-gray-400 line-through md:text-base">
            ₹{product.price + (15 / 100) * product.price}
          </p>
          <p className="text-xs font-semibold text-red-500">15% OFF</p>
        </div>
      </div>
    </div>
  );
};
