import React, { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const boxStyles = cva(
  "px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center",
  {
    variants: {
      textSize: {
        base: "text-base md:text-xl mb-4",
        large: "text-lg md:text-2xl mb-6",
      },
    },
    defaultVariants: {
      textSize: "base",
    },
  }
);

const smallBoxStyles = cva(
  "h-12 text-lg border-black border-2 flex items-center px-2.5 duration-500 rounded-full",
  {
    variants: {
      color: {
        neocyan: "bg-neocyan-200 hover:bg-neocyan-300 active:bg-neocyan-300",
        red: "bg-red-200 hover:bg-red-300 active:bg-red-300",
        blue: "bg-blue-200 hover:bg-blue-300 active:bg-blue-300",
      },
    },
    defaultVariants: {
      color: "neocyan",
    },
  }
);

interface BoxProps extends VariantProps<typeof boxStyles> {
  children: ReactNode;
  classBox?: string;
}

const Box: React.FC<BoxProps> = ({ children, classBox, textSize }) => {
  return (
    <div className={`${classBox} ${boxStyles({ textSize })}`}>
      <div>{children}</div>
    </div>
  );
};

interface SmallBoxProps extends VariantProps<typeof smallBoxStyles> {
  children: React.ReactNode;
}

const SmallBox: React.FC<SmallBoxProps> = ({ children, color }) => {
  return <div className={smallBoxStyles({ color })}>{children}</div>;
};

export { Box, SmallBox };
