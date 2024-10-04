/** @format */

import React from "react";
import {
  Description,
  Field,
  Label,
  Select as HeadlessSelect,
} from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const SelectField = () => {
  return (
    <div className='w-full  mt-2'>
      <Field>
        <Label className='text-sm/6 font-medium text-white'>Role</Label>
        <div className='relative flex items-center'>
          <HeadlessSelect
            className={clsx(
              " mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}>
            <option value='active'>Select and option</option>
            <option value='paused'>Paused</option>
            <option value='delayed'>Delayed</option>
            <option value='canceled'>Canceled</option>
          </HeadlessSelect>
          <FaCaretDown
            className='group pointer-events-none absolute top-4.5 right-2.5 size-4 fill-white/60'
            aria-hidden='true'
          />
        </div>
      </Field>
    </div>
  );
};

export default SelectField;
