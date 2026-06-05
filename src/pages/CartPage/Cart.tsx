import { CartProduct } from "../../components/Cart/CartProduct";

export const Cart = () => {
  return (
    <section
      className="
        bg-tertiary
        pt-24
        pb-16
        px-4
        md:px-8
        lg:px-16
        min-h-screen
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          grid
          grid-cols-1
          lg:grid-cols-1
          gap-10
          lg:gap-16
          p-10
        "
      >
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
    </section>
  );
};
