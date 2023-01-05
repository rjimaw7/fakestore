/* eslint-disable import/order */
import { RouteObject } from 'react-router-dom';
import { Route } from './components/Route';
import { MainPage } from '@pages/Main';
import { ProductPage } from '@pages/Product';

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
];
