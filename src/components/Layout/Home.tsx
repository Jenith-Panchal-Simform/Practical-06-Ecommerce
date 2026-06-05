import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
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
