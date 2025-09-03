import React, { type FC } from "react";

type InputHoverEffectProps = {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
};

const InputHoverEffect: FC<InputHoverEffectProps> = ({
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
        <option value="hover:opacity-50">Opacity 50</option>
        <option value="hover:opacity-60">Opacity 60</option>
        <option value="hover:opacity-70">Opacity 70</option>
        <option value="hover:opacity-80">Opacity 80</option>
        <option value="hover:drop-shadow-xs">Drop Shadow XS</option>
        <option value="hover:drop-shadow-sm">Drop Shadow sm</option>
        <option value="hover:drop-shadow-md">Drop Shadow md</option>
        <option value="hover:drop-shadow-lg">Drop Shadow lg</option>
      </select>
    </div>
  );
};

export default InputHoverEffect;
