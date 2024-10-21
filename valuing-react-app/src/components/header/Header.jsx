/** @format */

import React from "react";
import { FiSearch } from "react-icons/fi";
import Input from "../elements/Input";

const Header = ({ title }) => {
  return (
    <nav className='w-full flex justify-between border-b border-bColor px-6 py-4'>
      <div className='items-center  w-5/12 rounded '>
        <Input
          type='text'
          placeholder='Search'
          icon1={<FiSearch className='w-5 w-6 ml-2 text-searchColor' />}
          className='w-full flex items-center p-1 outline-none font-satoshi font-normal'
        />
      </div>
      <div>
        <p className='font-satoshi text-black text-base font-bold'>Username</p>
        <p className='font-Inter text-xs font-normal text-black'>{title}</p>
      </div>
    </nav>
  );
};

export default Header;
