import { ToastProps } from "@/lib/interface";
import React from "react";

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className=" bg-neoviolet-200 border-2 border-black  w-fit text-black p-2 rounded-lg z-50 shadow-lg">
      {message}
    </div>
  );
};

export default Toast;
