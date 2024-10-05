/** @format */

import React from "react";
import { Field, Label, Select as HeadlessSelect } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const SelectField = () => {
  return (
    <div className='w-full  mt-2'>
      <Field>
        <Label className='text-mtextColor font-bold font-satoshi text-sm'>
          Role
        </Label>
        <div className='relative flex items-center'>
          <HeadlessSelect
            className={clsx(
              " mt-3 block w-full appearance-none rounded border border-mbColor bg-white p-5 text-sm font-medium text-selectPlace",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              "*:text-black"
            )}>
            <option value='active'>Select and option</option>
            <option value='paused'>Paused</option>
            <option value='delayed'>Delayed</option>
            <option value='canceled'>Canceled</option>
          </HeadlessSelect>
          <FaCaretDown
            className='group pointer-events-none absolute top-4.5 right-2.5 size-4 text-mtextColor'
            aria-hidden='true'
          />
        </div>
      </Field>
    </div>
  );
};

export default SelectField;
