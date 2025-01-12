"use client";
import React, { useState } from "react";

interface TextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const LocationInput = ({
  name,
  label = "Location",
  placeholder = "Anywhere",
  value,
  onChange,
  error,
}: TextFieldProps) => {
  const places = ["Europe", "Asia", "North America", "South America"];
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    // TODO: Handle suggest and auto complete
  };

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <div className="w-full">
        <input
          name={name}
          value={value}
          className={`input-field ${error && "error"}`}
          placeholder={placeholder}
          type="text"
          onChange={handleChange}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default LocationInput;
