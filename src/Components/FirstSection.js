import React from "react";
import firstSectionImg from "../Assets/firstSectionImg.png";
import resume from "../Assets/resume.pdf";
import { FaDownload } from "react-icons/fa";

const FirstSection = () => {
  return (
    <div id="about" className="flex flex-col xl:flex-row  ">
      <div data-aos="zoom-in-left" className="flex-1 flex flex-col text-center">
        <div className=" mt-32  font-mono text-4xl font-bold text-white">
          Hey, I'm Omkar Jawalkar
        </div>
        <div className=" pl-52 max-xl:p-0 font-mono text-lg font-bold  text-slate-900">
          Junior React Developer
        </div>

        <p className=" mx-10 md:mx-20  text-[17px] my-6 text-white">
          I love building{" "}
          <span className="underline text-black ">web applications</span> 👨‍💻.
          I've a keen interest in{" "}
          <span className="underline text-black ">
            {" "}
            debugging and refining websites ,
          </span>
          as it helps me to make them better and more efficient to use 💡. Well,
          if you need a web application for your online business or a website
          for a college project ,{" "}
          <span className="underline text-black "> I've got your back</span>
          🙋‍♂️🎉
        </p>

        <div className="mb-6 mt-2 ">
          <a
            href={resume}
            download="Omkar_Jawalkar_Resume"
            className=" cursor-pointer hvr-grow text-white drop-shadow-2xl px-6
            py-2 bg-[#101820FF] rounded-md border-white hover:bg-slate-500
            hover:text-[#101820FF] hover:border-[#101820FF] transation
            duration-300 hover:text-md hover:font-bold active:text-slate-500 "
          >
            <div className="flex">
              <span className="mt-1 mr-2 text-md">
                <FaDownload />
              </span>
              <span>My Resume</span>
            </div>
          </a>
        </div>
      </div>

      <div
        data-aos="zoom-in-right"
        className="flex-1 flex justify-center shrink-0 text-center"
      >
        <img
          src={firstSectionImg}
          alt=""
          className="  md:w-[700px] md:h-[350px] mt-6 md:mt-20 scale-x-[-1] "
        ></img>
      </div>
    </div>
  );
};

export default FirstSection;
