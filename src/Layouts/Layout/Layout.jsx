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

function Layout() {
  return (
    <>
      <div className=" bg w-full h-screen">
        <LeftBar/>
        <div className="ms-[200px] main h-[100vh] overflow-y-auto me-20">
          <Home/>
          <About />
          <WhyChoose/>
          <CFO_Services/>
          <Business_Transformation/>
          <Business_plan/>
          <Business_valuations/>
          <Accounting/>
          <Tax/>
        </div>
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
