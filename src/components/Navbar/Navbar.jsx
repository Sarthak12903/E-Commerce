import { MdShoppingCart } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
export default function Navbar() {
  const [logged, setLogged] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <nav className="flex justify-center items-center w-full sm:h-20  min-w-fit bg-orange-500  ">
      <h1 className="text-white text-3xl font-sans font-semibold flex flex-col justify-center items-center ml-2">
        Shopmart<span className="text-xs">Explore Your Desire</span>
      </h1>
      <div className="w-[30rem] rounded-lg overflow-hidden flex justify-center items-center mx-20 min-w-56 ">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="w-full px-4 py-2 focus:outline-none"
        />
        <IoSearch className="h-10 w-10 bg-white m-0 p-1 px-2 cursor-pointer hover:bg-slate-200" />
      </div>
      <div className="flex gap-8 text-white justify-center items-center ">
        <button>
          <p className="w-36">Become a Seller</p>
        </button>
        <button className="flex justify-center items-center space-x-2">
          <MdShoppingCart className="w-7 h-7" />
          <p className="text-xl">Cart</p>
        </button>
        <div className="relative w-full flex justify-center items-center">
          <button
            className="flex justify-center items-center text-xl "
            onClick={handleDropDown}
          >
            More
            <MdOutlineKeyboardArrowDown
              className={`${
                dropDown && "-rotate-180 "
              } transition-all ease-linear duration-300`}
            />{" "}
          </button>
          <ul
            className={`absolute top-14 w-56 bg-orange-200 rounded-b-3xl text-black p-4 space-y-2 transition-all ease-linear duration-200 transform ${
              dropDown
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-1 invisible"
            }`}
          >
            <li className="hover:bg-orange-300 rounded-lg w-full h-full p-2 px-4 cursor-pointer">
              Notifications
            </li>
            <hr />
            <li className="hover:bg-orange-300 rounded-lg w-full h-full p-2 px-4 cursor-pointer">
              24/7 Customer Care
            </li>
            <hr />
            <li className="hover:bg-orange-300 rounded-lg w-full h-full p-2 px-4 cursor-pointer">
              Advertise
            </li>
          </ul>
        </div>

        {logged ? (
          <button>
            <CgProfile className="w-7 h-7" />{" "}
          </button>
        ) : (
          <button className="text-xl px-10 py-1 bg-white text-orange-500 hover:bg-slate-200 active:scale-95 rounded-lg mr-2">
            {" "}
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
