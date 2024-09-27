import React, { useEffect, useState } from "react";
import { FaArrowUp, FaLeftLong } from "react-icons/fa6";
import img1 from "../../image/Shuvidha img1.jpg";
import img2 from "../../image/Shuvidha img2.jpg";
import img3 from "../../image/Shuvidha img3.jpg";
import img4 from "../../image/Shuvidha img4.jpg";
import img5 from "../../image/Shuvidha img5.jpg";
import img6 from "../../image/Shuvidha img6.jpg";
import img7 from "../../image/Shuvidha img7.jpg";
import img8 from "../../image/Shuvidha img8.jpg";
import img9 from "../../image/Shuvidha img9.jpg";
import img10 from "../../image/Shuvidha img10.jpg";
import img11 from "../../image/Shuvidha img11.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const gallaryArr = [
  {
    img: img1,
    text: "FREE WORKSHOP",
    link: "https://drive.google.com/drive/u/1/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk",
  },
  {
    img: img2,
    text: "BOOK DISTRIBUTION",
    link: "https://drive.google.com/drive/u/1/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI",
  },
  {
    img: img3,
    text: "ONLINE EVENTS",
    link: "https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms",
  },
  {
    img: img4,
    text: "CLOTH DISTRIBUTION",
    link: "https://drive.google.com/drive/u/1/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK",
  },
  {
    img: img5,
    text: "TREE PLANTATION",
    link: "https://drive.google.com/drive/u/1/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw",
  },
  {
    img: img6,
    text: "FREE EDUCATION",
    link: "https://drive.google.com/drive/u/1/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN",
  },
  {
    img: img7,
    text: "WOMEN'S DAY",
    link: "https://drive.google.com/drive/u/1/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK",
  },
  {
    img: img8,
    text: "FOOD DISTRIBUTION",
    link: "https://drive.google.com/drive/u/1/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw",
  },
  {
    img: img9,
    text: "SUVIDHA EVENTS",
    link: "https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms",
  },
  {
    img: img10,
    text: "EMPOWERING WOMEN",
    link: "https://drive.google.com/drive/u/1/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl",
  },
  {
    img: img11,
    text: "ANIMAL FEEDING",
    link: "https://drive.google.com/drive/u/1/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB",
  },
];
const Gallary = () => {
  const [showArrow, setShowArrow] = useState(false);
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleHeight = () => {
      if (window.scrollY > 225) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener("scroll", handleHeight);

    return () => {
      window.removeEventListener("scroll", handleHeight);
    };
  });
  const navigation = useNavigate();
  console.log("navigation inside gallary", navigation);
  return (
    <div className=" sm:mx-20 flex flex-col items-center gap-20 mb-20">
      <div
        data-aos="fade-up"
        className=" w-[300px] sm:w-[450px] md:w-[600px] lg:w-[800px] flex flex-col items-center gap-2 sm:gap-4 mt-5 sm:mt-9"
      >
        <h4 className="text-xl sm:text-3xl md:text-5xl sm:font-semimedium  sm:leading-[50px] text-[#FFC107]">
          Our Gallary
        </h4>
        <p className="text-center text-2xl sm:text-3xl md:text-5xl sm:font-semibold md:leading-[55px] text-gray-600 tracking-wide">
          Moments of Impact: Capturing the Journey of Our NGO
        </p>
      </div>
      {/* mapping data-aos="fade-up" */}
      <div className=" w-full flex flex-wrap items-center  justify-center gap-12">
        {gallaryArr.map((item, index) => {
          return (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className=" relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[400px] xl:w-[320px] 2xl:w-[400px] h-[260px] sm:h-[340px] md:h-[430px] lg:h-[380px] xl:h-[300px] 2xl:h-[380px] rounded-2xl bg-slate-200 ">
                <div
                  key={index}
                  className="relative  w-full h-full overflow-hidden group rounded-2xl"
                >
                  <div className="overflow-hidden ">
                    <img
                      src={item.img}
                      className="w-full h-4/5 object-cover  group-hover:scale-105 transfrom transition-all ease-in duration-500 delay-150"
                    />
                  </div>
                  <h1 className=" w-full h-1/5 text-center text-xl sm:text-2xl md:text-3xl xl:text-2xl 2xl:text-3xl font-semibold flex items-center justify-center bg-slate-200">
                    {item.text}
                  </h1>
                </div>
                <div className="absolute w-full h-full top-2 left-2 sm:left-2 bg-[#BABABA] -z-10 rounded-2xl"></div>
                <div className="absolute w-full h-full top-4 left-4 sm:left-4 bg-[#D9D9D9] -z-20 rounded-2xl"></div>
              </div>
            </a>
          );
        })}
      </div>
      {showArrow && (
        <div
          className="z-50 border-2 border-red-600 fixed top-[580px] right-5 bg-[#FFC104] p-4 cursor-pointer"
          onClick={goToTop}
        >
          <FaArrowUp className="text-2xl font-bold text-black" />
        </div>
      )}
    </div>
  );
};

export default Gallary;
