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
    if (popupRef.current && !popupRef.current.contains(event.target)) {
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
      <div id='service-two' className="relative max-h-[850px] w-full h-full flex">
        <div className="flex w-full">
          <div className="flex-1  ps-4 pe-2">
            <img className='mt-5 w-[200px]' src={LA} alt="Lumos Advisory Logo" />
            <h2  className='mt-10'>Business Transformation <br />and Performance Improvement</h2>
            <p>Business Transformation and Performance Improvement services are essential for SMEs striving to remain competitive and achieve sustainable growth. We offer a suite of specialized services designed to optimize various facets of business operations, ensuring efficiency and enhanced performance.</p>

            <h3>Service Offerings</h3>
            <p><span>Strategic Planning:</span> We collaborate with your leadership team to develop comprehensive strategic plans that align with your long-term goals.</p>
            <p><span>Process Optimization:</span> Our experts analyze and refine your business processes to eliminate inefficiencies and boost productivity.</p>
            <p><span>Financial Management:</span> We provide financial analysis and planning, helping you to maintain a healthy cash flow and optimized budget allocation.</p>
            <p><span>Technology Integration:</span> We assist in integrating advanced technological solutions that streamline operations and enhance data management.</p>
            <p><span>Change Management:</span> Our team supports your organization through transitions, ensuring smooth implementation of new strategies and technologies.</p>

            <div className="flex gap-5">
              <h3 >Our Process and Approach</h3>
              <div className="flex items-center justify-center mt-0">
              
              <img className='w-5 h-5' src={images.readMore} alt="" />

              <button 
                onClick={togglePopup}
                >
                Click to know more
              </button>
                </div>
            </div>

            {isPopupVisible && (
              <div ref={popupRef} className="absolute top-44 right-0 bg-[#5F8F93] text-white bg-opacity-50 py-2 px-4 w-[445px] z-50">
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

          <div className="flex w-[439px] relative h-full max-h-[690px]">
                <div className="bg-black w-1.5 h-[50%] bottom-0 absolute"></div>
                <img className=' max-w-[433px] ms-[6px] object-cover max-h-[690px] h-screen' src={img5} alt="Loading..." />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Business_Transformation;
