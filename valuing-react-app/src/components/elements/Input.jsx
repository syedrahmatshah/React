/** @format */

import React from "react";

const input = ({ type, placeholder, className, icon }) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default input;
