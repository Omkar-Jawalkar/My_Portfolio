import React from "react";
import logo1 from "../Assets/logo1.png";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { HashLink } from "react-router-hash-link";
import PopupButton from "./SomeButton/PopupButton";
import Popup from "reactjs-popup";
import { letsConnect } from "../data";
const contentStyle = { borderRadius: "15px", padding: "20px", width: "500px" };

// console.log("This is letsConnect", letsConnect);
const HeaderSection = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        style={{ backgroundColor: "#101820FF" }}
        className={`hidden md:overflow-hidden py-10 px-[50px] lg:px-[155px] z-20 md:flex flex-row justify-between items-center left-0 top-0 right-0 fixed h-16 text-black`}
      >
        <div className=" flex ">
          <a alt="" href="/" className=" ml-2 mr-10">
            <img alt="" className="w-[70px] h-[70px] " src={logo1} />
          </a>
          <ul className=" w-4/12 items-center flex items-center justify-between">
            <li className="text-white mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              {" "}
              <HashLink smooth to="/#about">
                {" "}
                About
              </HashLink>
            </li>
            <li className="text-white mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              <HashLink smooth to="/#experience">
                {" "}
                Experience
              </HashLink>
            </li>
            <li className="text-white mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              <HashLink smooth to="/#projects">
                {" "}
                Projects
              </HashLink>
            </li>
            <li className="text-white mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              <HashLink smooth to="/#skills">
                {" "}
                Skills
              </HashLink>
            </li>
            <li className="text-white mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              <HashLink smooth to="/#contact">
                {" "}
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        <div className="w-2/12">
          {" "}
          <Popup
            trigger={
              <button className=" px-12 my-3 py-3 text-sm font-medium text-white bg-[#006B38FF] border border-[#006B38FF] rounded active:text-[#006B38FF] hover:bg-transparent hover:text-[#006B38FF] transation duration-300 active:opacity-10 ">
                Lets Connect
              </button>
            }
            modal
            {...{ contentStyle }}
          >
            <div className=" flex justify-center items-center flex-col">
              <div className="text-xl border-b-2 pt-1 mb-2">
                Lets Connect 🤝{" "}
              </div>
              <div className="flex justify-center items-center flex-col">
                {letsConnect.map((connect, index) => (
                  <div key={index}>
                    {console.log("This is Connect obj", connect)}
                    <PopupButton
                      emoji={connect.emoji}
                      name={connect.name}
                      link={connect.link}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Popup>
        </div>
      </div>

      <div className=" md:hidden flex mx-6 justify-between items-center flex-row">
        <div className=" absolute top-0 sm:left-9 ">
          <img className="w-[70px] h-[70px] " alt="" src={logo1} />
        </div>

        <div>
          <div className=" absolute right-4 top-5 sm:right-10 ">
            {!showMenu ? (
              <AiOutlineMenu
                onClick={handleMenu}
                className="text-white text-3xl"
              />
            ) : (
              <ImCross onClick={handleMenu} className="text-white text-3xl" />
            )}
          </div>
        </div>
      </div>
      {showMenu ? (
        <div className="md:hidden">
          <div className="shrink-0 w-full items-center flex-col flex items-center justify-between">
            <div className="text-white  border-b-2 border-red-100  my-1 mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              {" "}
              <HashLink smooth to="/#about">
                {" "}
                About
              </HashLink>
            </div>
            <div className="text-white my-1  border-b-2 border-red-100 mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              <HashLink smooth to="/#experience">
                {" "}
                Experience
              </HashLink>
            </div>
            <div className="text-white border-b-2 border-red-100 my-1 mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              <HashLink smooth to="/#projects">
                {" "}
                Projects
              </HashLink>
            </div>
            <div className="text-white  border-b-2 border-red-100  my-1 mx-2 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              <HashLink smooth to="/#skills">
                {" "}
                Skills
              </HashLink>
            </div>
            <div className="text-white  border-b-2 border-red-100 my-1 mx-2 mb-3 transition-opacity hover:text-[#006B38FF] transation duration-duration-1000 ease-in ">
              <HashLink smooth to="/#contact">
                {" "}
                Contact
              </HashLink>
            </div>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
};

export default HeaderSection;
