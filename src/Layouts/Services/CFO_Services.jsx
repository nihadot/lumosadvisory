import React, { useEffect, useRef, useState } from 'react';
import { images } from '../../static';
import { cfoServices } from '../../assets/images';

function CFO_Services() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setPopupVisible(prev => !prev);

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
      <div id='service-one' className="flex pt-24 sm:pt-[8vw]  relative max-h-fit min-h-[100vh] w-full h-fit  bg-cover bg-center">

        <div className="w-full ps-5  sm:ps-[5.333vh] ">
           {/* <div className="sticky h-20 flex items-center top-0 left-0">
            
            <img className='mt-[1.778vh]  w-[22.222vh]' src={LA} alt="" />
          </div> */}
          <div className="flex h-[43vh] me-5 sm:me-0">
            <div className="bg-black w-[0.667vh] h-[50%]">l</div>
            <div className="flex-1  ">
              
            <img className='w-full object-cover h-[100%] ' src={cfoServices} alt="Outsourced CFO Services" />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col w-full md:gap-[8vh] sm:gap-[3vh]  lg:gap-[13vh] mt-[1vh] pe-[3vh] "> 
            {/* //mt-[6.222vh */}
            <div className="w-full flex-1 ">
              <h2>Outsourced CFO Services</h2>
              <p>Outsourced CFO Services provides expert financial guidance without the expense of a full-time CFO. Opting for our Outsourced CFO Services positions SME clients for financial stability and strategic growth, equipping them with the expertise and insights to thrive in a competitive market.</p>
              <p>Here’s an in-depth look at what these services entail, why partnering with us is a superior choice, and our comprehensive process and approach.</p>

              <p><span>Financial Planning and Analysis:</span> Tailored financial strategies, forecasting, and budgeting to drive business growth.</p>
              <p><span>Cost Management:</span> Identifying cost-saving opportunities and optimizing spending to enhance profitability.</p>
            </div>

            <div className=" w-full flex-1 pt-0 mt-5 md:mt-0 pe-[3vh]">
              <p><span>Cash Flow Management:</span> Ensuring liquidity and efficient cash flow handling to maintain business health.</p>
              <p><span>Risk Management:</span> Proactively identifying and mitigating financial risks.</p>
              <p><span>Financial Reporting:</span> Accurate and timely financial reports to inform decision-making.</p>
              <p><span>Strategic Insight:</span> Long-term financial planning and market positioning to achieve sustainable success.</p>
              <p><span>Continuous Monitoring and Reporting:</span> Provide regular updates, build customizable dashboards, conduct strategic reviews, and help with support and advisory where needed.</p>

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

             
            </div>

            {isPopupVisible && (
                <div ref={popupRef} className="hidden sm:block absolute top-[15vh] right-0 bg-[#5F8F93] text-white bg-opacity-80 py-[1.333vh] px-[1.778vh] w-[46.667vh] z-50">
                  <h3 className="text-white">Why focus on SMEs?</h3>
                  <p className='text-white'><span className='text-white'>Initial Consultation:</span>  Understanding your business, its goals, and financial challenges is the stepping stone. We conduct a thorough analysis to tailor our services.</p>
                  <p className='text-white'><span className='text-white'>Customized Plan Development:</span> Based on the initial consultation, we craft a bespoke financial management plan. This plan covers all critical areas of financial health, from budgeting to risk management.</p>
                  <p className='text-white'><span className='text-white'>Implementation and Integration:</span> We seamlessly integrate into your business operations, ensuring minimal disruption while implementing strategies for immediate and long-term benefits.</p>
                </div>
              )}


{isPopupVisible && (
                <div ref={popupRef} className="absolute block sm:hidden top-[50%] right-0  py-[1.333vh] px-[1.778vh] w-full z-50">
                  <div className="bg-[#5F8F93] text-white bg-opacity-80 w-full px-3 py-1 ">

                  <h3 className="text-white">Why focus on SMEs?</h3>
                  <p className='text-white'><span className='text-white'>Initial Consultation:</span>  Understanding your business, its goals, and financial challenges is the stepping stone. We conduct a thorough analysis to tailor our services.</p>
                  <p className='text-white'><span className='text-white'>Customized Plan Development:</span> Based on the initial consultation, we craft a bespoke financial management plan. This plan covers all critical areas of financial health, from budgeting to risk management.</p>
                  <p className='text-white'><span className='text-white'>Implementation and Integration:</span> We seamlessly integrate into your business operations, ensuring minimal disruption while implementing strategies for immediate and long-term benefits.</p>
                  </div>

                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CFO_Services;
