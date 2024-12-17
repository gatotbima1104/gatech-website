import React from "react";
import Image from "next/image";
import Data from "@/app/assets/data_extraction.png";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Catalog = () => {
  return (
    <div className="grid grid-cols-2 space-x-5">
      <div className="p-5 bg-[#171717] space-y-5 rounded-[20px]">
        <Image
          src={Data}
          alt="catalog"
          className="w-full h-[300px] object-cover"
        />
        <p className="text-sm p-1 rounded-full border-white border text-center w-40">
          Browser automation
        </p>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold mb-2">
              Streamline Product Automation
            </h1>
            <p className="text-xs max-w-[95%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum ut aut ab. Error fuga a dolores facilis accusantium
              necessitatibus eius dolor nostrum velit quam placeat nulla animi
            </p>
          </div>
          <a href="" className="flex items-center justify-center p-3 bg-white rounded-[20px]">
            <MdOutlineArrowOutward size={25} color="black" />
          </a>
        </div>
      </div>
      
      <div className="p-5 bg-[#171717] space-y-5 rounded-[20px]">
        <Image
          src={Data}
          alt="catalog"
          className="w-full h-[300px] object-cover"
        />
        <p className="text-sm p-1 rounded-full border-white border text-center w-40">
          Browser automation
        </p>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold mb-2">
              Streamline Product Automation
            </h1>
            <p className="text-xs max-w-[95%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum ut aut ab. Error fuga a dolores facilis accusantium
              necessitatibus eius dolor nostrum velit quam placeat nulla animi
            </p>
          </div>
          <a href="" className="flex items-center justify-center p-3 bg-white rounded-[20px]">
            <MdOutlineArrowOutward size={25} color="black" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Catalog;
