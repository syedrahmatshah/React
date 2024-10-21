/** @format */

import React from "react";
import { sidebarLinks } from "../constant/Constant";
import { NavLink } from "react-router-dom";
import image from "../../assets/images/Rectangle.png";
import { useNavigate } from "react-router-dom";
import { English } from "../../assets/icons/index";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside
      id='default-sidebar'
      aria-label='Sidebar'>
      <div className='px-3'>
        <a href=''>
          <img
            src={image}
            alt='image'
          />
        </a>
        {sidebarLinks.map((items, indx) => (
          <NavLink
            key={indx}
            to={items.path}
            onClick={() => navigate(items.path)}
            className={({ isActive }) =>
              `link-style flex items-center text-white  rounded-lg cursor-pointer ${
                isActive ? "bg-lightGreen text-primary" : ""
              } `
            }>
            {({ isActive }) => (
              <>
                <span
                  className={`icon-style ${isActive ? "text-primary" : ""}`}>
                  {items.icon}
                </span>
                <span
                  className={`text-style ${isActive ? "text-primary" : ""}`}>
                  {items.title}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className='border-t border-b py-4'>
        <div className='ml-10'>
          <a
            href=''
            className='text-style font-medium flex items-center gap-3'>
            <English />
            <span>English</span>
          </a>
        </div>
      </div>
      <div className='ml-10 py-4'>
        <a
          href=''
          className='text-style font-medium flex items-center gap-3'>
          <IoLogOut className='w-5 h-5' />
          <span>Log Out</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
