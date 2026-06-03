import { Header } from "../components/Header";
import { Hero } from "./Hero";
import { Products } from "./Products";

export const Home = () => {
  return (
    <main className="bg-primary">
      <Header />

      <Hero />

      <Products />
    </main>
  );
};
