import React, { useEffect, useState } from "react";
import { FaArrowUp, FaLeftLong } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
const OurDoner = () => {
  const [showArrow , setShowArrow] = useState(false);
  const goToTop= ()=>{
    window.scrollTo({top:0 , left:0 ,behavior:"smooth" });
  }
 
  useEffect(()=>{
    const handleHeight = () => {
      if(window.scrollY > 225){
        setShowArrow(true);
      }
      else{
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleHeight);

    return () => {
      window.removeEventListener("scroll", handleHeight);
    };
  })
  const totalArr = [
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 4300,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 7900,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 12000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 8000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 4000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 60000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
    {
      name: "sfkjsnfdjkn",
      amount: 6000,
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center gap-10 mt-7 mb-20">
      <div  data-aos="fade-up" className=" text-center w-[700px] leading-[60px]">
        <h1 className="text-7xl font-semibold text-[#333544]">
          Thank You For Your Contribution
        </h1>
        <h4 className="text-2xl font-medium">
          "Every contribution brings us closer to our goals"
        </h4>
      </div>
      <div  data-aos="fade-up" className=" w-8/12 flex flex-col items-center gap-3 overflow-hidden">
        <div className="w-full flex border-2 p-4 text-xl font-medium tracking-wide rounded-lg">
          <p className="w-1/2">Name</p>
          <p className="w-1/2 flex items-center justify-between"> Total Amount </p>
        </div>
        <div className="w-full rounded-xl overflow-hidden">
          {totalArr.map((item, index) => {
            return (
              <div
                className="flex border-2 p-4 text-xl font-medium tracking-wide "
                key={index}
              >
                <h2 className="w-1/2"> {item.name}</h2>
                <h2 className="w-1/2">{item.amount}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div  className="w-8/12 ">
        <h1 className="text-6xl font-semibold text-[#333544] tracking-wide">
          And Many More.....
        </h1>
      </div>
      {
        showArrow && 
      <div className="z-50 fixed top-[550px] right-4 bg-[#FFC104] p-4 cursor-pointer" onClick={goToTop}>
        <FaArrowUp className="text-2xl font-bold text-black"/>
      </div>
      }
    </div>
  );
};

export default OurDoner;
