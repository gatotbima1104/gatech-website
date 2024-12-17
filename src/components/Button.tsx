import React from "react";
import { IButton } from "../interfaces/Index";

const Button: React.FC<IButton> = ({ bg, text}) => {
  return (
    <button className={`py-[10px] px-[24px] ${bg} rounded-[12px] text-black hover:bg-green-500 font-semibold text-[16px]`}>
      {text}
    </button>
  );
};

export default Button;
