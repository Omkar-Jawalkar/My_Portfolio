import React, { useEffect } from "react";
import ContactMe from "./Components/DownSection/ContactMe";
import Socials from "./Components/DownSection/Socials";
import Experience from "./Components/Experience";
import FirstSection from "./Components/FirstSection";
import HeaderSection from "./Components/HeaderSection";
import Project from "./Components/Project";
import SkillSection from "./Components/SkillSection";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "reactjs-popup/dist/index.css";
import "./hover-min.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Router>
        <HeaderSection />
        <div className="bg-slate-500  mx-4 sm:mx-10 md:mx-25 lg:mx-40">
          <FirstSection />
          <span id="experience"></span>
          <Experience />
          <span id="projects"></span>
          <Project />
          <span id="skills"></span>
          <SkillSection />
          <span id="contact"></span>
          <ContactMe />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#101820FF"
              fill-opacity="1"
              d="M0,224L120,197.3C240,171,480,117,720,122.7C960,128,1200,192,1320,224L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
          <Socials />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
