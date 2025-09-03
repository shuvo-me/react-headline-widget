import React, { type FC } from "react";

type InputAnimationProps = {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
};

const InputAnimation: FC<InputAnimationProps> = ({
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
        <option value="fade-in">Fade In</option>
        <option value="zoom-in">Zoom In</option>
      </select>
    </div>
  );
};

export default InputAnimation;
