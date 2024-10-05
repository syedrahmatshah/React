/** @format */

import React, { useState } from "react";
import MainLogo from "../assets/images/Rectangle.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/Dashboard");
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
        src={MainLogo}
        alt=''
      />
      <div className='flex flex-col bg-secondary w-full max-w-md mx-auto py-10 px-14 rounded-2xl gap-1'>
        <h1 className='text-center font-semibold text-white text-2xl'>
          Log in to Super Admin Account
        </h1>
        <div className='w-full text-white '>
          <Input
            htmlFor=''
            title='Email'
            type='text'
            placeholder='Email'
            className='p-2'
          />
        </div>

        <div className=' items-center justify-between text-white rounded-lg    border-lightGreen  '>
          <Input
            htmlFor=''
            title='Password'
            type={isType}
            placeholder='Password'
            className='p-2'
            icon2={
              password ? (
                <FaEyeSlash
                  className='text-faColor cursor-pointer mr-2.5'
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className='text-faColor cursor-pointer mr-2.5'
                  onClick={togglePasswordVisibility}
                />
              )
            }
          />
        </div>
        <Button
          className='button'
          title='Log in'
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default LogIn;
