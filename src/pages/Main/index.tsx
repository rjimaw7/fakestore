import { Spin } from 'antd';
import { lazy, Suspense } from 'react';

const Main = lazy(() => import('./MainContainer'));

export const MainPage = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-full">
          <Spin />
        </div>
      }
    >
      <Main />
    </Suspense>
  );
};
