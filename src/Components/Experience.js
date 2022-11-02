import React from "react";
import SkillCard from "./SkillCard";
import { InternshipExperience } from "../data";

const Experience = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="text-white mb-7 text-center font-light text-[45px]">
        Experience
      </div>
      <div className="flex justify-center xl:flex-row flex-col ">
        <SkillCard className="flex-1" data={InternshipExperience[0]} />
        <SkillCard className="flex-1" data={InternshipExperience[1]} />
      </div>
    </div>
  );
};

export default Experience;
