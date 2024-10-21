/** @format */
import {
  //   RiAdminFill,
  RiShieldUserFill,
  RiExchangeDollarFill,
} from "react-icons/ri";
import { IoGitCompare, IoSettingsSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineModelTraining, MdContactSupport } from "react-icons/md";
import { MdFolderCopy } from "react-icons/md";
import { PdfIcon } from "../../assets/icons";

export const sidebarLinks = [
  {
    title: "Admins",
    icon: <RiShieldUserFill />,
    path: "/log-in",
  },
  {
    title: "User Management",
    icon: <FaUserGroup />,
    path: "/user-management",
  },
  {
    title: "Subscription Management",
    icon: <RiExchangeDollarFill />,
    path: "/subscription-management",
  },
  {
    title: "Training Management",
    icon: <MdOutlineModelTraining />,
    path: "/training-management",
  },
  {
    title: "Support",
    icon: <MdContactSupport />,
    path: "/support",
  },
  {
    title: "Comparable Companies",
    icon: <IoGitCompare />,
    path: "/comparable-companies",
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp />,
    path: "/settings",
  },
];

export const folderData = [
  { image: <MdFolderCopy className='size-24' />, title: "Folder Name ..." },
  { image: <MdFolderCopy className='size-24' />, title: "Folder Name ..." },
  { image: <MdFolderCopy className='size-24' />, title: "Folder Name ..." },
  { image: <MdFolderCopy className='size-24' />, title: "Folder Name ..." },
  { image: <MdFolderCopy className='size-24' />, title: "Folder Name ..." },
  { image: <MdFolderCopy className='size-24' />, title: "Folder Name ..." },
  { image: <MdFolderCopy className='size-24' />, title: "Folder Name ..." },
  { image: <MdFolderCopy className='size-24' />, title: "Folder Name ..." },
];

// Example videos
export const videos = [
  {
    id: 1,
    title: "The title of the video will go here",
    description:
      "This is a sample YouTube video description. Replace this text with your own creative copy.",
    download: "[invalid URL removed]",
  },
  {
    id: 2,
    title: "The title of the video will go here",
    description:
      "This is a sample YouTube video description. Replace this text with your own creative copy.",
    download: "[invalid URL removed]",
  },
  {
    id: 3,
    title: "The title of the video will go here",
    description:
      "This is a sample YouTube video description. Replace this text with your own creative copy.",
    download: "[invalid URL removed]",
  },
  {
    id: 4,
    title: "The title of the video will go here",
    description:
      "This is a sample YouTube video description. Replace this text with your own creative copy.",
    download: "[invalid URL removed]",
  },
];

export const pdfs = [
  {
    id: 1,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 2,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 3,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 4,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 5,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 6,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 7,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 8,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 9,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 10,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 11,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 12,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 13,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 14,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
  {
    id: 15,
    icon: <PdfIcon />,
    title: "The title of the PDF",
    description:
      "This is a sample PDF detail. Replace this text with your own creative copy.",
    url: "Download PDF",
  },
];

export const plans = [
  {
    planName: "Gold",
    price: "€295/month",
    features: ["3 Reports/month"],
  },
  {
    planName: "Premium",
    price: "€495/month",
    features: ["10 Reports/month"],
  },
  {
    planName: "Platinium",
    price: "€995month",
    features: ["50 Report/month"],
  },
];
