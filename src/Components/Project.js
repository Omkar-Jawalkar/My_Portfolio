import React from "react";
import PCard1 from "./PCard1";
import PCard2 from "./PCard2";
import { Projects } from "../data";
const Project = () => {
  return (
    <div className="flex  flex-col mt-36">
      <div
        data-aos="zoom-in"
        className="text-white mb-5  text-center font-light text-[45px]"
      >
        Projects
      </div>
      <div className="flex flex-col xl:flex-row">
        <PCard1 info={Projects[0]} />
        <PCard2 info={Projects[0]} />
      </div>
      <div className="border-b-2 my-10  mx-6 sm:mx-12"></div>
      <div className="flex  flex-col xl:flex-row ">
        <PCard2 info={Projects[1]} />
        <PCard1 info={Projects[1]} />
      </div>
    </div>
  );
};

export default Project;
