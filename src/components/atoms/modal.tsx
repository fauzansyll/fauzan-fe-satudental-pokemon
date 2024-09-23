import { ModalProps } from "@/lib/interface";
import React, { Fragment } from "react";

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div>{children} </div>;
};

export default Modal;
