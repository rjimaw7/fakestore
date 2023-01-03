import { Button } from 'antd';
import React from 'react';
import BigCamera from '@assets/BigCamera.png';
import Yellow89 from '@assets/Yellow89.png';

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="p-5 flex justify-around gap-36 items-center">
        <section className="flex flex-col justify-center items-start">
          <h1 className="text-blue-900 text-6xl font-bold mb-4">
            Canon <br /> camera
          </h1>

          <div className="flex gap-4">
            <Button
              className="bg-yellow-500 text-white  w-36 h-16"
              size="large"
            >
              Shop Now
            </Button>
            <Button className="w-36 h-16" size="large">
              View More
            </Button>
          </div>
        </section>

        <section className="relative mt-12">
          <img src={BigCamera} alt="herocamera" />
          <img
            src={Yellow89}
            className="absolute top-48 -right-4"
            alt="yellow89"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
