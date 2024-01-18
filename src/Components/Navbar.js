import React,{useState} from "react";
import rocket from "../assets/rocket.png";
import sunny from "../assets/sunny.png";
// import sunny from './sunny.png'
export default function Navbar(props) {
  
  const [hamburg, setHamburg] = useState(false);

  const toggleHamburger = () => {
    setHamburg(!hamburg);
  };
  
  

  
  return (
    <>
     <div className="bg-gray-50" id="yashnavbar">
     <nav class="{`border-gray-200 bg-${props.mode} navbar-${props.mode}`} " >
  <div class=" flex flex-wrap items-center justify-between mx-10 px-4 py-3 md:mx-5 lg:mx-20 min-[270px]:m-1 max-[640px]:m-1">
    <div>
    <a href="#" class="flex items-center space-x-3">
        <span class="self-center text-2xl font-bold text-4xl text-blue-700 ">TextUtils</span>
    </a>
    </div>
    <div className="lists md:block sm:hidden min-[270px]:hidden max-[640px]:hidden items-center" >
      <ul className="flex gap-6">
        <li><a href="\#" className="font-bold text-lg hover:text-blue-700">Home</a></li>
        <li><a href="\#" className="font-bold text-lg hover:text-blue-700">About</a></li>
        <li><a href="\#" className="font-bold text-lg hover:text-blue-700">Services</a></li>
        <li><a href="\#" className="font-bold text-lg hover:text-blue-700">Contact</a></li>
      </ul>
    </div>
    <img src={sunny} className="w-10 md:hidden min-[270px]:hidden max-[640px]:hidden" onClick={props.toggleMode} alt="" />
    <div className="flex flex-wrap gap-2">
    <div onClick={props.toggleMode} >
      <img src={sunny} className="w-8 mt-1 min-[270px]:block max-[640px]:block" onClick={props.toggleMode} alt="" /></div>
      <button data-collapse-toggle="navbar-hamburger"  type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 min-[270px]:block max-[640px]:block md:hidden" aria-controls="navbar-hamburger" aria-expanded="false" onClick={toggleHamburger}>
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    </div>
  </div>
</nav>
</div>
{hamburg && (
        <div className="xl:hidden w-full lg:hidden sm:block md:hidden min-[240px]:block max-[640px]:block" data-dropdown-toggle="dropdownToggle" id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-0 rounded-lg bg-gray-50">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded  min-[270px]:text-center max-[640px]:text-center" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  min-[270px]:text-center max-[640px]:text-center">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100    min-[270px]:text-center max-[640px]:text-center">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100  min-[270px]:text-center max-[640px]:text-center">Contact</a>
            </li>
          </ul>
        </div>
      )}

      <div className="bg-gray-00 " >
      
        <div className="section mx-48 py-20 p-5 justify-between flex gap-4 flex-wrap lg:mx-10 xl:mx-48 md:mx-0 sm:mx-0 sm:text-center min-[270px]:mx-0 max-[640px]:mx-0 min-[270px]:text-center max-[640px]:text-center">
          <div className="left_side lg:w-6/12 p-3 md:w-full md:text-center lg:text-left sm:text-center sm:w-full min-[270px]:w-full min-[270px]:text-xl sm:text-2xl border-dashed">
            <h1
              className="text-5xl font-bold pb-10 lg:text-7xl md:text-6xl md:text-4xl sm:text-5xl "
            >
              <span className="text-pink-600">Are you ready for </span>
              <br /> <span className="text-green-700">Best Online Tool?</span>
            </h1>
            <p className="text-xl font-normal pb-7 text-gray-600">
              One Stop Solution to All Text Formatting that you need , It have
              what you need Uppercase , Lowercase , Remove Puncutation and Many
              more what are wating for try it now ?
            </p>
            <button
              className="btn btn-primary">
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
      <div className="heading bg-gray-00 text-center font-bold p-8 pt-6" >
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
