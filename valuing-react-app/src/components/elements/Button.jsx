/** @format */

import React from "react";

const button = ({ className, icon, title }) => {
  return (
    <div>
      <button className={className}>
        {icon} {title}
      </button>
    </div>
  );
};

export default button;
