import React, { useEffect, useRef, useState } from "react";
const SideBar = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleHeight = () => {
      setHeight(Math.floor(window.scrollY));
    };
    window.addEventListener("scroll", handleHeight);

    return () => {
      window.removeEventListener("scroll", handleHeight);
    };
  });
  console.log("height", height);

  const handleShowPage = (num) => {
    // console.log("num", num);
    window.scrollTo({ top: num, left: 0, behavior: "smooth" });
  };

  // window.scrollTo({top: 2736 , left:0 , behavior:"smooth"});

  return (
    // {/* second design */}

    <div className=" h-full w-full flex flex-col items-center justify-center">
      {/* HOME */}
      <div className="flex flex-col items-center justify-center ">
        <div
          className="relative h-8 w-8  border-2 border-black rounded-full flex items-center justify-center group cursor-pointer"
          onClick={() => {
            handleShowPage(0);
          }}
        >
          <div className="h-4 w-4 bg-black rounded-full"></div>
          <div
            className={`z-50 border-2 absolute top-0 left-12 px-2 py-2 items-center justify-center text-xl font-medium tracking-wide bg-gray-950 text-white rounded-xl w-48 hidden group-hover:flex ${
              height > 1 && "flex"
            }`}
          >
            Home Page
          </div>
        </div>
        <div className=" h-12 overflow-hidden">
          {height > 1 && (
            <div
              className={`w-1 bg-red-400`}
              style={{ height: `${height > 0 && height / 6}px` }}
            ></div>
          )}
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col items-center justify-center ">
        <div
          className="relative h-8 w-8  border-2 border-red-400 rounded-full flex items-center justify-center group cursor-pointer"
          onClick={() => {
            handleShowPage(976);
          }}
        >
          <div className="h-4 w-4 bg-red-400 rounded-full"></div>
          <div className="border-2 absolute top-0 left-12 px-2 py-2 items-center justify-center text-xl font-medium tracking-wide bg-gray-950 text-white rounded-xl w-48 hidden group-hover:flex">
            About
          </div>
        </div>
        <div className=" h-12 overflow-hidden">
          {height > 315 && (
            <div
              className={`w-1 bg-orange-400`}
              style={{ height: `${height > 315 && (height - 315) / 15}px` }}
            ></div>
          )}
        </div>
      </div>
      {/* WHAT DO WE  */}
      <div className="flex flex-col items-center justify-center ">
        <div
          className="relative h-8 w-8  border-2 border-orange-400 rounded-full flex items-center justify-center group cursor-pointer "
          onClick={() => {
            handleShowPage(1700);
          }}
        >
          <div className="h-4 w-4 bg-orange-400 rounded-full"></div>
          <div className="border-2 absolute top-0 left-12 px-2 py-2 items-center justify-center text-xl font-medium tracking-wide bg-gray-950 text-white rounded-xl w-48 hidden group-hover:flex">
            What We Do?
          </div>
        </div>
        <div className=" h-12 overflow-hidden">
          {height > 1074 && (
            <div
              className={`w-1 bg-yellow-400`}
              style={{ height: `${height > 1074 && (height - 1074) / 16}px` }}
            ></div>
          )}
        </div>
      </div>
      {/* INTERSHIP */}
      <div className="flex flex-col items-center justify-center ">
        <div
          className="relative h-8 w-8 border-2 border-yellow-400 rounded-full flex items-center justify-center group cursor-pointer "
          onClick={() => {
            handleShowPage(2388);
          }}
        >
          <div className="h-4 w-4 bg-yellow-400 rounded-full"></div>
          <div className="border-2 absolute top-0 left-12 px-2 py-2 items-center justify-center text-xl font-medium tracking-wide bg-gray-950 text-white rounded-xl w-48 hidden group-hover:flex">
            Internship
          </div>
        </div>
        <div className=" h-12 overflow-hidden">
          {height > 1878 && (
            <div
              className={`w-1 bg-green-400`}
              style={{ height: `${height > 2030 && (height - 2030) / 18}px` }}
            ></div>
          )}
        </div>
      </div>
      {/* EVENT */}
      <div className="flex flex-col items-center justify-center ">
        <div
          className="relative h-8 w-8  border-2 border-green-400 rounded-full flex items-center justify-center group cursor-pointer "
          onClick={() => {
            handleShowPage(2930);
          }}
        >
          <div className="h-4 w-4 bg-green-400 rounded-full"></div>
          <div className="border-2 absolute top-0 left-12 px-2 py-2 items-center justify-center text-xl font-medium tracking-wide bg-gray-950 text-white rounded-xl w-48 hidden group-hover:flex">
            Event
          </div>
        </div>
        <div className=" h-12 overflow-hidden">
          {height > 2850 && (
            <div
              className={`w-1 bg-blue-400`}
              style={{ height: `${height > 2850 && (height - 2850) / 10}px` }}
            ></div>
          )}
        </div>
      </div>
      {/* REACH */}
      <div className="flex flex-col items-center justify-center ">
        <div
          className="relative h-8 w-8  border-2 border-blue-400 rounded-full flex items-center justify-center group cursor-pointer "
          onClick={() => {
            handleShowPage(3366);
          }}
        >
          <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
          <div className="border-2 absolute top-0 left-12 px-2 py-2 items-center justify-center text-xl font-medium tracking-wide bg-gray-950 text-white rounded-xl w-48 hidden group-hover:flex">
            Reach
          </div>
        </div>
        <div className=" h-12 overflow-hidden">
          {height > 3365 && (
            <div
              className={`w-1 bg-indigo-400`}
              style={{ height: `${height > 3365 && (height - 3365) / 10}px` }}
            ></div>
          )}
        </div>
      </div>
      {/* TEAM */}
      <div className="flex flex-col items-center justify-center ">
        <div
          className="z-50 relative h-8 w-8  border-2 border-indigo-400 rounded-full flex items-center justify-center group cursor-pointer "
          onClick={() => {
            handleShowPage(4004);
          }}
        >
          <div className="h-4 w-4 bg-indigo-400 rounded-full"></div>
          <div className="z-50 border-2 absolute top-0 left-12 px-2 py-2 items-center justify-center text-xl font-medium tracking-wide bg-gray-950 text-white rounded-xl w-48 hidden group-hover:flex">
            Team
          </div>
        </div>
        <div className="h-12 overflow-hidden">
          {height > 3893 && (
            <div
              className={`w-1 bg-violet-400`}
              style={{ height: `${height > 4087 && (height - 4087) / 5}px` }}
            ></div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div
          className="relative h-8 w-8  border-2 border-violet-400 rounded-full flex items-center justify-center group cursor-pointer "
          onClick={() => {
            handleShowPage(4350);
          }}
        >
          <div className="h-4 w-4 bg-violet-400 rounded-full"></div>
          <div className="z-50 border-2 absolute top-0 left-12 px-2 py-2 items-center justify-center text-xl font-medium tracking-wide bg-gray-950 text-white rounded-xl w-48 hidden group-hover:flex">
            Footer
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
