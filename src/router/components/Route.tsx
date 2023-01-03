import { ReactNode } from 'react';
import { Layouts, RouteLayout } from './RouteLayout';

interface Props {
  children: ReactNode;

  layout?: Layouts;
}

export const Route = ({ children, layout }: Props) => {
  return <RouteLayout layout={layout}>{children}</RouteLayout>;
};
