/** @format */

import React from "react";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import { FaEye } from "react-icons/fa";
import { CloudAdd } from "../assets/icons/index";
import profile from "../assets/images/profile.png";

const Settings = () => {
  return (
    <div className='h-full py-3 px-24'>
      <h2 className='font-Inter font-light text-xs text-darkGray'>
        PROFILE PICTURE
      </h2>
      <div className='flex justify-between items-center my-10'>
        <h2 className='font-satoshi text-sm font-bold pl-6 text-mtextColor'>
          Change Profile Picture
        </h2>
        <div className='flex flex-col items-center'>
          <img
            src={profile}
            alt='profile Image of setings'
          />
          <p className='flex items-center gap-x-2 font-satoshi font-bold text-sm text-primary'>
            <span>
              <CloudAdd />
            </span>
            Upload Image
          </p>
        </div>
      </div>
      <form>
        <div className='mb-14'>
          <h3 className='font-satoshi font-light text-xs text-darkGray pb-4'>
            BASIC INFORMATION
          </h3>
          <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm mb-3'>
            <Input
              htmlFor=''
              title='Full Name'
              type='text'
              className='rounded  p-2'
            />
          </div>
          <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm mb-3'>
            <Input
              htmlFor=''
              title='Email Address'
              type='text'
              className='rounded  p-2'
            />
          </div>
          <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm '>
            <Input
              htmlFor=''
              title='Phone Number'
              type='number'
              className='rounded  p-2'
            />
          </div>
        </div>

        <div>
          <h3 className='font-satoshi font-light text-xs text-darkGray pb-4'>
            CHANGE PASSWORD
          </h3>
          <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm mb-3'>
            <Input
              htmlFor=''
              title='Old Password'
              type='password'
              className='rounded  p-2 text-mtextColor font-bold font-satoshi text-sm '
              icon2={<FaEye className='text-faColor cursor-pointer mr-2.5' />}
            />
          </div>
          <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm mb-3'>
            <Input
              htmlFor=''
              title='New Password'
              type='password'
              className='rounded  p-2 text-mtextColor font-bold font-satoshi text-sm'
              icon2={<FaEye className='text-faColor cursor-pointer mr-2.5' />}
            />
          </div>
          <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm '>
            <Input
              htmlFor=''
              title='Re-enter Password'
              type='password'
              className='rounded  p-2 text-mtextColor font-bold font-satoshi text-sm'
              icon2={<FaEye className='text-faColor cursor-pointer mr-2.5' />}
            />
          </div>
          <div className='py-1'>
            <Button
              className='button shadow-inherit w-44  flex items-center justify-center gap-x-3 border-none'
              title='Save Changes'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
