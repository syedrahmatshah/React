/** @format */

import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const Modal = ({ isVisible, closeModal, title, children }) => {
  return (
    <Dialog
      open={isVisible}
      as='div'
      className='relative z-10 focus:outline-none   '
      onClose={closeModal}>
      <div className='fixed inset-0 z-10  overflow-y-auto'>
        <div className='flex min-h-full  items-center justify-center  inset-0 backdrop-blur-mBlur bg-selectPlace bg-opacity-45 " >'>
          <DialogPanel
            transition
            className='rounded-xl bg-white px-14 py-10  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'>
            <div>
              <h1 className='text-style m-0 text-center text-black'>{title}</h1>
            </div>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
