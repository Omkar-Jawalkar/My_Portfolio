import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { SiGeeksforgeeks } from "react-icons/si";

const Socials = () => {
  return (
    <div className="bg-[#101820FF] text-center border-none py-3 ">
      <div
        data-aos="zoom-out"
        className=" flex  sm:mx-10 md:mx-20 text-slate-200 lg:mx-30  justify-around py-1"
      >
        {" "}
        <a
          href="https://github.com/Omkar-Jawalkar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="mx-2 h-11 w-11 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/omkar_jawalkar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram className="mx-2 h-10 w-10 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/omkar-jawalkar-68b658208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="mx-2 h-10 w-10 cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/omkar_jawalkar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle className="mx-2 h-10 w-10 cursor-pointer" />
        </a>
        <a
          href="https://auth.geeksforgeeks.org/user/omkarjawalkar234/practice/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGeeksforgeeks className="mx-2 h-11 w-11 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
