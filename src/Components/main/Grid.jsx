import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
export const Grid1 = ({ butContend, img, imgLogo, boxContend }) => {
  const [height, setHeight] = useState(true);

  useEffect(() => {
    // Set up the interval to toggle height every 2 seconds
    const interval = setInterval(() => {
      setHeight((prevHeight) => !prevHeight);
    }, 2000); // 2 seconds
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div data-aos = "fade-up" className=" h-[300px] sm:h-[400px] md:h-[450px] lg:h-[470px] xl:h-[500px] w-full sm:w-32 md:w-40 lg:w-52 xl:w-60 flex items-center justify-center">
      <div
        className={` w-72 h-[300px] sm:h-[390px] md:h-full flex flex-col items-center justify-center gap-2 sm:gap-1 md:gap-2 `}
      >
        <div
          className={` relative flex items-center justify-center  w-full ${
            height ? "h-52 sm:h-96" : "h-20 sm:h-28"
          } bg-gray-900 rounded-2xl overflow-hidden transition-all ease-in-out duration-500`}
        >
          <img src={img} className="h-full w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
          <div className=" absolute bottom-0 w-full md:p-2">
            <div className=" flex items-center justify-between bg-gray-400 px-2 py-2 rounded-2xl cursor-pointer">
              <div className="md:text-md xl:text-xl font-bold ">
                {butContend === 1 ? (
                  "Donate Now"
                ) : (
                  <div className="">
                    Apply <br /> for Internship
                  </div>
                )}
              </div>
              <div className="bg-white p-1 rounded-full">
                <div className=" rounded-full">
                  <MdArrowOutward className="text-1xl md:text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` w-full flex items-center ${
            height ? "h-20 sm:h-28" : "h-52 sm:h-96"
          }  bg-black rounded-2xl text-yellow-400 px-2 transition-all ease-in-out duration-500`}
        >
          <div className="w-1/2">
            <img src={imgLogo} />
          </div>
          <div className="sm:text-xl md:text-xl lg:text-2xl font-light w-1/2">{boxContend}</div>
        </div>
      </div>
    </div>
  );
};

export const Grid2 = ({ contend, img, position }) => {
  return (
    <div data-aos="fade-up" className=" mt-2 sm:mt-0 w-full sm:w-32 sm:h-[330px] xl:h-[400px] md:w-40 lg:w-48 xl:w-60 flex justify-center overflow-hidden">
      <div className=" relative sm:w-full w-72 h-[200px] sm:h-full  rounded-2xl  overflow-hidden ">
        <img src={img} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 ">
          <div
            className={` sm:h-20 flex items-center justify-${position} px-4 sm:px-1 md:px-4`}
          >
            <div
              className={`sm:w-32 font-medium text-2xl text-white text-${position}`}
            >
              {contend}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Grid3 = () => {
  return (
    <div data-aos="fade-up" className=" w-full sm:w-32 lg:w-40 xl:w-60 sm:h-[250px] md:h-[270px] mt-2 sm:mt-0 flex justify-center">
      <div className=" px-3 sm:px-0 sm:py-2 xl:px-3 bg-gray-300 w-52 sm:w-full h-44 sm:h-full rounded-xl flex flex-col items-center justify-center xl:justify-between  gap-3 sm:gap-1  md:gap-4">
        <h2 className=" sm:mt-6  text-xl lg:text-2xl font-semibold text-center">
          Your Time and Support Can Transferm Lives
        </h2>
        <a href="https://www.linkedin.com/company/suvidha-foundation/" target="_blank"  rel="noopener noreferrer">
        <div className=" flex items-center justify-between bg-gray-400 w-full p-4 sm:p-1 xl:p-4 rounded-2xl sm:rounded-xl xl:rounded-2xl cursor-pointer">
          <div className="md:text-sm lg:text-lg  sm:font-semibold md:font-bold">Join Community</div>
          <div className="bg-white p-1 rounded-full">
            <div className=" rounded-full">
              <MdArrowOutward size={15} />
            </div>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
};
