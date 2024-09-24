import React, { useEffect, useRef, useState } from 'react';
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img6 from "../../assets/Img/pexels-photo-7693686 1.svg";
import { images } from '../../static';

function Business_plan() {
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
      <div id='service-three' className="max-h-[83vh] w-full h-full relative flex">
        <div className="flex flex-1">
          <div className="flex-1  ps-[5.333vh] pe-[0.889vh]">
            <img className='mt-[0.444vh] mac-book:mt-[2.222vh]  w-[22.222vh]' src={LA} alt="Lumos Advisory Logo" />
            <h2 className='mt-[0.111vh]0' >Feasibility Studies and Business Plan</h2>
            <p>Conducting thorough feasibility studies for existing and new services and products and preparing a detailed and robust business plan are critical steps for the success of any SME business. Our services cater specifically to these needs by offering comprehensive planning, analysis, and strategic insights.</p>
            <p>Partnering with us means leveraging expertise, tailored solutions, and a proven approach to inch closer to your business objectives. We're committed to empowering SME clients to navigate the complexities of the business world with confidence and clarity.</p>

            <h3>Services Offered:</h3>
            <p><span >Feasibility Studies:</span> Conducting meticulous due diligence to assess potential opportunities, validate business viability, and identify key risks that might affect the business’s future.</p>
            <p><span >Business Plan Development:</span> Crafting detailed, actionable business plans that include market analysis, strategy formulation, financial projections, and operational planning.</p>
            <p><span >Market Research:</span> Providing in-depth market insights to identify opportunities and threats.</p>
            <p><span >Competitive Analysis:</span> Analyzing competitors to understand their strengths and weaknesses and leveraging this information to position your business strongly in the market.</p>
            <p><span >Financial Analysis:</span> Delivering expert financial evaluations, including cash flow projections, break-even analysis, and funding requirements.</p>
            <p><span >Risk Assessment:</span> Identifying potential business risks and developing strategies to mitigate them.</p>

            <div className="flex gap-[1.556vh]">
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
              <div ref={popupRef} className="absolute top-[10vh] right-0 bg-[#5F8F93] text-white bg-opacity-50 py-[0.889vh] px-[1.778vh] w-[49.444vh] z-50">
                <h3 className="text-white">Our Process and Approach:</h3>
                <p className="text-white">Our methodology is designed to be systematic and thorough, ensuring that each phase is carefully executed.</p>
                <p className="text-white"><span className="text-white">Initial Consultation:</span> We start by understanding your business goals, challenges, and requirements.</p>
                <p className="text-white"><span className="text-white">Detailed Analysis:</span> Conduct comprehensive research and data collection to gain a deep understanding of your market, competition, and internal operations.</p>
                <p className="text-white"><span className="text-white">Strategic Planning:</span> Develop a strategic plan that aligns with your vision and objectives, including detailed financial projections and risk assessments.</p>
                <p className="text-white"><span className="text-white">Report and Recommendations</span> Provide a detailed report with actionable recommendations to guide your business decisions.</p>
                <p className="text-white"><span className="text-white">Implementation Support:</span> Offer guidance and support during the implementation phase to ensure that the plan is effectively executed.</p>

              </div>
            )}
          </div>

          <div className="flex relative w-[48.778vh] max-h-[77.778vh] h-full">
              <div className="bg-black absolute bottom-0 w-[0.667vh] h-[50%]"></div>
            <img className=' max-w-[48.111vh] ms-[0.667vh] object-cover max-h-[77.778vh] h-screen' src={img6} alt="Business Plan" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Business_plan;
