import { createBrowserRouter } from 'react-router-dom';
import { Products } from '../components/Products/ProductList/Products';
import { ProductDetails } from '../components/Products/ProductDetails/ProductDetails';
import { Layout } from '../components/Layout/Layout';
import { Home } from '../components/Home/Home';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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
