import React, { useState } from "react";
import { IoPlay } from "react-icons/io5";

import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { setShowVideo } from "../utils/Store/stateHandleSlices";
import { Link } from "react-router-dom";

const Hero = () => {
  const dispatch = useDispatch();
  // const [showvideo, setShowVideo] = useState(false); // Start with false to hide the video initially
  const handleShowVideo = (val)=>{
    dispatch(setShowVideo(val));
  }
  return (
    <div
      data-aos="fade-up"
      className=" flex flex-col items-center gap-3 sm:gap-7 w-full "
    >
      <section className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-[600] flex flex-col md:gap-2 items-center tracking-wide text-center">
        <h1>Creating Sustainable Change</h1>
        <h1>for a Brighter Future</h1>
      </section>
      <section className="text-sm sm:text-xl md:text-2xl font-normal flex flex-col items-center text-center">
        <h3>Empowering underprivileged youth with education</h3>
        <h3>and mentorship for a brighter tomorrow</h3>
      </section>
      <section className="flex sm:gap-4 md:gap-8 mt-4">
        <Link to={"/helpNow"}>
        <button className="px-4 py-1 sm:px-8  sm:py-3  sm:text-xl sm:font-medium md:font-semibold bg-yellow-400 rounded-full border-4 border-white hover:border-yellow-400 hover:bg-transparent transform transition-all ease-in-out duration-300">
          Donate Now
        </button>
        </Link>
        <button
          className="px-2 sm:px-5 sm:text-lg sm:font-medium md:font-semibold flex items-center justify-between sm:gap-4 cursor-pointer border-4 border-yellow-400 rounded-full hover:bg-yellow-400 hover:border-white transform transition-all ease-in-out duration-300"
          onClick={()=>{handleShowVideo(true)}} // Show video on click
        >
          <IoPlay />
          Watch Video
        </button>
      </section>

      
    </div>
  );
};

export default Hero;
