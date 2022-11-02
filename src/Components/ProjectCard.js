import React, { useState } from "react";
import image from "../Assets/lofigen.png";
import { FiMusic } from "react-icons/fi";
import { ImDownload } from "react-icons/im";
import PCard1 from "./PCard1";
import PCard2 from "./PCard2";

const ProjectCard = () => {
  const [flip, setFlip] = useState(false);
  return (
    <div className="flex flex-col xl:flex-row">
      <PCard1></PCard1>
      <PCard2></PCard2>
    </div>
  );
};

export default ProjectCard;
