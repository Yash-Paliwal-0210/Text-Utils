import React, { useState } from "react";
import rocket from "../assets/rocket.png";

export default function Navbar(props) {
  const [hamburg, setHamburg] = useState(false);
  

  const toggleHamburger = () => {
    setHamburg(!hamburg);
  };

  return (  
    <>
      <div
        className={`bg-gray-50 text-${props.mode1} bg-${props.mode} `}
        id="yashnavbar"
      >
        <div className=" flex flex-wrap items-center justify-between mx-10 px-4 py-3 md:mx-5 lg:mx-20 min-[270px]:m-1 max-[640px]:m-1">
          <div>
            <a href="#" className="flex items-center space-x-3">
              <span
                className={`self-center text-2xl font-bold text-4xl text-blue-700 text-${props.mode1}`}
              >
                TextUtils
              </span>
            </a>
          </div>
          <div className="lists md:block sm:hidden min-[270px]:hidden max-[640px]:hidden items-center">
            <ul className="flex gap-6">
              <li>
                <a href="\#" className="font-bold text-lg hover:text-blue-700">
                  Home
                </a>
              </li>
              <li>
                <a href="\#" className="font-bold text-lg hover:text-blue-700">
                  About
                </a>
              </li>
              <li>
                <a href="\#" className="font-bold text-lg hover:text-blue-700">
                  Services
                </a>
              </li>
              <li>
                <a href="\#" className="font-bold text-lg hover:text-blue-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <img
            src={require(`/src/assets/${props.imageSrc}`)}
            className="w-10 md:hidden min-[270px]:hidden max-[640px]:hidden"
            onClick={props.toggleMode}
            alt="not available"
          />

          <div className="flex flex-wrap gap-2">
            <div onClick={props.toggleMode} className="cursor-pointer">
              <img
                src={require(`/src/assets/${props.imageSrc}`)}
                className="w-8 mt-1 min-[270px]:block max-[640px]:block"
                onClick={props.toggleMode}
                alt="not available"
              />
            </div>


            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className={`inline-flex bg-${props.mode} items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 min-[270px]:block max-[640px]:block md:hidden`}
              aria-controls="navbar-hamburger"
              aria-expanded="false"
              onClick={toggleHamburger}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {hamburg && (
        <div
          className={`ham xl:hidden w-full lg:hidden sm:block md:hidden min-[240px]:block max-[640px]:block" data-dropdown-toggle="dropdownToggle" id="navbar-hamburger`}
        >
          <ul
            className={`flex bg-${props.mode} flex-col font-medium mt-0  bg-gray-50`}
          >
            <li>
              <a
                href="#"
                className={`block text-${props.mode1} py-2 px-3 text-white bg-blue-700 rounded mb-0.5 mx-2 min-[270px]:text-center max-[640px]:text-center`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-${props.mode1} py-2 px-3 text-gray-900  rounded hover:bg-blue-700 mb-0.5 mx-2 min-[270px]:text-center max-[640px]:text-center`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-${props.mode1} py-2 px-3 text-gray-900 rounded hover:bg-blue-700 mb-0.5 mx-2 hover:text-white min-[270px]:text-center max-[640px]:text-center`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-${props.mode1} py-2 px-3 text-gray-900 rounded hover:bg-blue-700 mb-0.5 mx-2 hover:text-white min-[270px]:text-center max-[640px]:text-center`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className={`bg-gray-00  bg-${props.mode}`}>
        <div className="section mx-48 py-20 p-5 justify-between flex gap-4 flex-wrap lg:mx-10 xl:mx-48 md:mx-0 sm:mx-0 sm:text-center min-[270px]:mx-0 max-[640px]:mx-0 min-[270px]:text-center max-[640px]:text-center">
          <div className="left_side lg:w-6/12 p-3 md:w-full md:text-center lg:text-left sm:text-center sm:w-full min-[270px]:w-full min-[270px]:text-xl sm:text-2xl border-dashed">
            <h1 className="text-5xl font-bold pb-10 lg:text-7xl md:text-6xl md:text-4xl sm:text-5xl ">
              <span
                className="text-pink-600 "
                style={{ color: props.mode === "light" ? "#e70074" : "white" }}
              >
                Are you ready for{" "}
              </span>
              <br />{" "}
              <span
                className="text-green-700"
                style={{ color: props.mode === "light" ? "green" : "blue" }}
              >
                Best Online Tool?
              </span>
            </h1>
            <p
              className="text-xl font-normal pb-7 text-gray-600"
              style={{ color: props.mode === "light" ? "#4a4343" : "#dccece" }}
            >
              One Stop Solution to All Text Formatting that you need , It have
              what you need Uppercase , Lowercase , Remove Puncutation and Many
              more what are wating for try it now ?
            </p>
            <button className="btn btn-primary">
              <a href="#start">Get Started</a>
            </button>
          </div>
          <div className="right_side lg:w-5/12 md:w-full p-3 justify-center text-center lg:mt-20 xl:mt-20 md:mt-20 overflow-hidden lg:w-50% sm:mt-0 ">
            <img
              src={rocket}
              alt="Not Available"
              className="h-68 w-auto md:mx-20"
            />
          </div>
        </div>
      </div>
      <div
        className={`heading bg-gray-00 text-center font-bold p-8 pt-6 bg-${props.mode}`}
      >
        <h1
          className={`text-teal-950 text-6xl text-${props.mode1}`}
          id="start"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          Welcome To TextUtils
        </h1>
      </div>
    </>
  );
}
