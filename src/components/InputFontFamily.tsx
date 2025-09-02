import React, { type FC } from "react";

type InputFontFamilyProps = {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
};

const InputFontFamily: FC<InputFontFamilyProps> = ({
  label,
  id,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <select
        value={value}
        id={id}
        onChange={onChange}
        className=" outline-0 border border-gray-400 rounded p-2 focus-within:border-blue-500"
      >
        <option value="font-poppins">Poppins</option>
        <option value="font-roboto">Roboto</option>
        <option value="font-opensans">Open Sans</option>
        <option value="font-inter">Inter</option>
      </select>
    </div>
  );
};

export default InputFontFamily;
