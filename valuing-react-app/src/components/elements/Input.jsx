/** @format */

import React from "react";

const input = ({ type, placeholder, style, icon }) => {
  return (
    <>
      <input
        className={style}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default input;
