import React, { useState } from "react";
import img from "../../image/image 6.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [index, setIndex] = useState(0);
  const contendArr = [
    {
      title: "About Us",
      text: "Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship, and the scope to volunteer. Through these programs, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equips them for the unforeseen future.",
    },
    {
      title: "Vision",
      text: "To build Next Generation Entrepreneur, by providing them a Skill-Based Education.To Provide Internship, Training And Workshops and Quality Education All Over The World..",
    },
    {
      title: "Mission",
      text: "To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind.To Run Food Donation And Awareness Campaign In Rural Region.",
    },
  ];
  // console.log("arr" , contendArr[index]);
  return (
    <div data-aos = "fade-left" data-aos-duration="4000" className="flex items-center justify-center gap-10 w-[1440px] h-[685px] bg-[#FFC107] bg-opacity-[25%] rounded-[20px]">
      <img
        src={img}
        className=" w-[625px] rounded-[10px]"
      />
      <div className=" w-1/2">
        <h3 className="text-[24px] leading-[29.26px] font-semibold text-[#FFC107]">
          Learn About Us
        </h3>
        <h1 className="text-[36px] leading-[43.88px] font-semibold text-black mt-4">
          Suvidha Foundation <br /> (Suvidha Mahila Mandal)
        </h1>
        <div className=" flex flex-col items-center gap-7 mt-14">
          <div className=" flex items-center justify-center w-[690px] text-[20px] text-[#FFC107] font-normal leading-[24.32px] tracking-wider">
            <div
              className={`w-[230px] text-center border-b-[3px] ${index === 0 ? "border-[#FFC104]" : "border-black"}  pb-2 cursor-pointer transform transition-all ease-in duration-500 delay-100 `}
              onClick={()=>{setIndex(0)}}
            >
              {contendArr[0]?.title}
            </div>
            <div
              className={`w-[230px] text-center border-b-[3px] ${index === 1 ? "border-[#FFC104]" : "border-black"}  pb-2 cursor-pointer transform transition-all ease-in duration-500 delay-100`}
              onClick={()=>{setIndex(1)}}
            >
              {contendArr[1]?.title}
            </div>
            <div
              className={`w-[230px] text-center border-b-[3px] ${index === 2 ? "border-[#FFC104]" : "border-black"}  pb-2 cursor-pointer transform transition-all ease-in duration-500 delay-100`}
              onClick={()=>{setIndex(2)}}
            >
              {contendArr[2]?.title}
            </div>
          </div>
          <div className=" w-[690px] h-[319px] text-[24px] font-normal leading-[29.26px] tracking-wide transform transition-all ease-in duration-500 delay-500">
            {contendArr[index]?.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
