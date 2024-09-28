import React, { useEffect, useRef, useState } from "react";
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
// import MobileMenu from "../Layout/MobileMenu"
function Layout() {
  const [activeSection, setActiveSection] = useState(""); // Track current section
  const sectionsRef = useRef([]); // To reference each section for scrolling logic

  useEffect(() => {
    // Set up IntersectionObserver to track which section is in view
    const observerOptions = {
      root: null, // observe within the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section ID when it's visible
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (sectionsRef.current.length) {
        sectionsRef.current.forEach((section) => {
          observer.unobserve(section); // Clean up the observer when component unmounts
        });
      }
    };
  }, []);

  // Helper to set section refs
  const setSectionRef = (section, index) => {
    if (section && !sectionsRef.current[index]) {
      sectionsRef.current[index] = section;
    }
  };


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
        <LeftBar  /> 


        {/* Main Content */}
        <div className="main w-full  min-h-screen sm:ps-[18vh] sm:pe-[7vh] pe-[2vh]  ps-[5vh] absolute z-50">
          <div className="w-full h-screen main-inner-content overflow-y-scroll">
            {/* Sections with Refs and Scroll Observation */}
        <div className="fixed top-0 left-0">

        <MobileMenu/>
        </div>

              <Home />


            {/*  */}
            {/* <div className=""> */}


            <div className="sticky h-[8.889vh]  z-[100] flex items-center top-[2vh] ms-[5vh]">
            
            <img className=' w-[20.222vh]' src={LA} alt="" />
          </div>

            {/*  */}
              <About />
              <WhyChoose />
              <CFO_Services />
              <Business_Transformation />
              <Business_plan />
              <Business_valuations />
              <Accounting />
              <Tax />
              <Contact />
            </div>

          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Layout;
