/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
const AdminLayout = ({ title }) => {
  return (
    <div className='w-full flex bg-primary '>
      {/* Sidebar */}
      <div className='fixed top-0  left-0 h-full overflow-y-auto w-72 hide-scrollbar bg-primary py-4'>
        <Sidebar />
      </div>
      <div className=' ml-[18rem] scroll-hide w-[calc(100%-18rem)]  rounded-l-3xl   bg-white'>
        <Header title='Super Admin' />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
