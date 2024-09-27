import React from "react";
import img25 from "../../image/image 25.png";
import img26 from "../../image/image 26.png";
import img27 from "../../image/image 27.png";
import img28 from "../../image/image 28.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Team = () => {
  const teamArr = [
    {
      img: img25,
      name: "Shobha Motghare",
      position: "Secratary",
    },
    {
      img: img26,
      name: "Payal Badhe",
      position: "President",
    },
    {
      img: img27,
      name: "Bharti Shendre",
      position: "Treasurer",
    },
    {
      img: img28,
      name: "Nilima Kalambe",
      position: "Advisor",
    },
  ];
  return (
    <div className="w-full 2xl:h-[609px] flex flex-col items-center justify-center md:gap-7  overflow-hidden my-8 ">
      <div className="sm:h-[159px] sm:w-[704px] flex flex-col items-center justify-evenly ">
        <h5 className="sm:h-[28px] sm:w-[188px] text-[20px] sm:text-[24px] font-medium sm:font-semibold leading-[29.26px] text-[#FFC107] ">
          Meet Our Team
        </h5>
        <p className=" lg:h-[117px] sm:w-[704px] text-[21px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-medium sm:font-semibold leading-[58.51px] text-center">
          The Hands Powering our Mission
        </p>
      </div>
      <div className=" flex flex-wrap items-center justify-center lg:justify-evenly gap-12 lg:gap-2 xl:gap-1 lg:px-5 w-full sm:h-full 2xl:h-[410px] ">
        {teamArr.map((item, index) => {
          return (
            // data-aos="flip-right"
            <div
              
              className="relative w-[200px] sm:w-[230px] md:w-[280px] lg:w-[300px] xl:w-[280px] rounded-tl-[55px] rounded-br-[55px] overflow-hidden "
            >
              <img
                src={item.img}
                alt=""
                className="w-[200px] sm:w-[250px] md:w-[350px] xl:w-[300px] h-auto object-cover "
              />
              <div className="z-10 absolute bottom-2 left-2 text-left sm:h-[58px] sm:w-[222px] ">
                <h3 className="text-[20px] sm:text-[24px] font-semibold leading-[29.26px] text-white">
                  {item.name}
                </h3>
                <h3 className="text-[20px] sm:text-[24px] font-semibold leading-[29.26px] text-[#FFC107]">
                  {item.position}
                </h3>
              </div>
              <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-45"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
