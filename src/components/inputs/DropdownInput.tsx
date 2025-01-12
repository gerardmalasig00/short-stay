import React from "react";

interface DropdownInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string | number;
    label: string;
  }[];
  emptyLabel: string;
  error?: string;
}

const DropdownInput = ({
  name,
  label,
  emptyLabel,
  onChange,
  options,
  error,
}: DropdownInputProps) => {
  return (
    <div className="field">
      <label htmlFor={name}> {label}</label>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          if (onChange) onChange(e);
        }}
        name={name}
        className={`input-field ${error && "error"}`}
      >
        <option value="">{emptyLabel}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default DropdownInput;
