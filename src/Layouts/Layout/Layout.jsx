import React, { useEffect, useState } from "react";
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
  const [browser, setBrowser] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const detectBrowserAndFullScreen = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      let detectedBrowser = '';

      if (userAgent.indexOf('chrome') > -1 && userAgent.indexOf('edge') === -1 && userAgent.indexOf('edg') === -1 && userAgent.indexOf('opr') === -1) {
        detectedBrowser = 'Chrome';
      } else if (userAgent.indexOf('firefox') > -1) {
        detectedBrowser = 'Firefox';
      } else if (userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1) {
        detectedBrowser = 'Safari';
      } else if (userAgent.indexOf('edg') > -1) {
        detectedBrowser = 'Edge';
      } else if (userAgent.indexOf('opr') > -1 || userAgent.indexOf('opera') > -1) {
        detectedBrowser = 'Opera';
      } else {
        detectedBrowser = 'Unknown Browser';
      }

      const fullScreenElement = document.fullscreenElement || 
                                document.webkitFullscreenElement || 
                                document.mozFullScreenElement || 
                                document.msFullscreenElement;

      const fullScreen = !!fullScreenElement;

      // Debug information
      console.log(`User Agent: ${navigator.userAgent}`);
      console.log(`Browser: ${detectedBrowser}`);
      console.log(`Document.fullscreenElement: ${document.fullscreenElement}`);
      console.log(`document.webkitFullscreenElement: ${document.webkitFullscreenElement}`);
      console.log(`document.mozFullScreenElement: ${document.mozFullScreenElement}`);
      console.log(`document.msFullscreenElement: ${document.msFullscreenElement}`);
      console.log(`Full Screen: ${fullScreen ? 'Yes' : 'No'}`);

      setBrowser(detectedBrowser);
      setIsFullScreen(fullScreen);
    };

    // Initial check
    detectBrowserAndFullScreen();

    // Add event listeners for full-screen changes
    const handleFullScreenChange = () => detectBrowserAndFullScreen();

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange); // Safari
    document.addEventListener('mozfullscreenchange', handleFullScreenChange); // Firefox
    document.addEventListener('MSFullscreenChange', handleFullScreenChange); // IE/Edge

    // Cleanup listeners on component unmount
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
    };
  }, []);
  return (
    <>
      <div className=" w-full h-screen m-auto relative">
        <img src={images.layout} alt="" className=" block w-[565px] h-screen object-none m-0 p-0 absolute z-50 left-0 top-0" />
        <img src={images.right} alt="" className="block  h-screen object-none fixed z-[100] right-0 top-0 w-[74px]" />
        <LeftBar/>
        {/* <MobileMenu/> */}
        <div className="main w-full min-h-screen ps-[167px] pe-[72px] absolute z-50">
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
