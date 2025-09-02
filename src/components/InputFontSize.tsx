import React, { type FC } from "react";

type InputFontSizeProps = {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
};

const InputFontSize: FC<InputFontSizeProps> = ({
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
        name=""
        value={value}
        id={id}
        onChange={onChange}
        className=" outline-0 border border-gray-400 rounded p-2 focus-within:border-blue-500"
      >
        <option value="text-sm">SM </option>
        <option value="text-base" selected>
          Base
        </option>
        <option value="text-lg">LG </option>
        <option value="text-xl">XL </option>
        <option value="text-2xl">2XL </option>
        <option value="text-3xl">3XL </option>
        <option value="text-4xl">4XL </option>
        <option value="text-5xl">5XL </option>
      </select>
    </div>
  );
};

export default InputFontSize;
