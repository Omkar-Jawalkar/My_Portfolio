import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <a
        href="mailto:omkarjawalkar234@gmail"
        className="text-center cursor-pointer flex py-9 text-center text-white"
      >
        <span className=" text-[32px] mr-2 ">
          <MdEmail />
        </span>{" "}
        <span className=" mr-2 pt-1 ">omkarjawalkar234@gmail.com</span>{" "}
      </a>
      <div className="text-center pb-9 pt-2 text-white">
        Copyright &copy; Omkar Jawalkar. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
