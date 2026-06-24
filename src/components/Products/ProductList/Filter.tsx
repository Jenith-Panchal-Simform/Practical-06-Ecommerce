import { useState } from 'react';

export const Filter = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error('Filter crashed');
  }

  return (
    <aside className="hidden shrink-0 lg:block lg:w-3/12 xl:w-2/12">
      <div className="bg-secondary sticky top-20 h-[calc(100vh-80px)] overflow-y-auto px-5 py-5">
        <h1 className="font-heading text-primary text-3xl wrap-break-word xl:text-5xl">FILTERS</h1>
        <p className="font-heading text-primary pt-2 pb-2 tracking-[0.2rem]">Refine Section</p>
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
            className="pointer-events-none mt-2 w-full"
            style={{ pointerEvents: 'auto' }}
          />
        </section>

        {/* errorboundary demo  */}
        <button
          className="cursor-pointer rounded border px-4 py-2 transition-all duration-300 hover:scale-105"
          onClick={() => setHasError(true)}
        >
          Trigger Error
        </button>
      </div>
    </aside>
  );
};
