import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

const Nav = () => {
  return (
    <nav className='bg-white-900 border-b border-gray-250 flex fixed w-full top-0 left-0 z-50 pt-1'>
        <div className='flex items-center justify-between w-full max-w-[1300px] mx-auto'>
          <Link to='/'>
            <img src={logo} alt="logo" className='h-10 min-h-full lg:h-12' />
          </Link>
          <div className='items-center space-x-10 flex justify-between p-2'>
              <Link to='/' className='py-4 text-base lg:text-indigo-900'>Main</Link>
              <Link to='/product' className='py-4 text-base lg:text-indigo-900'>Product</Link>
          </div>
        </div>
    </nav>
  );
};

export default Nav;
