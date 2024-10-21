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
  value,
  onChange,
}) => {
  return (
    <>
      <div className='mb-3'>
        <label className=' font-satoshi text-base font-medium '>{title}</label>
      </div>

      <div
        className={`w-full flex bg-white items-center   border border-mbColor   ${className}`}>
        {icon1} {icon3}
        <input
          className={`w-full rounded-lg  border-lightGreen   outline-none  ${className}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {icon2}
      </div>
    </>
  );
};

export default input;
