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
  return (
    <>
      <Hero />
      <ProductItemsCount />

      {/* POPULAR PRODUCTS */}

      <div className="mt-24 container mx-auto">
        <div className="flex justify-between">
          <h2 className="font-bold text-blue-900 text-3xl">Popular Products</h2>

          <div className="flex gap-2 items-center mb-8">
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
          <div className="flex justify-center">
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

        <div className="mt-12 grid gap-4 grid-cols-4 grid-rows-2 relative justify-center items-center">
          {loading ? (
            <Spin className="absolute top-0 left-0 right-0 bottom-0 m-auto" />
          ) : (
            data?.map((item) => <Products item={item} />)
          )}
        </div>
      </div>

      {/* LAPTOP */}
      <div className="container mt-32 mx-auto relative">
        <img className="w-full" src={NewLaptop} alt="newLaptop" />

        <div className="text-center absolute top-32 right-56 p-5">
          <Button className="bg-yellow-500 text-white mb-12" size="large">
            New Laptop
          </Button>

          <h2 className="text-blue-600 font-bold text-4xl">
            Sale up to 50% off
          </h2>
          <p className="text-white mt-2">12 inch hd display</p>

          <Button className="bg-yellow-500 text-white mt-12" size="large">
            Shop Now
          </Button>
        </div>
      </div>

      {/* OTHER PRODUCTS */}

      <section
        id="other-products"
        className="container mx-auto mt-24 flex gap-8"
      >
        <div className="border border-gray-400 w-1/2 rounded-lg flex items-center gap-12">
          <img src={OtherSpeaker} alt="otherSpeaker" />

          <div>
            <h2 className="text-2xl font-bold text-blue-900">
              JBL bar 2.1 deep bass
            </h2>
            <p className="font-bold my-3">$11,70</p>
            <Stars2 />
            <div className="mt-3 flex gap-2">
              <div className="w-20 h-20 bg-blue-100 rounded-full text-yellow-500 font-bold flex justify-center items-center">
                57
              </div>
              <div className="w-20 h-20 bg-blue-100 rounded-full text-yellow-500 font-bold  flex justify-center items-center">
                11
              </div>
              <div className="w-20 h-20 bg-blue-100 rounded-full text-yellow-500 font-bold  flex justify-center items-center">
                33
              </div>
              <div className="w-20 h-20 bg-blue-100 rounded-full text-yellow-500 font-bold  flex justify-center items-center">
                59
              </div>
            </div>
            <div className="mt-4 flex gap-6">
              <Button
                size="large"
                className=" bg-blue-500 text-black w-1/2 font-semibold flex justify-between items-center"
              >
                <p>Add to Cart</p>
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.415375"
                    y="0.31543"
                    width="30.4897"
                    height="30.4897"
                    rx="15.2448"
                    fill="#EDA415"
                  />
                  <path
                    d="M8.48849 8.38867H9.73636C10.5109 8.38867 11.1205 9.05563 11.0559 9.823L10.4607 16.9659C10.3603 18.1349 11.2854 19.1389 12.4616 19.1389H20.0994C21.1321 19.1389 22.0357 18.2927 22.1146 17.2671L22.5018 11.8884C22.5879 10.6979 21.6843 9.72976 20.4866 9.72976H11.2281"
                    stroke="white"
                    strokeWidth="1.47531"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7081 22.7319C19.2032 22.7319 19.6046 22.3305 19.6046 21.8354C19.6046 21.3403 19.2032 20.939 18.7081 20.939C18.213 20.939 17.8116 21.3403 17.8116 21.8354C17.8116 22.3305 18.213 22.7319 18.7081 22.7319Z"
                    stroke="white"
                    strokeWidth="1.47531"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.9708 22.7319C13.4659 22.7319 13.8673 22.3305 13.8673 21.8354C13.8673 21.3403 13.4659 20.939 12.9708 20.939C12.4757 20.939 12.0744 21.3403 12.0744 21.8354C12.0744 22.3305 12.4757 22.7319 12.9708 22.7319Z"
                    stroke="white"
                    strokeWidth="1.47531"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5086 12.6917H22.1146"
                    stroke="white"
                    strokeWidth="1.47531"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <div className="border border-transparent cursor-pointer rounded-lg w-16 h-15 bg-blue-500 flex justify-center items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1255 12.5604C16.1255 14.5078 14.5519 16.0814 12.6045 16.0814C10.6571 16.0814 9.0834 14.5078 9.0834 12.5604C9.0834 10.613 10.6571 9.03931 12.6045 9.03931C14.5519 9.03931 16.1255 10.613 16.1255 12.5604Z"
                    stroke="#292D32"
                    strokeWidth="1.47531"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6045 20.694C16.0764 20.694 19.3123 18.6483 21.5646 15.1076C22.4497 13.7208 22.4497 11.3898 21.5646 10.003C19.3123 6.46226 16.0764 4.4165 12.6045 4.4165C9.13265 4.4165 5.89681 6.46226 3.64451 10.003C2.75933 11.3898 2.75933 13.7208 3.64451 15.1076C5.89681 18.6483 9.13265 20.694 12.6045 20.694Z"
                    stroke="#292D32"
                    strokeWidth="1.47531"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="border border-gray-400 h-1/2 rounded-lg flex justify-evenly items-center">
            <img src={OtherJoystick} alt="otherJoystick" />
            <div>
              <h2 className="font-semibold text-blue-900">Play game</h2>
              <p className="my-2 font-bold">$11,70</p>
              <Stars2 />
            </div>
          </div>
          <div className="border border-gray-400 h-1/2 rounded-lg flex justify-evenly items-center">
            <img src={OtherLaptop} alt="otherLaptop" />
            <div>
              <h2 className="font-semibold text-blue-900">Play game</h2>
              <p className="my-2 font-bold">$11,70</p>
              <Stars2 />
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section
        id="showcase"
        className="container mx-auto mt-24 flex justify-around items-center bg-blue-100 p-8 rounded-lg"
      >
        <div className="flex gap-6 items-center">
          <ShowCaseBox />
          <div className="flex flex-col">
            <h2 className="font-bold text-blue-900 text-2xl">Free Delivery</h2>
            <p className="font-semibold text-blue-900">on order above $50,00</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <ShowCaseCrown />
          <div className="flex flex-col">
            <h2 className="font-bold text-blue-900 text-2xl">Best Quality</h2>
            <p className="font-semibold text-blue-900">
              best quality in low price
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
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

      <section id="testimonials" className="container mx-auto mt-24 flex gap-4">
        <div className="border border-gray-400 rounded-lg p-5">
          <div className="flex gap-12 items-center">
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

        <div className="border border-gray-400 rounded-lg p-5">
          <div className="flex gap-12 items-center">
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

        <div className="border border-gray-400 rounded-lg p-5">
          <div className="flex gap-12 items-center">
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

      <section id="news" className="container mx-auto mt-24 mb-24">
        <div className="flex justify-between">
          <h2 className="font-bold text-blue-900 text-2xl">Latest News</h2>
          <p className="font-semibold text-blue-900 text-lg cursor-pointer">
            View all
          </p>
        </div>

        <div className="flex mt-16 gap-8">
          <div className="border border-gray-200 w-1/2">
            <div className="p-5 mt-4 flex items-start">
              <div className="w-1/2">
                <img src={News1} alt="news1" />
              </div>
              <div className="w-1/2">
                <p className="font-semibold border border-gray-200 rounded-full w-1/2 text-center py-2 text-blue-900 text-lg">
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

          <div className="border border-gray-200 w-1/2">
            <div className="p-5 mt-4 flex items-start">
              <div className="w-1/2">
                <img src={News2} alt="news1" />
              </div>
              <div className="w-1/2">
                <p className="font-semibold border border-gray-200 rounded-full w-1/2 text-center py-2 text-blue-900 text-lg">
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
