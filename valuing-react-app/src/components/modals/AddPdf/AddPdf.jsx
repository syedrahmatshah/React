/** @format */

import Modal from "../../constant/Modal";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

const AddPdf = ({
  isVisible,
  closeModal,
  value,
  onFolder,
  handleCreateFolder,
}) => {
  return (
    <div>
      <Modal
        title='Add New PDF'
        isVisible={isVisible}
        closeModal={closeModal}>
        <div className='w-96'>
          <div className='flex-1  text-mtextColor font-bold font-satoshi text-sm mb-2'>
            <Input
              htmlFor=''
              title='PDF Title'
              type='text'
              value={value}
              onChange={(e) => onFolder(e.target.value)}
              className='rounded   p-2'
            />
          </div>
          <div className='w-full'>
            <label className='font-satoshi text-base font-medium text-primary'>
              Detail
            </label>
            <textarea
              className='w-full outline-none border border-mbColor py-1 px-4'
              rows={5}></textarea>
          </div>
          <div className='flex-1 mt-1 text-mtextColor text-center font-bold font-satoshi text-sm mb-2 bg-mbColor border rounded p-4'>
            Upload PDF
          </div>
          <div className='mt-4 text-center'>
            <Button
              className='inline-flex  font-Poppins items-center text-white font-bold text-base border gap-2 rounded-md bg-primary py-3 px-6'
              title='Add PDF'
              onClick={handleCreateFolder}
            />
            <Button
              className='inline-flex  font-Poppins items-center text-red font-bold text-base  gap-2 rounded-md  py-3 px-6'
              title='Cancel'
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddPdf;
