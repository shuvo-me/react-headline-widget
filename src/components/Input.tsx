import React, { type FC } from "react";

type InputProps = {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: "text" | "email" | "number" | "color" | "date";
  value: string;
};

const Input: FC<InputProps> = ({
  label,
  id,
  onChange,
  type = "text",
  value,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm">
        {label}
        {type === "color" && value ? ` : ${value}` : ""}
      </label>
      <input
        value={value}
        type={type}
        id={id}
        onChange={onChange}
        className={
          type === "text"
            ? "outline-0 border border-gray-400 rounded p-2 focus-within:border-blue-500"
            : undefined
        }
      />
    </div>
  );
};

export default Input;
