import React, { type FC } from "react";

type TextAreaProps = {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea: FC<TextAreaProps> = ({ label, id, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <textarea
        id={id}
        onChange={onChange}
        className=" outline-0 border border-gray-400 rounded p-2 focus-within:border-blue-500"
        rows={3}
        maxLength={100}
      />
    </div>
  );
};

export default TextArea;
