import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import FilterHead from "../FilterHeads/FilterHead";

const Filters = () => {
 
  return (
    <div className="shadow-lg w-[15rem] p-3">
     <div className="flex justify-between items-center "> <h1 className="p-2  text-md font-bold text-black">Filters</h1>
     <h1 className="text-orange-500 hover:text-orange-400 text-[0.8rem] font-semibold">CLEAR ALL</h1>
     </div>
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
        filterTag="PRICES"
       
        typeOne="10000 & Above"
        typeTwo="20000 & Above"
        typeThree="30000 & Above"
        typeFour="50000 & Above"
        typeFive="60000 & Above"
      />
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
        filterTag="SCREEN SIZE"
        typeOne="6 inch & Above"
        typeTwo="5.5-6 inch"
        typeThree="4.5-5.5 inch"
        typeFour="3.5-4.5 inch"
        typeFive="3.5 inch & Below"
      />
      <FilterHead
        filterTag="CAMERA"
        typeOne="5-11.9 MP"
        typeTwo="12-15.9 MP"
        typeThree="16-20.9 MP"
        typeFour="21-31.9 MP"
        typeFive="32 MP & Above"
      />
      <FilterHead
        filterTag="PROCESSOR BRAND"
        typeOne="AMD"
        typeTwo="Apple"
        typeThree="ARM"
        typeFour="NVIDIA"
        typeFive="Intel"
      />
      <FilterHead
        filterTag="SPECIALITY"
        typeOne="Big Storage"
        typeTwo="High Performance"
        typeThree="Long-Lasting Battery"
        typeFour="Selfie Camera"
        typeFive="Dual-Sim"
      />

    </div>
  );
};

export default Filters;
