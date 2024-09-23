import { InputTextProps } from "@/lib/interface";
import React from "react";

const InputText: React.FC<InputTextProps> = ({ value, setSearch, text }) => {
  return (
    <input
      value={value}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full text-sm duration-500 border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-neoviolet-100 active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full"
      placeholder={text}
    />
  );
};

const SelectInput = () => {
  return (
    <select className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  );
};

export { InputText, SelectInput };
