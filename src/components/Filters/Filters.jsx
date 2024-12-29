import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import FilterHead from "../FilterHeads/FilterHead";

const Filters = () => {
  return (
    <div className="shadow-lg w-[15rem] p-3">
      <h1 className="p-2  text-md font-bold text-black">Filters</h1>
      <div>
        <h1 className="px-3 my-1 text-[0.9rem] font-semibold  text-gray-700">
          Categories
        </h1>
        <div className="flex my-1 p-1  text-[0.9rem] text-gray-600 items-center gap-[0.4rem]">
          <RiArrowLeftSLine />
          <p>Mobiles & Appliences</p>
        </div>
      </div>
      <FilterHead
        filterTag="BRANDS"
       
        typeOne="SAMSUNG"
        typeTwo="IPhone"
        typeThree="VIVO"
        typeFour="OPPO"
        typeFive="RealMe"
      />
      <FilterHead
        filterTag="RAM"
        typeOne="8 GB & Above"
        typeTwo="8 GB"
        typeThree="6 GB"
        typeFour="6 GB & Above"
        typeFive=" 4 GB"
      />
      <FilterHead
        filterTag="INTERNAL STORAGE"
        typeOne="256 GB"
        typeTwo="128 GB"
        typeThree="64 GB"
        typeFour="32 GB"
        typeFive="16 GB"
      />
      <FilterHead
        filterTag="BATTERY"
        typeOne="9000 mAh"
        typeTwo=" 7000 mAh & Above"
        typeThree="6000 mAh & Above"
        typeFour="5000 mAh & Above"
        typeFive="4000 mAh & Above"
      />

    </div>
  );
};

export default Filters;
