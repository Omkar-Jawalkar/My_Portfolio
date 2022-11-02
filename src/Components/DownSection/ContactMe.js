import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [displayMessage, setDisplayMessage] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    });
    // console.log(user);
    sendData();
  };

  const sendData = async (id) => {
    await axios
      .post("https://omkar-jawalkar-portfolio.onrender.com/", user)
      .then((res) => {
        if (res.data === "success") {
          setDisplayMessage("Message sent successfully");
          toast(displayMessage, {
            type: "success",
          });
          console.log("Message :", res.data);
        } else {
          setDisplayMessage("Message not sent");
          toast(displayMessage, {
            type: "error",
          });
          console.log("Message :", res.data);
        }
      })
      .catch((err) => {
        console.log("Useerrrr : ", user);
        console.log("Message error", err.message);

        setDisplayMessage("Message Failed to send");
        toast(displayMessage, { type: "error" });
      });
  };

  return (
    <div className="mt-20">
      <h1 className="text-white text-center pb-6 font-light text-[45px]">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col items-center">
          <div className=" sm:mx-10 text-slate-800 md:mx-70 md:w-[450px] lg:w-[700px]  flex flex-col items-center">
            <div className="flex-1  w-full sm:flex-row flex justify-center items-center flex-col">
              <input
                id="name"
                type="text"
                className="my-2 w-full md:mr-2 outline-none  flex-1  py-2 px-4"
                placeholder="Name"
              ></input>
              <input
                id="email"
                type="email"
                className="my-2 w-full md:ml-2  flex-1  py-2 px-4"
                placeholder="Email"
              ></input>
            </div>

            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="my-2 w-full flex-1  mx-6 py-2 px-4"
            ></input>

            <textarea
              id="message"
              type="text"
              rows="5"
              cols={21}
              placeholder="Say Something"
              className="my-2 w-full mx-5 py-2 pl-2 pr-5"
            ></textarea>
          </div>

          <button className="border-2  text-md mt-5 rounded-md py-2 text-slate-100 px-4">
            {" "}
            Send Message{" "}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
