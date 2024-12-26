import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CategorialHeading = ({name}) => {
  return (
    <div className="p-4 flex justify-between mb-2 text-black font-semibold text-3xl items-center">
            <h1>{name || "Featured Products"}</h1>
            <IoIosArrowDroprightCircle className="cursor-pointer w-8 h-8 text-xl hover:text-orange-500" />
          </div>
  )
}

export default CategorialHeading