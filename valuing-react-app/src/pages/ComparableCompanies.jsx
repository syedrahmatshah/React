/** @format */

import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import clsx from "clsx";
import Button from "../components/elements/Button";
import { dummyData } from "../components/constant/Constant";
import CustomTable from "../components/tables/CustomTable";

const people = [
  { id: 1, name: "Select Country" },
  { id: 2, name: "Country Name" },
  { id: 3, name: "Country Name" },
  { id: 4, name: "Country Name" },
  { id: 5, name: "Country Name" },
  { id: 6, name: "Country Name" },
  { id: 7, name: "Country Name" },
  { id: 8, name: "Country Name" },
  { id: 9, name: "Country Name" },
];
const sector = [
  { id: 1, name: "Select Sector" },
  { id: 2, name: "Sector" },
  { id: 3, name: "Sector" },
  { id: 4, name: "Sector" },
  { id: 5, name: "Sector" },
  { id: 6, name: "Sector" },
];
const ebitda = [
  { id: 1, name: "Select EBITDA" },
  { id: 2, name: "USD 0-500K" },
  { id: 3, name: "USD 5,000-1,000K" },
  { id: 4, name: "USD 1,000-1,500K" },
  { id: 5, name: "USD 1,500-2,000K" },
  { id: 6, name: "USD > 2,000K" },
];
const SelectBox = ({ label, options, selected, setSelected }) => {
  return (
    <div className='w-60'>
      <label className='font-satoshi font-medium text-base text-darkBrown mb-2'>
        {label}
      </label>
      <Listbox
        value={selected}
        onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg bg-lightGreen p-4 text-left text-sm font-normal text-darkBrown border border-primary",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}>
          {selected.name}
          <IoMdArrowDropdown
            className='group pointer-events-none absolute top-4 right-2.5 size-4 fill-black'
            aria-hidden='true'
          />
        </ListboxButton>
        <ListboxOptions
          anchor='bottom'
          transition
          className={clsx(
            "w-[var(--button-width)] rounded-xl border border-optionColor bg-lightGreen p-1 mt-1",
            "focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}>
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10'>
              <div className='text-sm/6 text-darkBrown'>{option.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

const ComparableCompanies = () => {
  const [selectedCountry, setSelectedCountry] = useState(people[0]);
  const [selectedSector, setSelectedSector] = useState(sector[0]);
  const [selectedEbitda, setSelectedEbitda] = useState(ebitda[0]);

  return (
    <div className='h-full pb-4'>
      <div className='flex items-center gap-3 pb-4 mt-3 mx-20 border-b-2 border-lightBorder'>
        <SelectBox
          label='Country'
          options={people}
          selected={selectedCountry}
          setSelected={setSelectedCountry}
        />
        <SelectBox
          label='Sector'
          options={sector}
          selected={selectedSector}
          setSelected={setSelectedSector}
        />
        <SelectBox
          label='EBITDA'
          options={ebitda}
          selected={selectedEbitda}
          setSelected={setSelectedEbitda}
        />
        <div className='mt-5'>
          <Button
            className='button w-48 flex items-center gap-x-3 border-none shadow-inherit mt-0'
            title='Generate Results'
          />
        </div>
      </div>
      <CustomTable data={dummyData} />
    </div>
  );
};

export default ComparableCompanies;
