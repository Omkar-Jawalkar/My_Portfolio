import React from "react";

const PopupButton = (props) => {
  return (
    <div>
      {" "}
      <button className="border rounded-sm px-3 my-2 py-1 border-slate-800 flex hover:bg-[#101820FF] transation duration-150 hover:text-white ">
        <a
          href={props.link}
          target="_blank"
          className="flex"
          rel="noopener noreferrer"
        >
          {" "}
          <span className=" text-md"> Connect on {props.name} </span>{" "}
          <span className=" text-xl ml-1 mt-[2px] ">{props.emoji}</span>{" "}
        </a>
      </button>
    </div>
  );
};

export default PopupButton;
