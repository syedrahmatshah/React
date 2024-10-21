/** @format */
import React from "react";
import Button from "../components/elements/Button";
import { IoMdAdd } from "react-icons/io";
import { folderData } from "../components/constant/Constant";
import AddFolder from "../components/modals/AddFolder/AddFolder";
import { useState } from "react";
import { MdFolderCopy } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const TrainingManagement = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [folder, setFolder] = useState("");
  const [data, setData] = useState(folderData);

  function handleCreateFolder() {
    if (folder === "") {
      alert("put some value");
    } else {
      const object = {
        image: <MdFolderCopy className='size-24' />,
        title: `${folder} ...`,
      };
      setData([...data, object]);
      setModal(false);
    }
    setFolder("");
  }

  return (
    <div className='h-screen'>
      <div className='p-6'>
        <Button
          className='button w-48 flex items-center gap-x-3 border-none ml-auto'
          icon={<IoMdAdd className='w-4 h-4' />}
          title='Add New Folder'
          onClick={() => setModal(true)}
        />
      </div>
      <div className='flex gap-10 flex-wrap px-24 '>
        {data.map((data) => (
          <div
            className='cursor-pointer'
            onClick={() => navigate("/training-management-video")}>
            <div className='text-placeholder '>{data.image}</div>
            <span className='text-black text-base font-normal font-satoshi'>
              {data.title}
            </span>
          </div>
        ))}
      </div>
      <AddFolder
        isVisible={modal}
        value={folder}
        onFolder={setFolder}
        handleCreateFolder={handleCreateFolder}
        closeModal={() => setModal(false)}
      />
    </div>
  );
};

export default TrainingManagement;
