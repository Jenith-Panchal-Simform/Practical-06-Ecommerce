import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Filter } from './Filter';
import { ProductList } from './ProductList';

export const Products = () => {
  return (
    <main className="relative flex min-h-screen">
      <ErrorBoundary
        fallback={
          <p className="mt-20 hidden shrink-0 text-xl lg:block lg:w-3/12 xl:w-2/12">
            Something went wrong while rendering the filter section.
          </p>
        }
      >
        <Filter />
      </ErrorBoundary>
      <ProductList />
    </main>
  );
};
