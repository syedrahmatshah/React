/** @format */

import Modal from "../../constant/Modal";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

const AddFolder = ({
  isVisible,
  closeModal,
  value,
  onFolder,
  handleCreateFolder,
}) => {
  return (
    <div>
      <Modal
        title='Add New Folder'
        isVisible={isVisible}
        closeModal={closeModal}>
        <div className='w-72'>
          <div className='flex-1  text-mtextColor font-bold font-satoshi text-sm mb-2'>
            <Input
              htmlFor=''
              title='Full Name'
              type='text'
              value={value}
              onChange={(e) => onFolder(e.target.value)}
              className='rounded   p-2'
            />
          </div>
          <div className='mt-4 text-center'>
            <Button
              className='inline-flex  font-Poppins items-center text-white font-bold text-base border gap-2 rounded-md bg-primary py-3 px-6'
              title='Create Folder'
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

export default AddFolder;
