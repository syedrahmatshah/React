/** @format */

import React from "react";
import Input from "../../elements/Input";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import SelectField from "../../elements/SelectField";
import Button from "../../elements/Button";

const AddAdmin = ({ isVisible, closeModal }) => {
  const [password, setPassword] = useState(false);
  const [isType, setIsType] = useState("password");

  const togglePasswordVisibility = () => {
    setPassword(!password);
    setIsType(password ? "password" : "text"); // Toggle between 'password' and 'text'
  };
  return (
    <>
      <Dialog
        open={isVisible}
        as='div'
        className='relative z-10 focus:outline-none bg-primary '
        onClose={closeModal}>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-3xl  rounded-xl bg-primary p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'>
              <DialogTitle
                as='h1'
                className='text-style m-0 text-center text-black'>
                Add New Admin
              </DialogTitle>
              <div>
                <div className='flex gap-2.5 mb-2'>
                  <div className='flex-1'>
                    <Input
                      htmlFor=''
                      title='Full Name'
                      type='text'
                      placeholder='Max mal'
                      className='rounded border  border-mbColor p-5  outline-none'
                    />
                  </div>
                  <div className='flex-1'>
                    <Input
                      htmlFor=''
                      title='Email'
                      type='text'
                      className='rounded   border-lightGreen p-5  outline-none'
                    />
                  </div>
                </div>
                <div className='flex gap-2.5'>
                  <div className='flex-1 '>
                    <Input
                      htmlFor=''
                      title='Password'
                      type={isType}
                      className='rounded text-mtextColor m-0 text-style text-sm border-lightGreen p-5 outline-none '
                      icon3={
                        <MdLockOutline className='w-5 h-5 text-searchColor ml-3' />
                      }
                      icon2={
                        password ? (
                          <FaEyeSlash
                            className='text-faColor cursor-pointer mr-2.5'
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <FaEye
                            className='text-faColor cursor-pointer mr-2.5'
                            onClick={togglePasswordVisibility}
                          />
                        )
                      }
                    />
                  </div>
                  <div className='flex-1'>
                    <Input
                      htmlFor=''
                      title='Confirm Password'
                      type={isType}
                      className='rounded  text-mtextColor text-style text-sm border-lightGreen p-5  outline-none'
                      icon3={
                        <MdLockOutline className='w-5 h-5 text-searchColor ml-3' />
                      }
                      icon2={
                        password ? (
                          <FaEyeSlash
                            className='text-faColor cursor-pointer mr-2.5'
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <FaEye
                            className='text-faColor cursor-pointer mr-2.5'
                            onClick={togglePasswordVisibility}
                          />
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              <SelectField />
              <div className='mt-4 text-center'>
                <Button
                  className='inline-flex  font-Poppins items-center text-white font-bold text-base border gap-2 rounded-md bg-primary py-3 px-6'
                  onClick={closeModal}
                  title='Create Admin'
                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddAdmin;