import React, { Fragment } from "react";
import { InputText, SelectInput } from "../atoms/input";
import { InputTextProps } from "@/lib/interface";

const Filters: React.FC<InputTextProps> = ({ value, setSearch, text }) => {
  return (
    <div className="flex md:flex-row flex-col gap-2">
      <div className="w-full ">
        <InputText text={text} value={value} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Filters;
