"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import DropdownInput from "@/components/inputs/DropdownInput";
import LocationInput from "@/components/inputs/LocationInput";
import TextField from "@/components/inputs/TextField";
import Image from "next/image";
import React, { useState } from "react";

interface IInputFields {
  location: string;
  fromDate: string;
  toDate: string;
  adults: number;
  children: number;
}

const CardForm = () => {
  const [formData, setFormData] = useState<IInputFields>({
    location: "",
    fromDate: "",
    toDate: "",
    adults: 0,
    children: 0,
  });
  const [errors, setErrors] = useState<{ [key in keyof IInputFields]: string }>(
    {
      location: "",
      fromDate: "",
      toDate: "",
      adults: "",
      children: "",
    }
  );

  const formChecker = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (formData.location === "") {
      newErrors.location = "Location is required";
    }

    if (formData.fromDate === "") {
      newErrors.fromDate = "From date is required";
    }

    if (formData.toDate === "") {
      newErrors.toDate = "To date is required";
    }

    if (formData.adults === 0) {
      newErrors.adults = "Adults is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors as { [key in keyof IInputFields]: string });
      return false;
    }

    setErrors({} as { [key in keyof IInputFields]: string });
    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formChecker()) return;
  };

  const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Todo: Add custom validation logic for dates

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="card ">
      <div className="w-full h-7 relative">
        <Image src={"/logo.svg"} alt={"logo"} width={200} height={28} />
      </div>
      <div className="text-content">
        <h1 className="text-dark font-bold text-2xl">
          Find places to stay anywhere
        </h1>
        <p>
          Discover entire homes and rooms perfect for any trip or special
          occasion.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 grid-cols-4">
          <div className="col-span-4">
            <LocationInput
              name="location"
              error={errors.location}
              value={formData.location}
              onChange={onFieldChange}
            />
          </div>
          <div className="col-span-2">
            <TextField
              name="fromDate"
              label="From"
              type="date"
              value={formData.fromDate}
              onChange={onFieldChange}
              error={errors.fromDate}
            />
          </div>
          <div className="col-span-2">
            <TextField
              name="toDate"
              label="To"
              type="date"
              value={formData.fromDate}
              onChange={onFieldChange}
              error={errors.toDate}
            />
          </div>
          <div className="col-span-2">
            <DropdownInput
              name="adults"
              label="Adults"
              emptyLabel="0"
              options={[{ value: "1", label: "1" }]}
              error={errors.adults}
              onChange={onDropdownChange}
            />
          </div>
          <div className="col-span-2">
            <DropdownInput
              name="children"
              label="Children"
              emptyLabel="0"
              options={[{ value: "1", label: "1" }]}
              onChange={onDropdownChange}
            />
          </div>
        </div>
        <div className="mt-6">
          <PrimaryButton name="Search" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CardForm;
