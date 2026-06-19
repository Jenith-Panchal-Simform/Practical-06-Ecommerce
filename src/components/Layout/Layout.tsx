import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ProductProvider } from '../Products/ProductList/ProductFilterProvider';
export const Layout = () => {
  return (
    <>
      <ProductProvider>
        <Header />
        <div className="bg-tertiary">
          <Outlet />
        </div>
        <Footer />
      </ProductProvider>
    </>
  );
};
