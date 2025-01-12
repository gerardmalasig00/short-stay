import React from "react";

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
}
const TextField = ({
  name,
  label,
  placeholder,
  onChange,
  type = "text",
  error,
}: TextFieldProps) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          name={name}
          className={`input-field ${error && "error"}`}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    </div>
  );
};

export default TextField;
