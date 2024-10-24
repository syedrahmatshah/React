/** @format */

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";

const people = [
  { value: "active", label: "Active" },
  { value: "Super Admin", label: "Super Admin" },
];

export default function SelectField() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className={`w-full mt-4 border border-lightGreen rounded `}>
      <Listbox
        value={selected}
        onChange={setSelected}>
        <div className='relative'>
          <Listbox.Button className='relative w-full  cursor-default border border-lightGreen rounded bg-white font-Poppins font-medium text-sm text-optionColor p-5 flex justify-between'>
            <span className='block truncate'>{selected.label}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <IoMdArrowDropdown
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options className='absolute z-10 mt-1  w-full overflow-auto rounded bg-white  text-sm font-medium text-optionColor  shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none font-Poppins font-medium text-sm text-optionColor p-5  ${
                      active ? `bg-mbColor ` : ""
                    } `
                  }
                  value={person}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block  ${
                          selected
                            ? "font-Poppins font-medium text-sm text-optionColor  "
                            : ""
                        }`}>
                        {person.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
