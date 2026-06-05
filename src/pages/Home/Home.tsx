import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { ProductDetails } from "../ProductPage/ProductDetails";
import { Products } from "../../components/Products/Products";
import { Cart } from "../CartPage/Cart";

export const Home = () => {
  return (
    <main>
      <Header />

      <Hero />

      <Products />
      <ProductDetails />
      <Cart />
      <Footer />
    </main>
  );
};

//
