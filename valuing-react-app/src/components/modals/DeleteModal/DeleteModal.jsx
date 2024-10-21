/** @format */

import React from "react";
import Button from "../../elements/Button";
import Modal from "../../constant/Modal";
import { PiWarningCircleBold } from "react-icons/pi";

const DeleteModal = ({ isVisible, closeModal, title, message }) => {
  return (
    <Modal
      isVisible={isVisible}
      closeModal={closeModal}>
      <div className='p-5'>
        <div className='flex justify-center'>
          <PiWarningCircleBold className='text-warning w-20 h-20 mb-2' />
        </div>
        <h1 className='text-style m-0 text-center text-black leading-8'>
          {title}
        </h1>
        <p className='w-60 font-satoshi text-sm font-light text-black text-center'>
          {message}
        </p>
      </div>
      <div className='flex justify-center gap-2'>
        <Button
          className='  font-Poppins items-center text-primary font-bold text-xs   border border-primary rounded-lg  py-3 px-14'
          onClick={closeModal}
          title='Cancel'
        />
        <Button
          className='  font-Poppins items-center text-white font-bold text-xs border  rounded-lg bg-red py-3 px-14'
          title='Delete'
        />
      </div>
    </Modal>
  );
};

export default DeleteModal;
