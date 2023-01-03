import React from 'react';
import BlackSpeaker from '@assets/BlackSpeaker.png';
import Laptop from '@assets/Laptop.png';
import SmallCamera from '@assets/SmallCamera.png';

const ProductItemsCount = () => {
  return (
    <div className="container mx-auto flex justify-evenly mt-8">
      <div className="border border-gray-400 rounded-xl flex items-center gap-11 p-5 w-96 h-36">
        <img src={BlackSpeaker} alt="firstbox" />

        <div>
          <p>Speaker</p>
          <p>(6 items)</p>
        </div>
      </div>

      <div className="border border-gray-400 rounded-xl flex items-center gap-11 p-5 w-96 h-36">
        <img src={Laptop} alt="secondbox" />

        <div>
          <p>Desktop & Laptop</p>
          <p>(6 items)</p>
        </div>
      </div>

      <div className="border border-gray-400 rounded-xl flex items-center gap-11 p-5 w-96 h-36">
        <img src={SmallCamera} alt="thirdbox" />

        <div>
          <p>DSLR camera</p>
          <p>(6 items)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItemsCount;
