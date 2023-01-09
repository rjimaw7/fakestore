import { Spin } from 'antd';
import { lazy, Suspense } from 'react';

const Checkout = lazy(() => import('./CheckoutContainer'));

export const CheckoutPage = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-full">
          <Spin />
        </div>
      }
    >
      <Checkout />
    </Suspense>
  );
};
