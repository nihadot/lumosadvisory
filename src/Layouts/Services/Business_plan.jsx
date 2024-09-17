import React, { useEffect, useRef, useState } from 'react';
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img6 from "../../assets/Img/pexels-photo-7693686.jpg";
import { images } from '../../static';

function Business_plan() {
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
      <div id='service-three' className="relative flex">
        <div className="flex w-full justify-between">
          <div className="w-[650px] 1200px:ps-12 pe-3  text-justify">
            <img className='mt-5 w-[200px]' src={LA} alt="Lumos Advisory Logo" />
            <h1 className='mt-10 text-black text-[18px] font-medium'>Feasibility Studies and Business Plan</h1>
            <p className='text-teal-600 pt-2 text-[12px]'>Conducting thorough feasibility studies for existing and new services and products and preparing a detailed and robust business plan are critical steps for the success of any SME business. Our services cater specifically to these needs by offering comprehensive planning, analysis, and strategic insights.</p>
            <p className='text-teal-600 pt-2 text-[12px]'>Partnering with us means leveraging expertise, tailored solutions, and a proven approach to inch closer to your business objectives. We're committed to empowering SME clients to navigate the complexities of the business world with confidence and clarity.</p>

            <h1 className='pt-2 text-teal-600 text-[16px] font-medium'>Services Offered:</h1>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Feasibility Studies:</span> Conducting meticulous due diligence to assess potential opportunities, validate business viability, and identify key risks that might affect the business’s future.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Business Plan Development:</span> Crafting detailed, actionable business plans that include market analysis, strategy formulation, financial projections, and operational planning.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Market Research:</span> Providing in-depth market insights to identify opportunities and threats.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Competitive Analysis:</span> Analyzing competitors to understand their strengths and weaknesses and leveraging this information to position your business strongly in the market.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Financial Analysis:</span> Delivering expert financial evaluations, including cash flow projections, break-even analysis, and funding requirements.</p>
            <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Risk Assessment:</span> Identifying potential business risks and developing strategies to mitigate them.</p>

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
              <div ref={popupRef} className="absolute top-36 right-0 bg-teal-600 text-white bg-opacity-50 py-2 px-4 w-[445px] z-50">
                <h2 className="text-xl font-bold mb-0">Our Process and Approach:</h2>
                <p className='pt-2 text-[10px]'>Our methodology is designed to be systematic and thorough, ensuring that each phase is carefully executed.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Initial Consultation:</span> We start by understanding your business goals, challenges, and requirements.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Detailed Analysis:</span> Conduct comprehensive research and data collection to gain a deep understanding of your market, competition, and internal operations.</p>
                <p className='text-[10px]'><span className='font-medium'>Strategic Planning:</span> Develop a strategic plan that aligns with your vision and objectives, including detailed financial projections and risk assessments.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Report and Recommendations</span> Provide a detailed report with actionable recommendations to guide your business decisions.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Implementation Support:</span> Offer guidance and support during the implementation phase to ensure that the plan is effectively executed.</p>

              </div>
            )}
          </div>

          <div className="flex  w-[439px]">
            <div className="flex flex-col">
              <div className="bg-white w-1.5 h-[50%]"></div>
              <div className="bg-black w-1.5 h-[50%]"></div>
            </div>
            <img className='w-[433px] h-screen object-cover' src={img6} alt="Business Plan" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Business_plan;
