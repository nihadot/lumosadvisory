import React, { useEffect, useRef, useState } from 'react';
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img7 from "../../assets/Img/pexels-photo-7698819 1.svg";
import { images } from '../../static';

function Business_valuations() {
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
      <div id='service-four' className="relative max-h-[850px] w-full h-full  flex">
        <div className="flex w-full justify-between">
          <div className="w-[650px]  ps-12 pe-2   text-justify ">
            <img className='mt-5 w-[200px]' src={LA} alt="Lumos Advisory Logo" />
            <h2 className='mt-10'>Business Valuations</h2>
            <p>Business valuations are critical for numerous purposes, including mergers and acquisitions, estate planning, tax planning, and financing. They provide a clear and accurate depiction of your business's market value. For SME clients, having an accurate valuation is essential for strategic growth, competitive edge, and informed decision-making in terms of potential divestment and monetization.</p>

            <h3>Services Offered</h3>
            <p><span>Company Valuation:</span> Determining the potential selling price of your business in the open market.</p>
            <p><span>Income Approach Valuations for Products and Services:</span> Identifying the contribution to business valuation by assessing the income and profit-generating capacity from key products or services.</p>
            <p><span>Asset-Based Valuations:</span> Evaluating the total value of your business's assets.</p>
            <p><span>Comparative Market Analysis:</span> Benchmarking your business against similar companies in your industry.</p>

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
              <div ref={popupRef} className="absolute top-44 right-0 bg-[#5F8F93] text-white bg-opacity-50 py-1 px-5 w-[445px] z-50">
                <h3 className='text-white'>Our Process and Approach</h3>
                <p className='text-white'>Our methodical approach ensures that your business valuation is comprehensive, clear, and directly aligned with your goals. Our process is streamlined and thorough, designed to deliver accurate and actionable valuations:</p>
                <p className='text-white'><span className='text-white'>Initial Consultation:</span> We begin with an in-depth discussion to understand your business and valuation needs.</p>
                <p className='text-white'><span className='text-white'>Data Collection:</span> Gathering necessary financial, operational, and market data to form a comprehensive information base.</p>
                <p className='text-white'><span className='text-white'>Analysis:</span> Utilizing various valuation methods to analyze collected data, ensuring a multi-faceted view of your business's worth.</p>
                <p className='text-white'><span className='text-white'>Report Preparation:</span> Compiling findings into a detailed valuation report, highlighting key insights and recommendations.</p>
                <p className='text-white'><span className='text-white'>Review and Delivery:</span> Presenting the report to you and addressing any questions or concerns to ensure clarity and understanding.</p>

             
              </div>
            )}
          </div>

          <div className="flex relative w-[439px] max-h-[690px] h-full">
              <div className="bg-black absolute bottom-0 w-1.5 h-[50%]"></div>
            <img className=' max-w-[433px] ms-[6px] object-cover max-h-[690px] h-screen' src={img7} alt="Business Plan" />
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Business_valuations;
