/** @format */
import {
  //   RiAdminFill,
  RiShieldUserFill,
  RiExchangeDollarFill,
} from "react-icons/ri";
import { IoGitCompare, IoSettingsSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineModelTraining, MdContactSupport } from "react-icons/md";

export const sidebarLinks = [
  {
    title: "Admins",
    icon: <RiShieldUserFill />,
    path: "",
  },
  {
    title: "User Management",
    icon: <FaUserGroup />,
    path: "",
  },
  {
    title: "Subscription Management",
    icon: <RiExchangeDollarFill />,
    path: "",
  },
  {
    title: "Training Management",
    icon: <MdOutlineModelTraining />,
    path: "",
  },
  {
    title: "Support",
    icon: <MdContactSupport />,
    path: "",
  },
  {
    title: "Comparable Companies",
    icon: <IoGitCompare />,
    path: "",
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp />,
    path: "",
  },
];
