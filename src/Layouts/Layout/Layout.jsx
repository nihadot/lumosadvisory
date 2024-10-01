import React, { useState } from "react";
import Home from "../Home/Home";
import WhyChoose from "../Choosing/WhyChoose";
import CFO_Services from "../Services/CFO_Services";
import Business_Transformation from "../Services/Business_Transformation";
import About from "../About/About";
import Business_plan from "../Services/Business_plan";
import Business_valuations from "../Services/Business_valuations";
import Accounting from "../Services/Accounting";
import Tax from "../Services/Tax";
import Contact from "../Contact/Contact";
import LeftBar from "./LeftBar";
import MobileMenu from "./MobileMenu";
import { images } from "../../static";
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import AboutUs from "../About/AboutUs";
import MobileMenuBar from "./MobileMenuBar";
function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-screen m-auto relative">
        {/* Background Images */}
        <img
          src={images.layout}
          alt="Background Layout"
          className="block sm:w-[68vh] w-[39vh] h-screen object-cover absolute z-50 left-0 top-0"
        />
        <img
          src={images.right}
          alt="Right Side Image"
          className="block h-screen object-cover fixed z-[100] right-0 top-0 w-[3vh]  sm:w-[10vh]"
        />

        {/* LeftBar Component */}
        <LeftBar />

        {/* Main Content */}
        {menuOpen && <MobileMenuBar setMenuOpen={setMenuOpen} />}
        <div className="main w-full  min-h-screen sm:ps-[18vh] sm:pe-[7vh] pe-[1.5vh]  ps-[4vh] absolute z-50">
          <div className="w-full h-screen main-inner-content overflow-y-scroll">
            {/* Sections with Refs and Scroll Observation */}
            <div className="fixed top-0 left-0">
              <MobileMenu setMenuOpen={setMenuOpen} />
            </div>

            <Home />

            <div className="sticky h-[8.889vh] justify-center sm:justify-start z-[100] flex items-center top-[2vh] sm:ms-[5vh]">
              <img className="  w-[20.222vh]" src={LA} alt="" />
            </div>

            {/*  */}
            <div className="sm:-mt-[8.889vh] mt-0 ">
              <About />
            </div>
            <AboutUs />

            <WhyChoose />
            <CFO_Services />
            <Business_Transformation />
            <Business_plan />
            <Business_valuations />
            <Accounting />
            <Tax />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
