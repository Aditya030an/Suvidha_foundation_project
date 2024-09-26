import React from "react";
import Hero from "./Hero";
import { Grid1 , Grid2 , Grid3 } from "./Grid";
import image1 from "../../image/image 1.png"
import image2 from "../../image/image 2.png"
import image4 from "../../image/image 4.png"
import image5 from "../../image/image 5.png"
import simle from "../../image/smile.png"
import rectHeart from "../../image/Rectangle 2.png"
import About from "./About";
import Boxes from "./Boxes";
import Intership from "./Intership";
import Footer from "../Footer/Footer";
import Events from "./Events";
import Reach from "./Reach";
import Team from "./Team";
import About2 from "./About2";
const Main = () => {
  return (
    <div className="">
      <section className="mt-10">
        <Hero />
      </section>
      <section className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-1 items-end justify-center md:justify-evenly lg:justify-center lg:gap-5 mt-7 overflow-hidden ">
        <Grid1 butContend={1} img = {image1} imgLogo = {simle} boxContend={"Let Them Be Heard"}/>
        <Grid2 contend={"Primary Education"} img = {image2} position={"end"}/>
        <Grid3/>
        <Grid2 contend={"Healthy Food"} img = {image4} position={"start"}/>
        <Grid1 butContend={4} img = {image5} imgLogo = {rectHeart} boxContend={"Your home to help"}/>
      </section>
      <section className="mt-10  w-full flex items-center justify-center">
        {/* <About/> */}
        <About2/>
      </section>
      <section className=" w-full flex  items-center justify-center">
        <Boxes/>
      </section>
      <section>
        <Intership/>
      </section>
      <section className="">
        <Events/>
      </section>
      <section className="">
        <Reach/>
      </section>
      <section>
        <Team/>
      </section>
    </div>
  );
};

export default Main;
