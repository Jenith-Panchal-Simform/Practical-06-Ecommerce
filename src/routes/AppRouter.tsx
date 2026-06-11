import { createBrowserRouter } from 'react-router-dom';
import { Hero } from '../components/Hero/Hero';
import { Products } from '../components/Products/ProductList/Products';
import { ProductDetails } from '../components/Products/ProductDetails/ProductDetails';
import { Layout } from '../components/Layout/Layout';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <Products />
          </>
        ),
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        //implement loader
        path: 'products/:productId',
        element: <ProductDetails />,
      },
    ],
  },
]);
