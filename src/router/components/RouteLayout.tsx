import { DefaultLayout } from '@layouts/Default';
import { ReactNode } from 'react';

// ADD OTHER LAYOUTS HERE
export type Layouts = 'default';

interface Props {
  children: ReactNode;
  layout?: Layouts;
}

export const RouteLayout = ({ children, layout = 'default' }: Props) => {
  switch (layout) {
    default:
      return <DefaultLayout>{children}</DefaultLayout>;
  }
};
