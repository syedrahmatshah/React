/** @format */
import React from "react";
import { Table } from "antd";

import { FaEye } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const SupportTable = () => {
  const dataSource = [
    {
      name: "#453829",
      email: "John Mac",
      role: "email@email.com",
      plan: "Title will go here.",
      date: "8/20/2024",
      status: "active",
    },
    {
      name: "#453830",
      email: "Jane Doe",
      role: "jane@email.com",
      plan: "Another title here.",
      date: "9/10/2024",
      status: "paused",
    },
    {
      name: "#453831",
      email: "Alex Roe",
      role: "alex@email.com",
      plan: "Different title.",
      date: "7/18/2024",
      status: "delayed",
    },
    {
      name: "#453832",
      email: "Chris Fox",
      role: "chris@email.com",
      plan: "Another enquiry.",
      date: "10/01/2024",
      status: "canceled",
    },
  ];

  const columns = [
    {
      title: "Ticket #",
      dataIndex: "name",
    },
    {
      title: "User Name",
      dataIndex: "email",
    },
    {
      title: "Email",
      dataIndex: "role",
    },
    {
      title: "Enquiry",
      dataIndex: "plan",
      render: (plan) => (
        <div>
          <h2>{plan}</h2>
          <a
            className='text-blue border-blue border-b'
            href='/your-link'>
            View Details
          </a>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <select
          defaultValue={record.status}
          className='w-full  p-2 border border-none outline-none  rounded-full bg-green text-base font-satoshi font-medium text-white'>
          <option
            value='Resolved'
            className='outline-none bg-green rounded-full p-2 text-base font-satoshi font-medium text-white mb-3'>
            Resolved
          </option>
          <option
            value='Rejected'
            className='outline-none bg-darkRed rounded-full p-2 text-base font-satoshi font-medium text-white'>
            Rejected
          </option>
          <option
            value='Pending'
            className='outline-none bg-blue rounded-full p-2 text-base font-satoshi font-medium text-white'>
            Pending
          </option>
        </select>
      ),
      className: "text-left px-4 py-2",
    },
  ];

  return (
    <div className='custome-table-3'>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default SupportTable;
