import React from 'react';
import { Input } from 'antd';
import HeadPhone from '@assets/HeadPhone';
import FooterLogo from '@assets/FooterLogo.png';

import FooterSocial from '@assets/FooterSocial';

const { Search } = Input;

const Footer = () => {
  return (
    <footer id="footer" className=" bg-blue-100">
      <div className="container mx-auto p-5">
        <div className="bg-white border border-transparent rounded-lg block mb-6 md:mb-10 md:flex items-center justify-evenly mt-6 p-6">
          <p className="font-bold text-blue-900 text-2xl text-center mb-4 md:text-left md:mb-0">
            Subscribe to our newsletter
          </p>
          <div className="mb-4 md:mb-0">
            <Search
              placeholder="Email Address"
              allowClear
              enterButton="Send"
              size="large"
              className="bg-yellow-500 rounded-lg "
              // onSearch={onSearch}
            />
          </div>
          <div className="flex md:ml-6 lg:ml-0 gap-6 justify-center md:justify-start">
            <HeadPhone />
            <div className="font-semibold">
              <p>Call us 24/7 :</p>
              <p>(+62) 0123 567 789</p>
            </div>
          </div>
        </div>

        {/* FOOTER DETAILS */}
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4">
          <div className="">
            <img src={FooterLogo} alt="footerlogo" />
            <p className="italic text-md text-blue-900 mt-4">
              1808 Ross Street, Okawville Illinois
            </p>
            <div className="border border-t-1 border-t-gray-500 md:border-t-0 mt-4 cursor-pointer mb-4 md:mb-0">
              <div className="flex justify-start gap-6 mt-4">
                <FooterSocial />
              </div>
            </div>
          </div>
          <div className="border-b-2 border-gray-500 md:border-b-0">
            <h2 className="font-bold text-blue-900 text-lg border">
              Find Product
            </h2>
            <ul className="md:list-disc text-blue-900 leading-loose cursor-pointer">
              <li>Brownze arnold</li>
              <li>Chronograph blue</li>
              <li>Smart phones</li>
              <li>Automatic watch</li>
              <li>Hair straighteners</li>
            </ul>
          </div>
          <div className="border-b-2 border-gray-500 md:border-b-0">
            <h2 className="font-bold text-blue-900 text-lg border">Get help</h2>
            <ul className="md:list-disc text-blue-900 leading-loose cursor-pointer">
              <li>About us</li>
              <li>Contact us</li>
              <li>Return policy</li>
              <li>Privacy policy</li>
              <li>Payment policy</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-blue-900 text-lg border">About us</h2>
            <ul className="md:list-disc text-blue-900 leading-loose cursor-pointer">
              <li>News</li>
              <li>Service</li>
              <li>Our policy</li>
              <li>Customer care</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
