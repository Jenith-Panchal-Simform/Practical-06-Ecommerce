export const CartProduct = () => {
  return (
    <div className="flex gap-10 justify-between">
      <div
        className="
              group
              overflow-hidden
              aspect-4/5
              bg-white
              w-1/4
            "
      >
        <img
          src="/images/img1.jpeg"
          alt="product1"
          className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
        />
      </div>

      <div
        className="
            flex
            flex-col
            gap-6
            lg:sticky
            lg:top-28
            h-fit
            w-3/4
          "
      >
        <div>
          <div className="flex justify-between items-center">
            <h1
              className="
                font-heading
                text-primary
                text-3xl
                md:text-5xl
              "
            >
              Product Title
            </h1>
            <p
              className="
                font-body
                text-xl
                font-semibold
                text-primary
              "
            >
              Product Count
            </p>
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
            ₹Product Price
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
            Product Desc
          </p>
        </div>

        {/* Remove from Cart */}
        <button
          className="
              w-full
              md:w-fit

              bg-secondary
              text-primary

              px-10
              py-4

              font-body
              tracking-[0.15em]

              transition-all
              duration-300

              hover:bg-primary
              hover:text-secondary
            "
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};
