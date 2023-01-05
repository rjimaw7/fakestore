import React from 'react';
import BlackSpeaker from '@assets/BlackSpeaker.png';
import Laptop from '@assets/Laptop.png';
import { ProductsFilter } from '../MainContainer';

interface Props {
  onFilter: (type: keyof ProductsFilter, value: any) => void;
}

const ProductItemsCount = ({ onFilter }: Props) => {
  return (
    <section
      id="products"
      // className="container mx-auto md:flex justify-evenly mt-8"
      className="container mt-2 mx-auto md:grid md:grid-cols-2 lg:flex"
    >
      {/* <div className="border border-gray-400 rounded-xl flex items-center gap-11 p-5 w-96 h-36"> */}
      <div
        className="border cursor-pointer border-gray-400 rounded-xl mb-4 flex items-center w-80 mx-auto"
        onClick={() => onFilter('category', 'electronics')}
      >
        <img src={BlackSpeaker} alt="firstbox" />
        <div>
          <p>Electronics</p>
          <p>(6 items)</p>
        </div>
      </div>

      <div
        className="border cursor-pointer border-gray-400 rounded-xl mb-4 flex items-center w-80 mx-auto"
        onClick={() => onFilter('category', 'jewelery')}
      >
        <img src={Laptop} alt="firstbox2" />
        <div>
          <p>Jewelry</p>
          <p>(4 items)</p>
        </div>
      </div>

      <div
        className="border cursor-pointer border-gray-400 rounded-xl mb-4 flex items-center w-80 mx-auto"
        onClick={() => onFilter('category', "men's clothing")}
      >
        <img src={BlackSpeaker} alt="firstbox3" />
        <div>
          <p>Mens Clothing</p>
          <p>(4 items)</p>
        </div>
      </div>

      <div
        className="border cursor-pointer border-gray-400 rounded-xl mb-4 flex items-center w-80 mx-auto"
        onClick={() => onFilter('category', "women's clothing")}
      >
        <img src={Laptop} alt="firstbox4" />
        <div>
          <p>Womens Clothing</p>
          <p>(6 items)</p>
        </div>
      </div>
    </section>
  );
};

export default ProductItemsCount;
