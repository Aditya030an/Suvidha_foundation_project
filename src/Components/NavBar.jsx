import React, { useState } from "react";
import logo from "../image/logo.png";
import { Link, useParams } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const NavBar = () => {
  const [margin , setMargin] = useState(true);
  const handleMagin = (val)=>{
    console.log(val);
    if(val == "/"){
      
      setMargin(true);
    }
    else{
      setMargin(false);
    }
  } 
  return (
    <nav className={` z-50 flex items-center justify-between px-4 h-14 lg:h-16 bg-[#20212B] ${margin ? "xl:ml-20":"ml-0" }  rounded-lg`}>
      <div className="w-1/2 sm:w-1/4">
        <Link to={"/"} onClick={()=>{handleMagin("/")}}>
          <img src={logo} className=" " />
        </Link>
      </div>
      <div className=" md:w-8/12 lg:w-8/12 h-full  hidden sm:flex ">
        <ul className=" lg:text-xl font-medium text-white flex items-center justify-around sm:gap-3 flex-shrink w-full h-full">
          <Link to={"/gallary"} onClick={()=>{handleMagin("*")}}>
            <li className=" hover:bg-white hover:text-black px-3 py-1  xl:px-5 lg:px-4 lg:py-2 xl:py-2 rounded-full cursor-pointer transform transition-all ease-linear duration-400 delay-100">
              Gallary
            </li>
          </Link>
          <Link to={"/ourDoner"} onClick={()=>{handleMagin("*")}}>
            <li className=" hover:bg-white hover:text-black px-3 py-1  xl:px-5 lg:px-4 lg:py-2 xl:py-2 rounded-full cursor-pointer transform transition-all ease-linear duration-400 delay-100">
              Our Doners
            </li>
          </Link>
          <Link to={"/testimonials"} onClick={()=>{handleMagin("*")}}>
            <li className=" hover:bg-white hover:text-black px-3 py-1  xl:px-5 lg:px-4 lg:py-2 xl:py-2 rounded-full cursor-pointer transform transition-all ease-linear duration-400 delay-100">
              Testimonials
            </li>
          </Link>
          <Link to={"/helpNow"}>
            <li className=" hover:bg-white hover:text-black px-3 py-1  xl:px-5 lg:px-4 lg:py-2 xl:py-2 rounded-full cursor-pointer transform transition-all ease-linear duration-400 delay-100">
              Help Now
            </li>
          </Link>
        </ul>
      </div>
      <div className="z-50  w-1/4 flex items-center justify-end visible rounded-xl sm:hidden">
        <div className=" relative cursor-pointer p-2 group">
          <RxHamburgerMenu className="text-white text-xl font-semibold" />
          <div className="absolute top-9 -right-2 group-hover:flex hidden border transform transition-all ease-in duration-700 delay-150">
            <ul className=" w-36 flex flex-col items-start bg-gray-900 text-white text-xl font-medium rounded-lg">
              <Link
                to={"/gallary"}
                className=" w-full hover:bg-white hover:text-gray-900 rounded-xl"
              >
                <li className="px-3 py-2 ">Gallary</li>
              </Link>
              <Link
                to={"/ourDoner"}
                className=" w-full hover:bg-white hover:text-gray-900 rounded-xl"
              >
                <li className="px-3 py-2 ">Our Doner</li>
              </Link>
              <Link
                to={"/testimonials"}
                className=" w-full hover:bg-white hover:text-gray-900 rounded-xl"
              >
                <li className="px-3 py-2 ">Testimonials</li>
              </Link>
              <Link
                to={"/helpNow"}
                className=" w-full hover:bg-white hover:text-gray-900 rounded-xl"
              >
                <li className="px-3 py-2 ">Help Now</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
