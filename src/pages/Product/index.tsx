import { Spin } from 'antd';
import { lazy, Suspense } from 'react';

const Product = lazy(() => import('./ProductContainer'));

export const ProductPage = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-full">
          <Spin />
        </div>
      }
    >
      <Product />
    </Suspense>
  );
};
