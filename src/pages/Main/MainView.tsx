/* eslint-disable import/no-cycle */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/order */
import { Button, Pagination, Spin } from 'antd';
import { IProducts } from '@shared/interfaces/IProducts';
import NewLaptop from '@assets/NewLaptop.png';
import Hero from './helpers/Hero';
import ProductItemsCount from './helpers/ProductItemsCount';
import Products from './helpers/Products';
import OtherSpeaker from '@assets/OtherSpeaker.png';
import OtherJoystick from '@assets/OtherJoystick.png';
import OtherLaptop from '@assets/OtherLaptop.png';
import Stars2 from '@assets/Stars2';
import { ProductsFilter } from './MainContainer';
import ShowCaseBox from '@assets/ShowCaseBox';
import ShowCaseCrown from '@assets/ShowCaseCrown';
import ShowCaseShield from '@assets/ShowCaseShield';
import Testimonial1 from '@assets/Testimonial1.png';
import Testimonial2 from '@assets/Testimonial2.png';
import Testimonial3 from '@assets/Testimonial3.png';
import News1 from '@assets/News1.png';
import News2 from '@assets/News2.png';
import { Footer } from '@components/Footer';
import SmallCart from '@assets/SmallCart';
import View from '@assets/View';
import { useRef } from 'react';

interface Props {
  data?: IProducts[];
  loading: boolean;
  //
  page: number;
  pageSize: number;
  handlePageChange: (page: number) => void;
  handlePageSizeChange: (pageSize: number) => void;
  productsAllCount: number;
  onFilter: (type: keyof ProductsFilter, value: any) => void;
}

const MainView = ({
  data,
  loading,
  page,
  pageSize,
  handlePageChange,
  handlePageSizeChange,
  productsAllCount,
  onFilter,
}: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero elementRef={elementRef} />
      <ProductItemsCount onFilter={onFilter} />

      {/* POPULAR PRODUCTS */}

      <section
        id="popular-products"
        ref={elementRef}
        className=" md:mt-24 container mx-auto"
      >
        <div className="md:flex md:justify-between">
          <h2 className="font-bold text-blue-900 text-2xl text-center p-5 md:p-0 lg:p-0">
            Popular Products
          </h2>

          <div className="grid grid-cols-1 gap-2 p-5 md:flex md:p-0">
            <Button
              name="electronics"
              size="large"
              onClick={() => onFilter('category', null)}
            >
              All Products
            </Button>
            <Button
              name="electronics"
              size="large"
              onClick={() => onFilter('category', 'electronics')}
            >
              Electronics
            </Button>
            <Button
              size="large"
              onClick={() => onFilter('category', 'jewelery')}
            >
              Jewelry
            </Button>
            <Button
              size="large"
              onClick={() => onFilter('category', "men's clothing")}
            >
              Men's Clothing
            </Button>
            <Button
              size="large"
              onClick={() => onFilter('category', "women's clothing")}
            >
              Women's Clothing
            </Button>
          </div>
        </div>

        {!loading && (
          <div className="flex justify-center md:justify-end mt-6">
            <Pagination
              current={page}
              pageSize={pageSize}
              pageSizeOptions={[10, 12, 20, 50, 100]}
              onChange={(page, pageSize) => {
                handlePageChange(page);
                handlePageSizeChange(pageSize);
              }}
              total={productsAllCount}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
            />
          </div>
        )}

        <div className="mt-12 p-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            <Spin className="absolute top-0 left-0 right-0 bottom-0 m-auto" />
          ) : (
            data?.map((item) => <Products item={item} key={item.id} />)
          )}
        </div>
      </section>

      {/* LAPTOP */}
      <div className="mt-10 container mx-auto p-5 relative">
        <img className="w-full" src={NewLaptop} alt="newLaptop" />
        <div className="absolute right-20 top-7 text-center md:right-24 md:top-12 lg:right-60 lg:top-24">
          <button
            type="button"
            className="bg-yellow-500 text-white rounded-full text-xs p-1 md:p-3 lg:p-4 lg:text-lg"
          >
            New Laptop
          </button>
          <h2 className="text-blue-400 text-xs mt-3 md:text-2xl lg:mt-8">
            Sale up to 50% off
          </h2>
          <p className="text-xs text-white mb-3 md:text-lg lg:mb-8">
            12 inch hd display
          </p>
          <button
            type="button"
            className="bg-yellow-500 text-white rounded-full text-xs p-1 md:p-3 lg:p-4 lg:text-lg"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* OTHER PRODUCTS */}
      <section
        id="other-products"
        className="container mx-auto mt-4 p-5 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2"
      >
        <div className="border border-gray-400 rounded-lg flex items-center justify-center md:row-span-2">
          <div>
            <img src={OtherSpeaker} alt="otherSpeaker" />
          </div>

          <div className="mx-3">
            <h2 className="text-1xl font-bold text-blue-900">
              JBL bar 2.1 deep bass
            </h2>
            <p className="font-bold my-3">$11,70</p>
            <Stars2 />

            {/* <div className="mt-3 flex gap-1 p-3"> */}
            <div className="mt-3 flex gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-blue-100 rounded-full text-yellow-500 font-bold flex justify-center items-center">
                57
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full text-yellow-500 font-bold flex justify-center items-center">
                11
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full text-yellow-500 font-bold flex justify-center items-center">
                33
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full text-yellow-500 font-bold flex justify-center items-center">
                59
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className=" bg-blue-300 text-black w-full h-12 font-semibold mb-2 flex justify-between items-center
                rounded-lg p-1 lg:mb-0"
              >
                <p className="text-sm font-semibold">Add to Cart</p>
                <SmallCart />
              </button>
              <div className="border border-transparent cursor-pointer mb-2 rounded-lg w-16 h-15 bg-blue-300 flex justify-center items-center lg:mb-0">
                <View />
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-400 rounded-lg flex items-center justify-center">
          <div>
            <img src={OtherJoystick} alt="otherSpeaker" />
          </div>

          <div className="mx-3">
            <h2 className="text-1xl font-bold text-blue-900">Play Game</h2>
            <p className="font-bold my-3">$11,70</p>
            <Stars2 />
          </div>
        </div>

        <div className="border border-gray-400 rounded-lg flex items-center justify-center">
          <div>
            <img src={OtherLaptop} alt="otherSpeaker" />
          </div>

          <div className="mx-3">
            <h2 className="text-1xl font-bold text-blue-900">Play Game</h2>
            <p className="font-bold my-3">$11,70</p>
            <Stars2 />
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section
        id="showcase"
        className="container mx-auto mt-24 block md:flex justify-around items-center bg-blue-100 p-8 rounded-lg"
      >
        <div className="flex justify-center my-6 gap-6 items-center">
          <ShowCaseBox />
          <div className="flex flex-col">
            <h2 className="font-bold text-blue-900 text-2xl">Free Delivery</h2>
            <p className="font-semibold text-blue-900">on order above $50,00</p>
          </div>
        </div>
        <div className="flex justify-center mb-5 gap-6 my-6 items-center">
          <ShowCaseCrown />
          <div className="flex flex-col">
            <h2 className="font-bold text-blue-900 text-2xl">Best Quality</h2>
            <p className="font-semibold text-blue-900">
              best quality in low price
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-5 gap-6 my-6 items-center">
          <ShowCaseShield />
          <div className="flex flex-col">
            <h2 className="font-bold text-blue-900 text-2xl">
              1 year warranty
            </h2>
            <p className="font-semibold text-blue-900">Available warranty</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section
        id="testimonials"
        className="container mx-auto mt-24 p-5 block md:flex gap-4"
      >
        <div className="border border-gray-400 mb-4 rounded-lg p-5 lg:mb-0">
          <div className="flex gap-12 md:gap-6 items-center">
            <img
              className="border border-yellow-500 border-dashed rounded-full p-1"
              src={Testimonial1}
              alt="person1"
            />
            <p className="text-blue-900 font-semibold">Savannah Nguyen</p>
          </div>
          <div className="mt-4 bg-blue-100 rounded-lg p-5 text-blue-900 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, fugiat repudiandae est consectetur quis possimus.
          </div>
        </div>

        <div className="border border-gray-400 mb-4 rounded-lg p-5 lg:mb-0">
          <div className="flex gap-12 md:gap-6  items-center">
            <img
              className="border border-yellow-500 border-dashed rounded-full p-1"
              src={Testimonial2}
              alt="person2"
            />
            <p className="text-blue-900 font-semibold">Esther Howard</p>
          </div>
          <div className="mt-4 bg-blue-100 rounded-lg p-5 text-blue-900 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, fugiat repudiandae est consectetur quis possimus.
          </div>
        </div>

        <div className="border border-gray-400 mb-4 rounded-lg p-5 lg:mb-0">
          <div className="flex gap-12 md:gap-6  items-center">
            <img
              className="border border-yellow-500 border-dashed rounded-full p-1"
              src={Testimonial3}
              alt="person3"
            />
            <p className="text-blue-900 font-semibold">John Doe</p>
          </div>
          <div className="mt-4 bg-blue-100 rounded-lg p-5 text-blue-900 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, fugiat repudiandae est consectetur quis possimus.
          </div>
        </div>
      </section>

      {/* NEWS */}

      <section
        id="news"
        className="container mx-auto mt-6 md:mt-24 mb-24 p-5 lg:p-0"
      >
        <div className="flex justify-between">
          <h2 className="font-bold text-blue-900 text-2xl">Latest News</h2>
          <p className="font-semibold text-blue-900 text-lg cursor-pointer">
            View all
          </p>
        </div>

        <div className="block mt-8 md:flex md:mt-16 gap-8">
          <div className="border border-gray-200 mb-4 md:mb-0 w-full md:w-1/2">
            <div className="p-5 mt-4 flex md:block lg:flex gap-6 md:gap-0 items-center md:items-start">
              <div className="w-full lg:w-1/2">
                <img className="" src={News1} alt="news1" />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="font-semibold border border-gray-200 rounded-full md:hidden lg:block w-1/2 text-center py-2 text-blue-900 text-lg">
                  Jan 3, 2023
                </p>
                <h2 className="mt-2 font-bold text-blue-900 text-2xl">
                  Who avoids a pain that produces?
                </h2>
                <p className="mt-3 font-semibold text-md text-blue-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur tempore maxime ea modi libero quos asperiores,
                  laborum voluptates nesciunt beatae.
                </p>

                <p className="text-blue-900 mt-9 text-sm font-semibold">
                  By: Spacing Tech
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 w-full md:w-1/2">
            <div className="p-5 mt-4 flex md:block lg:flex gap-6 md:gap-0 items-center md:items-start">
              <div className="w-full lg:w-1/2">
                <img className="" src={News2} alt="news1" />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="font-semibold border border-gray-200 rounded-full md:hidden lg:block w-1/2 text-center py-2 text-blue-900 text-lg">
                  Jan 1, 2023
                </p>
                <h2 className="mt-2 font-bold text-blue-900 text-2xl">
                  Who avoids a pain that produces?
                </h2>
                <p className="mt-3 font-semibold text-md text-blue-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur tempore maxime ea modi libero quos asperiores,
                  laborum voluptates nesciunt beatae.
                </p>

                <p className="text-blue-900 mt-9 text-sm font-semibold">
                  By: Spacing Tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MainView;
