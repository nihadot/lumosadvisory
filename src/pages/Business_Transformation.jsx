import React, { useState, useRef, useEffect } from 'react';
import { closeWhiteIcon, LeftTriangleIcon } from '../assets/icons';
import { businessTransform } from '../assets/images';

function Business_Transformation() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  useEffect(()=>{
    function handelContextMenu(e) {
      e.preventDefault();
    }
    const mobileHomeImageElement = document.getElementById("mobile-business-transform-image");
    const desktopHomeImageElement = document.getElementById("desktop-business-transform-image");
    
    mobileHomeImageElement.addEventListener("contextmenu",handelContextMenu);
    desktopHomeImageElement.addEventListener("contextmenu",handelContextMenu);
    return ()=>{
      mobileHomeImageElement.removeEventListener("contextmenu",handelContextMenu);
      desktopHomeImageElement.removeEventListener("contextmenu",handelContextMenu);

    }
  })


  return (
    <>
<div id='business-transform' className=" flex sm:hidden w-full items-center justify-center pt-24">
        <div className="max-w-[200px]  w-full flex h-[300px]">
          <div className="bg-black  w-[4px] h-[50%]"></div>
          <img
            className=" w-[96%] block  object-cover h-full"
            src={businessTransform}
            alt="Loading..."
            id='mobile-business-transform-image'
          />
        </div>
      </div>

      <div id='service-two' className="relative max-h-fit sm:min-h-[100vh] w-full h-fit flex">
        <div className="flex w-full">
          <div className="flex-1  pt-[8vw] ps-5  md:ps-[5.333vh] pe-[3vh]">
            <h2  className='mt-[0.111vh]0'>Business Transformation <br />and Performance Improvement</h2>
            <p>Business Transformation and Performance Improvement services are essential for SMEs striving to remain competitive and achieve sustainable growth. We offer a suite of specialized services designed to optimize various facets of business operations, ensuring efficiency and enhanced performance.</p>

            <h3>Services Offered</h3>
            <p><span>Strategic Planning:</span> We collaborate with your leadership team to develop comprehensive strategic plans that align with your long-term goals.</p>
            <p><span>Process Optimization:</span> Our experts analyze and refine your business processes to eliminate inefficiencies and boost productivity.</p>
            <p><span>Financial Management:</span> We provide financial analysis and planning, helping you to maintain a healthy cash flow and optimized budget allocation.</p>
            <p><span>Technology Integration:</span> We assist in integrating advanced technological solutions that streamline operations and enhance data management.</p>
            <p><span>Change Management:</span> Our team supports your organization through transitions, ensuring smooth implementation of new strategies and technologies.</p>

            <div className="flex gap-[0.556vh]">
              <h3 >Our Process and Approach</h3>
              <div className="flex items-center justify-center mt-0">
              
              <img className='w-[3vh] h-[4vh] object-cover' src={LeftTriangleIcon} alt="" />

              <button 
                onClick={togglePopup}
                >
                Click to know more
              </button>
                </div>
            </div>

            {isPopupVisible && (
              <div className="sm:block hidden absolute top-[30%] right-0 bg-[#5F8F93] text-white bg-opacity-50 py-[0.889vh] px-[1.778vh] max-w-[40.5vw] z-50">
                <h3 className="text-white">Our Process and Approach</h3>
                <p className="text-white"><span className="text-white">Initial Assessment:</span> Conduct a thorough analysis of current business operations and identify key areas for improvement and potential growth opportunities.</p>
                <p className="text-white"><span className="text-white">Strategic Development:</span> Collaborate with your team to develop a strategic plan tailored to your business objectives and set measurable goals and implement a roadmap for achieving them.</p>
                <p className="text-white"><span className="text-white">Implementation:</span> Execute the strategic plan using our proven methodologies and integrate new processes, technologies, and practices across your organization.</p>
                <p className="text-white"><span className="text-white">Monitoring and Support:</span> Monitoring and Support: Continuously monitor progress and adjust strategies as needed and provide ongoing support and training to ensure successful adoption of new initiatives.</p>
                <p className="text-white"><span className="text-white">Review and Improvement:</span> Conduct regular reviews to assess the effectiveness of implemented strategies and identify further areas for enhancement and continue to refine processes.
                </p>
              </div>
            )}



{isPopupVisible && (
              <div className="block sm:hidden absolute top-[10%] right-0  py-[0.889vh] px-[1.778vh] w-full z-50">
                <div className="bg-[#5F8F93] text-white bg-opacity-90 w-full px-3 py-1">
  {/* close function button */}
  <div className="flex justify-end bg-transparent mt-4">
                      <img
                        onClick={togglePopup}
                        src={closeWhiteIcon}
                        className="w-6 h-6 cursor-pointer object-contain "
                        alt="close icon"
                      />
                    </div>
                <h3 className="text-white">Our Process and Approach</h3>
                <p className="text-white"><span className="text-white">Initial Assessment:</span> Conduct a thorough analysis of current business operations and identify key areas for improvement and potential growth opportunities.</p>
                <p className="text-white"><span className="text-white">Strategic Development:</span> Collaborate with your team to develop a strategic plan tailored to your business objectives and set measurable goals and implement a roadmap for achieving them.</p>
                <p className="text-white"><span className="text-white">Implementation:</span> Execute the strategic plan using our proven methodologies and integrate new processes, technologies, and practices across your organization.</p>
                <p className="text-white"><span className="text-white">Monitoring and Support:</span> Monitoring and Support: Continuously monitor progress and adjust strategies as needed and provide ongoing support and training to ensure successful adoption of new initiatives.</p>
                <p className="text-white"><span className="text-white">Review and Improvement:</span> Conduct regular reviews to assess the effectiveness of implemented strategies and identify further areas for enhancement and continue to refine processes.
                </p>
                </div>

              </div>
            )}
          </div>

          <div className="sm:flex hidden max-w-[40vw] w-full">
                <div className="bg-black w-[0.667vh] h-[50%] bottom-0 absolute"></div>
                <img id='desktop-business-transform-image' className='h-screen ps-[0.5vh] w-full max-w-[40vw] object-cover max-h-[100vh]' src={businessTransform} alt="Loading..." />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Business_Transformation;
