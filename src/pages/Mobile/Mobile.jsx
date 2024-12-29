import React from "react";
import MobileTile from "../../components/MobileTile/MobileTile";
import Filters from "../../components/Filters/Filters";
// import { SlArrowRight } from "react-icons/sl";
import { RiArrowRightSLine } from "react-icons/ri";

const Mobile = () => {
  return (
    <div className="flex m-4 justify-between gap-2">
      <Filters/>
      <div  className='shadow-lg'>
        <div className="px-2">
          <div className="flex text-[0.8rem] text-gray-600  shadow-sm items-center gap-[0.4rem]">
            <h1 className="hover:text-orange-500">Home</h1>
            <RiArrowRightSLine />

            <p className="hover:text-orange-500"> Mobiles</p>
          </div>
          <p className="text-lg font-semibold ">
            Showing Popular Smartphones at Great Prices
          </p>
          <ul className="flex justify-start gap-4  shadow-sm text-gray-500 text-sm py-2">
            <li className="font-bold">Sort By</li>
            <li className="hover:text-orange-500">Relevence</li>
            <li className="hover:text-orange-500">Popularity</li>
            <li className="hover:text-orange-500">Prices (Low to High)</li>
            <li className="hover:text-orange-500">Prices (High to Low)</li>
            <li className="hover:text-orange-500">Latest First</li>
          
          </ul>
        </div>
        <MobileTile mobileImg="\CategoriesImg\Mobiles\samsungs23.webp" />
        <MobileTile
          mobileName="IPhone 16 (Ultramarine) 128GB"
          moPrice=""
          mobileImg="\CategoriesImg\Mobiles\googlepixal8a.webp"
          moRating=""
          moSize=""
          moRam=""
          moCamera=""
          moBattery=""
          moProcessor=""
          moWarrenty=""
        />
        <MobileTile
          mobileName="IPhone 16 (Ultramarine) 128GB"
          moPrice=""
          mobileImg="\CategoriesImg\Mobiles\oneplusnordce.webp"
          ratingImg=""
          moRating=""
          moSize=""
          moRam=""
          moCamera=""
          moBattery=""
          moProcessor=""
          moWarrenty=""
        />
        <MobileTile
          mobileName="IPhone 16 (Ultramarine) 128GB"
          moPrice=""
          mobileImg="\CategoriesImg\Mobiles\oppok12.webp"
          ratingImg=""
          moRating=""
          moSize=""
          moRam=""
          moCamera=""
          moBattery=""
          moProcessor=""
          moWarrenty=""
        />
        <MobileTile
          mobileName="IPhone 16 (Ultramarine) 128GB"
          moPrice=""
          mobileImg="\CategoriesImg\Mobiles\iphone.webp"
          ratingImg=""
          moRating=""
          moSize=""
          moRam=""
          moCamera=""
          moBattery=""
          moProcessor=""
          moWarrenty=""
        />
        <MobileTile
          mobileName="IPhone 16 (Ultramarine) 128GB"
          moPrice=""
          mobileImg="\CategoriesImg\Mobiles\vivot3.webp"
          ratingImg=""
          moRating=""
          moSize=""
          moRam=""
          moCamera=""
          moBattery=""
          moProcessor=""
          moWarrenty=""
        />

        <MobileTile
          mobileName="IPhone 16 (Ultramarine) 128GB"
          moPrice=""
          mobileImg="\CategoriesImg\Mobiles\realme12.webp"
          ratingImg=""
          moRating=""
          moSize=""
          moRam=""
          moCamera=""
          moBattery=""
          moProcessor=""
          moWarrenty=""
        />
      </div>
    </div>
  );
};

export default Mobile;
