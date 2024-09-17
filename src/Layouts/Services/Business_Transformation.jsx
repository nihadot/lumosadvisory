import React, { useState, useRef, useEffect } from 'react';
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png";
import social_logos from "../../assets/Img/SM Icons-01.png";
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img5 from "../../assets/Img/pexels-photo-3756681.jpg";
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
      <div id='service-two' className="relative flex">
        <div className="flex w-full justify-between">
          <div className="w-[650px] px-5 mac-book:px-12 text-justify">
            <img className='mt-5 w-[200px]' src={LA} alt="Lumos Advisory Logo" />
            <h1 className='mt-10 text-black text-[18px] font-medium'>Business Transformation <br />and Performance Improvement</h1>
            <p className='text-teal-600 pt-2 text-[12px]'>Business Transformation and Performance Improvement services are essential for SMEs striving to remain competitive and achieve sustainable growth. We offer a suite of specialized services designed to optimize various facets of business operations, ensuring efficiency and enhanced performance.</p>

            <h1 className='pt-2 text-teal-600 text-[16px] font-medium'>Service Offerings</h1>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Strategic Planning:</span> We collaborate with your leadership team to develop comprehensive strategic plans that align with your long-term goals.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Process Optimization:</span> Our experts analyze and refine your business processes to eliminate inefficiencies and boost productivity.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Financial Management:</span> We provide financial analysis and planning, helping you to maintain a healthy cash flow and optimized budget allocation.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Technology Integration:</span> We assist in integrating advanced technological solutions that streamline operations and enhance data management.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Change Management:</span> Our team supports your organization through transitions, ensuring smooth implementation of new strategies and technologies.</p>

            <div className="flex gap-5">
              <h1 className='pt-2 text-teal-600 text-[16px] font-medium'>Our Process and Approach</h1>
              <div className="flex items-center justify-center mt-2">
              
              <img className='w-5 h-5' src={images.readMore} alt="" />

              <button 
                className="text-teal-600 mt-0 text-[12px] ms-2 text-center"
                onClick={togglePopup}
                >
                Click to know more
              </button>
                </div>
            </div>

            {isPopupVisible && (
              <div ref={popupRef} className="absolute top-44 right-0 bg-teal-600 text-white bg-opacity-50 py-2 px-4 w-[470px] z-50">
                <h2 className="text-xl font-bold ">Our Process and Approach</h2>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Initial Assessment:</span> Conduct a thorough analysis of current business operations and identify key areas for improvement and potential growth opportunities.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Strategic Development:</span> Collaborate with your team to develop a strategic plan tailored to your business objectives and set measurable goals and implement a roadmap for achieving them.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Implementation:</span> Execute the strategic plan using our proven methodologies and integrate new processes, technologies, and practices across your organization.</p>
                <p className='text-[10px]'><span className=''>Monitoring and Support:</span> Monitoring and Support: Continuously monitor progress and adjust strategies as needed and provide ongoing support and training to ensure successful adoption of new initiatives.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Review and Improvement:</span> Conduct regular reviews to assess the effectiveness of implemented strategies and identify further areas for enhancement and continue to refine processes.
                </p>

              </div>
            )}
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <div className="bg-white w-1.5 h-[50%]"></div>
              <div className="bg-black w-1.5 h-[50%]"></div>
            </div>
            <img className='w-[510px] h-screen object-cover' src={img5} alt="Business Transformation" />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Business_Transformation;
