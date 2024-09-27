import React, { useState, useRef, useEffect } from 'react';
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png";
import social_logos from "../../assets/Img/SM Icons-01.png";
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img5 from "../../assets/Img/pexels-photo-3756681 1.svg";
import { GoTriangleLeft } from "react-icons/go";
import { images } from '../../static';

function Business_Transformation() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleClickOutside = (event) => {
    // If click is outside popup and not on toggle button, close the popup
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(event.target)
    ) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <>
      <div id='service-two' className="relative min-h-[77.778vh] max-h-fit h-fit w-full flex">
        <div className="flex w-full">
          <div className="flex-1  ps-[5.333vh] pe-[0.889vh]">
          <div className="sticky h-20 flex items-center top-0 left-0">
            
            <img className='mt-[1.778vh]  w-[22.222vh]' src={LA} alt="" />
          </div>
            <h2  className='mt-[0.111vh]0'>Business Transformation <br />and Performance Improvement</h2>
            <p>Business Transformation and Performance Improvement services are essential for SMEs striving to remain competitive and achieve sustainable growth. We offer a suite of specialized services designed to optimize various facets of business operations, ensuring efficiency and enhanced performance.</p>

            <h3>Service Offerings</h3>
            <p><span>Strategic Planning:</span> We collaborate with your leadership team to develop comprehensive strategic plans that align with your long-term goals.</p>
            <p><span>Process Optimization:</span> Our experts analyze and refine your business processes to eliminate inefficiencies and boost productivity.</p>
            <p><span>Financial Management:</span> We provide financial analysis and planning, helping you to maintain a healthy cash flow and optimized budget allocation.</p>
            <p><span>Technology Integration:</span> We assist in integrating advanced technological solutions that streamline operations and enhance data management.</p>
            <p><span>Change Management:</span> Our team supports your organization through transitions, ensuring smooth implementation of new strategies and technologies.</p>

            <div className="flex gap-[0.556vh]">
              <h3 >Our Process and Approach</h3>
              <div className="flex items-center justify-center mt-0">
              
              <img className='w-[2.222vh] h-[2.222vh]' src={images.readMore} alt="" />

              <button 
                onClick={togglePopup}
                >
                Click to know more
              </button>
                </div>
            </div>

            {isPopupVisible && (
              <div ref={popupRef} className="absolute top-[10.556vh] right-0 bg-[#5F8F93] text-white bg-opacity-50 py-[0.889vh] px-[1.778vh] w-[49.444vh] z-50">
                <h3 className="text-white">Our Process and Approach</h3>
                <p className="text-white"><span className="text-white">Initial Assessment:</span> Conduct a thorough analysis of current business operations and identify key areas for improvement and potential growth opportunities.</p>
                <p className="text-white"><span className="text-white">Strategic Development:</span> Collaborate with your team to develop a strategic plan tailored to your business objectives and set measurable goals and implement a roadmap for achieving them.</p>
                <p className="text-white"><span className="text-white">Implementation:</span> Execute the strategic plan using our proven methodologies and integrate new processes, technologies, and practices across your organization.</p>
                <p className="text-white"><span className="text-white">Monitoring and Support:</span> Monitoring and Support: Continuously monitor progress and adjust strategies as needed and provide ongoing support and training to ensure successful adoption of new initiatives.</p>
                <p className="text-white"><span className="text-white">Review and Improvement:</span> Conduct regular reviews to assess the effectiveness of implemented strategies and identify further areas for enhancement and continue to refine processes.
                </p>

              </div>
            )}
          </div>

          <div className="flex w-[48.778vh] relative h-full max-h-[77.778vh]">
                <div className="bg-black w-[0.667vh] h-[50%] bottom-0 absolute"></div>
                <img className=' max-w-[48.111vh] ms-[0.667vh] object-cover max-h-[77.778vh] h-screen' src={img5} alt="Loading..." />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Business_Transformation;
