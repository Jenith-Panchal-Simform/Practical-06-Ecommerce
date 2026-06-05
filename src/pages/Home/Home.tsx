import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <main className="bg-tertiary">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
