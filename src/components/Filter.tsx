import { Categories } from "./Categories";
import { PriceRange } from "./PriceRange";

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
        <Categories />
        <hr />
        <PriceRange />
      </div>
    </aside>
  );
};
