/** @format */
import React from "react";
import { Table } from "antd";
import { MdModeEditOutline } from "react-icons/md"; // Import additional icons
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
import EditAdmin from "../modals/EditAdmin/EditAdmin";
import DeleteModal from "../modals/DeleteModal/DeleteModal";
import SuspendModal from "../modals/SuspendModal/SuspendModal";
import { BannedUser } from "../../assets/icons/index";

const AdminTable = () => {
  const [modal, setModal] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [suspendModalVisible, setSuspendModalVisible] = useState(false);
  const dataSource = [
    {
      name: "Alex H",
      email: "email@email.com",
      role: "Admin",
    },
    {
      name: "Alex H",
      email: "email@email.com",
      role: "Admin",
    },
    {
      name: "Alex H",
      email: "email@email.com",
      role: "Admin",
    },
    {
      name: "Alex H",
      email: "email@email.com",
      role: "Admin",
    },
    {
      name: "Alex H",
      email: "email@email.com",
      role: "Admin",
    },
    {
      name: "Alex H",
      email: "email@email.com",
      role: "Admin",
    },
  ];

  const columns = [
    {
      title: "Admin Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "", // Change column title to indicate actions
      dataIndex: "role", // Can keep this or use another dataIndex, it won't affect the render function
      width: "40%",
      render: () => (
        <div className='flex gap-5 justify-end pr-3'>
          <MdModeEditOutline
            className='cursor-pointer text-tIconColor'
            onClick={() => setModal(true)}
          />
          <RiDeleteBin6Fill
            className='cursor-pointer text-tIconColor'
            onClick={() => setDeleteModalVisible(true)}
          />
          <BannedUser
            className='cursor-pointer text-tIconColor'
            onClick={() => setSuspendModalVisible(true)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
      <EditAdmin
        title='Edit Admin Details'
        isVisible={modal}
        closeModal={() => setModal(false)}
      />
      <DeleteModal
        title='Delete Admin Account'
        message='  Are you sure you want to permanently delete this admin account?'
        isVisible={deleteModalVisible}
        closeModal={() => setDeleteModalVisible(false)}
      />
      <SuspendModal
        title='Suspend Admin Account'
        message='  Are you sure you want to temporarily suspend this admin account?'
        isVisible={suspendModalVisible}
        closeModal={() => setSuspendModalVisible(false)}
      />
    </div>
  );
};

export default AdminTable;
