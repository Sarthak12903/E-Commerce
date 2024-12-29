import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";


const MobileTile = ({mobileName, moPrice, mobileImg,rating,moRating,moReviews, moSize ,moRam, moCamera,moBattery,moProcessor,moWarrenty}) => {
  return (
    <div className="flex p-4 w-auto items-start gap-2 border-2 border-gray-100 pr-20">
      <div className="p-6">
        <img className="w-[12rem] h-[14rem]" src={mobileImg || '\CategoriesImg\Mobiles\samsungs23.webp'} alt="" />
      </div> 
      <div className="flex flex-col justfy-between gap-1 p-4 ">
        <div>
        <h1 className=" pt-1 px-1 text-[1.2rem] font-semibold">{mobileName|| 'Name not retrived'}</h1>
        <p className="text-sm text-grey-100 flex items-center justify-start gap-4 p-2">
          <div
            className="h-[1.2rem] w-[2.5rem] text-white gap-0.5 font-semibold flex justify-center items-center rounded-sm bg-green-600">
          {rating ||"0.0"}
          <MdOutlineStar />

         </div>
          <p className="text-gray-500 font-semibold">{moRating ||"Loading"} Rating & {moReviews || "Loading"}  Reviews</p>
        </p>
        </div>

        <ul className="flex flex-col p-2 gap-1 text-[0.8rem] text-gray-800 justify-around items-start list-disc list-inside">
          <li>{moRam || "8 GB RAM | 128 GB ROM"}</li>
          <li>{moSize||"15.49 cm (6.1 inch) Full HD+ Display"}</li>
          <li>{moCamera ||"15 MP |12 MP |10 MP (12 MP FRont Camera)"}</li>
          <li>{moBattery || "3900 mAh Lithium Ion Battery"}</li>
          <li>{moProcessor ||"Qualcomm Snapdragon 8 Gen 2 Processor"}</li>
          <li>{moWarrenty ||"1 year msnufacturer warrenty for device and 6 months manufacturer  warrenty for in box accesories"}</li>
        
        </ul>
      </div>
      <div  className="p-4">
        <p className="font-semibold flex items-center text-[1.5rem]">
        
          <FaIndianRupeeSign />
          <h1>{moPrice ||49000}</h1>
        </p>
        <p className="flex items-center text-sm">
          <LiaRupeeSignSolid />
          <p className="line-through text-gray-500">89000</p>
          <p className="mx-2 text-orange-600 font-semibold"> upto 45% Off</p>
        </p>
        <p className="text-sm">Free Delivery</p>
        <p className="flex items-end text-[0.7rem] font-semibold text-orange-600">
        
          <p>Upto  </p> <LiaRupeeSignSolid className="h-[0.9rem] w-[0.9rem] "/> <p>750 Off on Airtel Offer</p>
        </p>
        <p className="flex items-center text-[0.8rem] ">
        
          <p>Upto  </p> <LiaRupeeSignSolid className="h-[0.8rem] w-[0.8rem]"/> <p>3400 Off on Exchange Offer</p>
        </p>
        
      </div>
    </div>
  );
};

export default MobileTile;
