/** @format */
import React from "react";
import Button from "../components/elements/Button";
import { IoMdAdd } from "react-icons/io";
import UserTable from "../components/tables/UserTable";
import { useState } from "react";
import AddAdmin from "../components/modals/AddAdminModal/AddAdmin";

const UserManagement = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className='h-screen'>
      <div className='p-6'>
        <Button
          className='button w-48 flex items-center gap-x-3 border-none ml-auto'
          icon={<IoMdAdd className='w-4 h-4' />}
          title='Add New User'
          onClick={() => setModal(true)}
        />
      </div>
      <div className='p-6 '>
        <UserTable />
      </div>
      <AddAdmin
        title='Add New User'
        isVisible={modal}
        closeModal={() => setModal(false)}
      />
    </div>
  );
};

export default UserManagement;
