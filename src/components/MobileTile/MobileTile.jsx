import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaIndianRupeeSign } from "react-icons/fa6";

const MobileTile = () => {
  return (
    <div className="flex p-4 w-auto ">
      <div className="p-4">
        <img src="public\CategoriesImg\Mobiles\samsungs23.webp" alt="" />
      </div>
      <div className="flex flex-col justfy-between gap-2  p-8">
        <h1 className=" p-1 text-md">Samsung S23 Ultra (256GB)</h1>
        <p className="text-sm text-grey-100 flex items-center justify-start gap-4 ">
          <img
            className="h-[1.2rem] w-[2.4rem] rounded-sm"
            src="public\CategoriesImg\Mobiles\rating.png"
          />
          <p>65179 Ratings & 4967 Reviews</p>
        </p>

        <ul className="flex flex-col gap-2 justify-around items-start list-disc list-inside">
          <li className="text-sm color-grey-200">8 GB RAM | 128 GB ROM</li>
          <li className="text-sm color-grey-200">15.49 cm (6.1 inch) Full HD+ Display</li>
          <li className="text-sm color-grey-200">15 MP |12 MP |10 MP (12 MP FRont Camera)</li>
          <li className="text-sm color-grey-200">3900 mAh Lithium Ion Battery</li>
          <li className="text-sm color-grey-200">Qualcomm Snapdragon 8 Gen 2 Processor</li>
          <li className="text-sm color-grey-200">1 year msnufacturer warrenty for device and 6 months manufacturer
          warrenty for in box accesories</li>
        
        </ul>
      </div>
      <div className="p-8">
        <p className="font-semibold flex items-center text-[2rem]">
        
          <FaIndianRupeeSign />
          <h1>49000</h1>
        </p>
        <p className="flex items-center">
          <LiaRupeeSignSolid />
          <p className="line-through">89000</p>
          <p className="mx-2"> upto 45% Off</p>
        </p>
        <p>Free Delivery</p>
        <p className="flex items-center">
        
          <p>Upto</p> <LiaRupeeSignSolid /> <p>750 Off on Airtel Offer</p>
        </p>
      </div>
    </div>
  );
};

export default MobileTile;
