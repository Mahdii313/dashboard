import { RxDashboard } from "react-icons/rx";
import {
  MdLeaderboard,
  MdProductionQuantityLimits,
  MdOutlineMessage,
} from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";

export const patterns = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  passwordSmallLetter: /[a-z]+/,
  passwordCapitalLetter: /[A-Z]+/,
  passwordNumber: /\d+/,
  passwordSpecialChars: /[@_-]+/,
};

export const languages = ["en", "fa", "ar"];

export const sidebar = [
  {
    title: "Dashboard",
    icon: <RxDashboard className="text-xl xl:text-2xl" />,
  },
  {
    title: "Leaderboard",
    icon: <MdLeaderboard className="text-xl xl:text-2xl" />,
  },
  {
    title: "order",
    icon: <HiOutlineShoppingCart className="text-xl xl:text-2xl" />,
  },
  {
    title: "Products",
    icon: <MdProductionQuantityLimits className="text-xl xl:text-2xl" />,
  },
  {
    title: "Sales Report",
    icon: <FaChartLine className="text-xl xl:text-2xl" />,
  },
  {
    title: "Messages",
    icon: <MdOutlineMessage className="text-xl xl:text-2xl" />,
  },
  {
    title: "Settings",
    icon: <IoSettingsOutline className="text-xl xl:text-2xl" />,
  },
  {
    title: "Sign Out",
    icon: <IoLogOutOutline className="text-xl xl:text-2xl" />,
  },
];
