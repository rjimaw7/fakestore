import { IProducts } from '@shared/interfaces/IProducts';
import React, { useState } from 'react';

interface Props {
  item: IProducts;
}

const CheckOutItems = ({ item }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <ul className="grid grid-cols-4 text-center md:text-left md:grid-cols-5">
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
          >
            -
          </button>
          <span className="bg-gray-100 border border-gray-200 w-8 h-8 flex items-center justify-center">
            {count}
          </span>
          <button
            type="button"
            className="bg-gray-100 w-8 h-8 border border-gray-200"
          >
            +
          </button>
        </div>
      </li>
      <li>
        <p className="font-bold">${item.price}</p>
      </li>
    </ul>
  );
};

export default CheckOutItems;
