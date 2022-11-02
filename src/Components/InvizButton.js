import React from "react";

const InvizButton = ({ name }) => {
  return (
    <button className=" hvr-grow px-3 mx-1 my-1 bg-slate-700 text-slate-100 text-sm py-1 shadow-2xl rounded-2xl border border-slate-300">
      {" "}
      {name}{" "}
    </button>
  );
};

export default InvizButton;
