/** @format */

import React, { useState } from "react";
import Button from "../components/elements/Button";
import AddVideo from "../components/modals/AddVideo/AddVideo";
import { IoMdAdd } from "react-icons/io";
import VideoList from "../components/tabs/VideoList";
import PdfList from "../components/tabs/PdfList";
import AddPdf from "../components/modals/AddPdf/AddPdf";

const TrainingManagementVideo = () => {
  // const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  // const [folder, setFolder] = useState("");
  // const [data, setData] = useState(folderData);
  const [active, setActive] = useState("tab1");
  return (
    <div className='h-screen p-10 overflow-auto hide-scrollbar'>
      <h1 className='text-2xl font-bold text-primary font-Montserrat underline underline-offset-1 '>
        Folder Name
      </h1>
      <div className='flex justify-between items-center '>
        <div className='flex gap-3'>
          <Button
            className={` shadow-inherit font-medium font-satoshi text-base text-primary py-4 px-5 rounded-lg  border-none  ${
              active === "tab1" ? "bg-lightGreen" : ""
            }`}
            title='Videos'
            onClick={() => setActive("tab1")}
          />
          <Button
            className={` shadow-inherit font-medium font-satoshi text-base text-primary py-4 px-5 rounded-lg  border-none  ${
              active === "tab2" ? "bg-lightGreen" : ""
            }`}
            title='PDFs'
            onClick={() => setActive("tab2")}
          />
        </div>
        {active === "tab1" ? (
          <div className='p-6'>
            <Button
              className='button w-48 flex items-center gap-x-3 border-none '
              icon={<IoMdAdd className='w-4 h-4' />}
              title='Add New Video'
              onClick={() => setModal(true)}
            />
          </div>
        ) : (
          <div className='p-6'>
            <Button
              className='button w-48 flex items-center gap-x-3 border-none '
              icon={<IoMdAdd className='w-4 h-4' />}
              title='Add New PDF'
              onClick={() => setModal(true)}
            />
          </div>
        )}
      </div>
      <div>
        {active === "tab1" && <VideoList />}
        {active === "tab2" && <PdfList />}
      </div>
      {active === "tab1" ? (
        <AddVideo
          isVisible={modal}
          // value={video}
          // onFolder={setVideo}
          // handleCreateFolder={handleCreateVideo}
          closeModal={() => setModal(false)}
        />
      ) : (
        <AddPdf
          isVisible={modal}
          // value={video}
          // onFolder={setVideo}
          // handleCreateFolder={handleCreateVideo}
          closeModal={() => setModal(false)}
        />
      )}
    </div>
  );
};

export default TrainingManagementVideo;
