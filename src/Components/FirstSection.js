import React from "react";
import firstSectionImg from "../Assets/firstSectionImg.png";
import resume from "../Assets/resume.pdf";

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

        <p className="mx-20 text-md my-6 text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>

        <div className="mb-6">
          <a
            href={resume}
            download="Omkar_Jawalkar_Resume"
            className=" cursor-pointer hvr-grow text-white drop-shadow-2xl px-6
            py-2 bg-[#101820FF] rounded-md border-white hover:bg-slate-500
            hover:text-[#101820FF] hover:border-[#101820FF] transation
            duration-300 hover:text-md hover:font-bold active:text-slate-500 "
          >
            My Resume
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
