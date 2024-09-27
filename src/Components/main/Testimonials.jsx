import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaLeftLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
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

  const personArray = [
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Testimonials/1.jpg",
      name: "Priya Modi",
      text: "It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ",
    },
  ];
  return (
    <div
      id="scrollComponent"
      className="relative   sm:mx-20 flex flex-col items-center gap-20 mb-20"
    >
      <div
        data-aos="fade-up"
        className=" w-[300px] sm:w-[450px] md:w-[600px] lg:w-[800px] flex flex-col items-center gap-2 sm:gap-4 mt-5 sm:mt-9"
      >
        <h4 className="text-xl sm:text-3xl md:text-5xl sm:font-semimedium  sm:leading-[50px] text-[#FFC107]">
          Testimonial
        </h4>
        <p className="text-center text-2xl sm:text-3xl md:text-5xl sm:font-semibold md:leading-[55px] text-gray-600 tracking-wide">
          What people are talking about our charity activities
        </p>
      </div>
      <div
        data-aos="fade-up"
        className=" w-full flex flex-wrap items-center justify-center gap-16 "
      >
        {personArray.map((item, index) => {
          return (
            <div className=" relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[350px] h-[260px] sm:h-[340px] md:h-[430px] lg:h-[380px] rounded-2xl bg-slate-200 ">
              <div
                key={index}
                className=" relative  w-full h-full overflow-hidden group rounded-2xl"
              >
                <div className="overflow-hidden  flex gap-5 p-2">
                  <img
                    src={item.img}
                    className="w-1/2 rounded-xl  group-hover:scale-105 transfrom transition-all ease-in duration-500 delay-100"
                  />
                  <div className="w-full   flex items-center justify-center">
                    <h4 className="text-3xl font-semibold">{item.name}</h4>
                  </div>
                </div>
                <div>
                  <p className="mt-3 w-full h-1/5 text-center text-[14px] md:text-xl font-semibold flex items-center justify-center bg-slate-200 tracking-wide leading-6 md:leading-8 p-1">
                    {item.text}
                  </p>
                </div>
              </div>
              <div className="absolute w-full h-full top-2 left-2 sm:left-2 bg-[#BABABA] -z-10 rounded-2xl"></div>
              <div className="absolute w-full h-full top-4 left-4 sm:left-4 bg-[#D9D9D9] -z-20 rounded-2xl"></div>
            </div>
          );
        })}
      </div>

      {showArrow && (
        <button
          className="fixed top-[700px] right-16 bg-[#FFC104] p-4 cursor-pointer"
          onClick={goToTop}
        >
          <FaArrowUp className="text-2xl font-bold text-black" />
        </button>
      )}
    </div>
  );
};

export default Testimonials;
