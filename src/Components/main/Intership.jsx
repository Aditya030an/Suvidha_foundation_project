import React, { useState } from "react";
import img13 from "../../image/image 13.png";
import img14 from "../../image/image 14.png";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Intership = () => {
  const [counterOn , setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div data-aos="flip-up" className=" w-full flex items-center justify-between mt-10 ">
      <img src={img14} className="w-0 sm:w-[100px] lg:w-[200px] xl:w-[250px] 2xl:w-[400px] h-auto object-cover" />

      <div className="  md:w-[604px] sm:h-[300px] md:h-[318px] 2xl:h-[370px] flex flex-col items-center justify-center sm:gap-3 md:gap-8 lg:gap-12 2xl:gap-16">
        <div className="flex flex-col items-center">
          <h3 className="sm:text-[20px] md:text-[24px] sm:font-medium leading-[29.26px] tracking-wide text-center">
            Join oue community to help and be a part
          </h3>
          <h3 className="sm:text-xl md:text-2xl sm:font-medium tracking-wide text-center">
            of the positive change arount the world. With over:
          </h3>
        </div>
        <h1 className="text-[28px] sm:text-[48px] font-semibold sm:font-bold leading-[58.51px] text-[#FFC107]">
          {counterOn && <CountUp start={0} end={300198} duration={3} delay={0}/>}+
        </h1>
        <div className=" flex flex-col items-center sm:gap-3">
          <h2 className="sm:text-[24px] sm:font-medium leading-[29.26px] tracking-wide">
            people already joining
          </h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"  target="_blank" rel="noopener noreferrer">
          <button className="px-5 sm:px-10 py-[2px] sm:py-1 sm:w-[306px] sm:h-[52px] sm:text-[20px] sm:font-semibold leading-[24.38px] rounded-full bg-[#FFC107] tracking-wide">
            Apply for Intership
          </button>
          </a>
        </div>
      </div>

      <img src={img13} className="w-0 sm:w-[100px] lg:w-[200px] xl:w-[250px] 2xl:w-[400px] h-auto object-cover" />
    </div>
    </ScrollTrigger>
  );
};

export default Intership;
