/** @format */

import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const Dashboard = () => {
  return (
    <div className='w-full flex rounded-3xl bg-primary '>
      <div className='h-screen w-86 px-3 py-4   bg-primary'>
        <Sidebar />
      </div>
      <div className=' w-full rounded-l-3xl   bg-white'>
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
