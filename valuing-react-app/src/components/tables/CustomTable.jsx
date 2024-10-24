/** @format */

import React from "react";

const CustomTable = ({ data }) => {
  return (
    <div className='w-full px-20 mt-5'>
      <table className='w-full custom-table-4'>
        <thead>
          <tr>
            <th>MarketPlace</th>
            <th>EBITDA Multiple</th>
            <th>Turnover Multiple</th>
          </tr>
        </thead>
        <tbody className='border border-black'>
          {data.map((user, index) => (
            <tr key={index}>
              <td className='border border-black p-5'>{user.name}</td>
              <td className='border border-black p-5'>{user.email}</td>
              <td className='border border-black p-5'>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
