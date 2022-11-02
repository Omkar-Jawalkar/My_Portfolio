import React from "react";
import PCard1 from "./PCard1";
import PCard2 from "./PCard2";

const ProjectCard = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <PCard1></PCard1>
      <PCard2></PCard2>
    </div>
  );
};

export default ProjectCard;
