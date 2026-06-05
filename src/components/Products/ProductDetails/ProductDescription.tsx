import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product.types";

type ProductDescriptionProps = {
  product: Product;
};
export const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const navigate = useNavigate();
  function handleOnClose() {
    navigate("/products");
  }
  return (
    <div
      className="
            flex
            flex-col
            gap-6
            lg:sticky
            lg:top-28
            h-fit
          "
    >
      <div>
        <div className="flex items-center justify-between">
          <h1
            className="
      font-heading
      text-primary
      text-3xl
      md:text-5xl
    "
          >
            {product.title}
          </h1>

          <button
            className="
      text-gray-500
      hover:text-gray-700
      focus:outline-none
      p-2
      rounded-full
      transition
      duration-200
      cusrsor-pointer
    "
            aria-label="Close"
            onClick={handleOnClose}
          >
            ✕
          </button>
        </div>

        <p
          className="
                mt-4
                font-body
                text-3xl
                font-semibold
                text-primary
              "
        >
          ₹{product.price}
        </p>
      </div>

      <div>
        <p
          className="
                font-body
                text-gray-600
                leading-relaxed
              "
        >
          {product.description}
        </p>
      </div>

      {/* Add To Cart */}
      <button
        className="
              w-full
              md:w-fit

              bg-primary
              text-secondary

              px-10
              py-4

              font-body
              tracking-[0.15em]

              transition-all
              duration-300

              hover:bg-secondary
              hover:text-primary
            "
      >
        ADD TO CART
      </button>

      {/* Extra Details */}
      <div
        className="
              border-t
              border-primary/10
              pt-6
              flex
              flex-col
              gap-4
            "
      >
        <div>
          <h3
            className="
                  font-heading
                  text-lg
                  text-primary
                "
          >
            Shipping
          </h3>

          <p className="text-gray-500 text-sm">
            Free shipping on all orders over ₹999.
          </p>
        </div>

        <div>
          <h3
            className="
                  font-heading
                  text-lg
                  text-primary
                "
          >
            Returns
          </h3>

          <p className="text-gray-500 text-sm">
            Easy 14-day returns and exchanges.
          </p>
        </div>

        <div>
          <h3
            className="
                  font-heading
                  text-lg
                  text-primary
                "
          >
            Material
          </h3>

          <p className="text-gray-500 text-sm">
            Premium handcrafted materials with luxury finish.
          </p>
        </div>
      </div>
    </div>
  );
};
