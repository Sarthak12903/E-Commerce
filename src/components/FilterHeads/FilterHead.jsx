import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const FilterHead = ( {filterTag, typeOne, typeTwo, typeThree, typeFour,typeFive}) => {

  return (
    <div>
      <div className="flex px-2 py-1 justify-between shadow-sm items-center">
        <h1 className="font-semibold text-black text-[0.8rem]">{filterTag  || 'Loading'}</h1>
        <MdOutlineKeyboardArrowDown 
        />
      </div>
      <ul className="px-4 my-2">
        <li className="flex justify-start gap-2 text-gray-600 items-center">
          <input type="checkbox"  />
          <p className="pb-0.5 text-[0.8rem] text-black">{typeOne||"loading"}</p>
        </li>
        <li className="flex justify-start gap-2 items-center">
          <input type="checkbox" />
          <p className="pb-0.5 text-[0.8rem] text-black">{typeTwo || "loading"}</p>
        </li>
        <li className="flex justify-start gap-2 items-center">
          <input type="checkbox" />
          <p className="pb-0.5 text-[0.8rem] text-black">{typeThree  || "loading"}</p>{" "}
        </li>
        <li className="flex justify-start gap-2 items-center">
          <input type="checkbox" />
          <p className="pb-0.5 text-[0.8rem] text-black">{typeFour  ||"loading" }</p>{" "}
        </li>
        <li className="flex justify-start gap-2 items-center">
          <input type="checkbox" />
          <p className="pb-0.5 text-[0.8rem] text-black">{typeFive ||"loading"}</p>{" "}
        </li>
      </ul>
    </div>
  );
};

export default FilterHead;
