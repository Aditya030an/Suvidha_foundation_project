import React, { useState } from "react";
import img22 from "../../image/image 22.png";
import img23 from "../../image/image 23.png";
import img24 from "../../image/image 24.png";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Reach = () => {
  const reachArr = [
    { text: "Impacted Countries", count: "15" , countText:"L" },
    { text: "Change Makers", count: "3" , countText:"L" },
    { text: "Internship Goal", count: "3" , countText:"Cr" },
    { text: "Trees Planted", count: "54", countText:"L" },
  ];
  const reachImgArr = [{ img: img22 }, { img: img23 }, { img: img24 }];
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="200" className=" flex flex-col items-center justify-center gap-3 sm:gap-7 h-[370px] sm:h-[430px] md:h-[586px] w-full overflow-hidden">
        <div className=" md:h-[205px] md:w-[704px] flex flex-col items-center justify-evenly">
          <h5 className=" md:h-[53px] md:w-[81px] sm:text-[24px] sm:font-semibold sm:leading-[29.26px] text-[#FFC107]">
            Reach
          </h5>
          <p className=" md:h-[163px]  md:w-[704px]  sm:text-[20px] md:text-[35px] lg:text-[48px] sm:font-[550] md:font-semibold sm:leading-[58.51px]  sm:tracking-wide text-center">
            Our Collaborative Initiatives and Milestones of Change
          </p>
        </div>
        <div className=" relative h-[220px] sm:h-[250px] md:h-[398.77px] w-full ">
          {/* Strip 1 rotate-[9.2deg]*/}
          <div className="absolute top-40 xl:top-[120px] 2xl:top-28 -left-6 z-0 h-[80px] sm:h-[122.41px] w-[1994px] rotate-[9.2deg] flex bg-black overflow-hidden group">
            <div className="ml-1 flex items-center justify-around min-w-[900px] sm:min-w-[1754px] w-[900px] sm:w-full animate-loop-scroll group-hover:paused">
              {reachArr.map((item, index) => (
                <div
                  key={index}
                  className=" p-2 h-[50px] sm:h-[88px] w-[200px] sm:w-[350px] rounded-xl sm:rounded-[20px] bg-[#FFC107] flex items-center justify-evenly"
                >
                  <h3 className=" sm:h-[58px] sm:w-[120px] text-[18px] sm:text-[24px] sm:font-semibold sm:leading-[29.26px] text-white">
                    {item.text}
                  </h3>
                  <p className="sm:h-[29px] sm:w-[6px] sm:text-[24px] sm:font-semibold sm:leading-[29.26px] flex items-center justify-center">
                    :
                  </p>
                  <p className="sm:h-[78px] sm:w-[118px] text-[33px] sm:text-[64px] sm:font-semibold sm:leading-[78.02px] text-white">
                    {counterOn && (
                      <span>
                        <CountUp start={0} end={item.count} delay={0} />
                        {item.countText}
                      </span>
                    )}
                    <span className="sm:text-[60px]">+</span>
                  </p>
                </div>
              ))}
            </div>
            <div className=" flex items-center justify-around min-w-[900px] sm:min-w-[1754px] w-[900px] sm:w-full animate-loop-scroll group-hover:paused">
              {reachArr.map((item, index) => (
                <div
                  key={index}
                  className=" p-2 h-[50px] sm:h-[88px] w-[200px] sm:w-[350px] rounded-xl sm:rounded-[20px] bg-[#FFC107] flex items-center justify-evenly"
                >
                  <h3 className="sm:h-[58px] sm:w-[120px] text-[18px] sm:text-[24px] sm:font-semibold sm:leading-[29.26px] text-white">
                    {item.text}
                  </h3>
                  <p className="sm:h-[29px] sm:w-[6px] sm:text-[24px] sm:font-semibold sm:leading-[29.26px] flex items-center justify-center">
                    :
                  </p>
                  <p className="sm:h-[78px] sm:w-[118px] text-[33px] sm:text-[64px] sm:font-semibold sm:leading-[78.02px] text-white">
                  {counterOn && (
                      <span>
                        <CountUp start={0} end={item.count} delay={0} />
                        {item.countText}
                      </span>
                    )}
                    <span className="sm:text-[60px]">+</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Strip 2 */}
          {/*w-[1995px] top-2 -left-2 -z-10  -rotate-[4.59deg]  */}
          <div className="absolute top-14 2xl:top-7 -left-2 -z-10 h-[80px] sm:h-[122.15px] w-[1962px] -rotate-[4.59deg]  flex bg-[#FFC107] overflow-hidden group">
            <div className=" flex items-center justify-around sm:min-w-[1754px] w-[900px] sm:w-full animate-loop-scroll group-hover:paused">
              {reachImgArr.map((item, index) => (
                <div
                  key={index}
                  className=" h-[60px] sm:h-[88px] w-[264px] sm:w-[529px] rounded-xl sm:rounded-[20px] bg-black flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={`Reach ${index}`}
                    className="rotate-[4.59deg]"
                  />
                </div>
              ))}
            </div>
            <div className=" flex items-center justify-around sm:min-w-[1754px] w-[900px] sm:w-full animate-loop-scroll group-hover:paused">
              {reachImgArr.map((item, index) => (
                <div
                  key={index}
                  className=" h-[60px] sm:h-[88px] w-[264px] sm:w-[529px] rounded-xl sm:rounded-[20px] bg-black flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={`Reach ${index}`}
                    className="rotate-[4.59deg]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Reach;
