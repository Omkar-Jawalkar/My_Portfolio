import React from "react";
import InvizButton from "./InvizButton";

const SkillCard = (props) => {
  const bSkills = ["React", "Mongo DB", "Express.js", "Node.js", "BootStrap"];

  return (
    <div
      data-aos="zoom-in"
      className="border border-slate-700 shadow-2xl rounded-lg bg-[#101820FF] p-5 m-10  "
    >
      <div className="flex flex-row">
        <img
          className=" border rounded-full w-16 h-16 "
          src={props.data.image}
        />

        <div className="flex flex-col">
          <h2 className="text-slate-100 text-2xl mx-3 mt-2">
            {props.data.name}
          </h2>
          <p className="mt-0 font-medium text-slate-500 text-sm pl-3">
            {props.data.job}
          </p>

          <p className="mt-7 max-w-sm px-3 text-slate-200">
            <ul className="marker:text-slate-100 list-disc">
              {props.data.desc.map((item, index) => (
                <li className="pb-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
      <div className="mt-5 mb-2  text-center">
        {props.data.skills.map((skill, index) => (
          <InvizButton key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
