import { useNavigate } from 'react-router-dom';
import type { Product } from '../ProductList/ProductList';
import { useFilter } from '../hooks/useFilter';

type ProductDescriptionProps = {
  product: Product;
};
export const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const { setSearchTerm } = useFilter();
  const navigate = useNavigate();
  function handleOnClose() {
    navigate('/products');
    setSearchTerm('');
  }
  return (
    <div className="flex h-fit flex-col gap-6 lg:sticky lg:top-28">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-primary text-3xl md:text-5xl">{product.title}</h1>

          <button
            className="cusrsor-pointer rounded-full p-2 text-gray-500 transition duration-200 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
            onClick={handleOnClose}
          >
            ✕
          </button>
        </div>

        <p className="font-body text-primary mt-4 text-3xl font-semibold">₹{product.price}</p>
      </div>

      <div>
        <p className="font-body leading-relaxed text-gray-600">{product.description}</p>
      </div>

      {/* Add To Cart */}
      <button className="bg-primary text-secondary font-body hover:bg-secondary hover:text-primary w-full px-10 py-4 tracking-[0.15em] transition-all duration-300 md:w-fit">
        ADD TO CART
      </button>

      {/* Extra Details */}
      <div className="border-primary/10 flex flex-col gap-4 border-t pt-6">
        <div>
          <h3 className="font-heading text-primary text-lg">Shipping</h3>

          <p className="text-sm text-gray-500">Free shipping on all orders over ₹999.</p>
        </div>

        <div>
          <h3 className="font-heading text-primary text-lg">Returns</h3>

          <p className="text-sm text-gray-500">Easy 14-day returns and exchanges.</p>
        </div>

        <div>
          <h3 className="font-heading text-primary text-lg">Material</h3>

          <p className="text-sm text-gray-500">Premium handcrafted materials with luxury finish.</p>
        </div>
      </div>
    </div>
  );
};
