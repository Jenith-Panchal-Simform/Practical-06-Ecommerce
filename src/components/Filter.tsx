import { Categories } from "./Categories";
import { PriceRange } from "./PriceRange";

export const Filter = () => {
  return (
    <section className="w-2/12">
      <div className="sticky top-20  bg-secondary h-[calc(100vh-80px)] px-5 py-5">
        <h1
          className="
                        font-heading
                        text-primary
                        text-xl
                        md:text-5xl
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
        <Categories />
        <hr />
        <PriceRange />
      </div>
    </section>
  );
};
