import React from "react";
import img7 from "../../image/image 7.png";
import img8 from "../../image/image 8.png";
import img9 from "../../image/image 9.png";
import img10 from "../../image/image 10.png";
import img11 from "../../image/image 11.png";
import img12 from "../../image/image 12.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Boxes = () => {
  const arr = [
    {
      box1: {
        img: img7,
        text_1: "Distribute",
        text_2: "Healthy Food",
        height: 437,
        position: "bottom-0 right-0 text-end",
      },
      box2: {
        img: img8,
        text_1: "Social",
        text_2: "Awareness",
        height: 178,
        position: "bottom-0 right-0 text-end",
      },
    },
    {
      box1: {
        img: img9,
        text_1: "Health",
        text_2: "Care",
        height: 337,
        position: "bottom-0 right-0 text-center",
      },
      box2: {
        img: img10,
        text_1: "Tree",
        text_2: "Plantation",
        height: 288,
        position: "top-0 left-0 text-center",
      },
    },
    {
      box1: {
        img: img11,
        text_1: "Socail",
        text_2: "Awareness",
        height: 188,
        position: "bottom-0 left-0 text-start",
      },
      box2: {
        img: img12,
        text_1: "Primary",
        text_2: "Education",
        height: 437,
        position: "bottom-0 left-0 text-start",
      },
    },
  ];
  return (
    //data-aos="zoom-in" 
    <div className=" sm:w-[1347px] md:h-[650px]  overflow-hidden  flex flex-col items-center sm:gap-10 md:gap-5 justify-center mt-20">
      <div className=" sm:w-[782px] sm:h-[103px]  flex flex-col items-center justify-between">
        <h5 className="text-[20px] sm:text-[22px] font-medium sm:font-semibold leading-[29.26px] text-[#FFC107]">
          What We Do ?
        </h5>
        <h1 className="text-[20px] sm:text-[30px] font-medium sm:font-semibold">
          Causes for a Sustainable Future{" "}
        </h1>
      </div>
      {/* map */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-2 lg:gap-4 xl:gap-7 ">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col  items-center gap-3 md:gap-4 xl:gap-7 h-[325px] sm:h-[425px] md:h-[550px] w-[300px] sm:w-[32%] lg:w-[300px]  xl:w-[300px] 2xl:w-[360px]"
            >
              {/* box1 */}
              <div
                className="relative w-[300px] sm:w-full rounded-xl overflow-hidden group"
                style={{ height: `${item.box1.height}px` }}
              >
                <img
                  src={item.box1.img}
                  className="w-full h-full object-cover group-hover:scale-110 transform transition-all ease-in-out duration-500"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55"></div>
                <div
                  className={` absolute ${
                    item.box1.position
                  } flex flex-col gap-1 ${index === 1 ? "w-full" : "w-48"} p-2`}
                >
                  <h3 className="text-2xl font-medium text-white ">
                    {item.box1.text_1}
                    <span className="text-[#FFC107]"> {item.box1.text_2}</span>
                  </h3>
                </div>
              </div>
              {/* box2 */}
              <div
                className="relative w-[300px] sm:w-full 2xl:w-[360px] rounded-xl overflow-hidden group"
                style={{ height: `${item.box2.height}px` }}
              >
                <img
                  src={item.box2.img}
                  className="w-full h-full object-cover group-hover:scale-110 transform transition-all ease-in-out duration-500"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55"></div>
                <div
                  className={`absolute ${
                    item.box2.position
                  } flex flex-col items-center justify-center gap-1 ${
                    index === 1 ? "w-full" : "w-48"
                  } p-2`}
                >
                  <h3 className="text-2xl font-medium text-white">
                    {item.box2.text_1}{" "}
                    <span className="text-[#FFC107]">{item.box2.text_2}</span>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boxes;
