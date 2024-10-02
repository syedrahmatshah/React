/** @format */

import React, { useState } from "react";
import Rectangle from "../assets/images/Rectangle.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";

const Admin = () => {
  const [password, setPassword] = useState(false);
  const [isType, setIsType] = useState("password");

  const togglePasswordVisibility = () => {
    setPassword(!password);
    setIsType(password ? "password" : "text"); // Toggle between 'password' and 'text'
  };

  return (
    <div className='font-Montserrat bg-primary w-screen h-screen p-5'>
      <img
        className='mx-auto'
        src={Rectangle}
        alt=''
      />
      <div className='flex flex-col bg-secondary w-full max-w-md mx-auto py-10 px-14 rounded-2xl gap-1'>
        <h1 className='text-center font-semibold text-white text-2xl'>
          Log in to Super Admin Account
        </h1>
        <label
          htmlFor=''
          className='block mt-1 text-white font-satoshi text-base font-medium'>
          Email
        </label>
        <Input
          type='text'
          placeholder='Email'
          className='rounded-lg border-lightGreen p-4 border outline-none'
        />
        <label
          htmlFor=''
          className='block mt-1 text-white font-satoshi text-base font-medium'>
          Password
        </label>
        <div className='flex items-center justify-between rounded-lg border-lightGreen outline-none  border bg-white'>
          <Input
            className='rounded-lg border-lightGreen p-4 border outline-none '
            type={isType}
            placeholder='Password'
          />
          {password ? (
            <FaEye
              className='text-faColor cursor-pointer mr-2.5'
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaEyeSlash
              className='text-faColor cursor-pointer mr-2.5'
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        <Button
          className='button'
          title='Log in'
        />
      </div>
    </div>
  );
};

export default Admin;
