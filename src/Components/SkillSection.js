import React from "react";
import { TechIcons } from "../data";

const SkillSection = () => {
  return (
    <div className="flex mt-20 flex-col">
      <div className="text-white mb-5 text-center font-light text-[45px]">
        {" "}
        Skills
      </div>
      {console.log("This is tech icons", TechIcons)}

      <div className="h-[100%] w-[100%] justify-items-center align-center py-5 gap-4  text-white  sm:grid-cols-3  lg:grid-cols-4 grid justify-center grid-cols-3 bg-slate-500">
        {TechIcons.map((tech, index) => (
          <div data-aos="zoom-out-right" className="flex flex-col text-center">
            <button
              className="p-3 hvr-float w-20 text-center bg-[#101820FF]"
              key={index}
            >
              {" "}
              {tech.symbol}
            </button>
            <h2 className="pt-2 hover:hvr-float font-bold text-slate-900">
              {tech.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
