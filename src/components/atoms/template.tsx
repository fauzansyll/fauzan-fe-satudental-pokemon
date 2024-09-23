import { TemplateProps } from "@/lib/interface";
import React from "react";

const Template: React.FC<TemplateProps> = ({ children }) => {
  return <div className="md:px-24 px-6 py-6">{children}</div>;
};

export default Template;
