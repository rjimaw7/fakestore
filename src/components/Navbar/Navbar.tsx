import CartLogo from '@assets/CartLogo';
import Logo from '@assets/Logo';
import SignIn from '@assets/SignIn';
import { Input } from 'antd';
import React from 'react';

const { Search } = Input;

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white flex items-center justify-around gap-60 p-5">
      <div className="flex gap-16">
        <Logo />
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          className="bg-yellow-500 rounded-lg"
          // onSearch={onSearch}
        />
      </div>

      <ul className="flex gap-4">
        <li className="flex gap-2">
          <SignIn />
          <a href="/#">Sign In</a>
        </li>
        <li className="flex gap-2">
          <CartLogo />
          <a href="/#">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
