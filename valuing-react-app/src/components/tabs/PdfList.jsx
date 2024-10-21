/** @format */

import React, { useState } from "react";
import { pdfs } from "../constant/Constant";
import Button from "../elements/Button";
import { BsThreeDotsVertical } from "react-icons/bs";

const PdfList = () => {
  const [activeModal, setActiveModal] = useState(null);

  function toggleModal(index) {
    setActiveModal(activeModal === index ? null : index);
  }
  return (
    <div className='flex justify-evenly gap-y-8 gap-x-4 px-12  flex-wrap w-full  '>
      {pdfs.map((pdf, index) => (
        <div
          className='w-40 h-auto relative border rounded-lg border-placeholder py-2 px-3.5'
          key={pdf.id}>
          <div className='flex justify-between'>
            {pdf.icon}
            <span
              className='text-primary cursor-pointer'
              onClick={() => toggleModal(index)}>
              <BsThreeDotsVertical />
            </span>
            {activeModal === index && (
              <div className='w-full bg-white absolute left-0 mt-4 rounded border border-gray '>
                <Button
                  className='block w-full px-2 text-center font-satoshi font-normal text-base text-black hover:bg-lightGreen'
                  title='Edit'
                />
                <Button
                  className='block w-full px-2 text-center font-satoshi font-normal text-base text-black hover:bg-lightGreen'
                  title='Delete'
                />
              </div>
            )}
          </div>
          <div className='flex items-center justify-between'>
            <h2 className='font-satoshi font-normal text-sm text-black pb-2'>
              {pdf.title}
            </h2>
          </div>
          <p className='font-satoshi text-xs font-normal text-descriptionText pb-1'>
            {pdf.description}
          </p>
          <a
            href=''
            className='font-satoshi font-medium text-sm text-blue underline underline-offset-1'>
            {pdf.url}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PdfList;
