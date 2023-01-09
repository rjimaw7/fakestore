import { IProducts } from '@shared/interfaces/IProducts';
import CheckOutItems from './CheckOutItems';
import { DownOutlined } from '@ant-design/icons';
import { Footer } from '@components/Footer';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@shared/redux/store';
import { Link } from 'react-router-dom';
import { clearCart } from '@shared/redux/slices/cartSlice';
import { message } from 'antd';

interface Props {
  data: IProducts[];
}

const CheckoutView = ({ data }: Props) => {
  const tableData = data;

  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const totalCartPrice = cart
    .map((item) => item.price)
    .reduce((x, y) => x + y, 0);

  const [totalPrice, setTotalPrice] = useState(totalCartPrice);

  const [messageApi, contextHolder] = message.useMessage();

  const successClearedCart = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully Cleared Cart',
    });
  };

  const handleClearCart = () => {
    successClearedCart();
    dispatch(clearCart());
  };

  return (
    <>
      {contextHolder}
      <section
        id="checkout"
        className="mx-auto mt-12 max-w-sm md:max-w-screen-2xl"
      >
        <div className="lg:grid lg:grid-cols-3 md:p-2 gap-2">
          <div className="col-span-2">
            <ul className="grid grid-cols-4 bg-blue-50 md:grid-cols-5 text-center items-center md:text-left h-10">
              <li className="md:col-span-2">
                <p className="md:ml-16">Product</p>
              </li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>

            <div className="my-6 md:mt-6">
              {tableData.map((item) => (
                <CheckOutItems
                  item={item}
                  key={item.id}
                  // totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              ))}

              {!cart.length && (
                <h2 className="text-center text-blue-900">
                  Your Cart is Empty.{' '}
                  <Link className="underline" to="/">
                    Go Back
                  </Link>{' '}
                </h2>
              )}
            </div>
          </div>
          <div className="">
            <p className="text-center bg-blue-50 h-10 border">Cart Total</p>
            <div className="border lg:max-w-lg p-5 grid grid-rows-4">
              <div className="p-5 flex justify-between font-bold md:text-2xl">
                <p>Subtotal</p>
                <p>$ {totalPrice.toFixed(2)}</p>
              </div>
              <div className="border-y-2">
                <div className="my-4 rounded-full border border-gray-300 flex justify-between p-4 cursor-pointer">
                  <p className="font-semibold text-md">Enter coupon code</p>
                  <p className="text-blue-900 font-semibold">Apply</p>
                </div>
              </div>
              <div>
                <div className="my-4 rounded-full border border-gray-300 flex items-center justify-between p-4 cursor-pointer">
                  <p>Country</p>
                  <DownOutlined />
                </div>
              </div>
              <div className="flex justify-between p-4 font-bold md:text-2xl">
                <p>Total Amount</p>
                <p>$ {totalPrice.toFixed(2)}</p>
              </div>
              <button
                type="button"
                className="rounded-full md:-mt-4 lg:-mt-0 bg-yellow-500 p-3 text-white font-semibold text-lg"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>

        {/* <div className="mt-6 block md:flex justify-between md:max-w-screen-lg"> */}
        <div className="mt-6 p-5 md:p-0 md:mb-16 flex flex-col md:max-w-screen-lg md:flex md:flex-row md:justify-evenly lg:justify-between">
          <Link
            to="/"
            className="rounded-full bg-yellow-500 text-white p-3 md:p-5 font-semibold text-lg"
          >
            Continue Shopping
          </Link>
          <button
            type="button"
            className="rounded-full bg-white border border-gray-500 text-gray-500 my-6 md:my-0 p-3 md:p-5 font-semibold text-lg"
          >
            Update cart
          </button>
          <button
            type="button"
            className="rounded-full bg-white border border-red-500 text-red-500 p-3 md:p-5 font-semibold text-lg"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CheckoutView;
