import { ProductDescription } from "../../components/Products/ProductDescription";
import { ProductImages } from "../../components/Products/ProductImages";

export const ProductDetails = () => {
  return (
    <section
      className="
        bg-tertiary
        pt-24
        pb-16
        px-4
        md:px-8
        lg:px-16
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-16
        "
      >
        {/* LEFT SECTION */}
        <ProductImages />

        {/* RIGHT SECTION */}
        <ProductDescription />
      </div>
    </section>
  );
};
