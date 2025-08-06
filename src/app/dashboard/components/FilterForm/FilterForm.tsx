"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import { ChangeEvent, useEffect, useState } from "react";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "./constants";
import useDebounce from "@/hooks/useDebounce";
import { FilterFormProps } from "./types";

const FilterForm = ({ setFilterValue }: FilterFormProps) => {
  const [nameValue, setNameValue] = useState("");
  const [genderValue, setGenderValue] = useState("all");
  const [statusValue, setStatusValue] = useState("");

  const debouncedNameValue = useDebounce(nameValue, 500);

  useEffect(() => {
    setFilterValue((prev) => ({
      ...prev,
      name: debouncedNameValue,
    }));
  }, [debouncedNameValue]);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleChangeGender = (value: string) => {
    setGenderValue(value);
    setFilterValue((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleChangeStatus = (value: string) => {
    setStatusValue(value);
    setFilterValue((prev) => ({
      ...prev,
      status: value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Citizens</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Input
          value={nameValue}
          onChange={handleChangeValue}
          label="Name"
          placeholder="Search by name"
        />
        <Select
          label="Gender"
          value={genderValue}
          onChange={handleChangeGender}
          options={GENDER_OPTIONS}
          placeholder="Select a gender"
        />
        <Select
          label="Status"
          value={statusValue}
          onChange={handleChangeStatus}
          options={STATUS_OPTIONS}
          placeholder="Select status"
        />
      </CardContent>
    </Card>
  );
};

export default FilterForm;
