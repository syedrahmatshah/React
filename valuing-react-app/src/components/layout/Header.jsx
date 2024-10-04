/** @format */

import React from "react";
import { FiSearch } from "react-icons/fi";
import Input from "../elements/Input";

const Header = () => {
  return (
    <nav className='w-full flex justify-between border-b border-bColor px-6 py-4'>
      <div className='flex items-center  w-5/12 rounded border border-inputBorder py-2 px-1'>
        <Input
          type='text'
          placeholder='Search'
          icon1={<FiSearch className='w-5 w-6 text-searchColor' />}
          className='w-full flex items-center  outline-none font-satoshi font-normal'
        />
      </div>
      <div>
        <p className='font-satoshi text-black text-base font-bold'>Username</p>
        <p className='font-Inter text-xs font-normal text-black'>Super Admin</p>
      </div>
    </nav>
  );
};

export default Header;
