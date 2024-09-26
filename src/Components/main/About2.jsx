import React, { useState } from "react";
import img from "../../image/image 30.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About2 = () => {
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
  1;
  return (
    <div data-aos = "fade-up" delay="700" className=" relative flex items-center justify-center gap-10 sm:w-[1440px] md:h-[685px] bg-[#FFC120] rounded-[20px]">
      <div className=" z-10 absolute top-0 right-0 h-full flex items-end justify-center">
        <img src={img} alt="image" className=" w-0 lg:w-[500px] xl:w-full" />
      </div>

      <div className=" relative z-20 w-full h-full">
        <div className="mt-5 text-center">
          <h3 className="md:text-[24px] md:leading-[29.26px] font-semibold text-white">
            Learn About Us
          </h3>
          <h1 className="md:text-[36px] md:leading-[58.51px] font-semibold text-black sm:mt-4 tracking-wider">
            Suvidha Mahila Mandal
          </h1>
        </div>
        <div className=" md:w-[800px] lg:w-[500px] 2xl:w-[800px] flex flex-col items-center gap-2 mt-3 text-center">
          <div className="md:text-[64px] lg:text-[30px] 2xl:text-[64px]  font-[800] md:leading-[78.02px] lg:leading-[30px] 2xl:leading-[78.02px] md:p-6 lg:p-3 2xl:p-6 text-[#20212B] ">
            “Empowered women <br /> empower the world.”
          </div>
          <div className="px-3 md:p-6 lg:p-2 xl:p-6 w-full md:text-[24px] font-[500] leading-[29.26px] tracking-wider">
            {contendArr[index].text}
          </div>
        </div>
        <div
          className=" hidden absolute bottom-0 z-30 w-full lg:h-60 xl:h-96
          lg:flex items-end justify-end "
        >
          <div className="lg:w-[130px] xl:w-[160px] lg:h-[50px] xl:h-[90px] lg:text-2xl xl:text-3xl text-white font-semibold">
            <h4 className="cursor-pointer border-l-2 border-t-2 lg:h-[50px] xl:h-[90px] p-2 " onClick={() => setIndex(0)}>
              <p className="hover:scale-105 transform transition-all ease-in duration-300 delay-75"> About Us</p>
              
            </h4>
          </div>
          <div className="lg:w-[120px] xl:w-[170px] lg:h-[110px] xl:h-[176px] lg:text-2xl xl:text-3xl text-white font-semibold   ">
            <h4 className={`cursor-pointer  ${index > 0 ? "border-l-2 border-t-2" : "border-l-0 border-t-0"} lg:h-[62px] xl:h-[88px] p-2  transform transition-all ease-in delay-75`} onClick={() => setIndex(1)}>
              <p className="hover:scale-105 transform transition-all ease-in duration-300 delay-75"> Mission</p>
             
            </h4>
          </div>
          <div className="lg:w-[110px] xl:w-[180px] lg:h-[170px] xl:h-[260px] lg:text-2xl xl:text-3xl text-white font-semibold">
            <h4 className={`cursor-pointer  ${index > 1 ? "border-l-2 border-t-2" : "border-l-0 border-t-0"} lg:h-[62px] xl:h-[86px] p-2  transform transition-all ease-in delay-75`} onClick={() => setIndex(2)}>
              {" "}
              <p className="hover:scale-105 transform transition-all ease-in duration-300 delay-75">Vision</p>
              
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
