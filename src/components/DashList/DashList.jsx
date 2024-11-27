import { BsHandbag } from "react-icons/bs";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdFlightTakeoff } from "react-icons/md";
import { Blocks, Bike } from "lucide-react";

export default function DashList() {
  const items = [
    { itemno: 1, itemName: "Mobiles", itemIcon: FaMobileScreenButton },
    { itemno: 2, itemName: "Grocery", itemIcon: BsHandbag },
    {
      itemno: 3,
      itemName: "Fashion",
      itemIcon: () => (
        <p className="text-xl group-hover:text-white font-serif font-semibold">
          F
        </p>
      ),
    },
    { itemno: 4, itemName: "Electronics", itemIcon: FaComputer },
    { itemno: 5, itemName: "Home & Furnitures", itemIcon: IoHomeOutline },
    { itemno: 6, itemName: "Appliances", itemIcon: CgSmartHomeRefrigerator },
    { itemno: 7, itemName: "Flight Bookings", itemIcon: MdFlightTakeoff },
    { itemno: 8, itemName: "Beauty, Toys & More", itemIcon: Blocks },
    { itemno: 9, itemName: "Two Wheelers", itemIcon: Bike },
  ];

  return (
    <ul className="flex justify-around items-center bg-orange-200 p-2 select-none">
      {items.map((value) => (
        <li
          key={value.itemno}
          className="cursor-pointer px-4 py-2 rounded-lg flex flex-col justify-center items-center hover:bg-orange-500 group active:scale-95"
        >
          <value.itemIcon className="h-7 w-7  group-hover:text-white" />
          <p className="text-black group-hover:text-white">{value.itemName}</p>
        </li>
      ))}
    </ul>
  );
}
