import { useSearchParams } from 'react-router-dom';

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSort = searchParams.get('sort');

  return (
    <aside className="hidden shrink-0 lg:block lg:w-3/12 xl:w-2/12">
      <div className="bg-secondary sticky top-20 h-[calc(100vh-80px)] overflow-y-auto px-5 py-5">
        <h1 className="font-heading text-primary text-3xl wrap-break-word xl:text-5xl">FILTERS</h1>
        <p className="font-heading text-primary pt-2 pb-2 tracking-[0.2rem]">Refine Section</p>
        <section className="pt-5 pb-5">
          <p className="font-body">Sort</p>
          {/* select category */}
          <div className="pt-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="sort"
                  id="price"
                  checked={selectedSort === 'price'}
                  onChange={() => setSearchParams({ sort: 'price' })}
                />
                <label htmlFor="price">Price</label>
              </div>

              <div className="flex gap-2">
                <input
                  type="radio"
                  name="sort"
                  id="name"
                  checked={selectedSort === 'name'}
                  onChange={() => setSearchParams({ sort: 'name' })}
                />
                <label htmlFor="name">Name</label>
              </div>
              <button
                className="cursor-pointer rounded border px-2 transition-all duration-500 hover:scale-102"
                onClick={() => setSearchParams({})}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>
        <hr />
      </div>
    </aside>
  );
};
