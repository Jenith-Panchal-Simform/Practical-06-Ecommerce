import { Header } from "../components/Header";
import { Footer } from "./Footer";
// import { Hero } from "./Hero";
import { ProductDetails } from "./ProductDetails";
// import { Products } from "./Products";

export const Home = () => {
  return (
    <main className="bg-primary">
      <Header />
      {/* 
      <Hero />

      <Products /> */}
      <ProductDetails />

      <Footer />
    </main>
  );
};
