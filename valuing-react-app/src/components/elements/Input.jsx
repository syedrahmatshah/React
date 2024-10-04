/** @format */

import React from "react";

const input = ({
  type,
  placeholder,
  className,
  icon1,
  icon2,
  icon3,
  title,
}) => {
  return (
    <>
      <div>
        <label className='mt-1 text-white font-satoshi text-base font-medium'>
          {title}
        </label>
      </div>
      <div className='w-full flex bg-white items-center  rounded-lg '>
        {icon1} {icon3}
        <input
          className={`w-full ${className}`}
          type={type}
          placeholder={placeholder}
        />
        {icon2}
      </div>
    </>
  );
};

export default input;
