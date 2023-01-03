/* eslint-disable import/order */
import { RouteObject } from 'react-router-dom';
import { Route } from './components/Route';
import { MainPage } from '@pages/Main';

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
];
