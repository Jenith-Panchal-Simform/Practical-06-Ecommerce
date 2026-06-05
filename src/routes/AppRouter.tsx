import { createBrowserRouter } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { Products } from "../components/Products/Products";

import { ProductDetails } from "../pages/ProductPage/ProductDetails";
import { Cart } from "../pages/CartPage/Cart";
import { Home } from "../components/Home/Home";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: (
          <>
            <Hero />
            <Products />
          </>
        ),
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        //implement loader
        path: "products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
