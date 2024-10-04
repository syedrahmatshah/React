/** @format */

import React from "react";

const button = ({ className, icon, title, onClick }) => {
  return (
    <div>
      <button
        className={className}
        onClick={onClick}>
        {icon} {title}
      </button>
    </div>
  );
};

export default button;
