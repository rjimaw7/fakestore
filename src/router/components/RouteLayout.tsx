import { DefaultLayout } from '@layouts/Default';
import { ProductLayout } from '@layouts/Product';
import { ReactNode } from 'react';

// ADD OTHER LAYOUTS HERE
export type Layouts = 'default' | 'product';

interface Props {
  children: ReactNode;
  layout?: Layouts;
}

export const RouteLayout = ({ children, layout = 'default' }: Props) => {
  switch (layout) {
    case 'product':
      return <ProductLayout>{children}</ProductLayout>;
    default:
      return <DefaultLayout>{children}</DefaultLayout>;
  }
};
