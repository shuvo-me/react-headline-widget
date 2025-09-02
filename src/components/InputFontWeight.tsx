import React, { type FC } from "react";

type InputFontWeightProps = {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
};

const InputFontWeight: FC<InputFontWeightProps> = ({
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
        <option value="font-thin">Thin (100)</option>
        <option value="font-extralight">Extra Light (200)</option>
        <option value="font-light">Light (300)</option>
        <option value="font-normal" selected>
          Normal (400)
        </option>
        <option value="font-medium">Medium (500)</option>
        <option value="font-semibold">Semi Bold (600)</option>
        <option value="font-bold">Bold (700)</option>
        <option value="font-extrabold">Extra Bold (800)</option>
        <option value="font-black">Black (900)</option>
      </select>
    </div>
  );
};

export default InputFontWeight;
