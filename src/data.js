import virtusa from "./Assets/virtusa.png";
import blockatena from "./Assets/blockatena.png";
import lofigen from "./Assets/lofigen.png";
import virtualPainter from "./Assets/virtualPainter.jpg";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import {
  DiCss3Full,
  DiMongodb,
  DiMysql,
  DiJava,
  DiPython,
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiSqlite } from "react-icons/si";

export const InternshipExperience = [
  {
    name: "Blockatena",
    job: "Junior Backend Developer (April 2022 - Augest 2022)",
    desc: [
      "Worked on Node.js to create Express API for login page and database operations.",
      "Implemented the send email after subscribing to the newsletter feature using node mailer package",
    ],
    skills: ["React", "Mongo DB", "Express.js", "Node.js", "Git", "Github"],
    image: blockatena,
  },
  {
    name: "Virtusa",
    job: "Backend Developer (February 2022 - March 2022)",
    desc: [
      "Built an E-Furniture store using React.js including signup, login and dashboard page",
      "Managed Backend with user and admin requirment ",
    ],
    skills: ["React", "PostGre SQL", "Node.js", "Git", "Github"],
    image: virtusa,
  },
];

export const TechIcons = [
  { name: "Node.js", symbol: <FaNodeJs className="mx-2 h-11 w-11" /> },
  { name: "React.js", symbol: <FaReact className="mx-2 h-11 w-11" /> },
  { name: "HTML", symbol: <AiOutlineHtml5 className="mx-2 h-11 w-11" /> },
  { name: "CSS", symbol: <DiCss3Full className="mx-2 h-11 w-11" /> },
  { name: "Mongo DB", symbol: <DiMongodb className="mx-2 h-11 w-11" /> },
  { name: "MySQL", symbol: <DiMysql className="mx-2 h-11 w-11" /> },
  { name: "Java", symbol: <DiJava className="mx-2 h-11 w-11" /> },
  { name: "Python", symbol: <DiPython className="mx-2 h-11 w-11" /> },
  { name: "JS", symbol: <IoLogoJavascript className="mx-2 h-11 w-11" /> },
  { name: "Django", symbol: <SiDjango className="mx-2 h-11 w-11" /> },
  { name: "SQLite", symbol: <SiSqlite className="mx-2 h-11 w-11" /> },
  { name: "Github", symbol: <AiFillGithub className="mx-2 h-11 w-11" /> },
];

export const Projects = [
  {
    name: "Lofigen",
    desc: [
      " A Music player with User and Admin authentication which allows you to play, add, delete data (songs) from the database",
      "Implemented the login with Google feature",
      "✨ Interactive UI",
      "🙋‍♂️ For Lofi Generation",
    ],
    image: lofigen,
    link: "https://lofigen.herokuapp.com/",
  },

  {
    name: "Virtual Painter",
    desc: [
      "🖥️ Worked on OpenCV and Mediapipe to perform hand points detection and through a particular finger point coordinate, we paint on the real time screen",
      "➕ Implemented Virtual Calculator and Virtual tic-tac-toe game",
      "🕹️ Interactive interface to teach kids in MetaVerse 🙋‍♂️",
      "🎮 Games to be played in MetaVerse ",
    ],
    image: virtualPainter,
    link: "https://github.com/Omkar-Jawalkar/Hand-Recognition-Model",
  },
];
