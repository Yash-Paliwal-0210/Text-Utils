import React from "react";
import rocket from "../assets/rocket.png";
// import sunny from './sunny.png'
export default function Navbar(props) {
  return (
    <>
      <div className=" bg-teal-700  items-center text-white py-1.5">
        <div className="nav flex justify-between mx-20 p-3 min-[270px]:mx-1 sm:mx-20">
          <div className="left text-3xl font-bold text-yellow-300 ">
            <h1>{props.title}</h1>
          </div>
          <div className="mid text-lg font-medium min-[270px]:hidden lg:block">
            <ul className="flex">
              <li className="mx-3 ">
                <a href="/#" className="hover:text-xl hover:text-slate-400">
                  Home
                </a>
              </li>
              <li className="mx-3 ">
                <a href="/#" className="hover:text-xl hover:text-slate-400">
                  About
                </a>
              </li>
              <li className="mx-3 ">
                <a href="/#" className="hover:text-xl hover:text-slate-400">
                  Services
                </a>
              </li>
              <li className="mx-3 ">
                <a href="/#" className="hover:text-xl hover:text-slate-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="right text-xl "></div>
        </div>
      </div>
      <div className="bg-yellow-200 ">
        <div className="section mx-48 py-20 p-5 justify-between flex gap-4 flex-wrap lg:mx-10 xl:mx-48 md:mx-0 sm:mx-0 sm:text-center min-[270px]:mx-0 max-[640px]:mx-0 min-[270px]:text-center max-[640px]:text-center">
          <div className="left_side lg:w-6/12 p-3 md:w-full md:text-center lg:text-left sm:text-center sm:w-full min-[270px]:w-full min-[270px]:text-xl sm:text-2xl border-dashed">
            <h1
              className="text-5xl font-bold pb-10 lg:text-7xl md:text-6xl md:text-4xl sm:text-5xl "
              
            >
              <span className="text-pink-600">Are you ready for </span>
              <br /> <span className="text-green-700">Best Online Tool?</span>
            </h1>
            <p className="text-xl font-normal pb-7">
              One Stop Solution to All Text Formatting that you need , It have
              what you need Uppercase , Lowercase , Remove Puncutation and Many
              more what are wating for try it now ?
            </p>
            <button
              className="btn btn-primary"
              
            >
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
      <div className="heading bg-yellow-200 text-center font-bold p-8 pt-6">
        <h1
          className="text-teal-950 text-6xl"
          id="start"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          {" "}
          Welcome To TextUtils
        </h1>
      </div>
    </>
  );
}
