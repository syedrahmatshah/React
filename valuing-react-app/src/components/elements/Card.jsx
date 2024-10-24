/** @format */

import React, { useState } from "react";
import Button from "./Button";
import AddNewPlan from "../modals/AddNewPlan/AddNewPlan";

const Card = ({ planName, price, features }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className='w-72 h-auto bg-primary rounded-lg p-4'>
      <div className='flex justify-between'>
        <h2 className='font-Montserrat font-bold text-2xl text-white border-b'>
          {planName}
        </h2>
        <p className='font-satoshi font-bold text-lg text-white'>{price}</p>
      </div>
      <ul>
        {features.map((feature) => (
          <li className='font-satoshi font-medium text-base text-white list-disc ml-3 pt-3 '>
            {feature}
          </li>
        ))}
      </ul>
      <div className='mt-4 text-center '>
        <Button
          className='w-full  font-satoshi items-center text-black font-normal text-base  rounded-md bg-placeholder py-3 px-6 mb-2'
          onClick={() => setModal(true)}
          title='Edit'
        />
        <Button
          className='w-full font-satoshi items-center text-white font-normal text-base  gap-2 rounded-md bg-error  py-3 px-6'
          title='Delete'
        />
      </div>
      <AddNewPlan
        title='Edit New Plan'
        isVisible={modal}
        closeModal={() => setModal(false)}
      />
    </div>
  );
};

export default Card;
