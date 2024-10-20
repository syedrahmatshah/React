/** @format */

import React from "react";
import Button from "../components/elements/Button";
import { IoMdAdd } from "react-icons/io";
import AdminTable from "../components/tables/AdminTable";
import { useState } from "react";
import AddAdmin from "../components/modals/AddAdminModal/AddAdmin";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className='p-6'>
        <Button
          className='button w-48 flex items-center gap-x-3 border-none ml-auto'
          icon={<IoMdAdd className='w-4 h-4' />}
          title='Add New Admin'
          onClick={() => setModal(true)}
        />
      </div>
      <div className='p-6 '>
        <AdminTable />
      </div>
      <AddAdmin
        title='Add Admin'
        isVisible={modal}
        closeModal={() => setModal(false)}
      />
    </>
  );
};

export default Dashboard;
