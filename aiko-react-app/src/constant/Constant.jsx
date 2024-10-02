/** @format */

import {
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  LineIcon,
  BoxIcon,
  NewEvent,
  HeartIcon,
} from "../Components/Icons/SvgIcons";
import { FaChrome } from "react-icons/fa";
export const socaildata = [
  {
    icon: <LinkedInIcon />,
    address: "#",
  },
  {
    icon: <TwitterIcon />,
    address: "",
  },
  {
    icon: <InstagramIcon />,
    address: "",
  },
  {
    icon: <LineIcon />,
    address: "",
  },
  {
    icon: <BoxIcon />,
    address: "",
  },
];

export const ButtonData = [
  {
    icon: <FaChrome style={{ width: "12.5px" }} />,
    title: "Save Contact",
    address: "",
  },
  {
    icon: <HeartIcon />,
    title: "Resume",
    address: "",
    style: {
      backgroundColor: "var(--blue-violet)",
      color: "white",
    },
  },
  {
    icon: <FaChrome style={{ width: "12.5px" }} />,
    title: "My Portfolio",
    address: "",
  },
];

export const AppData = [
  {
    text: "LeadLeadLeadLeadLeadLeadLead",
    icon: <NewEvent />,
    address: "",
  },
  {
    text: "LeadLeadLeadLeadC",
    icon: <NewEvent />,
    address: "",
  },
  {
    text: "LeadLeadLead",
    icon: <NewEvent />,
    address: "",
  },
];
