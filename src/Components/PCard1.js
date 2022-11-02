import React from "react";
import image from "../Assets/lofigen.png";
const PCard1 = (props) => {
  return (
    <div data-aos="flip-right" className="flex-1 flex flex-col my-10 ">
      <div>
        <img
          className="mt-0 mx-6 p-4 w-11/12 "
          src={props.info.image}
          alt="Image"
        />
      </div>

      {console.log("This is props", props)}
      <div className="text-center">
        <a href={props.info.link}>
          <button className=" hvr-push bg-[#101820FF] active:opacity-5 hover:bg-slate-100  font-semibold hover:text-[#101820FF] transition duration-300 hover:border-none mt-5 px-14 rounded-full text-lg py-3 border text-slate-100 ">
            Visit
          </button>
        </a>
      </div>
    </div>
  );
};

export default PCard1;
