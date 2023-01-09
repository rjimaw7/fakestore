import React from 'react';
import CheckoutView from './CheckoutView';
import { useSelector } from 'react-redux';
import { RootState } from '@shared/redux/store';

const CheckoutContainer = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return <CheckoutView data={cart} />;
};

export default CheckoutContainer;
