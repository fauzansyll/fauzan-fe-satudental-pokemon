import { ButtonProps } from "@/lib/interface";
import React, { FC } from "react";

const Button: FC<ButtonProps> = ({
  type = "simple",
  onClick,
  children,
  color,
  disabled,
  size,
}) => {
  return (
    <div onClick={onClick}>
      <div className="flex justify-evenly space-x-6">
        {type === "simple" && (
          <button
            disabled={disabled}
            className={`h-12 text-${size} md:text-xl border-black duration-500 border-2 px-2 bg-${color}-200 hover:bg-${color}-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-${color}`}
          >
            {children}
          </button>
        )}
        {type === "medium" && (
          <button
            disabled={disabled}
            className={`h-12 text-${size} md:text-xl border-black duration-500 border-2 px-2 bg-${color}-200 hover:bg-${color}-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-${color} rounded-md`}
          >
            {children}
          </button>
        )}

        {type === "full" && (
          <button
            disabled={disabled}
            className="h-12 w-full text-${size} md:text-xl border-black duration-500 border-2 px-2 bg-neocyan-200 hover:bg-neocyan-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-${color} rounded-full"
          >
            {children}
          </button>
        )}
      </div>
    </div>
  );
};

export default Button;
