import React from "react";
import Home from "../Home/Home";
import WhyChoose from "../Choosing/WhyChoose";
import CFO_Services from "../Services/CFO_Services";
import Business_Transformation from "../Services/Business_Transformation";
import About from "../About/About";
import Business_plan from "../Services/Business_plan";
import Business_valuations from "../Services/Business_valuations";
import Accounting from "../Services/Accounting";
import Tax from "../Services/Tax";
import LeftBar from "./LeftBar";
import Contact from "../Contact/Contact";
import MobileMenu from "./MobileMenu"
import { images } from "../../static";

function Layout() {
  return (
    <>
      <div className=" w-full h-screen m-auto relative">
        <img src={images.layout} alt="" className="  h-screen object-cover absolute z-50 left-0 top-0" />
        <img src={images.right} alt="" className="  h-screen object-contain fixed z-[100] right-0 top-0" />
        <LeftBar/>
        {/* <MobileMenu/> */}
        <div className="main w-full min-h-screen ps-[11.597vw] pe-[4.514vw] absolute z-50">
          <div className="w-full h-screen main-inner-content overflow-y-scroll">
          <Home/>
          <About />
          <WhyChoose/>
          <CFO_Services/>
          <Business_Transformation/>
          <Business_plan/>
          <Business_valuations/>
          <Accounting/>
          <Tax/>
          <Contact/>


      
          </div>
        </div>
        {/* <div className="ms-[174px] layout  h-[100vh] overflow-y-auto">
        </div> */}
      </div>

      {/* <div className="relative h-screen bg-cover bg-center top-0 left-0" style={{ backgroundImage: `url(${backgroundImage})` }}>

        <div className="flex">
          <div className="fixed sm:static top-7 left-0 bottom-0 z-50">
            <LeftBar/>
          </div>
          <div className="w-full ml-">
            <Outlet />
          </div>
        </div>
    </div> */}
    </>
  );
}

export default Layout;
