/** @format */

import React from "react";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import Modal from "../../constant/Modal";

const AddNewPlan = ({ isVisible, closeModal, title }) => {
  return (
    <Modal
      isVisible={isVisible}
      closeModal={closeModal}
      title={title}>
      <div className='flex gap-2.5 mt-5 mb-2'>
        <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm mb-2 '>
          <Input
            htmlFor=''
            title='Plan Name'
            type='text'
            className='rounded  p-2 '
          />
        </div>
        <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm mb-2'>
          <Input
            htmlFor=''
            title='Pricing Amout($)'
            type='number'
            className='rounded  p-2'
          />
        </div>
      </div>
      <div className='flex gap-2.5'>
        <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm '>
          <Input
            htmlFor=''
            title='Reports/Month'
            type='number'
            className='rounded  p-2 text-mtextColor font-bold font-satoshi text-sm'
          />
        </div>
      </div>
      <div className='my-3'>
        <input type='checkbox' />
        <span className='font-satoshi font-medium text-base text-checkboxColor pl-3'>
          Activate Promotions
        </span>
      </div>
      <div className='mt-4 text-center'>
        <Button
          className='inline-flex  font-Poppins items-center text-white font-bold text-base border gap-2 rounded-md bg-primary py-3 px-6'
          title='Save Changes'
        />
        <Button
          className='inline-flex  font-Poppins items-center text-red font-bold text-base  gap-2 rounded-md  py-3 px-6'
          onClick={closeModal}
          title='Cancel'
        />
      </div>
    </Modal>
  );
};

export default AddNewPlan;
