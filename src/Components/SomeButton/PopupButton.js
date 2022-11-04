import React from "react";

const PopupButton = ({ emoji, name }) => {
  return (
    <div>
      {" "}
      <a className="flex  border border-slate-800 ">
        {" "}
        <span className=" text-md"> Connect on linkedin </span>{" "}
        <span className=" text-xl mt-1">{emoji}</span>{" "}
      </a>
    </div>
  );
};

export default PopupButton;
