import React from "react";

const PCard2 = (props) => {
  return (
    <div
      data-aos="flip-left"
      className=" bg-[#101820FF] flex-1 my-10 mx-10 flex flex-col rounded-2xl shadow-2xl text-slate-100"
    >
      <div className="text-center pt-4 text-[35px] font-light">
        {props.info.name}
      </div>
      <p className="text-lg pl-8 pr-4 md:px-12 pt-5 ">
        <ul className="list-disc">
          {props.info.desc.map((desc, index) => (
            <li className="py-3 " key={index}>
              {desc}
            </li>
          ))}
          <div className="mb-5"></div>
        </ul>
      </p>
    </div>
  );
};

export default PCard2;
