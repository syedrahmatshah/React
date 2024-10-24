/** @format */

import React from "react";
import Input from "../../elements/Input";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import SelectField from "../../elements/SelectField";
import Button from "../../elements/Button";
import Modal from "../../constant/Modal";

const EditAdmin = ({ isVisible, closeModal, title }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const [password, setPassword] = useState(false);
  const [isType, setIsType] = useState("password");

  const togglePasswordVisibility = () => {
    setPassword(!password);
    setIsType(password ? "password" : "text"); // Toggle between 'password' and 'text'
  };
  return (
    <Modal
      isVisible={isVisible}
      closeModal={closeModal}
      title={title}>
      <div className='flex gap-2.5 mt-5 mb-2'>
        <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm mb-2'>
          <Input
            htmlFor=''
            title='Full Name'
            type='text'
            placeholder='Max mal'
            className='rounded  p-2'
            value={formData.fullName}
            onChange={handleChange}
            name='fullName'
          />
        </div>
        <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm mb-2'>
          <Input
            htmlFor=''
            title='Email'
            type='text'
            className='rounded p-2'
            value={formData.email}
            onChange={handleChange}
            name='email'
          />
        </div>
      </div>
      <div className='flex gap-2.5'>
        <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm '>
          <Input
            htmlFor=''
            title='Password'
            type={isType}
            value={formData.password}
            onChange={handleChange}
            name='password'
            className='rounded p-2 text-mtextColor font-bold font-satoshi text-sm'
            icon3={<MdLockOutline className='w-5 h-5 text-searchColor ml-3' />}
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
        <div className='flex-1 text-mtextColor font-bold font-satoshi text-sm'>
          <Input
            htmlFor=''
            title='Confirm Password'
            type={isType}
            value={formData.confirmPassword}
            onChange={handleChange}
            name='confirmPassword'
            className='rounded p-2 rounded text-mtextColor font-bold font-satoshi text-sm '
            icon3={<MdLockOutline className='w-5 h-5 text-searchColor ml-3' />}
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
      <SelectField />
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

export default EditAdmin;
