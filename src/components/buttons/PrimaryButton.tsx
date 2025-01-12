import React, { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps {
  name: string;
  loading?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const PrimaryButton = ({ name, type = "button" }: PrimaryButtonProps) => {
  return (
    <button className="btn" type={type}>
      {name}
    </button>
  );
};

export default PrimaryButton;
