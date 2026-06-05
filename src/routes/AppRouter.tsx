import { createBrowserRouter } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { Products } from "../components/Products/ProductList/Products";

import { ProductDetails } from "../components/Products/ProductList/ProductDetails";
import { Cart } from "../components/Products/Cart/Cart";
import { Home } from "../components/Layout/Home";

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
