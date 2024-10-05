/** @format */

import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Button from "../components/elements/Button";
import { IoMdAdd } from "react-icons/io";
import AdminTable from "../components/tables/AdminTable";
import { useState } from "react";
import AddAdmin from "../components/modals/AddAdminModal/AddAdmin";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className=' flex bg-primary '>
      <div className='h-screen w-86 px-3 py-4   bg-primary'>
        <Sidebar />
      </div>
      <div className=' w-full rounded-l-3xl   bg-white'>
        <Header />
        <div className='p-6'>
          <Button
            className='button w-48 flex items-center gap-x-3 border-none  ml-auto'
            icon={<IoMdAdd className='w-4 h-4' />}
            title='Add New Admin'
            onClick={() => setModal(true)}
          />
        </div>
        <AddAdmin
          isVisible={modal}
          closeModal={() => setModal(false)}
        />
        <AdminTable />
      </div>
    </div>
  );
};

export default Dashboard;
