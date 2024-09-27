import React, { useEffect } from "react";
import img15 from "../../image/image 15.png";
import img16 from "../../image/image 16.png";
import img17 from "../../image/image 17.png";
import img18 from "../../image/image 18.png";
import img19 from "../../image/image 19.png";
import img20 from "../../image/image 20.png";
import img21 from "../../image/image 21.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Events = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      easing: "ease", // Default easing for animations
    });
  }, []);

  const allEvent = [
    {
      image: img15,
      text: "Fundraising Event",
    },
    {
      image: img16,
      text: "Fundraising Event",
    },
    {
      image: img17,
      text: "Clothes Distribution",
    },
    {
      image: img18,
      text: "Food Donation Drive",
    },
    {
      image: img19,
      text: "Fundraising Event",
    },
    {
      image: img20,
      text: "Fundraising Event",
    },
    {
      image: img21,
      text: "Animal Welfare",
    },
  ];
  return (
    <div
      data-aos="zoom-in"
      className=" flex flex-col items-center justify-center gap-7 py-7 mt-7"
    >
      <div className=" sm:h-[103px] w-full lg:w-[812px] flex flex-col items-center justify-center">
        <h5 className=" sm:h-[29px] sm:w-[84px] text-[20px] sm:text-[22px] md:text-[24px] font-medium sm:font-semibold sm:leading-[29.26px] text-[#FFC107] text-center">
          Events
        </h5>
        <p className=" sm:h-[59px] lg:w-[812px] text-[22px] sm:text-[30px] md:text-[48px] font-medium sm:font-semibold sm:leading-[58.51px] text-center">
          Celebrating our Impact Together
        </p>
      </div>
      <div className=" w-full flex  overflow-hidden group  sm:py-3">
        <div className=" flex gap-3 pl-6 animate-loop-scroll group-hover:paused ">
          {/* map */}
          {allEvent.map((item, index) => {
            return (
              <div
                key={index}
                className=" h-[200px] sm:h-[250px] w-[219px] sm:w-[300px] flex flex-col gap-2 "
              >
                <img
                  src={item.image}
                  className=" h-[160px] sm:h-[200px] md:h-[210px]  w-full object-cover rounded-[12px] sm:rounded-[20px]"
                />
                <p className=" sm:h-[35px] sm:w-full text-[18px] sm:text-[24px] font-[550] tracking-wide sm:font-semibold sm:leading-[29.26px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        {/* animate-loop-scroll */}
        <div className=" flex gap-3 pl-6 animate-loop-scroll group-hover:paused ">
          {/* map */}
          {allEvent.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[200px] sm:h-[250px] w-[219px] sm:w-[300px] flex flex-col gap-2 "
              >
                <img
                  src={item.image}
                  className=" h-[160px] sm:h-[200px] md:h-[210px]  w-full object-cover rounded-[12px] sm:rounded-[20px]"
                />
                <p className=" sm:h-[35px] sm:w-full text-[18px] sm:text-[24px] font-[550] tracking-wide sm:font-semibold sm:leading-[29.26px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
