/* eslint-disable jsx-a11y/label-has-associated-control */
import { IProducts } from '@shared/interfaces/IProducts';
import { Breadcrumb, Button, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import { Footer } from '@components/Footer';
import ProductStars from './helpers/ProductStars';
import { useDispatch } from 'react-redux';
import { increment } from '@shared/redux/slices/cartSlice';

interface Props {
  data: IProducts;
}

const ProductView = ({ data }: Props) => {
  const dispatch = useDispatch();

  const truncateString = (string = '', maxLength = 80) =>
    string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

  return (
    <>
      <section id="single-product" className="container mx-auto mt-12">
        <div className="mx-20">
          <Breadcrumb className="font-bold">
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
          </Breadcrumb>

          {/* SINGLE PRODUCT */}

          <section>
            <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
              <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                  <img
                    alt="Les Paul"
                    src={data.image}
                    className="object-contain w-full aspect-square rounded-xl border border-gray-400 p-3"
                  />

                  <div className="grid grid-cols-2 gap-4 lg:mt-4">
                    <img
                      alt="Les Paul"
                      src={data.image}
                      className="object-contain w-full aspect-square rounded-xl border border-gray-400 p-3"
                    />

                    <img
                      alt="Les Paul"
                      src={data.image}
                      className="object-contain w-full aspect-square rounded-xl border border-gray-400 p-3"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button size="large" className="">
                      Description
                    </Button>
                  </div>
                </div>

                <div className="h-full flex flex-col">
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-blue-900">
                      {data.title}
                    </h2>
                    <p className="font-semibold text-2xl mt-4">${data.price}</p>
                  </div>

                  <div className="flex justify-between mt-8">
                    <div className="max-w-[35ch]">
                      <p className="mt-0.5 text-lg font-semibold">
                        Rating : {data.rating.rate}
                      </p>

                      <div className="mt-2 -ml-0.5 flex">
                        <ProductStars rating={data.rating.rate} />
                      </div>
                    </div>
                  </div>

                  <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="block">
                      <div>
                        <div className="prose max-w-none group-open:hidden">
                          <p>{truncateString(data.description)}</p>
                        </div>

                        <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                          Read More
                        </span>
                      </div>
                    </summary>

                    <div className="pb-6 prose max-w-none">
                      <p>{data.description}</p>
                    </div>
                  </details>

                  <form className="mt-8 border-t-2  borer-gray-500">
                    <fieldset className="mt-4">
                      <legend className="mb-1 text-sm font-medium">Size</legend>

                      <div className="flow-root">
                        <div className="-m-0.5 flex flex-wrap">
                          <label
                            htmlFor="size_xs"
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="size"
                              id="size_xs"
                              className="sr-only peer"
                            />

                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                              XS
                            </span>
                          </label>

                          <label
                            htmlFor="size_s"
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="size"
                              id="size_s"
                              className="sr-only peer"
                            />

                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                              S
                            </span>
                          </label>

                          <label
                            htmlFor="size_m"
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="size"
                              id="size_m"
                              className="sr-only peer"
                            />

                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                              M
                            </span>
                          </label>

                          <label
                            htmlFor="size_l"
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="size"
                              id="size_l"
                              className="sr-only peer"
                            />

                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                              L
                            </span>
                          </label>

                          <label
                            htmlFor="size_xl"
                            className="cursor-pointer p-0.5"
                          >
                            <input
                              type="radio"
                              name="size"
                              id="size_xl"
                              className="sr-only peer"
                            />

                            <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                              XL
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="flex mt-4 gap-2">
                      <p>Quantity:</p>
                      <InputNumber
                        min={1}
                        max={data.rating.count}
                        defaultValue={1}
                      />
                    </div>

                    <div className="mt-8 flex gap-12 border-b-2 border-gray-500">
                      <Button
                        size="large"
                        className="bg-yellow-500 text-white mb-8"
                        onClick={() => dispatch(increment())}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        size="large"
                        className="bg-yellow-500 text-white mb-8"
                      >
                        Buy it Now
                      </Button>
                    </div>
                  </form>

                  <div className="flex h-full justify-between flex-col">
                    <div className="flex flex-col gap-2 mt-4">
                      <p className="font-semibold">Sku: 01133-9-9</p>
                      <p className="font-semibold">Category: {data.category}</p>
                      <div className="flex gap-2 font-semibold cursor-pointer">
                        <p>Share:</p>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.6815 10.7H12.2815V14.4H17.7815C17.6815 15.3 17.0815 16.7 15.7815 17.6C14.9815 18.2 13.7815 18.6 12.2815 18.6C9.68149 18.6 7.38149 16.9 6.58149 14.4C6.38149 13.8 6.28149 13.1 6.28149 12.4C6.28149 11.7 6.38149 11 6.58149 10.4C6.68149 10.2 6.68149 10 6.78149 9.9C7.68149 7.8 9.78149 6.3 12.2815 6.3C14.1815 6.3 15.3815 7.1 16.1815 7.8L18.9815 5C17.2815 3.5 14.9815 2.5 12.2815 2.5C8.38149 2.5 4.98149 4.7 3.38149 8C2.68149 9.4 2.28149 10.9 2.28149 12.5C2.28149 14.1 2.68149 15.6 3.38149 17C4.98149 20.3 8.38149 22.5 12.2815 22.5C14.9815 22.5 17.2815 21.6 18.8815 20.1C20.7815 18.4 21.8815 15.8 21.8815 12.7C21.8815 11.9 21.7815 11.3 21.6815 10.7Z"
                            stroke="#3B3B3B"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.0815 9.8V12.7H16.6815C16.8815 12.7 16.9815 12.9 16.9815 13.1L16.5815 15C16.5815 15.1 16.3815 15.2 16.2815 15.2H14.0815V22.5H11.0815V15.3H9.38154C9.18154 15.3 9.08154 15.2 9.08154 15V13.1C9.08154 12.9 9.18154 12.8 9.38154 12.8H11.0815V9.5C11.0815 7.8 12.3815 6.5 14.0815 6.5H16.7815C16.9815 6.5 17.0815 6.6 17.0815 6.8V9.2C17.0815 9.4 16.9815 9.5 16.7815 9.5H14.3815C14.1815 9.5 14.0815 9.6 14.0815 9.8Z"
                            stroke="#3B3B3B"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          />
                          <path
                            d="M15.0815 22.5H9.08154C4.08154 22.5 2.08154 20.5 2.08154 15.5V9.5C2.08154 4.5 4.08154 2.5 9.08154 2.5H15.0815C20.0815 2.5 22.0815 4.5 22.0815 9.5V15.5C22.0815 20.5 20.0815 22.5 15.0815 22.5Z"
                            stroke="#3B3B3B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.98154 21.1C8.48154 22 10.2815 22.5 12.0815 22.5C17.5815 22.5 22.0815 18 22.0815 12.5C22.0815 7 17.5815 2.5 12.0815 2.5C6.58154 2.5 2.08154 7 2.08154 12.5C2.08154 14.3 2.58154 16 3.38154 17.5L2.52199 20.806C2.32726 21.5549 3.02047 22.2317 3.76453 22.0191L6.98154 21.1Z"
                            stroke="#3B3B3B"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5815 15.3485C16.5815 15.5105 16.5455 15.677 16.4689 15.839C16.3923 16.001 16.2931 16.154 16.1624 16.298C15.9416 16.541 15.6982 16.7165 15.4233 16.829C15.1529 16.9415 14.86 17 14.5445 17C14.0848 17 13.5936 16.892 13.0753 16.6715C12.557 16.451 12.0387 16.154 11.525 15.7805C11.0067 15.4025 10.5154 14.984 10.0467 14.5205C9.58254 14.0525 9.16342 13.562 8.78935 13.049C8.4198 12.536 8.12235 12.023 7.90603 11.5145C7.68971 11.0015 7.58154 10.511 7.58154 10.043C7.58154 9.737 7.63562 9.4445 7.74379 9.1745C7.85195 8.9 8.02321 8.648 8.26206 8.423C8.5505 8.1395 8.86597 8 9.19947 8C9.32566 8 9.45185 8.027 9.56452 8.081C9.68169 8.135 9.78535 8.216 9.86647 8.333L10.912 9.8045C10.9932 9.917 11.0517 10.0205 11.0923 10.1195C11.1329 10.214 11.1554 10.3085 11.1554 10.394C11.1554 10.502 11.1239 10.61 11.0608 10.7135C11.0022 10.817 10.9165 10.925 10.8084 11.033L10.4659 11.3885C10.4163 11.438 10.3938 11.4965 10.3938 11.5685C10.3938 11.6045 10.3983 11.636 10.4073 11.672C10.4208 11.708 10.4343 11.735 10.4433 11.762C10.5245 11.9105 10.6642 12.104 10.8625 12.338C11.0653 12.572 11.2816 12.8105 11.5159 13.049C11.7593 13.2875 11.9937 13.508 12.2325 13.7105C12.4669 13.9085 12.6607 14.0435 12.8139 14.1245C12.8364 14.1335 12.8635 14.147 12.895 14.1605C12.9311 14.174 12.9671 14.1785 13.0077 14.1785C13.0843 14.1785 13.1429 14.1515 13.1925 14.102L13.535 13.7645C13.6476 13.652 13.7558 13.5665 13.8595 13.5125C13.9631 13.4495 14.0668 13.418 14.1794 13.418C14.2651 13.418 14.3552 13.436 14.4544 13.4765C14.5535 13.517 14.6572 13.5755 14.7698 13.652L16.2616 14.7095C16.3787 14.7905 16.4599 14.885 16.5094 14.9975C16.5545 15.11 16.5815 15.2225 16.5815 15.3485Z"
                            stroke="#3B3B3B"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <Button size="large" className="bg-blue-900 text-white">
                        Reviews
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductView;
