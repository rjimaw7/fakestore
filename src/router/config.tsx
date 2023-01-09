/* eslint-disable import/order */
import { RouteObject } from 'react-router-dom';
import { Route } from './components/Route';
import { MainPage } from '@pages/Main';
import { ProductPage } from '@pages/Product';
import { CheckoutPage } from '@pages/Checkout';

export const config: RouteObject[] = [
  {
    path: '/',
    element: (
      <Route layout="default">
        <MainPage />
      </Route>
    ),
    index: true,
  },
  {
    path: '/products/:id',
    element: (
      <Route layout="product">
        <ProductPage />
      </Route>
    ),
  },
  {
    path: '/checkout',
    element: (
      <Route layout="checkout">
        <CheckoutPage />
      </Route>
    ),
  },
];
