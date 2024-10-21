/** @format */
import React from "react";
import { Table } from "antd";
import { MdModeEditOutline } from "react-icons/md"; // Import additional icons
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";
import EditAdmin from "../modals/EditAdmin/EditAdmin";
import DeleteModal from "../modals/DeleteModal/DeleteModal";
import SuspendModal from "../modals/SuspendModal/SuspendModal";
import { FaBan } from "react-icons/fa";

const UserTable = () => {
  const [modal, setModal] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [suspendModalVisible, setSuspendModalVisible] = useState(false);
  const dataSource = [
    {
      name: "John Mac",
      email: "email@email.com",
      role: "User",
      plan: "Gold",
    },
    {
      name: "Isaak Smith",
      email: "email@email.com",
      role: "User",
      plan: "Promo Code",
    },
    {
      name: "Bella Johnson",
      email: "email@email.com",
      role: "User",
      plan: "Premium",
    },
  ];

  const columns = [
    {
      title: "User Name",
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
      title: "Subscription Plan",
      dataIndex: "plan",
      render: (text) => <span className='text-black font-bold'>{text}</span>,
    },
    {
      title: "", // Change column title to indicate actions
      dataIndex: "role", // Can keep this or use another dataIndex, it won't affect the render function
      width: "30%",
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
          <FaBan
            className='cursor-pointer text-tIconColor'
            onClick={() => setSuspendModalVisible(true)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className='custome-table-2'>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
      <EditAdmin
        title='Edit User Details'
        isVisible={modal}
        closeModal={() => setModal(false)}
      />
      <DeleteModal
        title='Delete User Account'
        message='  Are you sure you want to permanently delete this user account?'
        isVisible={deleteModalVisible}
        closeModal={() => setDeleteModalVisible(false)}
      />
      <SuspendModal
        title='Suspend User Acccount'
        message='  Are you sure you want to temporarily suspend this user account?'
        isVisible={suspendModalVisible}
        closeModal={() => setSuspendModalVisible(false)}
      />
    </div>
  );
};

export default UserTable;
