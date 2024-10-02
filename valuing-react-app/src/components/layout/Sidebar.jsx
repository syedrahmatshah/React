/** @format */

import React from "react";
import { sidebarLinks } from "../constant/Constant";

import image from "../../assets/images/Rectangle.png";

const Sidebar = () => {
  return (
    <aside
      id='default-sidebar'
      aria-label='Sidebar'>
      <div>
        <a href=''>
          <img
            src={image}
            alt='image'
          />
        </a>
        {sidebarLinks.map((items, indx) => (
          <a
            className='link-style group'
            key={indx}
            path={items.path}>
            <span className='icon-style'>{items.icon}</span>
            <span className='text-style '>{items.title}</span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;