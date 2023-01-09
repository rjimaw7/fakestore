import CartLogo from '@assets/CartLogo';
import SignIn from '@assets/SignIn';
import { RootState } from '@shared/redux/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <header aria-label="Site Header" className="bg-blue-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-20">
            <h2 className="text-white font-bold text-2xl">
              <Link to="/">Fakestore</Link>
            </h2>

            <div className="hidden md:block relative">
              <input
                className="rounded-full h-12 lg:w-80 md:w-72 p-4 border border-transparent focus:outline-transparent"
                placeholder="Search things here"
                type="text"
                name="search"
                id="search"
              />
              <button
                type="button"
                className="bg-yellow-500 text-white rounded-full w-28 h-12 absolute bottom-0 -right-4"
              >
                Search
              </button>
            </div>
          </div>

          <div className="text-white">
            <ul className="flex lg:gap-3">
              <li className="flex gap-2">
                <SignIn />
                <a href="/#">Sign In</a>
              </li>
              <li className="flex gap-2">
                <CartLogo />
                <span className="bg-yellow-500 rounded-full w-6 text-center text-sm">
                  {cart.length}
                </span>
                <Link to="/checkout">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
