/** @format */
import React from "react";
import { Table } from "antd";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const customeOptions = [
  { value: "resolved", label: "Resolved" },
  { value: "rejected", label: "Rejected" },
  { value: "pending", label: "Pending" },
];
const SupportTable = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const getColor = (value) => {
    return value === "resolved"
      ? "bg-green"
      : value === "rejected"
      ? "bg-red"
      : value === "pending"
      ? "bg-blue"
      : "bg-green ";
  };
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
      render: (text, record) => {
        const selectedOption =
          selectedOptions[record.name] || customeOptions[0];
        return (
          <div className={`w-full border border-lightGreen rounded-lg `}>
            <Listbox
              value={selectedOption}
              onChange={(option) =>
                setSelectedOptions((prev) => ({
                  ...prev,
                  [record.name]: option,
                }))
              }>
              <div className='relative w-36'>
                <Listbox.Button
                  className={`relative w-full  cursor-pointer border border-lightGreen rounded  font-Poppins font-medium text-sm text-white py-4 px-5 flex justify-between rounded-full ${getColor(
                    selectedOption.value
                  )}`}>
                  <span className='block truncate'>{selectedOption.label}</span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                    <RiArrowDropDownLine
                      className='h-6 w-6 text-whtie'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'>
                  <Listbox.Options className='absolute z-10 mt-1   w-full overflow-auto rounded bg-white border border-optionColor  text-sm font-medium text-optionColor   shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                    {customeOptions.map((option, optionIdx) => {
                      return (
                        <Listbox.Option
                          key={optionIdx}
                          className={`relative cursor-default select-none font-Poppins font-medium text-sm text-white  py-4 px-5 rounded-full my-2 flex justify-center items-center ${getColor(
                            option.value
                          )}`}
                          value={option}>
                          <span>{option.label}</span>
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        );
      },
      className: "text-left ",
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
