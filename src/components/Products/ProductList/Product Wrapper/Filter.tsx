export const Filter = () => {
  return (
    <aside
      className="hidden
        lg:block
        lg:w-3/12
        xl:w-2/12
        shrink-0"
    >
      <div
        className="sticky
            top-20
            h-[calc(100vh-80px)]
            overflow-y-auto
            bg-secondary
            px-5
            py-5"
      >
        <h1
          className="
                         font-heading
                text-primary
                text-3xl
                xl:text-5xl
                wrap-break-word
                    "
        >
          FILTERS
        </h1>
        <p
          className="
                        font-heading
                        tracking-[0.2rem]
                        pt-2 pb-2
                        text-primary
                    "
        >
          Refine Section
        </p>
        <section className="pt-5 pb-5">
          <p className="font-body">Category</p>
          {/* select category */}
          <div className="pt-3">
            <div className="flex gap-2">
              <input type="checkbox" name="luggage" id="luggage" />
              <label>Lugagge</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="headphone" id="headphone" />
              <label>Headphone</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="shoes" id="shoes" />
              <label>Shoes</label>
            </div>
          </div>
        </section>
        <hr />
        <section className="pt-5 pb-5">
          <p className="font-body">Price Range</p>
          <input
            type="range"
            className="  pointer-events-none mt-2 w-full"
            style={{ pointerEvents: "auto" }}
          />
        </section>
      </div>
    </aside>
  );
};
