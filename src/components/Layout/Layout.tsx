import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ProductProvider } from '../Products/ProductList/ProductFilterProvider';
import ErrorBoundary from '../Products/ErrorBoundary/ErrorBoundary';

export const Layout = () => {
  return (
    <>
      <ProductProvider>
        <Header />
        <div className="bg-tertiary">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </div>
        <Footer />
      </ProductProvider>
    </>
  );
};
