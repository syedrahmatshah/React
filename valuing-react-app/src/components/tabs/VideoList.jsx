/** @format */

import React, { useState } from "react";
import { videos } from "../constant/Constant";
import { BsThreeDots } from "react-icons/bs";

const VideoList = () => {
  const [activeModal, setActiveModal] = useState(null);

  function toggleModal(index) {
    setActiveModal(activeModal === index ? null : index);
  }
  return (
    <div className='flex justify-evenly gap-8 flex-wrap w-full  '>
      {videos.map((video, index) => (
        <div
          className='w-96 h-auto relative'
          key={video.id}>
          <iframe
            className='rounded-lg'
            width='390px'
            height='200px'
            src='https://www.youtube.com/embed/07HsyMiGvt8?si=vBqwg8gAvfNj7ZAO'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen></iframe>
          <div className='flex items-center justify-between '>
            <h2 className='font-satoshi font-normal text-base text-black'>
              {video.title}
            </h2>
            <span
              className='text-primary cursor-pointer'
              onClick={() => toggleModal(index)}>
              <BsThreeDots />
            </span>
          </div>
          <div>
            {activeModal === index && (
              <div className='w-full bg-white absolute  rounded border border-gray py-2 '>
                <button className='block w-full px-2 text-center font-satoshi font-normal text-base text-black hover:bg-lightGreen'>
                  Edit
                </button>
                <button className='block w-full px-2 text-center font-satoshi font-normal text-base text-black hover:bg-lightGreen'>
                  Delete
                </button>
              </div>
            )}
          </div>
          <p className='font-satoshi text-xs font-normal text-descriptionText'>
            {video.description}
          </p>
          <a
            href=''
            className='font-satoshi font-medium text-sm text-blue '>
            {video.download}
          </a>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
