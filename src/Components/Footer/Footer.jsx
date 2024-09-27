import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { PiCopyrightLight } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="8000"
      data-aos-delay="200"
      className=" bg-gray-900 px-5 sm:px-10 py-3 sm:py-5 rounded-3xl m-3 flex flex-col gap-5 2xl:h-[368.15px] xl:ml-20"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-7 md:gap-24 lg:gap-12 xl:gap-2">
        <div className=" flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#FFC107]">Address</h2>
          <div className="pl-2 flex flex-col gap-3">
            <div className=" flex flex-col gap-2">
              <p className="text-xl font-medium text-gray-500">
                {" "}
                Nagpur Headquarter:{" "}
              </p>
              <p className="text-xl font-medium text-white">
                Shuvidha Foundation , Walhi Ward No. 1, Jai Bhola Nagar, <br />{" "}
                Saoner Nagpur , Maharashtra 44102
              </p>
            </div>
            <div className="">
              <p className="text-xl font-medium text-gray-500">
                Hyderabad Headquarter:
              </p>
              <p className="text-xl font-medium text-white">
                Vazhra Nirman Pushpak, <br /> C Block 701 Hyderabad , 5000090.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#FFC107]">Certificates</h2>
          <ul className="pl-4 text-xl font-medium text-white mt-4 flex flex-col gap-2">
            <a
              href="https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf"
              target="_blank"
            >
              <li className="flex items-center gap-2">
                {" "}
                <IoIosArrowForward /> 80G Certificate
              </li>
            </a>
            <a
              href="https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf"
              target="_blank"
            >
              <li className="flex items-center gap-2">
                {" "}
                <IoIosArrowForward /> 12A Certificate
              </li>
            </a>
            <a
              href="https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF"
              target="_blank"
            >
              <li className="flex items-center gap-2">
                {" "}
                <IoIosArrowForward /> CSR Certificate
              </li>
            </a>
            <a
              href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf"
              target="_blank"
            >
              <li className="flex items-center gap-2">
                {" "}
                <IoIosArrowForward /> Suvidha Darpan Registration
              </li>
            </a>
            <a
              href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf"
              target="_blank"
            >
              <li className="flex items-center gap-2">
                {" "}
                <IoIosArrowForward /> Suvidha Pan Card
              </li>
            </a>
            <a href="https://suvidhafoundationedutech.org/verify.php" target="_blank">
              <li className="flex items-center gap-2">
                {" "}
                <IoIosArrowForward /> Verify Your Certificate
              </li>
            </a>
          </ul>
        </div>
        <div className="relative flex flex-col items-end justify-end gap-4  lg:w-full xl:w-[340px]">
          <div className="relative w-[200px] sm:w-[247px] h-[31px] sm:h-[62px]  rounded-[24px]">
            <div className=" absolute top-[5px] left-[3px] bg-lime-700 w-full h-full rounded-[24px]"></div>
            <Link to={"/helpNow"}>
              <button className="absolute flex items-center justify-between gap-7 w-full h-full px-4 py-3 rounded-[24px] bg-[#FFC107]">
                <h2 className=" sm:text-[20px] font-semibold leading-[24.38px] ">
                  Donate Now
                </h2>
                <div className="bg-white p-1 rounded-full">
                  <div className=" rounded-full">
                    <MdArrowOutward size={15} className="" />
                  </div>
                </div>
              </button>
            </Link>
          </div>
          <div className="relative w-[268px] sm:w-[327px] h-[31px] sm:h-[62px]  rounded-[24px]">
            <div className="absolute top-[5px] left-[3px]  bg-lime-700 w-full h-full   rounded-[24px]"></div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4vDnye2muE9yynJek6Swvamie2Idbu-LWAhQa0oMus5KJDg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="absolute flex items-center justify-between gap-7 px-4 py-3 w-full h-full rounded-[24px] bg-[#FFC107]">
                <h2 className="sm:text-[20px] font-semibold leading-[24.38px]">
                  Apply for Internship
                </h2>
                <div className="bg-white p-1 rounded-full">
                  <div className=" rounded-full">
                    <MdArrowOutward size={15} />
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px]  bg-[#FFC107] rounded-full"></div>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center sm:gap-7 sm:text-[16px] sm:font-semibold leading-[19.5px] text-white">
          <h5 className="flex items-center">
            <PiCopyrightLight className="text-[#82838A]" size={24} />
            Suvidha Foundation
          </h5>
          <h5>Privacy Policy</h5>
          <h5>Terms Of Use</h5>
        </div>
        <div className="text-white flex gap-2">
          <a
            href="https://www.instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://www.linkedin.com/company/suvidha-foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
