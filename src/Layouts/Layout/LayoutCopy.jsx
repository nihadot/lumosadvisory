import React, { useEffect, useState } from "react";
// mobile screens
import MobileMenu from "./MobileMenu";
import MobileMenuBar from "./MobileMenuBar";
// import static images
import {
  landingPageLogo,
  layout_image,
  right_image,
} from "../../assets/images";
// left sidebar for layout (desktop) medium is limit 'md'
import LeftBar from "./LeftBar";

// pages
import {
  About,
  AboutUs,
  Accounting,
  Business_plan,
  Business_Transformation,
  Business_valuations,
  CFO_Services,
  Contact,
  Home,
  WhyChoose,
  Tax,
} from "../../pages";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{
    function handelContextMenu(e) {
      e.preventDefault();
    }

    const leftImageElement = document.getElementById("left-image");
    const rightImageElement = document.getElementById("right-image");

    const floatingMobileImageElement = document.getElementById("floating-logo-mobile");
    const floatingDesktopImageElement = document.getElementById("floating-logo-desktop");

    leftImageElement.addEventListener("contextmenu",handelContextMenu);
    rightImageElement.addEventListener("contextmenu",handelContextMenu);
    floatingMobileImageElement.addEventListener("contextmenu",handelContextMenu);
    floatingDesktopImageElement.addEventListener("contextmenu",handelContextMenu);
  
    return ()=>{
      leftImageElement.removeEventListener("contextmenu",handelContextMenu);
      rightImageElement.removeEventListener("contextmenu",handelContextMenu);
      floatingDesktopImageElement.removeEventListener("contextmenu",handelContextMenu);
      floatingMobileImageElement.removeEventListener("contextmenu",handelContextMenu);

    }
  })

  return (
    <>
      <div className="w-full h-screen m-auto relative">
        {/* Background Images (left side) */}
        <img
        id="left-image"
          src={layout_image}
          alt="Background Layout"
          className="block sm:w-[73vh] w-[39vh] h-screen object-cover absolute z-50 left-0 top-0"
        />
        {/* background Images (right side) */}
        <img
        id="right-image"
          src={right_image}
          alt="Right Side Image"
          className="block h-screen object-cover fixed z-[100] right-0 top-0 w-[3vh]  sm:w-[10vh]"
        />

        {/* LeftBar Component */}
        <LeftBar />

        {/* Mobile Menu Bar (sm) small is limit 'sm' */}
        {menuOpen && <MobileMenuBar setMenuOpen={setMenuOpen} />}

        <div className=" min-h-screen sm:ps-[19vh] sm:pe-[9.5vh] pe-[1.5vh]  ps-[4vh] absolute z-50">
          <div className="w-full h-screen main-inner-content overflow-y-scroll">
            {/* Mobile Menu (sm) small is limit 'sm' */}
            <div className="fixed top-0 left-0">
              <MobileMenu setMenuOpen={setMenuOpen} />
            </div>

            {/* floating logo mobile view only small is limit 'sm' */}
            <div className="sticky sm:hidden h-[8.889vh] justify-center sm:justify-start z-[100] flex items-center top-[2.4vh] sm:ms-[5vh]">
              <img className="w-[20.222vh]" id="floating-logo-mobile" src={landingPageLogo} alt="" />
            </div>

            {/* Home section */}
            <Home />

            {/* floating section desktop view from starting sm */}
            <div className="sticky hidden h-[8.889vh] justify-center sm:justify-start z-[100] sm:flex items-center top-[2vh] sm:ms-[5vh]">
              <img className="w-[20.222vh]" id="floating-logo-desktop" src={landingPageLogo} alt="" />
            </div>

            {/* About Section */}
            <div className="sm:-mt-[8.889vh] mt-0 ">
              <About />
            </div>

            {/* About Us Section */}
            <AboutUs />

            {/* Why Choose */}
            <WhyChoose />

            {/* CFO Services */}
            <CFO_Services />

            {/* Business Transformation */}
            <Business_Transformation />

            {/* Business Plan */}
            <Business_plan />

            {/* Business Valuations */}
            <Business_valuations />

            {/* Accounting and Book-Keeping */}
            <Accounting />

            {/* Tax and Compliance */}
            <Tax />

            {/* Contact */}
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
