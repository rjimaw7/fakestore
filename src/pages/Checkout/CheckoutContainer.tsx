import React from 'react';
import CheckoutView from './CheckoutView';
import { useLocation } from 'react-router-dom';

const CheckoutContainer = () => {
  const location = useLocation();

  const checkOutData = [location.state.data];

  return <CheckoutView data={checkOutData} />;
};

export default CheckoutContainer;
