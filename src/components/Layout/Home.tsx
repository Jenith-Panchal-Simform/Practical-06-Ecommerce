import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { ProductSearchProvider } from "../Products/ProductList/Product Wrapper/context/ProductSearchProvider";
export const Home = () => {
  return (
    <>
      <ProductSearchProvider>
        <Header />
        <main className="bg-tertiary">
          <Outlet />
        </main>
      </ProductSearchProvider>
      <Footer />
    </>
  );
};
