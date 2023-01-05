/* eslint-disable jsx-a11y/label-has-associated-control */
import { IProducts } from '@shared/interfaces/IProducts';
import { Breadcrumb, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import { Footer } from '@components/Footer';
import ProductStars from './helpers/ProductStars';
import { useDispatch } from 'react-redux';
import { increment } from '@shared/redux/slices/cartSlice';
import ProductSocial from '@assets/ProductSocial';

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
            <Breadcrumb.Item>{data.category}</Breadcrumb.Item>
            <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
          </Breadcrumb>

          {/* SINGLE PRODUCT */}

          <section>
            <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
              <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
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

                  <div className="mt-8 border-t-2 borer-gray-500">
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
                      <p className="font-semibold">Quantity:</p>
                      <InputNumber
                        min={1}
                        max={data.rating.count}
                        defaultValue={1}
                      />
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 md:gap-4 border-b-2 border-gray">
                      <button
                        type="button"
                        className="bg-yellow-500 text-white font-semibold mb-8 rounded-full p-5"
                        onClick={() => dispatch(increment())}
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        className="bg-yellow-500 text-white font-semibold mb-8 rounded-full p-5"
                      >
                        Buy It Now
                      </button>
                    </div>

                    <div className="mt-12 md:mt-24 grid grid-cols-1 gap-24">
                      <div>
                        <h2 className="font-semibold">Product #: 01133-9-9</h2>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Category : {data.category} 20% Off
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <p className="font-semibold">Share :</p>
                        <ProductSocial />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section id="reviews">
                <div className="mt-12 font-semibold border border-gray-400 p-5 rounded-md leading-loose">
                  <h2 className="text-blue-900 font-bold text-lg">
                    Customer reviews
                  </h2>
                  <p className="text-gray-500">No reviews yet</p>
                  <button
                    type="button"
                    className="underline bg-blue-900 text-white p-2 font-medium mt-3"
                  >
                    Write a review
                  </button>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductView;
