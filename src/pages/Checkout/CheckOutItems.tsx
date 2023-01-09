import { IProducts } from '@shared/interfaces/IProducts';
import React, { useState } from 'react';

interface Props {
  item: IProducts;
  // totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const CheckOutItems = ({ item, setTotalPrice }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(1);
  const [subtotal, setSubtotal] = useState(item.price);

  const handleAddButton = () => {
    setCount((x) => x + 1);
    setSubtotal((amount) => amount + item.price);
    setTotalPrice((amount) => amount + item.price);
  };

  const handleMinusButton = () => {
    setCount((x) => x - 1);
    setTotalPrice((amount) => amount - item.price);
  };

  return (
    <ul className="p-2 lg:p-3 grid grid-cols-4 text-center md:text-left md:grid-cols-5 md:mb-16 border-b-2 border-gray-200">
      <li className="md:col-span-2">
        <div className="md:flex gap-2 items-center">
          <img
            className="w-16 ml-6 md:ml-0 md:w-1/2"
            src={item.image}
            alt="123"
          />
          <p className="text-xs mt-2 md:mt-0 md:text-lg text-blue-900 font-semibold">
            {item.title}
          </p>
        </div>
      </li>
      <li className="">
        <p className="font-bold">${item.price}</p>
      </li>
      <li>
        <div className="flex justify-evenly md:flex md:justify-start">
          <button
            type="button"
            className="bg-gray-100 w-8 h-8 border border-gray-200"
            disabled={count === 1}
            onClick={handleMinusButton}
          >
            -
          </button>
          <span className="bg-gray-100 border border-gray-200 w-8 h-8 flex items-center justify-center">
            {count}
          </span>
          <button
            type="button"
            className="bg-gray-100 w-8 h-8 border border-gray-200"
            disabled={item.rating.count <= count}
            onClick={handleAddButton}
          >
            +
          </button>
        </div>
      </li>
      <li>
        <p className="font-bold">${subtotal.toFixed(2)}</p>
      </li>
    </ul>
  );
};

export default CheckOutItems;
